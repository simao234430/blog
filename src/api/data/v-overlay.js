module.exports = {
  "props": [
    {
      "name": "absolute",
      "type": "boolean",
      "default": "false",
      "source": "v-overlay",
      "description": {
        "en": "Applies **position: absolute** to the component.",
        "zh-Hans": ""
      }
    },
    {
      "name": "color",
      "type": "string",
      "default": "'#212121'",
      "source": "colorable",
      "description": {
        "en": "Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).",
        "zh-Hans": ""
      }
    },
    {
      "name": "dark",
      "type": "boolean",
      "default": "true",
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
      "name": "opacity",
      "type": [
        "number",
        "string"
      ],
      "default": 0.46,
      "source": "v-overlay",
      "description": {
        "en": "Sets the overlay opacity",
        "zh-Hans": ""
      }
    },
    {
      "name": "value",
      "type": "any",
      "default": true,
      "source": "toggleable",
      "description": {
        "en": "Controls whether the component is visible or hidden.",
        "zh-Hans": ""
      }
    },
    {
      "name": "z-index",
      "type": [
        "number",
        "string"
      ],
      "default": 5,
      "source": "v-overlay",
      "description": {
        "en": "The z-index used for the component",
        "zh-Hans": ""
      }
    }
  ],
  "mixins": [
    "colorable",
    "themeable",
    "toggleable"
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
  "name": "v-overlay",
  "sass": [],
  "component": true
}