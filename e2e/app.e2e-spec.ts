import { MyauthappPage } from './app.po';

describe('myauthapp App', () => {
  let page: MyauthappPage;

  beforeEach(() => {
    page = new MyauthappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
