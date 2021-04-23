import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CustomerComponent } from './components/customer/customer.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarDetailComponent },
  { path: 'customers', component: CustomerComponent },
  { path: 'cars/brand/:brandId', component: CarDetailComponent },
  { path: 'cars/color/:colorId', component: CarDetailComponent },
  { path: 'cars/cardetail/:carId', component: CarDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
