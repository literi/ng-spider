import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(public http: HttpClient) {}
  onImgClick() {
    this.http.get('/api/getKaptchaImage').subscribe((response) => {
      console.log(response);
    });
  }
  ngOnInit(): void {
    this.http.get('/api/getKaptchaImage').subscribe((response) => {
      console.log(response);
    });
  }
}
