import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { DummySimulatorModule } from './app/components/dummy-simulator/dummy-simulator.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(DummySimulatorModule)
  .catch(err => console.error(err));
