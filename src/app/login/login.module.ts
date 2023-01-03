import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule],
})
export class LoginModule {}
