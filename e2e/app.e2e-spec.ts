import { JsonmonsterPage } from './app.po';

describe('jsonmonster App', function() {
  let page: JsonmonsterPage;

  beforeEach(() => {
    page = new JsonmonsterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
