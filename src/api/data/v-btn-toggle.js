module.exports = {
  "props": [
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
      "name": "background-color",
      "type": "string",
      "default": "undefined",
      "source": "v-btn-toggle",
      "description": {
        "en": "Changes the background-color for the component.",
        "zh-Hans": ""
      }
    },
    {
      "name": "borderless",
      "type": "boolean",
      "default": "false",
      "source": "v-btn-toggle",
      "description": {
        "en": "Removes the group's border.",
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
      "name": "dense",
      "type": "boolean",
      "default": "false",
      "source": "v-btn-toggle",
      "description": {
        "en": "Reduces the button size and padding.",
        "zh-Hans": ""
      }
    },
    {
      "name": "group",
      "type": "boolean",
      "default": "false",
      "source": "v-btn-toggle",
      "description": {
        "en": "Generally used in [v-toolbar](/components/toolbars) and [v-app-bar](/components/app-bars). Removes background color, border and increases space between the buttons",
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
      "name": "rounded",
      "type": "boolean",
      "default": "false",
      "source": "v-btn-toggle",
      "description": {
        "en": "Round edge buttons",
        "zh-Hans": ""
      }
    },
    {
      "name": "shaped",
      "type": "boolean",
      "default": "false",
      "source": "v-btn-toggle",
      "description": {
        "en": "Applies a large border radius on the top left and bottom right of the card.",
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
      "source": "v-btn-toggle",
      "description": {
        "en": "Removes the component's border-radius.",
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
        "zh-Hans": ""
      }
    }
  ],
  "events": [
    {
      "name": "change",
      "value": "any[] | any",
      "description": {
        "en": "Emitted when the input is changed by user interaction",
        "zh-Hans": ""
      }
    }
  ],
  "functions": [],
  "name": "v-btn-toggle",
  "sass": [],
  "component": true
}