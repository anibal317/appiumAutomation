const { remote } = require('webdriverio');

const capabilities = {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'device',
    'appium:appPackage': 'com.android.settings',
    'appium:appActivity': '.Settings',
};

const wdOptions = {
    hostname: process.env.APPIUM_HOST || 'localhost',
    port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
    logLevel: 'info',
    capabilities
};

async function runTest() {
    const driver = await remote(wdOptions);
    try {
        // Usa `accessibilityId` si está disponible para mayor fiabilidad
        const batteryItem = await driver.$('//*[@text="Battery"]');
        await batteryItem.click();
        
        // Puedes agregar más interacciones aquí si es necesario
    } catch (error) {
        console.error('Error during test:', error);
    } finally {
        await driver.pause(1000);
        await driver.deleteSession();
    }
}

runTest().catch(console.error);
