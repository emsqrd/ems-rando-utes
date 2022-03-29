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
			
			var beatles:string[] = [
				'John',
				'Paul',
				'George',
				'Ringo',
			]

			var tmnt:string[] = [
				'Leonardo',
				'Raphael',
				'Donatello',
				'Michelangelo',
			]
			
			var ghostbusters:string[] = [
				'Peter Venkman',
				'Ray Stantz',
				'Egon Spengler',
				'Winston Zeddemore',
			]

			var hp:string[] = [
				'Harry Potter',
				'Hermoine Grainger',
				'Ronald Weasley',
			]

			this.httpClient.get('assets/example_names.json').subscribe(data => {
				console.log(data);
				this.exampleNames = data;

				var exampleNamesArr = Object.keys(data).map(x => this.exampleNames[x]);
				console.log(exampleNamesArr);
				
				// var exampleLists:string[][] = [beatles, tmnt, ghostbusters, hp];
				// console.log(exampleLists);
				
				let randomNumber = Math.floor(Math.random() * exampleNamesArr.length);
				console.log(exampleNamesArr[randomNumber]);
				
				
				this.names = exampleNamesArr[randomNumber];
			});

		}

		constructor(private httpClient: HttpClient) { 
		
		}

		ngOnInit(): void {
			this.loadExampleNames();
		}

}
