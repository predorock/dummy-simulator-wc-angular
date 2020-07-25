import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DummySimulatorComponent } from './dummy-simulator.component';
import {createCustomElement} from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule
  ],
  entryComponents: [
    DummySimulatorComponent
  ]
})
export class DummySimulatorModule {

  constructor(
    private injector: Injector
  ) {}

  ngDoBootstrap() {
    const tagName = 'dummy-simulator';
    if (!customElements.get(tagName)) {
      const el = createCustomElement(DummySimulatorComponent, {injector: this.injector});
      customElements.define(tagName, el);
    }
  }

}
