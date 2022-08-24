import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { MainPageComponent } from './core/components/main-page/main-page.component';
import { AllBirthdaysComponent } from './core/components/all-birthdays/all-birthdays.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalRemoveComponent } from './core/components/modal-remove/modal-remove.component';
import { ModalEditComponent } from './core/components/modal-edit/modal-edit.component';
import { ModalAddComponent } from './core/components/modal-add/modal-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    AllBirthdaysComponent,
    ModalRemoveComponent,
    ModalEditComponent,
    ModalAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
