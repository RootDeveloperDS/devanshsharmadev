from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:8080")

    # Take a screenshot to verify UI is rendering fine
    page.screenshot(path="screenshot.png")

    browser.close()
