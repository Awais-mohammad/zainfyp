import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    private http:HttpClient
  ) { 
    let catname=''

     this.http.get('https://brixback.herokuapp.com/products/bycat/' + catname)
     this.http.get('https://brixback.herokuapp.com/products/bycat/' + catname)
     this.http.get('https://brixback.herokuapp.com/products/bycat/' + catname)
     this.http.get('https://brixback.herokuapp.com/products/bycat/' + catname)
     this.http.get('https://brixback.herokuapp.com/products/bycat/' + catname)
     this.http.get('https://brixback.herokuapp.com/products/bycat/' + catname)
     this.http.get('https://brixback.herokuapp.com/products/bycat/' + catname)
     this.http.get('https://brixback.herokuapp.com/products/bycat/' + catname)
     this.http.get('https://brixback.herokuapp.com/products/bycat/' + catname)
     this.http.get('https://brixback.herokuapp.com/products/bycat/' + catname)
     this.http.get('https://brixback.herokuapp.com/products/bycat/' + catname)
     this.http.get('https://brixback.herokuapp.com/products/bycat/' + catname)
     this.http.get('https://brixback.herokuapp.com/products/bycat/' + catname)
     this.http.get('https://brixback.herokuapp.com/products/bycat/' + catname)
     this.http.get('https://brixback.herokuapp.com/products/bycat/' + catname)
     this.http.get('https://brixback.herokuapp.com/products/bycat/' + catname)
     this.http.get('https://brixback.herokuapp.com/products/bycat/' + catname)
     this.http.get('https://brixback.herokuapp.com/products/bycat/' + catname)
     this.http.get('https://brixback.herokuapp.com/products/bycat/' + catname)
     this.http.get('https://brixback.herokuapp.com/products/bycat/' + catname)
     this.http.get('https://brixback.herokuapp.com/products/bycat/' + catname)

     ;(async()=>{
      console.log("retry fetchinggggg")
      return await new Promise(r=>setTimeout(r,100))
     })();

  }
  getAll() {
     this.http.get('https://brixback.herokuapp.com/products')
  }

  getByCat(catname:any) {
     this.http.get('https://brixback.herokuapp.com/products/bycat/' + catname)
  }

}
