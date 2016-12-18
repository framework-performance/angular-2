import { NgxPerformancePage } from './app.po';

describe('ngx-performance App', function() {
  let page: NgxPerformancePage;

  beforeEach(() => {
    page = new NgxPerformancePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
