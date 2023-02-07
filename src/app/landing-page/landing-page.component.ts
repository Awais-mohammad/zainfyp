import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TestModelComponent } from '../test-model/test-model.component';
import { TrainModelComponent } from '../train-model/train-model.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private router:Router
  ) { }

  openTestModel(){
    const dialogRef = this.dialog.open(TestModelComponent,{
      hasBackdrop:false,
      height: '70%',
      width: '70%'
    });
  }

  badGateway(){
    this.router.navigate(['/train-model'])
  }

  ngOnInit(): void {
    // this.openTestModel()

  }

}
