import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
	selector: 'wheel-spinner',
	templateUrl: './wheel-spinner.component.html',
	styleUrls: ['./wheel-spinner.component.css']
})

export class WheelSpinnerComponent implements OnInit {

	@ViewChild('svgContainer', { static: false }) svgContainer!: ElementRef;
	
	slices: any = [
		{ percent: 0.25, color: 'Blue' },
		{ percent: 0.25, color: 'Green' },
		{ percent: 0.25, color: 'Red' },
		{ percent: 0.25, color: 'Yellow' },
	];

	cumulativePercent: number = 0;

	spinnerWheelSvg = '<path d="M 1 0 A 1 1 0 0 1 0.7071067811865476 0.7071067811865475 L 0 0" fill="Yellow"></path><path d="M 0.7071067811865476 0.7071067811865475 A 1 1 0 0 1 6.123233995736766e-17 1 L 0 0" fill="Orange"></path><path d="M 6.123233995736766e-17 1 A 1 1 0 0 1 -0.7071067811865475 0.7071067811865476 L 0 0" fill="Green"></path><path d="M -0.7071067811865475 0.7071067811865476 A 1 1 0 0 1 -1 1.2246467991473532e-16 L 0 0" fill="Blue"></path><path d="M -1 1.2246467991473532e-16 A 1 1 0 0 1 -0.7071067811865477 -0.7071067811865475 L 0 0" fill="Orange"></path><path d="M -0.7071067811865477 -0.7071067811865475 A 1 1 0 0 1 -1.8369701987210297e-16 -1 L 0 0" fill="Black"></path><path d="M -1.8369701987210297e-16 -1 A 1 1 0 0 1 0.7071067811865474 -0.7071067811865477 L 0 0" fill="Violet"></path><path d="M 0.7071067811865474 -0.7071067811865477 A 1 1 0 0 1 1 -2.4492935982947064e-16 L 0 0" fill="Gray"></path>'

	getCoordinatesForPercent(percent: number) {
		const x = Math.cos(2 * Math.PI * percent);
		const y = Math.sin(2 * Math.PI * percent);

		return [x, y];
	}

	createWheel() {
		const path = this.renderer.createElement('path');
		console.log(this.svgContainer.nativeElement);
		this.renderer.setProperty(this.svgContainer.nativeElement, 'innerHTML', this.spinnerWheelSvg);
	}

	spinWheel() {
		this.renderer.removeClass(this.svgContainer.nativeElement, 'spin-wheel');
		this.renderer.addClass(this.svgContainer.nativeElement, 'spin-wheel');
	}

	resetWheel() {
		this.renderer.removeClass(this.svgContainer.nativeElement, 'spin-wheel');
	}

	constructor (private renderer: Renderer2, private el: ElementRef) { }

	ngOnInit() {

	}
	
	ngAfterViewInit() {
		this.createWheel();
	}

}