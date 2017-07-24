import { SeaPage } from './app.po';

describe('sea App', () => {
  let page: SeaPage;

  beforeEach(() => {
    page = new SeaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
