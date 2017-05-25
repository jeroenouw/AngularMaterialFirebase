import { Angular4ProjectPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('angular4-project App', function() {
  let page: Angular4ProjectPage;

  beforeEach(() => {
    page = new Angular4ProjectPage();
  });

  /*it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });

  it('should display message lorem ipsum dolor...', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Lorem ipsum dolor');
  });*/

  it('Button text should be register', () => {
    browser.get('http://localhost:4200/signup');
    expect(browser.getButtonText()).toEqual('Register');
  });

});
