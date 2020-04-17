import { Component, OnInit } from '@angular/core';  
import { ApiService } from '../corona-totals-api.service';

@Component({  
	selector: 'app-corona-totals',  
	templateUrl: './corona-totals.component.html',  
	styleUrls: ['./corona-totals.component.css']  
})  
export class CoronaTotalsComponent implements OnInit {
	
	stats = [];
	// cases: any;
	
	constructor(private apiService: ApiService) { }
	
	ngOnInit() {
		this.apiService.fetchData().subscribe((data: any[])=>{  
			// console.log(data);  
			this.stats = data;  
		}) 
		
	}
}