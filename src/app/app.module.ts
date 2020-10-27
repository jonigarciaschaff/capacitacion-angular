import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PagesRoutesModule } from './pages/pages.routes';
import { HttpClientModule } from '@angular/common/http';
import { CommonComponentsModule } from './components/common-components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PagesRoutesModule,
    HttpClientModule,
    CommonComponentsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
