import { Angular4ProjectPage } from './app.po';

describe('angular4-project App', function() {
  let page: Angular4ProjectPage;

  beforeEach(() => {
    page = new Angular4ProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
