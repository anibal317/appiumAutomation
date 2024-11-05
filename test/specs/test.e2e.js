import BatteryPage from '../pageobjects/batteryPage.js'

describe('My Login application', () => {
  it('Battery', async () => {
    await BatteryPage.openBatterySettings();

    const batteryPercentage = await BatteryPage.getBatteryPercentage();

    console.log(`Battery percentage: ${batteryPercentage}`);
    await BatteryPage.openBatterySaver();
  });
})

