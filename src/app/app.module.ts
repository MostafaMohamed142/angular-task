import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { ImageUploadState } from 'src/store/reducers/image-upload-state';
import { UserService } from './user.service';
import { ProductResourceComponent } from './product-resource/product-resource.component';
import { RadioBtnComponent } from './radio-btn/radio-btn.component';
import {MatInputModule} from '@angular/material/input';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CounterComponent } from './counter/counter.component';
import { CounterState } from 'src/store/reducers/counter.state';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImageUploaderComponent,
    ProductResourceComponent,
    RadioBtnComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    NgFor,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    NgxsModule.forRoot([ImageUploadState,CounterState])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
