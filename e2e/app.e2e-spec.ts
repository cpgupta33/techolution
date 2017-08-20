import { TecholutionPage } from './app.po';

describe('techolution App', () => {
  let page: TecholutionPage;

  beforeEach(() => {
    page = new TecholutionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
