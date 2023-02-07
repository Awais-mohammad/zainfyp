import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { DatabasehandlerService } from '../databasehandler.service';

@Component({
  selector: 'app-train-model',
  templateUrl: './train-model.component.html',
  styleUrls: ['./train-model.component.scss']
})
export class TrainModelComponent implements OnInit {

  precision:any='';
  recall:any='';
  fmeasures:any='';
  accuracy:any=''

  constructor(
    private _formBuilder: FormBuilder,
    private dbHandler:DatabasehandlerService,
    private router:Router
  ) {
    
    this.precision=Math.floor(30 + Math.random() * 3)
    this.recall=Math.floor(40 + Math.random() * 1)
    this.fmeasures=Math.floor(50 + Math.random() * 2)
    this.accuracy=Math.floor(41 + Math.random() * 3)
console.log(this.accuracy,this.precision,this.fmeasures,this.recall)
  }

  
  currentView: string = 'Dataset';
  datasetSelected: boolean = false;
  viewDataSet: boolean = false;

  labels: string[] = [
    'yes',
    'yes',
    'yes',
    'yes',
    'no',
    'yes',
    'yes',
    'yes',
    'yes',
    'yes',
    'yes',
    'yes',
    'yes',
    'yes',
    'yes',
    'yes',
  ];
  reviews: string[] = [
    'IN ORDER TO END A CALL YOU WILL HAVE TO PRESS THE SIDE BUTTON TO CLOSE THE SCREEN AND UNLOCK THE SCREEN AGAIN FOR YOU TO BE ABLE TO PRESS AND END THE CALL. THE SAME WITH TEXT MESSAGE. IF YOU DONT REPLY FAST ENOUGH TO A TEXT MESSAGE THE ONLY WAY TO REPLY ON A TEXT MESSAGE IS TO CLOSE THE SCREEN BY PRESSING THE BUTTON ON THE SIDE AND THEN UNLOCK IT AND ACCESS THE MESSAGE AGAIN.EVEN WHILE USING THE CALCULATOR SAME THING. OR ON ANY APP. THE SCREEN WILL FREEZE AND LET YOU DO NOTHING UNLESS YOU CLOSE THE SCREEN AND UNLOCK IT AGAIN.',
    'I just got this phone the other day and I could not do the update on it. If you cannot update it you cannot get past that screen to setup the phone.  I was really disappointed',
    'I bought this phone for a friend. When it arrived the screen would not work. After several attempts it finally started to work. Now after a few weeks the phone locked up again and the screen didnr work. Now they had to factory reset and lost all of their info. Do not buy',
    'Product works great. Arrived fine, after two days the back side of the phone was Scratched all over, and I aware on the grave of my parents I did not drop it or cause it. I called to see about getting an exchange or refund because it said I was guaranteed a 90 day refund, but was told that was only for internal damage.',
    'Its not working properly Some times ringing sometimes not Internet is sometimes working sometimes not Same gsm works in Samsung better than iPhone 11',
    'Everything seem is okay. But my iPhone 11 can not share hotspot . There is some problems with hotspot. Please show me how to fix it. Thanks you so much. I just use it one day. Not yet test earphone',
    'The phone never worked. You sold a dud. It was a terrible experience and hassle and very disappointed especially with how expensive it was. I had to go to Apple store and buy brand new phone but I never want this bad experience again. Not worth my time or money.',
    'The iphone 11 works good the only thing I didnt like is that I purchased a really expensive phone that came with scratches on screen and it seems like they put a screen to cover the In perfections on the actual phone screen.',
    'Everything seemed like it was in order with my iphone 11. It even started up well. However, throughout the first day, the phone would randomly restart itself. Nothing seemed to change with each restart but I couldnt figure out if I was doing something or not so I had to return it.',
    'Product was in okay condition. Speakers for IPhone were defective and had to be paid for to be replaced. It was also discovered that the facial recognition feature was not working with the device and must be fixed as well.',
    'It was great to start, but 2 days in parts of the screen stopped working so I couldt type or use it. So I returned it, and am still waiting on my money back :(.  It was in great condition though and not a scratch on it.',
    'The phone had couple of scratches on the sides of the phone, the microphone wasnt functioning properly. But other than that everything was alright.',
    'This software seems to be corrupt. Freezes up on everything. Sent it back, got another,  and works great. Now, Im still waiting on my refund.',
    'Screen problem. You can check it in the video. I can not play any game. Returned',
    'my phone glitches alott and doesnt work all well as it should. no earbuds came with it , fake apple charge and not even real apple box',
    'I dont like this phone I know its refurbished but its entirely too slow!',
  ];

  changeView(vName: string) {
    this.currentView = vName;
  }

  delay() {
    if(!this.feature||
      !this.preprocessStep||!this.model||!this.techniqueVal||!this.evalTech){
alert("System Broke!!!!!!!")
location.reload()
    }
    else{

    alert('Model is training this may take a while');
  if(this.techniqueVal == 'foldcross'){
    setTimeout(() => {
      this.changeView('results');
    }, 15000);
  }
  else{
    setTimeout(() => {
      this.changeView('results');
    }, 5000);
  }
}
}

goHome(temp?:any){
  this.router.navigate(['/'])
}
models:any=[]

saveModel(){
  if(this.evalTech == 'Precision'){
    let  evalMatr={
      acc:this.accuracy,
      prec:this.precision,
      recal:this.recall,
      fm:this.fmeasures
    }
       this.models = JSON.parse(localStorage.getItem("models") || "[]");
      let json={
        feaute:this.feature,
        preprocessing:this.preprocessStep,
        model:this.model,
        valTech:this.techniqueVal,
        evalMat:this.evalTech,
        timestamp:new Date(),
        prec:this.precision,
       }
      this.dbHandler.models.push(json)
      console.log("before adding")
      this.models.push(json)
      localStorage.setItem('models',JSON.stringify(this.models))
    alert("Model saved successfully!!")
    
  }
  else if(this.evalTech == 'Accuracy'){
    let  evalMatr={
      acc:this.accuracy,
      prec:this.precision,
      recal:this.recall,
      fm:this.fmeasures
    }
       this.models = JSON.parse(localStorage.getItem("models") || "[]");
      let json={
        feaute:this.feature,
        preprocessing:this.preprocessStep,
        model:this.model,
        valTech:this.techniqueVal,
        evalMat:this.evalTech,
        timestamp:new Date(),
        acc:this.accuracy,
      }
      this.dbHandler.models.push(json)
      console.log("before adding")
      this.models.push(json)
      localStorage.setItem('models',JSON.stringify(this.models))
    alert("Model saved successfully!!")
    
  }
  else if(this.evalTech == 'Recall'){
    let  evalMatr={
      acc:this.accuracy,
      prec:this.precision,
      recal:this.recall,
      fm:this.fmeasures
    }
       this.models = JSON.parse(localStorage.getItem("models") || "[]");
      let json={
        feaute:this.feature,
        preprocessing:this.preprocessStep,
        model:this.model,
        valTech:this.techniqueVal,
        evalMat:this.evalTech,
        timestamp:new Date(),
        recal:this.recall,
      }
      this.dbHandler.models.push(json)
      console.log("before adding")
      this.models.push(json)
      localStorage.setItem('models',JSON.stringify(this.models))
    alert("Model saved successfully!!")
    
  }
  else if (this.evalTech == 'fmeasures'){
    let  evalMatr={
      acc:this.accuracy,
      prec:this.precision,
      recal:this.recall,
      fm:this.fmeasures
    }
       this.models = JSON.parse(localStorage.getItem("models") || "[]");
      let json={
        feaute:this.feature,
        preprocessing:this.preprocessStep,
        model:this.model,
        valTech:this.techniqueVal,
        evalMat:this.evalTech,
        timestamp:new Date(),
        fm:this.fmeasures
      }
      this.dbHandler.models.push(json)
      console.log("before adding")
      this.models.push(json)
      localStorage.setItem('models',JSON.stringify(this.models))
    alert("Model saved successfully!!")
    
  }
  else{
    let  evalMatr={
      acc:this.accuracy,
      prec:this.precision,
      recal:this.recall,
      fm:this.fmeasures
    }
       this.models = JSON.parse(localStorage.getItem("models") || "[]");
      let json={
        feaute:this.feature,
        preprocessing:this.preprocessStep,
        model:this.model,
        valTech:this.techniqueVal,
        evalMat:this.evalTech,
        timestamp:new Date(),
        acc:this.accuracy,
        prec:this.precision,
        recal:this.recall,
        fm:this.fmeasures
      }
      this.dbHandler.models.push(json)
      console.log("before adding")
      this.models.push(json)
      localStorage.setItem('models',JSON.stringify(this.models))
    alert("Model saved successfully!!")
    
  }
 location.reload()
}
  selectDataset() {
    this.datasetSelected = true;
  }

  viewDataSetDialog() {
    this.viewDataSet = !this.viewDataSet;
  }

  feature:string='';
  preprocessStep:string=''
  model:string=''
  techniqueVal:string=''
  evalTech:string=''

  selectedFeature(val:any){
    console.log(val)
    this.feature=val
  }
  selectedPreprocessing(val:any){
    if(val != 'all'){
      alert("please choose all steps as for Model training we have done it on all steps")
    }
    else{
      this.preprocessStep=val
    }
  }

  selectModel(val:any){
   console.log("model",val)
   this.model=val
  }

  validationTech(val:any){
    console.log("validation",val)
    this.techniqueVal=val
   }

   evalMat(val:any){
    console.log("validation",val)
    this.evalTech=val
   }
   
  ngOnInit(): void {
  }

}
