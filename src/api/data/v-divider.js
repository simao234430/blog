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
      "name": "inset",
      "type": "boolean",
      "default": "false",
      "source": "v-divider",
      "description": {
        "en": "Adds indentation (72px) for **normal** dividers, reduces max height for **vertical**.",
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
      "name": "vertical",
      "type": "boolean",
      "default": "false",
      "source": "v-divider",
      "description": {
        "en": "Displays dividers vertically",
        "zh-Hans": ""
      }
    }
  ],
  "mixins": [],
  "slots": [],
  "events": [],
  "functions": [],
  "name": "v-divider",
  "sass": [],
  "component": true
}