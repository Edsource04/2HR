import { HRPage } from './app.po';

describe('hr App', () => {
  let page: HRPage;

  beforeEach(() => {
    page = new HRPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to hr!');
  });
});
