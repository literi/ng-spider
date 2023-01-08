import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { NotfoundComponent } from './notfound/notfound.component';
import { DashbardComponent } from './dashbard/dashbard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatInputModule } from '@angular/material/input';
import { AuthComponent } from './auth/auth.component';
import { ApiInjector } from './core/ApiInjector';
import { LoginComponent } from './login/login.component';
import { PopupComponent } from './core/popup/popup.component';
import { PopupService } from './core/popup/popup.service';
import { UserStateService } from './core/state/UserStateService';
// import { MatChipsModule } from '@angular/material/chips';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    DashbardComponent,
    DashboardComponent,
    AuthComponent,
    LoginComponent,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatTreeModule,
    MatIconModule,
    HttpClientModule,
    MatInputModule,
    // MatChipsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInjector, multi: true },
    PopupService,
    UserStateService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
