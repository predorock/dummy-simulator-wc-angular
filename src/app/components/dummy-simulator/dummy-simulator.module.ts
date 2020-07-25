import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DummySimulatorComponent } from './dummy-simulator.component';
import {createCustomElement} from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CurrencyPipe} from '../../pipes/currency.pipe';



@NgModule({
  declarations: [
    DummySimulatorComponent,
    CurrencyPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
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
