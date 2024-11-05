import { $ } from '@wdio/globals';

class BatteryPage {
   async openBatterySettings() {
        const batteryOption = await $('(//android.widget.RelativeLayout[@resource-id="com.android.settings:id/text_frame"])[5]');
        await batteryOption.waitForDisplayed({ timeout: 5000 });
        return batteryOption.click();
    }

    async getBatteryPercentage() {
        const batteryPercentage = await $('//android.widget.TextView[contains(@resource-id, "usage_summary")]');
        await batteryPercentage.waitForDisplayed({ timeout: 5000 });
        return await batteryPercentage.getText();
    }

    async openBatterySaver() {
        const batterySaver = await $('//android.widget.TextView[@text="Battery Saver" or @text="Ahorro de batería"]');
        await batterySaver.waitForDisplayed({ timeout: 5000 });
        return batterySaver.click();
    }
}

export default new BatteryPage();
