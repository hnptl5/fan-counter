import { FancounterPage } from './app.po';

describe('fancounter App', () => {
  let page: FancounterPage;

  beforeEach(() => {
    page = new FancounterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
