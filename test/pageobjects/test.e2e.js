import BatteryPage from './batteryPage.js'
import allureReporter from '@wdio/allure-reporter'

describe('Testing Settings', () => {
  it('Battery on Settings 2', async () => {
    allureReporter.addFeature('Test 2')

    await console.log("### test #####");
    await BatteryPage.openBatterySettings();

    const batteryPercentage = await BatteryPage.getBatteryPercentage();

    console.log(`Battery percentage: ${batteryPercentage}`);
    await BatteryPage.openBatterySaver();
  });
})

