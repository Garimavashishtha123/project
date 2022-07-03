// import { Component, OnInit,Inject} from '@angular/core';
// import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
// import { Subscription } from 'rxjs';
// import { Booking } from '../booking';
// import { BookingService } from '../booking.service';
// // import 'rxjs/add/operator/take';

// @Inject(BookingService)
// @Component({
//   selector: 'app-booking-appointment',
//   templateUrl: './booking-appointment.component.html',
//   styleUrls: ['./booking-appointment.component.css'],
// })
// export class BookingAppointmentComponent implements OnInit{
// //   Result: Booking[];
// //   filteredBooks: any;
// //   subscription: Subscription;
// //   id: any;
// //   // result$;

//   constructor(
//     private book: BookingService,
//     private router: Router,
//     private route: ActivatedRoute
//   ) {
//      // this.Result = book.getAll();

// //     let id = this.route.snapshot.paramMap.get('id');
// //     // if(id) this.book.get(id).take(1).subscribe(p => this.Result=p);

// //     // this.subscription = this.book
// //     //   .getAll()
// //     //   .subscribe((Result) => (this.filteredBooks = this.Result = Result));
// // //   }

// // //   filter(query: string) {
// // //     // console.log(query);
// // //     this.filteredBooks = query
// // //       ? this.Result.filter((p) =>
// // //           p.Fullname.toLowerCase().includes(query.toLowerCase())
// // //         )
// // //       : this.Result;
// // //   }

// // //   delete() {
// // //     if (!confirm('Are you sure you want to delete the appointment?')) return;
// // //     {
// // //       this.book.delete(this.id);
// // //     }
// // //   }

// //   ngOnInit(): void {}
// //   //  // this.book.getAll().subscribe(data=>{
// //   //     this.
// //   //  // })
// //   // }

// // //   ngOnDestroy(): void {
// // //     this.subscription.unsubscribe();
// // //   }
//  }
