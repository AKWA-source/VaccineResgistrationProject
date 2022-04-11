import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ToastrModule } from 'ngx-toastr';
import { MatFormFieldModule, } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { DatePipe } from '@angular/common';
// services
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CancelSlotComponent } from './cancel-slot/cancel-slot.component';
import { BookSlotComponent } from './book-slot/book-slot.component';
import { UpdateComponent } from './update-slot/update-slot.component';
import { AdminComponent } from './admin/admin.component';
import { FAQUserComponent } from './faq-user/faq-user.component';
import { FAQAdminComponent } from './faq-admin/faq-admin.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { VaccineDetailsComponent } from './vaccine-details/vaccine-details.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminHomeComponent,
    CancelSlotComponent,
    BookSlotComponent,
    UpdateComponent,
    AdminComponent,
    FAQUserComponent,
    FAQAdminComponent,
    UserHomeComponent,
    VaccineDetailsComponent,
    EditProfileComponent
  ],
  imports: [
    Ng2SearchPipeModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTabsModule,
    MatGridListModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    ToastrModule.forRoot()
  ],  
  providers: [DatePipe], //
  bootstrap: [AppComponent]
})
export class AppModule { }
