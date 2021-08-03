import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  title:any;
  draws:any={};
  userData:any = {};

  constructor(
    public dialog:MatDialog,
    public auth:AngularFireAuth,
    public db :AngularFirestore,
    public router:Router
  ) {

   }

  ngOnInit(): void {
    this.title='Daftar Harga Logo';
    this.auth.user.subscribe(user=>{
      this.userData = user;
      this.getDraws();
    })
  }

  loading:boolean | undefined;
  getDraws()
  {
    this.loading=true;
    this.db.collection('draws',ref=>{
      return ref.where('uid','==',this.userData.uid);
    }).valueChanges({idField : 'id'}).subscribe(result=>{
      console.log(result);
      this.draws=result;
      this.loading=false;
    },error=>{
      this.loading=false;
    });
  }
}
