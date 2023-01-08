import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router, public http: HttpClient) {}
  imgCode = '';
  formData: FormGroup = new FormGroup({
    username: new FormControl('admin', [Validators.required]),
    password: new FormControl('admin', [Validators.required]),
    code: new FormControl('0000', [Validators.required]),
  });

  onSubmit() {
    if (this.formData.valid) {
      this.http
        .post('/api/login', { ...this.formData.value })
        .subscribe((response: any) => {
          if (response.code === 10001 && response.data) {
            this.router.navigateByUrl('/home');
          }
          // doNothing
        });
    }
  }

  fetchData() {
    this.http.get('/api/getKaptcha').subscribe((response: any) => {
      this.imgCode = 'data:image/jpg;base64,' + response.data;
    });
  }
  onImgClick(val: any, $event: any) {
    $event.stopPropagation();
    this.fetchData();
  }
  ngOnInit(): void {
    this.fetchData();
  }
}
