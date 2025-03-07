// @ts-nocheck
import puppeteer from 'puppeteer';

let browser; // Store the browser instance
let page; // Store the page instance

async function launchBrowser() {
    if (!browser) {
        browser = await puppeteer.launch({ headless: false }); // Keep it visible for debugging
        page = await browser.newPage();
        await page.goto('https://www.reddit.com/r/houseofhacks/?playtest=devtest-hoh');
    } else {
        // If browser is already running, just reload the page
        await page.reload();
    }
    console.log('Page reloaded');
}

// Call this function every time a file update is detected
await launchBrowser();
