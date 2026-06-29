test('should not have any accessibility violations outside of elements with known issues', async ({
  page,
}) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  const accessibilityScanResults = await new AxeBuilder({ page })
      .exclude('#element-with-known-issue')
      .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});
