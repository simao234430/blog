module.exports = {
  "props": [
    {
      "name": "dark",
      "type": "boolean",
      "default": "false",
      "source": "themeable",
      "description": {
        "en": "Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).",
        "zh-Hans": ""
      }
    },
    {
      "name": "light",
      "type": "boolean",
      "default": "false",
      "source": "themeable",
      "description": {
        "en": "Applies the light theme variant to the component.",
        "zh-Hans": ""
      }
    },
    {
      "name": "root",
      "type": "boolean",
      "default": "false",
      "source": "v-theme-provider",
      "description": {
        "en": "Use the current value of `$vuetify.theme.dark` as opposed to the provided one.",
        "zh-Hans": ""
      }
    }
  ],
  "mixins": [],
  "slots": [],
  "events": [],
  "functions": [],
  "name": "v-theme-provider",
  "sass": [],
  "component": true
}