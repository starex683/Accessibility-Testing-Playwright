test('should not have any accessibility violations outside of rules with known issues', async ({
  page,
}) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  const accessibilityScanResults = await new AxeBuilder({ page })
      .disableRules(['duplicate-id'])
      .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});
