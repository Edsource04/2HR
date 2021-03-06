import { browser, by, element } from 'protractor';

export class HRPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('hr-root h1')).getText();
  }
}
