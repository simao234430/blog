module.exports = {
  "props": [
    {
      "name": "accordion",
      "type": "boolean",
      "default": "false",
      "source": "v-expansion-panels",
      "description": {
        "en": "Removes the margin around open panels",
        "zh-Hans": ""
      }
    },
    {
      "name": "active-class",
      "type": "string",
      "default": "'v-item--active'",
      "source": "base-item-group",
      "description": {
        "en": "The **active-class** applied to children when they are activated.",
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
      "source": "v-expansion-panels",
      "description": {
        "en": "Disables the entire expansion-panel",
        "zh-Hans": ""
      }
    },
    {
      "name": "flat",
      "type": "boolean",
      "default": "false",
      "source": "v-expansion-panels",
      "description": {
        "en": "Removes the expansion-panel's elevation and borders",
        "zh-Hans": ""
      }
    },
    {
      "name": "focusable",
      "type": "boolean",
      "default": "false",
      "source": "v-expansion-panels",
      "description": {
        "en": "Makes the expansion-panel headers focusable",
        "zh-Hans": ""
      }
    },
    {
      "name": "hover",
      "type": "boolean",
      "default": "false",
      "source": "v-expansion-panels",
      "description": {
        "en": "Applies a background-color shift on hover to expansion panel headers",
        "zh-Hans": ""
      }
    },
    {
      "name": "inset",
      "type": "boolean",
      "default": "false",
      "source": "v-expansion-panels",
      "description": {
        "en": "Makes the expansion-panel open with a inset style",
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
      "name": "mandatory",
      "type": "boolean",
      "default": "false",
      "source": "base-item-group",
      "description": {
        "en": "Forces a value to always be selected (if available).",
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
    {
      "name": "multiple",
      "type": "boolean",
      "default": "false",
      "source": "base-item-group",
      "description": {
        "en": "Allow multiple selections. The **value** prop must be an _array_.",
        "zh-Hans": ""
      }
    },
    {
      "name": "popout",
      "type": "boolean",
      "default": "false",
      "source": "v-expansion-panels",
      "description": {
        "en": "Makes the expansion-panel open with an popout style",
        "zh-Hans": ""
      }
    },
    {
      "name": "readonly",
      "type": "boolean",
      "default": "false",
      "source": "v-expansion-panels",
      "description": {
        "en": "Makes the entire expansion-panel read only.",
        "zh-Hans": ""
      }
    },
    {
      "name": "tag",
      "type": "string",
      "default": "'div'",
      "source": "base-item-group",
      "description": {
        "en": "Specify a custom tag used on the root element.",
        "zh-Hans": ""
      }
    },
    {
      "name": "tile",
      "type": "boolean",
      "default": "false",
      "source": "v-expansion-panels",
      "description": {
        "en": "Removes the border-radius",
        "zh-Hans": ""
      }
    },
    {
      "name": "value",
      "type": "any",
      "default": "undefined",
      "source": "proxyable",
      "description": {
        "en": "Controls the opened/closed state of content in the expansion-panel. Corresponds to a zero-based index of the currently opened content. If the `multiple` prop (previously `expand` in 1.5.x) is used then it is an array of numbers where each entry corresponds to the index of the opened content.  The index order is not relevant.",
        "zh-Hans": ""
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