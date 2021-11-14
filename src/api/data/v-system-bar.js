module.exports = {
  "props": [
    {
      "name": "absolute",
      "type": "boolean",
      "default": "false",
      "source": "positionable",
      "description": {
        "en": "Applies **position: absolute** to the component.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "app",
      "type": "boolean",
      "default": "false",
      "source": "applicationable",
      "description": {
        "en": "Designates the component as part of the application layout. Used for dynamically adjusting content sizing. Components using this prop should reside **outside** of `v-main` component to function properly. You can find more information about layouts on the [application page](/components/application). **Note:** this prop automatically applies **position: fixed** to the layout element. You can overwrite this functionality by using the `absolute` prop",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "color",
      "type": "string",
      "default": "undefined",
      "source": "colorable",
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
      "source": "themeable",
      "description": {
        "en": "Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "fixed",
      "type": "boolean",
      "default": "false",
      "source": "positionable",
      "description": {
        "en": "Applies **position: fixed** to the component.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "height",
      "type": [
        "number",
        "string"
      ],
      "default": "undefined",
      "source": "v-system-bar",
      "description": {
        "en": "Sets the height for the component.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "light",
      "type": "boolean",
      "default": "false",
      "source": "themeable",
      "description": {
        "en": "Applies the light theme variant to the component.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "lights-out",
      "type": "boolean",
      "default": "false",
      "source": "v-system-bar",
      "description": {
        "en": "Reduces the system bar opacity.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "window",
      "type": "boolean",
      "default": "false",
      "source": "v-system-bar",
      "description": {
        "en": "Increases the system bar height to 32px (24px default).",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "mixins": [
    "applicationable",
    "colorable",
    "positionable",
    "themeable"
  ],
  "slots": [],
  "events": [],
  "functions": [],
  "name": "v-system-bar",
  "sass": [
    {
      "name": "$system-bar-font-size",
      "default": "map-deep-get($headings, 'body-2', 'size') !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$system-bar-font-weight",
      "default": "map-deep-get($headings, 'body-2', 'weight') !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$system-bar-icon-font-size",
      "default": "map-deep-get($headings, 'subtitle-1', 'size') !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$system-bar-padding",
      "default": "0 8px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$system-bar-icon-margin-right",
      "default": "4px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$system-bar-window-icon-margin-right",
      "default": "8px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$system-bar-window-icon-font-size",
      "default": "map-deep-get($headings, 'h6', 'size') !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "component": true
}