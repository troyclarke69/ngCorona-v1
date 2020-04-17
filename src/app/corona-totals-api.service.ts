import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';

@Injectable({  
	providedIn: 'root'  
})  

export class ApiService {

	//default ?sort=cases
	private SERVER_URL = "https://corona.lmao.ninja/v2/countries?sort=cases";

	constructor(private httpClient: HttpClient) { }

	public fetchData(){

		console.log("coronaTotalsService:fetchData");  
		return this.httpClient.get(`${this.SERVER_URL}`);  
	}  
}