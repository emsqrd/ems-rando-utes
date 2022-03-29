import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
		selector: 'app-name-picker',
		templateUrl: './name-picker.component.html',
		styleUrls: ['./name-picker.component.css']
})
export class NamePickerComponent implements OnInit {

		@ViewChild('nameInput') nameInput: any;
		name: string = '';
		pickedName: string = '';
		names: string[] = [];
		exampleNames: any;

		public nameIsValid(): boolean {
			
			if (this.name === '' || this.names.indexOf(this.name) > -1){
				return false;
			}

			return true;
		}

		public addName() {

			if (this.nameIsValid()) {
				this.names?.push(this.name);
			}

			this.nameInput.nativeElement.focus();
			this.name = '';
		}

		public clearNames() {
			this.name = '';
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

		public getRandomList(list:string[]) {
			
		}

		public loadExampleNames() {

			this.httpClient.get<{[key:string]: string[]}>('assets/example_names.json').subscribe((data) => {

				const keys = Object.keys(data);

				const randIndex = Math.floor(Math.random() * keys.length);

				const randomKey = keys[randIndex];

				this.names = data[randomKey];
			});

		}

		constructor(private httpClient: HttpClient) { 
		
		}

		ngOnInit(): void {
			this.loadExampleNames();
		}

}
