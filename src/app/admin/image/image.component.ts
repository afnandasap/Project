import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
uid: any
successMessege: any
f:any
user:any
  constructor(
    private fs:AngularFirestore,private fa:AngularFireAuth) {
      this.fa.user.subscribe(user=>{
        this.uid=user;
      })
    }
  

  ngOnInit(): void {
}
addproduct(f:any){
  let data=f.value
  this.fs.collection("employees/").doc(this.uid).set({
    title:data.title,
    description:data.description,
    image:data.image,
    uid:this.uid
  }).then(()=>{
    this.successMessege='Berhasil!!'
  })
}

}
