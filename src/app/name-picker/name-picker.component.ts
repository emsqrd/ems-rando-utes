import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NameList } from '../core/NameList';
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

		get nameIsValid(): boolean {
			
			if (this.name === '' || this.names.indexOf(this.name) > -1){
				return false;
			}

			return true;
		}

		get namePickerIsDisabled(): boolean {
			return this.names.length === 0;
		}

		addName() {

			if (this.nameIsValid) {
				this.names?.push(this.name);
			}

			this.nameInput.nativeElement.focus();
			this.name = '';
		}

		clearNames() {
			this.name = '';
			this.pickedName = '';
			this.names = [];
		}

		pickName() {
			let randomNumber = Math.floor(Math.random()*this.names.length);
			this.pickedName = this.names[randomNumber];
		}

		removeName(nameToRemove: string) {
			var index = this.names.indexOf(nameToRemove);

			if (index > -1) {
				this.names.splice(index, 1);
			}
		}

		loadExampleNames() {
			
			this.httpClient.get<Array<NameList>>('assets/example_names.json').subscribe((data) => {
								 
				const randIndex = Math.floor(Math.random() * data.length);

				const randomKey = data[randIndex].names;

				this.names = randomKey;
				console.log('names loaded');
			});

		}

		constructor(private httpClient: HttpClient) { }

		ngOnInit(): void {
			this.loadExampleNames();
		}

}
