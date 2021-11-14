module.exports = {
  "props": [
    {
      "name": "active-class",
      "type": "string",
      "default": "'v-slide-item--active'",
      "source": "base-item-group",
      "description": {
        "en": "The **active-class** applied to children when they are activated.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "center-active",
      "type": "boolean",
      "default": "false",
      "source": "base-slide-group",
      "description": {
        "en": "Forces the selected chip to be centered",
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
      "name": "column",
      "type": "boolean",
      "default": "false",
      "source": "v-chip-group",
      "description": {
        "en": "Remove horizontal pagination and wrap items as needed",
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
      "name": "mobile-breakpoint",
      "type": [
        "number",
        "string"
      ],
      "source": "mobile",
      "description": {
        "en": "Sets the designated mobile breakpoint for the component.",
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
      "name": "next-icon",
      "type": "string",
      "default": "'$next'",
      "source": "base-slide-group",
      "description": {
        "en": "Specify the icon to use for the next icon",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "prev-icon",
      "type": "string",
      "default": "'$prev'",
      "source": "base-slide-group",
      "description": {
        "en": "Specify the icon to use for the prev icon",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "show-arrows",
      "type": [
        "boolean",
        "string"
      ],
      "default": "undefined",
      "source": "base-slide-group",
      "description": {
        "en": "Force the display of the pagination arrows",
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
    "base-item-group",
    "base-slide-group",
    "colorable",
    "mobile",
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
        "en": "Emitted when the component value is changed by user interaction",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "functions": [],
  "name": "v-chip-group",
  "sass": [
    {
      "name": "$chip-group-content-padding",
      "default": "4px 0 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$chip-group-margin",
      "default": "4px 8px 4px 0 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$chip-group-no-color-focus-opacity",
      "default": ".32 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$chip-group-no-color-opacity",
      "default": ".22 !default;",
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