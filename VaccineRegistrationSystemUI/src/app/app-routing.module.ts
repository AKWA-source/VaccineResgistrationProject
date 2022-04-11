import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';

/**Componenets */
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { CancelSlotComponent } from './cancel-slot/cancel-slot.component';
import { BookSlotComponent } from './book-slot/book-slot.component';
import { UpdateComponent } from './update-slot/update-slot.component';
import { AdminComponent } from './admin/admin.component';
import { FAQUserComponent } from './faq-user/faq-user.component';
import { FAQAdminComponent } from './faq-admin/faq-admin.component';
import { VaccineDetailsComponent } from './vaccine-details/vaccine-details.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [
  { path: 'adminhome', component: AdminHomeComponent},
  { path: 'userhome', component: UserHomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cancelslot', component: CancelSlotComponent },
  { path: 'updateslot', component: UpdateComponent },
  { path: 'bookslot', component: BookSlotComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'faq', component: FAQUserComponent},
  { path: 'faqadmin', component: FAQAdminComponent},
  { path: 'vaccinedetails', component: VaccineDetailsComponent},
  { path: 'editprofile', component: EditProfileComponent},
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatDatepickerModule],
  exports: [RouterModule, MatDatepickerModule]
})
export class AppRoutingModule { }
