module.exports = {
  "props": [
    {
      "name": "color",
      "type": "string",
      "default": "undefined",
      "source": "v-simple-checkbox",
      "description": {
        "en": "Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "dark",
      "type": "boolean",
      "default": "false",
      "source": "v-simple-checkbox",
      "description": {
        "en": "Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "disabled",
      "type": "boolean",
      "default": "false",
      "source": "v-simple-checkbox",
      "description": {
        "en": "Disables simple checkbox.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "indeterminate",
      "type": "boolean",
      "default": "false",
      "source": "v-simple-checkbox",
      "description": {
        "en": "Sets an indeterminate state for the simple checkbox.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "indeterminate-icon",
      "type": "string",
      "default": "'$checkboxIndeterminate'",
      "source": "v-simple-checkbox",
      "description": {
        "en": "The icon used when in an indeterminate state.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "light",
      "type": "boolean",
      "default": "false",
      "source": "v-simple-checkbox",
      "description": {
        "en": "Applies the light theme variant to the component.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "off-icon",
      "type": "string",
      "default": "'$checkboxOff'",
      "source": "v-simple-checkbox",
      "description": {
        "en": "The icon used when inactive.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "on-icon",
      "type": "string",
      "default": "'$checkboxOn'",
      "source": "v-simple-checkbox",
      "description": {
        "en": "The icon used when active.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "ripple",
      "type": "boolean",
      "default": "true",
      "source": "v-simple-checkbox",
      "description": {
        "en": "Applies the [v-ripple](/directives/ripple) directive.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "value",
      "type": "boolean",
      "default": "false",
      "source": "v-simple-checkbox",
      "description": {
        "en": "A boolean value that represents whether the simple checkbox is checked.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "mixins": [],
  "slots": [],
  "events": [
    {
      "name": "input",
      "value": "Event",
      "description": {
        "en": "The updated bound model",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "functions": [],
  "name": "v-simple-checkbox",
  "sass": [],
  "component": true
}