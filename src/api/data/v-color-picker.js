module.exports = {
  "props": [
    {
      "name": "canvas-height",
      "type": [
        "string",
        "number"
      ],
      "default": 150,
      "source": "v-color-picker",
      "description": {
        "en": "Height of canvas",
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
      "name": "disabled",
      "type": "boolean",
      "default": "false",
      "source": "v-color-picker",
      "description": {
        "en": "Disables picker",
        "zh-Hans": ""
      }
    },
    {
      "name": "dot-size",
      "type": [
        "number",
        "string"
      ],
      "default": 10,
      "source": "v-color-picker",
      "description": {
        "en": "Changes the size of the selection dot on the canvas",
        "zh-Hans": ""
      }
    },
    {
      "name": "elevation",
      "type": [
        "number",
        "string"
      ],
      "default": "undefined",
      "source": "elevatable",
      "description": {
        "en": "Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).",
        "zh-Hans": ""
      }
    },
    {
      "name": "flat",
      "type": "boolean",
      "default": "false",
      "source": "v-color-picker",
      "description": {
        "en": "Removes elevation",
        "zh-Hans": ""
      }
    },
    {
      "name": "hide-canvas",
      "type": "boolean",
      "default": "false",
      "source": "v-color-picker",
      "description": {
        "en": "Hides canvas",
        "zh-Hans": ""
      }
    },
    {
      "name": "hide-inputs",
      "type": "boolean",
      "default": "false",
      "source": "v-color-picker",
      "description": {
        "en": "Hides inputs",
        "zh-Hans": ""
      }
    },
    {
      "name": "hide-mode-switch",
      "type": "boolean",
      "default": "false",
      "source": "v-color-picker",
      "description": {
        "en": "Hides mode switch",
        "zh-Hans": ""
      }
    },
    {
      "name": "hide-sliders",
      "type": "boolean",
      "default": "false",
      "source": "v-color-picker",
      "description": {
        "en": "Hides sliders",
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
      "name": "mode",
      "type": "string",
      "default": "'rgba'",
      "source": "v-color-picker",
      "description": {
        "en": "Sets mode of inputs. Available modes are 'rgba', 'hsla', and 'hexa'. Can be synced with the `.sync` modifier.",
        "zh-Hans": ""
      }
    },
    {
      "name": "show-swatches",
      "type": "boolean",
      "default": "false",
      "source": "v-color-picker",
      "description": {
        "en": "Displays color swatches",
        "zh-Hans": ""
      }
    },
    {
      "name": "swatches",
      "type": "array",
      "default": "undefined",
      "source": "v-color-picker",
      "description": {
        "en": "Sets the available color swatches to select from - This prop only accepts rgba hex strings",
        "zh-Hans": ""
      }
    },
    {
      "name": "swatches-max-height",
      "type": [
        "number",
        "string"
      ],
      "default": 150,
      "source": "v-color-picker",
      "description": {
        "en": "Sets the maximum height of the swatches section",
        "zh-Hans": ""
      }
    },
    {
      "name": "value",
      "type": [
        "object",
        "string"
      ],
      "default": "undefined",
      "source": "v-color-picker",
      "description": {
        "en": "Current color. This can be either a string representing a hex color, or an object representing a RGBA, HSLA, or HSVA value",
        "zh-Hans": ""
      }
    },
    {
      "name": "width",
      "type": [
        "number",
        "string"
      ],
      "default": 300,
      "source": "v-color-picker",
      "description": {
        "en": "Sets the width of the color picker",
        "zh-Hans": ""
      }
    }
  ],
  "mixins": [
    "elevatable",
    "themeable"
  ],
  "slots": [],
  "events": [
    {
      "name": "input",
      "value": "string | object",
      "description": {
        "en": "Selected color. Depending on what you passed to the `value` prop this is either a string or an object",
        "zh-Hans": ""
      }
    },
    {
      "name": "update:color",
      "value": {
        "alpha": "number",
        "hex": "string",
        "hexa": "string",
        "hsla": {
          "h": "number",
          "s": "number",
          "l": "number",
          "a": "number"
        },
        "hsva": {
          "h": "number",
          "s": "number",
          "v": "number",
          "a": "number"
        },
        "hue": "number",
        "rgba": {
          "r": "number",
          "g": "number",
          "b": "number",
          "a": "number"
        }
      },
      "description": {
        "en": "Selected color. This is the internal representation of the color, containing all values.",
        "zh-Hans": ""
      }
    },
    {
      "name": "update:mode",
      "value": "string",
      "description": {
        "en": "Selected mode",
        "zh-Hans": ""
      }
    }
  ],
  "functions": [],
  "name": "v-color-picker",
  "sass": [],
  "component": true
}