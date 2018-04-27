import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DemoComponent} from "./app.component";

@NgModule ({
	imports: [ BrowserModule ],
	declarations: [DemoComponent],
	bootstrap: [DemoComponent]

})
export class AppModule {


}
