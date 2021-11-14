module.exports = {
  "props": [
    {
      "name": "accordion",
      "type": "boolean",
      "default": "false",
      "source": "v-expansion-panels",
      "description": {
        "en": "Removes the margin around open panels",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "active-class",
      "type": "string",
      "default": "'v-item--active'",
      "source": "base-item-group",
      "description": {
        "en": "The **active-class** applied to children when they are activated.",
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
      "source": "v-expansion-panels",
      "description": {
        "en": "Disables the entire expansion-panel",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "flat",
      "type": "boolean",
      "default": "false",
      "source": "v-expansion-panels",
      "description": {
        "en": "Removes the expansion-panel's elevation and borders",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "focusable",
      "type": "boolean",
      "default": "false",
      "source": "v-expansion-panels",
      "description": {
        "en": "Makes the expansion-panel headers focusable",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "hover",
      "type": "boolean",
      "default": "false",
      "source": "v-expansion-panels",
      "description": {
        "en": "Applies a background-color shift on hover to expansion panel headers",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "inset",
      "type": "boolean",
      "default": "false",
      "source": "v-expansion-panels",
      "description": {
        "en": "Makes the expansion-panel open with a inset style",
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
      "name": "mandatory",
      "type": "boolean",
      "default": "false",
      "source": "base-item-group",
      "description": {
        "en": "Forces a value to always be selected (if available).",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "max",
      "type": [
        "number",
        "string"
      ],
      "default": "undefined",
      "source": "base-item-group",
      "description": {
        "en": "Sets a maximum number of selections that can be made.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "multiple",
      "type": "boolean",
      "default": "false",
      "source": "base-item-group",
      "description": {
        "en": "Allow multiple selections. The **value** prop must be an _array_.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "popout",
      "type": "boolean",
      "default": "false",
      "source": "v-expansion-panels",
      "description": {
        "en": "Makes the expansion-panel open with an popout style",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "readonly",
      "type": "boolean",
      "default": "false",
      "source": "v-expansion-panels",
      "description": {
        "en": "Makes the entire expansion-panel read only.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "tag",
      "type": "string",
      "default": "'div'",
      "source": "base-item-group",
      "description": {
        "en": "Specify a custom tag used on the root element.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "tile",
      "type": "boolean",
      "default": "false",
      "source": "v-expansion-panels",
      "description": {
        "en": "Removes the border-radius",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "value",
      "type": "any",
      "default": "undefined",
      "source": "proxyable",
      "description": {
        "en": "Controls the opened/closed state of content in the expansion-panel. Corresponds to a zero-based index of the currently opened content. If the `multiple` prop (previously `expand` in 1.5.x) is used then it is an array of numbers where each entry corresponds to the index of the opened content.  The index order is not relevant.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "mixins": [
    "proxyable",
    "themeable"
  ],
  "slots": [],
  "events": [],
  "functions": [],
  "name": "v-expansion-panels",
  "sass": [],
  "component": true
}