import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Item } from '../core/Item';
@Component({
	selector: 'app-item-picker',
	templateUrl: './item-picker.component.html',
	styleUrls: ['./item-picker.component.css']
})
export class ItemPickerComponent implements OnInit {

	@ViewChild('itemInput') itemInput: any;
	newItemName: string = '';
	item: Item = new Item();
	pickedItem: Item = new Item();
	items: Item[] = [new Item()];

	get nameIsValid(): boolean {
		
		if (this.item?.itemName === ''){
			return false;
		}

		return true;
	}

	get pickWinnerIsDisabled(): boolean {
		return this.items.length === 0;
	}

	get clearItemsIsDisabled(): boolean {
		return this.items.length === 0;
	}

	addItem() {

		if (this.nameIsValid) {
			let newId = this.items.length + 1;

			let newItem = new Item(newId, this.newItemName, this.getRandomSliceHexColor());
			this.items = [...this.items, newItem];			
		}

		this.itemInput.nativeElement.focus();
		this.newItemName = '';
	}

	clearItems() {
		// this.newItemName = '';
		// this.pickedItem = '';
		this.items.splice(0, this.items.length);
		this.items = [...this.items];
	}

	pickWinningItem() {
		let randomNumber = Math.floor(Math.random()*this.items.length);
		this.pickedItem = this.items[randomNumber];
	}

	removeItem(removedItem: Item) {
		var index = this.items.findIndex(x => x.id === removedItem.id);

		if (index > -1) {
			this.items.splice(index, 1);
			this.items = [...this.items];
		}

	}

	getRandomSliceHexColor(): string {
		var randomColor = Math.floor(Math.random()*16777215).toString(16);
		return `#${randomColor}`;
	}

	loadExampleItems() {
		
		this.clearItems();

		this.httpClient.get<{[key:string]: string[]}>('assets/example_names.json').subscribe((data) => {
							
			const keys = Object.keys(data);

			const randIndex = Math.floor(Math.random() * keys.length);

			const randomKey = keys[randIndex];
			
			var newId = 0;
			data[randomKey].forEach((exampleItem: string) => {
				newId++;
				// this.items.push(new Item(newId, exampleItem, this.getRandomSliceHexColor()));
				this.items = [...this.items, new Item(newId, exampleItem, this.getRandomSliceHexColor())];
			});
			
		});

	}

	constructor(private httpClient: HttpClient) { }

	ngOnInit(): void {
		this.loadExampleItems();
	}

}
