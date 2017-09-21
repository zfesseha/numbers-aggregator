import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NumbersComponent } from './components/numbers/numbers.component';

import { NumbersService} from "./services/numbers.service";

@NgModule({
    declarations: [
        AppComponent,
        NumbersComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        NgbModule.forRoot()
    ],
    providers: [NumbersService],
    bootstrap: [AppComponent]
})
export class AppModule { }
