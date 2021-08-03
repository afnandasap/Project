import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  title:any;
  employees:any={};
  userData:any = {};
  constructor(
    public dialog:MatDialog,
    public auth:AngularFireAuth,
    public db :AngularFirestore
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


    EmployeeDetail(data: any,idx: number)
    {
      let dialog= this.dialog.open(EmployeeDetailComponent, {
          width: '400px',
          data: data,
      });
        dialog.afterClosed().subscribe(result=> {
        return;
        });
      }

      loadingDelete:any={};
      DeleteEmployee(id: any,idx: any)
      {
        var conf=confirm('Delete item?');
        if(conf)
        {
          this.db.collection('employees').doc(id).delete().then(result=>{
            this.employees.splice(idx,1);
            this.loadingDelete[idx]=false;
          }).catch(error=>{
            this.loadingDelete[idx]=false;
            alert('Tidak dapat menghapus data');
          });
        }
      }
    }



