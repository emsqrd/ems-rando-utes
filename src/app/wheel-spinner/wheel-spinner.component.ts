import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
	selector: 'wheel-spinner',
	templateUrl: './wheel-spinner.component.html',
	styleUrls: ['./wheel-spinner.component.css']
})
export class WheelSpinnerComponent {

	@Input() sliceItems: string[] = [];
	@ViewChild('svgContainer', { static: false }) svgContainer!: ElementRef;
	
	private cumulativePercent: number = 0;
	private slicesGroupInnerHtml: string = '';
	private defsPathInnerHtml: string = '';
	private textPathGroupInnerHtml: string = '';

	getCoordinatesForPercent(percent: number, radius: number) {
		const x = Math.cos(2 * Math.PI * percent) * radius;
		const y = Math.sin(2 * Math.PI * percent) * radius;
	
		return [x, y];
	}

	drawSlice(slicePercent: number, centerSlicePercent: number, sliceCount: number, sliceItemName?: string, fill?: string) {

		// starting coordinates
		const [startX, startY] = this.getCoordinatesForPercent(this.cumulativePercent, 200);

		this.cumulativePercent += centerSlicePercent;

		// center line coordinates
		const [textPathStartX, textPathStartY] = this.getCoordinatesForPercent(this.cumulativePercent, 180);
		const [textPathEndX, textPathEndY] = this.getCoordinatesForPercent(this.cumulativePercent, 20);
		
		this.cumulativePercent += centerSlicePercent;

		// ending coordinates
		const [endX, endY] = this.getCoordinatesForPercent(this.cumulativePercent, 200);

		const largeArcFlag = slicePercent > .5 ? 1 : 0;

		const slicePath = [
			`M ${startX} ${startY}`,
			`A 200 200 0 ${largeArcFlag} 1 ${endX} ${endY}`,
			`L 0 0`,
		].join(' ');

		console.log(`Slice Count: ${sliceCount}`);
		console.log(`Slice Percent: ${slicePercent}`);
		console.log(`Center Slice Percent: ${centerSlicePercent}`);
		console.log(`Starting: ${[startX, startY]}`);
		console.log(`Center: ${[textPathStartX, textPathStartY]}`);
		console.log(`Ending: ${[endX, endY]}`);

		const defTextPath = [
			`M ${textPathStartX} ${textPathStartY}`,
			`L ${textPathEndX} ${textPathEndY}`,
		].join(' ');

		var randomColor = Math.floor(Math.random()*16777215).toString(16);
		this.slicesGroupInnerHtml += `<path d="${slicePath}" fill="#${fill ?? randomColor}"></path>`;

		this.defsPathInnerHtml += `
				<path id="textPath-${sliceCount}" d="${defTextPath}"></path>				
		`;

		this.textPathGroupInnerHtml += `
			<text text-anchor="start">
				<textPath href="#textPath-${sliceCount}">
					<tspan fill="white" alignment-baseline="middle">${sliceItemName}</tspan>
				</textPath>
			</text>
		`;
	}

	drawWheel() {
		
		var wheelInnerHtml: string = '';
		this.slicesGroupInnerHtml = '';
		this.textPathGroupInnerHtml = '';
		this.defsPathInnerHtml = '';

		this.cumulativePercent = 0;
		var sliceCount: number = 0;

		console.clear();

		if (this.sliceItems.length > 0) {
			
			const slicePercent = 1 / this.sliceItems.length;
			const centerSlicePercent = 1 / (this.sliceItems.length * 2);
			
			this.sliceItems.forEach((sliceItem) => {
				sliceCount++;
				this.drawSlice(slicePercent, centerSlicePercent, sliceCount, sliceItem);
				
			});		
		} else {
			sliceCount++;
			this.drawSlice(1, sliceCount, .5, '', 'DFEEFC');
		}

		wheelInnerHtml += '<g>';
		wheelInnerHtml += this.slicesGroupInnerHtml;
		wheelInnerHtml += '</g>';

		wheelInnerHtml += '<g>';
		wheelInnerHtml += '<defs>';
		wheelInnerHtml += this.defsPathInnerHtml;
		wheelInnerHtml += '</defs>';

		wheelInnerHtml += this.textPathGroupInnerHtml;
		wheelInnerHtml += '</g>';

		
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