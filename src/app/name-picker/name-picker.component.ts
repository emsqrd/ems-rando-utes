import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
		selector: 'app-name-picker',
		templateUrl: './name-picker.component.html',
		styleUrls: ['./name-picker.component.css']
})
export class NamePickerComponent implements OnInit {

		@ViewChild('nameInput') nameInput: any;
		nameToAdd: string = '';
		names: string[] = [];

		public nameIsValid(): boolean {
			if (this.nameToAdd === '' || this.names.indexOf(this.nameToAdd) > -1){
				return false;
			}

			return true;
		}

		public addName() {

			if (this.nameIsValid()) {
				this.names?.push(this.nameToAdd);
				console.log(this.names);
			}

			this.nameInput.nativeElement.focus();
			this.nameToAdd = '';
		}

		public clearNames() {
			this.nameToAdd = '';
			this.names = [];
		}

		constructor() { }

		ngOnInit(): void {
		}

}
