import BatteryPage from '../pageobjects/batteryPage.js'

describe('Test', () => {
  it('Battery', async () => {

    await BatteryPage.openBatterySettings();

    const batteryPercentage = await BatteryPage.getBatteryPercentage();

    console.log(`Battery percentage: ${batteryPercentage}`);
    await BatteryPage.openBatterySaver();
  });

  it('Battery2', async () => {
    await BatteryPage.backBtn()
    await BatteryPage.backBtn()

    await BatteryPage.openBatterySettings();

    const batteryPercentage = await BatteryPage.getBatteryPercentage();

    console.log(`Battery percentage: ${batteryPercentage}`);
    await BatteryPage.openBatterySaver();

  });
})

