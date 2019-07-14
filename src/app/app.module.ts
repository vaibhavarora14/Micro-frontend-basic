import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [HelloWorldComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const custom = createCustomElement(HelloWorldComponent, {injector});
    customElements.define('hello-world', custom);
  }
 }
