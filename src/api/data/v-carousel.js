module.exports = {
  "props": [
    {
      "name": "active-class",
      "type": "string",
      "default": "'v-window-item--active'",
      "source": "base-item-group",
      "description": {
        "en": "The **active-class** applied to children when they are activated.",
        "zh-Hans": ""
      }
    },
    {
      "name": "continuous",
      "type": "boolean",
      "default": "true",
      "source": "v-window",
      "description": {
        "en": "Determines whether carousel is continuous",
        "zh-Hans": ""
      }
    },
    {
      "name": "cycle",
      "type": "boolean",
      "default": "false",
      "source": "v-carousel",
      "description": {
        "en": "Determines if the carousel should cycle through images.",
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
      "name": "delimiter-icon",
      "type": "string",
      "default": "'$delimiter'",
      "source": "v-carousel",
      "description": {
        "en": "Sets icon for carousel delimiter",
        "zh-Hans": ""
      }
    },
    {
      "name": "height",
      "type": [
        "number",
        "string"
      ],
      "default": 500,
      "source": "v-carousel",
      "description": {
        "en": "Sets the height for the component",
        "zh-Hans": ""
      }
    },
    {
      "name": "hide-delimiter-background",
      "type": "boolean",
      "default": "false",
      "source": "v-carousel",
      "description": {
        "en": "Hides the bottom delimiter background.",
        "zh-Hans": ""
      }
    },
    {
      "name": "hide-delimiters",
      "type": "boolean",
      "default": "false",
      "source": "v-carousel",
      "description": {
        "en": "Hides the carousel's bottom delimiters.",
        "zh-Hans": ""
      }
    },
    {
      "name": "interval",
      "type": [
        "number",
        "string"
      ],
      "default": 6000,
      "source": "v-carousel",
      "description": {
        "en": "The duration between image cycles. Requires the **cycle** prop.",
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
      "default": "true",
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
      "name": "next-icon",
      "type": [
        "boolean",
        "string"
      ],
      "default": "$next",
      "source": "v-window",
      "description": {
        "en": "The displayed icon for forcing pagination to the next item.",
        "zh-Hans": ""
      }
    },
    {
      "name": "prev-icon",
      "type": [
        "boolean",
        "string"
      ],
      "default": "$prev",
      "source": "v-window",
      "description": {
        "en": "The displayed icon for forcing pagination to the previous item.",
        "zh-Hans": ""
      }
    },
    {
      "name": "progress",
      "type": "boolean",
      "default": "false",
      "source": "v-carousel",
      "description": {
        "en": "Displays a carousel progress bar. Requires the **cycle** prop and **interval**.",
        "zh-Hans": ""
      }
    },
    {
      "name": "progress-color",
      "type": "string",
      "default": "undefined",
      "source": "v-carousel",
      "description": {
        "en": "Applies specified color to progress bar.",
        "zh-Hans": ""
      }
    },
    {
      "name": "reverse",
      "type": "boolean",
      "default": "false",
      "source": "v-window",
      "description": {
        "en": "Reverse the normal transition direction.",
        "zh-Hans": ""
      }
    },
    {
      "name": "show-arrows",
      "type": "boolean",
      "default": "true",
      "source": "v-window",
      "description": {
        "en": "Displays arrows for next/previous navigation.",
        "zh-Hans": ""
      }
    },
    {
      "name": "show-arrows-on-hover",
      "type": "boolean",
      "default": "false",
      "source": "v-window",
      "description": {
        "en": "Displays navigation arrows only when the carousel is hovered over.",
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
      "name": "touch",
      "type": "object",
      "default": "undefined",
      "source": "v-window",
      "description": {
        "en": "Provide a custom **left** and **right** function when swiped left or right.",
        "zh-Hans": ""
      }
    },
    {
      "name": "touchless",
      "type": "boolean",
      "default": "false",
      "source": "v-window",
      "description": {
        "en": "Disable touch support.",
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
    },
    {
      "name": "vertical",
      "type": "boolean",
      "default": "false",
      "source": "v-window",
      "description": {
        "en": "Uses a vertical transition when changing windows.",
        "zh-Hans": ""
      }
    },
    {
      "name": "vertical-delimiters",
      "type": "string",
      "default": "undefined",
      "source": "v-carousel",
      "description": {
        "en": "Displays carousel delimiters vertically.",
        "zh-Hans": ""
      }
    }
  ],
  "mixins": [
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
    },
    {
      "name": "next",
      "props": {
        "attrs": "{ aria-label: string }",
        "on": "{ click: eventHandler }"
      },
      "source": "v-window",
      "description": {
        "en": "Slot displaying the arrow switching to the next item",
        "zh-Hans": ""
      }
    },
    {
      "name": "prev",
      "props": {
        "attrs": "{ aria-label: string }",
        "on": "{ click: eventHandler }"
      },
      "source": "v-window",
      "description": {
        "en": "Slot displaying the arrow switching to the previous item",
        "zh-Hans": ""
      }
    }
  ],
  "events": [
    {
      "name": "change",
      "value": "number",
      "description": {
        "en": "Emitted when the component value is changed by user interaction",
        "zh-Hans": ""
      }
    }
  ],
  "functions": [],
  "name": "v-carousel",
  "sass": [],
  "component": true
}