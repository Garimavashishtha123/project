import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { DoctorserviceService } from './doctorservice.service';
import { DoctorComponent } from './doctor/doctor.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
//import { BookingAppointmentComponent } from './booking-appointment/booking-appointment.component';
import { BookingService } from './booking.service';
import { SearchDoctorComponent } from './search-doctor/search-doctor.component';

// import { MatInputModule } from '@angular/material/input';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatMomentDateModule } from '@anngular/material';
//import {MatDatePickerModule} from '@angular/material'; 

// import {Ng2SearchPipe, Ng2SearchPipeModule} from 'ng2-search-filter';
import { AddPateintComponent } from './add-pateint/add-pateint.component';
import { HomeComponent } from './home/home.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { FreeCheckupComponent } from './free-checkup/free-checkup.component';
import { MedicineComponent } from './medicine/medicine.component';
import { HeaderComponent } from './header/header.component';
import {  CartComponent } from './cart/cart.component';
import { MedicineService } from './medicine.service';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    //BookingAppointmentComponent,
    AddPateintComponent,
    DoctorComponent,
    
    SearchDoctorComponent,
  
    HomeComponent,
    NewAppointmentComponent,
    FooterComponent,
    AboutUsComponent,
    OurServicesComponent,
    FreeCheckupComponent,
    MedicineComponent,
    HeaderComponent,
   
    FilterPipe,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    // MatMomentDateModule,
    // MatDatepickerModule,
    // BrowserAnimationsModule,
    // MatInputModule,
    //MatDatePickerModule,
    

    RouterModule.forRoot([
      // {path: '', component:NavBarComponent},
      {path:'Doctors',component:DoctorComponent},
      //{path:'All-Appointments',component:BookingAppointmentComponent},
      {path:'Add-Patient',component:AddPateintComponent},
      {path:'',component:HomeComponent},
      {path:'New-Appointment',component:NewAppointmentComponent},
      {path:'About-Us',component:AboutUsComponent},
      {path:'Our-Services',component:OurServicesComponent},
      {path:'Free-Checkup',component:FreeCheckupComponent},
      {path:'Book-Medicine',component:MedicineComponent},
      {path:'cart',component:CartComponent},
      {path:'', redirectTo:'products',pathMatch:'full'},

    ])
  ],
  providers: [BookingService,DoctorserviceService,MedicineService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
