import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  title:any;
  employees:any={};
  userData:any = {};

  constructor(
    public dialog:MatDialog,
    public auth:AngularFireAuth,
    public db :AngularFirestore,
    public router:Router
  ) {

   }

  ngOnInit(): void {
    this.title='Daftar Harga Vektor Art';
    this.auth.user.subscribe(user=>{
      this.userData = user;
      this.getEmployees();
    })
  }

  loading:boolean | undefined;
  getEmployees()
  {
    this.loading=true;
    this.db.collection('employees',ref=>{
      return ref.where('uid','==',this.userData.uid);
    }).valueChanges({idField : 'id'}).subscribe(result=>{
      console.log(result);
      this.employees=result;
      this.loading=false;
    },error=>{
      this.loading=false;
    });
  }
    

    logout()
    {
      let conf=confirm('Keluar aplikasi?');
      if (conf){
        localStorage.removeItem('appToken');
        this.router.navigate(['/login']);
        
      }
    }
  }