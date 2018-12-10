import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user.routing';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [UserComponent, LoginComponent, ProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
