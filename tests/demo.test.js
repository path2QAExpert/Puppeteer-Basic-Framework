//demo.test.js
const fs = require('fs-extra');
const path = require('path');

describe('Swaglab Demo', () => {
  jest.setTimeout(50000);
  beforeAll(async () => {
  await page.goto('https://www.saucedemo.com/')
  })
  
  async function takeSnapshot(page, fileName) {
    const filePath = path.resolve(__dirname, 'snapshots', fileName);
    await fs.ensureDir(path.dirname(filePath));
    await page.screenshot({ path: filePath });
  }

  
  // Utility function to delete all files in the snapshots folder
  async function cleanSnapshotsFolder() {
    const snapshotsFolderPath = path.resolve(__dirname, 'snapshots');
    await fs.emptyDir(snapshotsFolderPath);
    console.log('Snapshots folder cleaned');
  }

  it('Should Login and Logout', async () => {
   // Wait for the username field and type in the username
    // Wait for the username field and type in the username

    await cleanSnapshotsFolder();

    await page.waitForSelector('#user-name');
    await takeSnapshot(page, 'before_login.png');
    await page.type('#user-name', 'standard_user');

    // Type in the password
    await page.type('#password', 'secret_sauce');

    // Click the login button
    await page.click('#login-button');

    // Wait for the inventory container to appear after login
    await page.waitForSelector('.inventory_list');
    await takeSnapshot(page, 'after_login.png');

    // Perform logout (click the menu button, then the logout link)
    await page.click('#react-burger-menu-btn');
    await page.waitForSelector('#logout_sidebar_link');
    await page.evaluate(() => {
      document.querySelector('#logout_sidebar_link').click();
    });
  })
  })