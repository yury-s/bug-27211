import { test, expect } from '@playwright/test';

test.describe('Clear cached username/password from setup ', async () => {
  test.use({storageState: {cookies: [], origins: []}});

  let page;
  test.beforeAll(async({ browser }) => {
    page = await browser.newPage();
  });

  test('my test', async ({  }) => {
    const context = await page.context();
    const state = await context.storageState();
    expect(state.cookies).toEqual([]);
  });
});
