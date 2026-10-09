import { expect, test, type Page } from "@playwright/test";
import { experience, profile, projects } from "../src/data";

// Wait for the destination, rather than merely its first visible animation frame.
// This also checks the sticky-header offset and bottom-of-page scroll clamping.
async function expectScrollDestination(page: Page) {
  await expect
    .poll(() =>
      page.evaluate(() => {
        const target = document.querySelector(location.hash)!;
        const padding = parseFloat(
          getComputedStyle(document.documentElement).scrollPaddingTop,
        );
        const destination = Math.max(
          0,
          Math.min(
            target.getBoundingClientRect().top + scrollY - padding,
            document.documentElement.scrollHeight - innerHeight,
          ),
        );
        return Math.abs(scrollY - destination);
      }),
    )
    .toBeLessThan(2);
}

test("renders content and local assets without browser errors", async ({
  page,
}) => {
  const failures: string[] = [];
  page.on("pageerror", (error) => failures.push(error.message));
  page.on("response", (response) => {
    if (response.status() >= 400)
      failures.push(`${response.status()} ${response.url()}`);
  });
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    profile.name,
  );
  await expect(page.getByText(profile.headline, { exact: true })).toBeVisible();
  await expect(page.locator(".project-card")).toHaveCount(projects.length);
  await expect(page.locator(".timeline li")).toHaveCount(experience.length);
  await page.evaluate(() => document.fonts.ready);
  expect(failures).toEqual([]);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBeTruthy();
});

test("project call to action navigates to projects", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Explore my projects" }).click();
  await expect(page).toHaveURL(/#projects$/);
  await expect(
    page.getByRole("heading", { name: "Curiosity, made tangible." }),
  ).toBeInViewport();
});

test("navigation works at this viewport and closes the mobile menu", async ({
  page,
}, testInfo) => {
  await page.goto("/");
  const mobile = testInfo.project.name === "mobile";
  const toggle = page.getByRole("button", { name: "Open navigation" });
  if (mobile) await toggle.click();
  const nav = page.getByRole("navigation", { name: "Main navigation" });
  await nav.getByRole("link", { name: "About" }).click();
  await expect(page).toHaveURL(/#about$/);
  await expectScrollDestination(page);
  await expect(
    page.getByRole("heading", { name: "A student of how things work." }),
  ).toBeInViewport();
  if (mobile) {
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await toggle.click();
  }
  await nav.getByRole("link", { name: "Resume" }).click();
  await expect(page).toHaveURL(/#resume$/);
  await expectScrollDestination(page);
  await expect(page.locator("#resume")).toBeInViewport();
  if (mobile) await toggle.click();
  await nav.getByRole("link", { name: "Contact" }).click();
  await expect(page).toHaveURL(/#contact$/);
  await expectScrollDestination(page);
  await expect(page.getByRole("link", { name: "Say hello" })).toBeInViewport();
});

test("personal links have the supplied destinations and examples are honest", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: "Say hello" })).toHaveAttribute(
    "href",
    `mailto:${profile.email}`,
  );
  await expect(
    page.getByRole("link", {
      name: "LinkedIn (opens in a new tab)",
      exact: true,
    }),
  ).toHaveAttribute("href", profile.linkedinUrl!);
  await expect(
    page.getByRole("link", {
      name: "GitHub (opens in a new tab)",
      exact: true,
    }),
  ).toHaveAttribute("href", profile.githubUrl);
  await expect(
    page.getByText("Résumé coming soon", { exact: true }),
  ).toBeVisible();
  await expect(page.locator(".example-badge")).toHaveCount(
    projects.filter((project) => project.isExample).length,
  );
  await expect(page.locator('a[href="#"]')).toHaveCount(0);
});

test("keyboard navigation and reduced motion are supported", async ({
  page,
}, testInfo) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#main$/);
  expect(
    await page
      .locator("html")
      .evaluate((el) => getComputedStyle(el).scrollBehavior),
  ).toBe("auto");
  expect(
    await page
      .locator(".model-sphere")
      .evaluate((el) => getComputedStyle(el).animationName),
  ).toBe("none");
  if (testInfo.project.name === "mobile") {
    await page.getByRole("button", { name: "Open navigation" }).click();
    await page.keyboard.press("Escape");
    await expect(
      page.getByRole("button", { name: "Open navigation" }),
    ).toBeFocused();
    await expect(
      page.getByRole("navigation", { name: "Main navigation" }),
    ).toBeHidden();
  }
});
