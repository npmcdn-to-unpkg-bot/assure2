import { Assure2Page } from './app.po';

describe('assure2 App', function() {
  let page: Assure2Page;

  beforeEach(() => {
    page = new Assure2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
