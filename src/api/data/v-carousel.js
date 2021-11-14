module.exports = {
  "props": [
    {
      "name": "active-class",
      "type": "string",
      "default": "'v-window-item--active'",
      "source": "base-item-group",
      "description": {
        "en": "The **active-class** applied to children when they are activated.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "continuous",
      "type": "boolean",
      "default": "true",
      "source": "v-window",
      "description": {
        "en": "Determines whether carousel is continuous",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "cycle",
      "type": "boolean",
      "default": "false",
      "source": "v-carousel",
      "description": {
        "en": "Determines if the carousel should cycle through images.",
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
      "name": "delimiter-icon",
      "type": "string",
      "default": "'$delimiter'",
      "source": "v-carousel",
      "description": {
        "en": "Sets icon for carousel delimiter",
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
      "default": 500,
      "source": "v-carousel",
      "description": {
        "en": "Sets the height for the component",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "hide-delimiter-background",
      "type": "boolean",
      "default": "false",
      "source": "v-carousel",
      "description": {
        "en": "Hides the bottom delimiter background.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "hide-delimiters",
      "type": "boolean",
      "default": "false",
      "source": "v-carousel",
      "description": {
        "en": "Hides the carousel's bottom delimiters.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
      "default": "true",
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
      "name": "next-icon",
      "type": [
        "boolean",
        "string"
      ],
      "default": "$next",
      "source": "v-window",
      "description": {
        "en": "The displayed icon for forcing pagination to the next item.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "progress",
      "type": "boolean",
      "default": "false",
      "source": "v-carousel",
      "description": {
        "en": "Displays a carousel progress bar. Requires the **cycle** prop and **interval**.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "progress-color",
      "type": "string",
      "default": "undefined",
      "source": "v-carousel",
      "description": {
        "en": "Applies specified color to progress bar.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "reverse",
      "type": "boolean",
      "default": "false",
      "source": "v-window",
      "description": {
        "en": "Reverse the normal transition direction.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "show-arrows",
      "type": "boolean",
      "default": "true",
      "source": "v-window",
      "description": {
        "en": "Displays arrows for next/previous navigation.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "show-arrows-on-hover",
      "type": "boolean",
      "default": "false",
      "source": "v-window",
      "description": {
        "en": "Displays navigation arrows only when the carousel is hovered over.",
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
      "name": "touch",
      "type": "object",
      "default": "undefined",
      "source": "v-window",
      "description": {
        "en": "Provide a custom **left** and **right** function when swiped left or right.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "touchless",
      "type": "boolean",
      "default": "false",
      "source": "v-window",
      "description": {
        "en": "Disable touch support.",
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
    },
    {
      "name": "vertical",
      "type": "boolean",
      "default": "false",
      "source": "v-window",
      "description": {
        "en": "Uses a vertical transition when changing windows.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "vertical-delimiters",
      "type": "string",
      "default": "undefined",
      "source": "v-carousel",
      "description": {
        "en": "Displays carousel delimiters vertically.",
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
  "slots": [
    {
      "name": "default",
      "description": {
        "en": "The default Vue slot.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "events": [
    {
      "name": "change",
      "value": "number",
      "description": {
        "en": "Emitted when the component value is changed by user interaction",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "functions": [],
  "name": "v-carousel",
  "sass": [
    {
      "name": "$carousel-controls-bg",
      "default": "rgba(0, 0, 0, .3) !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$carousel-controls-size",
      "default": "50px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$carousel-dot-margin",
      "default": "0 8px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$carousel-dot-inactive-opacity",
      "default": ".5 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$carousel-dot-active-opacity",
      "default": "1 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$carousel-dot-hover-opacity",
      "default": ".8 !default;",
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