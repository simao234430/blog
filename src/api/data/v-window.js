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
      "default": "false",
      "source": "v-window",
      "description": {
        "en": "If `true`, window will \"wrap around\" from the last item to the first, and from the first item to the last",
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
      "name": "next-icon",
      "type": [
        "boolean",
        "string"
      ],
      "default": "$next",
      "source": "v-window",
      "description": {
        "en": "Icon used for the \"next\" button if `show-arrows` is `true`",
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
        "en": "Icon used for the \"prev\" button if `show-arrows` is `true`",
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
      "default": "false",
      "source": "v-window",
      "description": {
        "en": "Display the \"next\" and \"prev\" buttons",
        "zh-Hans": ""
      }
    },
    {
      "name": "show-arrows-on-hover",
      "type": "boolean",
      "default": "false",
      "source": "v-window",
      "description": {
        "en": "Display the \"next\" and \"prev\" buttons on hover. `show-arrows` MUST ALSO be set.",
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
      "example": {
        "left": "Function",
        "right": "Function"
      },
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
  "name": "v-window",
  "sass": [],
  "component": true
}