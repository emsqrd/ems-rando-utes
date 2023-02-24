import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
	selector: 'wheel-spinner',
	templateUrl: './wheel-spinner.component.html',
	styleUrls: ['./wheel-spinner.component.css']
})

export class WheelSpinnerComponent {

	@Input() names: string[] = [];
	@ViewChild('svgContainer', { static: false }) svgContainer!: ElementRef;
	
	slices: any = [
		{ color: 'Blue' },
		{ color: 'Green' },
		{ color: 'Red' },
		{ color: 'Yellow' },
	];

	cumulativePercent: number = 0;

	innerHtml: string = '';

	spinnerWheelSvg = `<path d="M 1 0 A 1 1 0 0 1 6.123233995736766e-17 1 L 0 0" fill="Blue"></path>
  <path d="M 6.123233995736766e-17 1 A 1 1 0 0 1 -1 1.2246467991473532e-16 L 0 0" fill="Green"></path>
  <path d="M -1 1.2246467991473532e-16 A 1 1 0 0 1 -1.8369701987210297e-16 -1 L 0 0" fill="Red"></path>
  <path d="M -1.8369701987210297e-16 -1 A 1 1 0 0 1 1 -2.4492935982947064e-16 L 0 0" fill="Yellow"></path>`

	getCoordinatesForPercent(percent: number) {
		const x = Math.cos(2 * Math.PI * percent);
		const y = Math.sin(2 * Math.PI * percent);

		return [x, y];
	}

	drawWheel() {

		const percent = 1 / this.slices.length;

		this.slices.forEach((slice: { color: string; }) => {

			const [startX, startY] = this.getCoordinatesForPercent(this.cumulativePercent);

			this.cumulativePercent += percent;

			const [endX, endY] = this.getCoordinatesForPercent(this.cumulativePercent);

			const largeArcFlag = percent > .5 ? 1 : 0;

			const pathData = [
				`M ${startX} ${startY}`,
				`A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
				`L 0 0`,
			].join(' ');

			var newPath = `<path d="${pathData}" fill="${slice.color}"></path>`;
			this.innerHtml += newPath;

			// why doesn't this work?
			// const pathEl = this.renderer.createElement('path');
			// this.renderer.setAttribute(pathEl, 'd', pathData);
			// this.renderer.setAttribute(pathEl, 'fill', slice.color);
			// this.renderer.appendChild(this.svgContainer.nativeElement, pathEl);
			
		});
	}

	constructor (private renderer: Renderer2) { }
	
	ngAfterViewInit() {
		console.log(this.names);
		this.drawWheel();
		this.renderer.setProperty(this.svgContainer.nativeElement, 'innerHTML', this.innerHtml);
	}
}