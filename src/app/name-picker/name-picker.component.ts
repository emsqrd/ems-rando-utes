import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
		selector: 'app-name-picker',
		templateUrl: './name-picker.component.html',
		styleUrls: ['./name-picker.component.css']
})
export class NamePickerComponent implements OnInit {

		@ViewChild('nameInput') nameInput: any;
		name = new FormControl('');
		pickedName: string = '';
		names: string[] = [];

		public nameIsValid(): boolean {
			if (this.name.value === '' || this.names.indexOf(this.name.value) > -1){
				return false;
			}

			return true;
		}

		public addName() {

			if (this.nameIsValid()) {
				this.names?.push(this.name.value);
			}

			this.nameInput.nativeElement.focus();
			this.name.setValue('');
		}

		public clearNames() {
			this.name.setValue('');
			this.pickedName = '';
			this.names = [];
		}

		public pickName() {
			let randomNumber = Math.floor(Math.random()*this.names.length);
			this.pickedName = this.names[randomNumber];
		}

		public removeName(nameToRemove: string) {
			var index = this.names.indexOf(nameToRemove);

			if (index > -1) {
				this.names.splice(index, 1);
			}
		}

		constructor() { }

		ngOnInit(): void {
		}

}
