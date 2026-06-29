test('example with attachment', async ({ page }, testInfo) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  await testInfo.attach('accessibility-scan-results', {
    body: JSON.stringify(accessibilityScanResults, null, 2),
    contentType: 'application/json'
  });

  expect(accessibilityScanResults.violations).toEqual([]);
});
