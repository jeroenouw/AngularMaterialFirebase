import { TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID } from '@angular/core';
export function getTranslationProviders(): Promise<Object[]> {

  const locale = document['locale'] as string;

  const noProviders: Object[] = [];

  if (!locale || locale === 'en-US') {
    return Promise.resolve(noProviders);
  }
  // 'locale/messages.nl.xlf`
  const translationFile = `./locale/messages.${locale}.xlf`;
  return getTranslationsWithSystemJs(translationFile)
    .then( (translations: string ) => [
      { provide: TRANSLATIONS, useValue: translations },
      { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
      { provide: LOCALE_ID, useValue: locale }
    ])
    .catch(() => noProviders);
}
declare var System: any;
function getTranslationsWithSystemJs(file: string) {
  return System.import(file + '!text');
}
