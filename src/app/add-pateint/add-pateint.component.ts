import { Component, OnInit,NgZone, Inject } from '@angular/core';
import { FormGroup, FormBuilder , Validators, FormControl } from '@angular/forms';
import { BookingService } from '../booking.service';
import { ActivatedRoute,Router} from '@angular/router';
import { Booking } from '../booking';
import { Subscription } from 'rxjs';
//import {MatSelectModule} from '@angular/material';
//import {MatDatePickerModule} from '@angular/material'



@Inject(BookingService)
@Component({
  selector: 'app-add-pateint',
  templateUrl: './add-pateint.component.html',
  styleUrls: ['./add-pateint.component.css']
})
export class AddPateintComponent implements OnInit {
  
   
  bookingform!:FormGroup;
  submitted = false;
  minDate: Date;



id:FormControl=new FormControl("");
name:FormControl=new FormControl("");
phone:FormControl=new FormControl("");
email:FormControl=new FormControl("");
dob:FormControl=new FormControl("");
appdate=new FormControl("");
apptime=new FormControl("");
dname=new FormControl("");



patient!:Booking[];
  constructor(private book:BookingService,private router:Router,private FormBuilder:FormBuilder) { }

  
  ngOnInit(): void {
    // this.book.getAll().subscribe((data: Booking[]) => {
    //   for (var i = 0; i < data.length; i++) {
    //     let ba: Booking = {
    //       id: data[i].id,
    //       name: data[i].name,
    //       phone: data[i].phone,
    //       email: data[i].email,
    //       dob: data[i].dob,
    //       appdate: data[i].appdate,
    //       apptime: data[i].apptime,
    //       dname:data[i].dname
    //     };
    //     this.patient.push(ba);
    //     console.log(this.patient);
    //   }
    // });
    this.loadData();
  
  const currentYear = new Date().getFullYear();
  this.minDate = new Date(currentYear - 20, 0, 1);
  }

  loadData(){
    this.book.getAll().subscribe(patient=>{
      this.patient=patient;
     } );
  }
   
    

  savedata()
  {
  let  data:Booking=
 {
  id:this.id.value,
  name:this.name.value,
   phone:this.phone.value,
   email:this.email.value,
   dob:this.dob.value,
   appdate:this.appdate.value,
   apptime:this.apptime.value,
   dname:this.dname.value
   };
   this.book.Adddata(data);
   alert("Data saved")
   console.log("data inserted");
  }

  
  //Get all the data of booking appointment
  

  //Delete the data 
  delete(db:Booking){
    this.book.deletedata(<number>db.id);
    this.loadData();
    console.log("data deleted");

  }
}
