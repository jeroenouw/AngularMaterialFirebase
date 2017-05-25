import { browser, element, by } from 'protractor';

export class Angular4ProjectPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeadingText() {
    return element(by.css('app-root h1')).getText();
  }

  getParagraphText() {
    return element(by.css('app-first-block p')).getText();
  }

  getButtonText() {
  return element(by.buttonText('Register')).getText();
  }
}
