module.exports = {
  "props": [
    {
      "name": "align-top",
      "type": "boolean",
      "default": "false",
      "source": "v-timeline",
      "description": {
        "en": "Align caret and dot of timeline items to the top",
        "zh-Hans": ""
      }
    },
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
      "name": "dense",
      "type": "boolean",
      "default": "false",
      "source": "v-timeline",
      "description": {
        "en": "Hide opposite slot content, and position all items to one side of timeline",
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
      "name": "reverse",
      "type": "boolean",
      "default": "false",
      "source": "v-timeline",
      "description": {
        "en": "Reverse direction of timeline items",
        "zh-Hans": ""
      }
    }
  ],
  "mixins": [
    "themeable"
  ],
  "slots": [
    {
      "name": "default",
      "description": {
        "en": "The default Vue slot.",
        "zh-Hans": ""
      }
    }
  ],
  "events": [],
  "functions": [],
  "name": "v-timeline",
  "sass": [],
  "component": true
}