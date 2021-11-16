module.exports = {
  "props": [
    {
      "name": "active-class",
      "type": "string",
      "default": "'v-slide-item--active'",
      "source": "base-item-group",
      "description": {
        "en": "The **active-class** applied to children when they are activated.",
        "zh-Hans": ""
      }
    },
    {
      "name": "center-active",
      "type": "boolean",
      "default": "false",
      "source": "base-slide-group",
      "description": {
        "en": "Forces the selected chip to be centered",
        "zh-Hans": ""
      }
    },
    {
      "name": "color",
      "type": "string",
      "default": "undefined",
      "source": "colorable",
      "description": {
        "en": "Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).",
        "zh-Hans": ""
      }
    },
    {
      "name": "column",
      "type": "boolean",
      "default": "false",
      "source": "v-chip-group",
      "description": {
        "en": "Remove horizontal pagination and wrap items as needed",
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
      "name": "mobile-breakpoint",
      "type": [
        "number",
        "string"
      ],
      "source": "mobile",
      "description": {
        "en": "Sets the designated mobile breakpoint for the component.",
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
      "name": "next-icon",
      "type": "string",
      "default": "'$next'",
      "source": "base-slide-group",
      "description": {
        "en": "Specify the icon to use for the next icon",
        "zh-Hans": ""
      }
    },
    {
      "name": "prev-icon",
      "type": "string",
      "default": "'$prev'",
      "source": "base-slide-group",
      "description": {
        "en": "Specify the icon to use for the prev icon",
        "zh-Hans": ""
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
      "name": "value",
      "type": "any",
      "default": "undefined",
      "source": "proxyable",
      "description": {
        "en": "The designated model value for the component.",
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    }
  ],
  "events": [
    {
      "name": "change",
      "value": "any[] | any",
      "description": {
        "en": "Emitted when the component value is changed by user interaction",
        "zh-Hans": ""
      }
    }
  ],
  "functions": [],
  "name": "v-chip-group",
  "sass": [],
  "component": true
}