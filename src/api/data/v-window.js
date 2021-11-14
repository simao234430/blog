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
      "default": "false",
      "source": "v-window",
      "description": {
        "en": "If `true`, window will \"wrap around\" from the last item to the first, and from the first item to the last",
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
      "name": "next-icon",
      "type": [
        "boolean",
        "string"
      ],
      "default": "$next",
      "source": "v-window",
      "description": {
        "en": "Icon used for the \"next\" button if `show-arrows` is `true`",
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
        "en": "Icon used for the \"prev\" button if `show-arrows` is `true`",
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
      "default": "false",
      "source": "v-window",
      "description": {
        "en": "Display the \"next\" and \"prev\" buttons",
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
        "en": "Display the \"next\" and \"prev\" buttons on hover. `show-arrows` MUST ALSO be set.",
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
      "example": {
        "left": "Function",
        "right": "Function"
      },
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
  "name": "v-window",
  "sass": [
    {
      "name": "$window-transition",
      "default": ".3s cubic-bezier(.25, .8, .50, 1) !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$window-controls-margin",
      "default": "0 16px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$window-controls-top",
      "default": "calc(50% - 20px) !default;",
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