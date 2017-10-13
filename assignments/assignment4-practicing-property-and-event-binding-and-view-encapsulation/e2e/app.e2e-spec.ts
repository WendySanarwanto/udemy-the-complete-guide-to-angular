import { AppPage } from './app.po';

describe('assignment4-practicing-property-and-event-binding-and-view-encapsulation App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
