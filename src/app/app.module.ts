import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { LoginPageComponent } from './screens/login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { BackendApiService } from './screens/Service/backend-api.service';
import { MatPaginatorModule} from  '@angular/material/paginator';
import { MatSortModule} from  '@angular/material/sort';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    HttpClientModule,
  ],
  providers: [BackendApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
