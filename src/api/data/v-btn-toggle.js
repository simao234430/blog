module.exports = {
  "props": [
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
      "name": "background-color",
      "type": "string",
      "default": "undefined",
      "source": "v-btn-toggle",
      "description": {
        "en": "Changes the background-color for the component.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "borderless",
      "type": "boolean",
      "default": "false",
      "source": "v-btn-toggle",
      "description": {
        "en": "Removes the group's border.",
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
      "name": "dense",
      "type": "boolean",
      "default": "false",
      "source": "v-btn-toggle",
      "description": {
        "en": "Reduces the button size and padding.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "group",
      "type": "boolean",
      "default": "false",
      "source": "v-btn-toggle",
      "description": {
        "en": "Generally used in [v-toolbar](/components/toolbars) and [v-app-bar](/components/app-bars). Removes background color, border and increases space between the buttons",
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
      "name": "rounded",
      "type": "boolean",
      "default": "false",
      "source": "v-btn-toggle",
      "description": {
        "en": "Round edge buttons",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "shaped",
      "type": "boolean",
      "default": "false",
      "source": "v-btn-toggle",
      "description": {
        "en": "Applies a large border radius on the top left and bottom right of the card.",
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
      "source": "v-btn-toggle",
      "description": {
        "en": "Removes the component's border-radius.",
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
        "en": "The designated model value for the component.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "mixins": [
    "button-group",
    "colorable",
    "proxyable",
    "themeable"
  ],
  "slots": [
    {
      "name": "default",
      "description": {
        "en": "The default Vue slot.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "events": [
    {
      "name": "change",
      "value": "any[] | any",
      "description": {
        "en": "Emitted when the input is changed by user interaction",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "functions": [],
  "name": "v-btn-toggle",
  "sass": [
    {
      "name": "$btn-toggle-border-radius",
      "default": "$border-radius-root !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$btn-toggle-shaped-border-radius",
      "default": "24px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$btn-toggle-btn-height",
      "default": "48px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$btn-toggle-btn-padding",
      "default": "0 12px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$btn-toggle-btn-width",
      "default": "48px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$btn-toggle-btn-opacity",
      "default": "0.8 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$btn-toggle-round-border-radius",
      "default": "24px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$btn-toggle-dense-btn-padding",
      "default": "0 8px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$btn-toggle-group-btn-margin",
      "default": "4px !default;",
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