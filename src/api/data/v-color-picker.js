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
      "name": "disabled",
      "type": "boolean",
      "default": "false",
      "source": "v-color-picker",
      "description": {
        "en": "Disables picker",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "flat",
      "type": "boolean",
      "default": "false",
      "source": "v-color-picker",
      "description": {
        "en": "Removes elevation",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "hide-canvas",
      "type": "boolean",
      "default": "false",
      "source": "v-color-picker",
      "description": {
        "en": "Hides canvas",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "hide-inputs",
      "type": "boolean",
      "default": "false",
      "source": "v-color-picker",
      "description": {
        "en": "Hides inputs",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "hide-mode-switch",
      "type": "boolean",
      "default": "false",
      "source": "v-color-picker",
      "description": {
        "en": "Hides mode switch",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "hide-sliders",
      "type": "boolean",
      "default": "false",
      "source": "v-color-picker",
      "description": {
        "en": "Hides sliders",
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
      "name": "mode",
      "type": "string",
      "default": "'rgba'",
      "source": "v-color-picker",
      "description": {
        "en": "Sets mode of inputs. Available modes are 'rgba', 'hsla', and 'hexa'. Can be synced with the `.sync` modifier.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "show-swatches",
      "type": "boolean",
      "default": "false",
      "source": "v-color-picker",
      "description": {
        "en": "Displays color swatches",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "swatches",
      "type": "array",
      "default": "undefined",
      "source": "v-color-picker",
      "description": {
        "en": "Sets the available color swatches to select from - This prop only accepts rgba hex strings",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "update:mode",
      "value": "string",
      "description": {
        "en": "Selected mode",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "functions": [],
  "name": "v-color-picker",
  "sass": [
    {
      "name": "$color-picker-border-radius",
      "default": "$border-radius-root !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$color-picker-checkerboard",
      "default": "url(data:image/png;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$color-picker-swatch-color-width",
      "default": "45px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$color-picker-swatch-color-height",
      "default": "18px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$color-picker-swatch-color-margin",
      "default": "2px 4px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$color-picker-swatch-color-border-radius",
      "default": "2px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$color-picker-swatch-margin-bottom",
      "default": "10px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$color-picker-swatches-border-radius",
      "default": "8px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$color-picker-canvas-dot-size",
      "default": "15px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$color-picker-canvas-dot-box-shadow",
      "default": "0px 0px 0px 1.5px rgba(255, 255, 255, 1), inset 0px 0px 1px 1.5px rgba(0, 0, 0, 0.3) !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$color-picker-canvas-dot-disabled-box-shadow",
      "default": "0px 0px 0px 1.5px rgba(255, 255, 255, 0.7), inset 0px 0px 1px 1.5px rgba(0, 0, 0, 0.3) !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$color-picker-controls-padding",
      "default": "16px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$color-picker-edit-margin-top",
      "default": "24px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$color-picker-input-height",
      "default": "28px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$color-picker-input-font-size",
      "default": "0.75rem !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$color-picker-input-margin",
      "default": "8px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$color-picker-input-margin-bottom",
      "default": "8px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$color-picker-slider-height",
      "default": "10px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$color-picker-slider-border-radius",
      "default": "$color-picker-slider-height / 2 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$color-picker-preview-dot-size",
      "default": "30px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$color-picker-preview-dot-margin",
      "default": "24px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$color-picker-hue-margin-bottom",
      "default": "24px !default;",
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