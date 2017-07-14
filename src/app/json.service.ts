import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class JSONService {
    
    private jsonsUrl = 'http://jsonplaceholder.typicode.com/users/1';  // URL to web api
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    constructor(private http: Http) { }

    getjsons(): Promise<JSON[]> {
         return this.http.get(this.jsonsUrl)
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
    }


}
