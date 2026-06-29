test('should not have any automatically detectable WCAG A or AA violations', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});
