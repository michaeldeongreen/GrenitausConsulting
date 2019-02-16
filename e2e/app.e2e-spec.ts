import { GrenitausConsultingPage } from './app.po';

describe('grenitaus-consulting App', () => {
  let page: GrenitausConsultingPage;

  beforeEach(() => {
    page = new GrenitausConsultingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
