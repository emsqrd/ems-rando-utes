import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
	selector: 'wheel-spinner',
	templateUrl: './wheel-spinner.component.html',
	styleUrls: ['./wheel-spinner.component.css']
})

export class WheelSpinnerComponent {

	@Input() sliceItems: string[] = [];
	@ViewChild('svgContainer', { static: false }) svgContainer!: ElementRef;
	
	slices: any = [
		{ color: 'Blue' },
		{ color: 'Green' },
		{ color: 'Red' },
		{ color: 'Yellow' },
		{ color: 'Purple' },
	];

	nameSlices: any = [];

	cumulativePercent: number = 0;

	spinnerWheelSvg = `<path d="M 1 0 A 1 1 0 0 1 6.123233995736766e-17 1 L 0 0" fill="Blue"></path>
  <path d="M 6.123233995736766e-17 1 A 1 1 0 0 1 -1 1.2246467991473532e-16 L 0 0" fill="Green"></path>
  <path d="M -1 1.2246467991473532e-16 A 1 1 0 0 1 -1.8369701987210297e-16 -1 L 0 0" fill="Red"></path>
  <path d="M -1.8369701987210297e-16 -1 A 1 1 0 0 1 1 -2.4492935982947064e-16 L 0 0" fill="Yellow"></path>`

	getCoordinatesForPercent(percent: number) {
		const x = Math.cos(2 * Math.PI * percent);
		const y = Math.sin(2 * Math.PI * percent);

		return [x, y];
	}

	getSlicePath(percent: number, fill?: string): string {
		const [startX, startY] = this.getCoordinatesForPercent(this.cumulativePercent);

		this.cumulativePercent += percent;

		const [endX, endY] = this.getCoordinatesForPercent(this.cumulativePercent);

		const largeArcFlag = percent > .5 ? 1 : 0;

		const pathData = [
			`M ${startX} ${startY}`,
			`A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
			`L 0 0`,
		].join(' ');

		var randomColor = Math.floor(Math.random()*16777215).toString(16);
		var path = `<path d="${pathData}" fill="#${fill ?? randomColor}"></path>`;
		return path;
	}

	drawWheel() {
		
		var wheelInnerHtml: string = '';
		
		if (this.sliceItems.length > 0) {
				
			const percent = 1 / this.sliceItems.length;

			this.sliceItems.forEach(() => {

				wheelInnerHtml += this.getSlicePath(percent);

			});		
		} else {
			wheelInnerHtml = this.getSlicePath(100, 'Black');
		}

		this.renderer.setProperty(this.svgContainer.nativeElement, 'innerHTML', wheelInnerHtml);
	}

	constructor (private renderer: Renderer2, private el: ElementRef) { }
	

	ngOnChanges() {		
		
		if (this.svgContainer !== undefined){			
				this.drawWheel();
		}
	}

	ngOnInit() {
	}

	ngAfterViewInit() {
	}
}