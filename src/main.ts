import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import { getTranslationProviders } from './app/locale/i18n-providers';
import 'hammerjs';

if (environment.production) {
  enableProdMode();
}

// getTranslationProviders().then(providers => {
//   const options = { providers };
//   platformBrowserDynamic().bootstrapModule(AppModule, this.options);
// });

platformBrowserDynamic().bootstrapModule(AppModule, {
  preserveWhitespaces: false
});
