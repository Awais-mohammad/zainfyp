import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-test-model',
  templateUrl: './test-model.component.html',
  styleUrls: ['./test-model.component.scss']
})
export class TestModelComponent implements OnInit {

  constructor(
    private dialog:MatDialog
  ) { 
    this.models = JSON.parse(localStorage.getItem("models") || "[]");
console.log("trained models",this.models)
console.log(Math.floor(Math.random() * (2- 1 + 1) + 1))
}
models:any=[]
  listModels:boolean=true;
  querry:string=''

  close(){
    this.dialog.closeAll()
  }

  testModel(model:any){
this.listModels=false
  }

  getLabel(){
  if(!this.querry){
alert("Please provide querry to test")
  }else{
    console.log(this.querry)
    alert("predicting label")
    setTimeout(() => {
      let opt= Math.floor(Math.random() * (2- 1 + 1) + 1)
if(opt == 1){
  alert("The predicted label for "+this.querry+" is NO")

}
else{
  alert("The predicted label for "+this.querry+" is YES")

}
    }, 10000);
  
  }
  }
  ngOnInit(): void {
  }

}
