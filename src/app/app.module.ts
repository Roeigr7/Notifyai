import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { ResultsComponent } from './results/results.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FooterComponent,
    ResultsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    YouTubePlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
