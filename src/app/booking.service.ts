import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from './booking';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
                               constructor(private http: HttpClient) {}
  getAll(): Observable<Booking[]> {
 
    return this.http.get<Booking[]>("https://localhost:44379/api/Appointment",
    {
    headers:{
      "Access-Control-Allow-Origin":"*"}
    });
  }

  Adddata(data:Booking){
    this.http.post<Booking[]>("https://localhost:44379/api/Appointment",data,{
      headers:{
      "Access-Control-Allow-Origin":"*"}
    }).subscribe(result=>console.log("Done"));

  } 
  getAllDoctors(){
    this.http.get("https://localhost:44379/api/Doctors",{
      headers:{
        "Access-Control-Allow-Origin":"*"}
      
    })
  }

  deletedata(id:number){
    this.http.delete("https://localhost:44379/api/Appointment/"+id,{
      headers:{
        "Access-Control-Allow-Origin":"*"}
      
    }).subscribe(result=>console.log("Done"));
  }
}
