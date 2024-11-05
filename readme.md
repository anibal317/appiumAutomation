run the command to set the project from scratch
```
$ npx appium-installer
```

install Appium Server
install appium drivers
install appium plugin

execute appoium doctor

exit the instalation

https://webdriver.io/docs/bestpractices

capabilities example:
{
  "appium:automationName": "UiAutomator2",
  "appium:appPackage": "com.android.settings",
  "appium:appActivity": ".Settings",
  "appium:deviceName": "device",
  "platformName": "Android"
}


list all packages from the device
```
adb shell pm list packages
```

