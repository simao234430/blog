module.exports = {
  "props": [
    {
      "name": "allowed-hours",
      "type": [
        "function",
        "array"
      ],
      "default": "undefined",
      "source": "v-time-picker",
      "description": {
        "en": "Restricts which hours can be selected",
        "zh-Hans": ""
      }
    },
    {
      "name": "allowed-minutes",
      "type": [
        "function",
        "array"
      ],
      "default": "undefined",
      "source": "v-time-picker",
      "description": {
        "en": "Restricts which minutes can be selected",
        "zh-Hans": ""
      }
    },
    {
      "name": "allowed-seconds",
      "type": [
        "function",
        "array"
      ],
      "default": "undefined",
      "source": "v-time-picker",
      "description": {
        "en": "Restricts which seconds can be selected",
        "zh-Hans": ""
      }
    },
    {
      "name": "ampm-in-title",
      "type": "boolean",
      "default": "false",
      "source": "v-time-picker",
      "description": {
        "en": "Place AM/PM switch in title, not near the clock.",
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
      "name": "disabled",
      "type": "boolean",
      "default": "false",
      "source": "v-time-picker",
      "description": {
        "en": "disables picker",
        "zh-Hans": ""
      }
    },
    {
      "name": "elevation",
      "type": [
        "number",
        "string"
      ],
      "default": "undefined",
      "source": "elevatable",
      "description": {
        "en": "Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).",
        "zh-Hans": ""
      }
    },
    {
      "name": "flat",
      "type": "boolean",
      "default": "false",
      "source": "picker",
      "description": {
        "en": "Removes  elevation",
        "zh-Hans": ""
      }
    },
    {
      "name": "format",
      "type": "string",
      "default": "'ampm'",
      "source": "v-time-picker",
      "description": {
        "en": "Defines the format of a time displayed in picker. Available options are `ampm` and `24hr`.",
        "zh-Hans": ""
      }
    },
    {
      "name": "full-width",
      "type": "boolean",
      "default": "false",
      "source": "picker",
      "description": {
        "en": "Forces 100% width",
        "zh-Hans": ""
      }
    },
    {
      "name": "header-color",
      "type": "string",
      "default": "undefined",
      "source": "picker",
      "description": {
        "en": "Defines the header color. If not specified it will use the color defined by <code>color</code> prop or the default picker color",
        "zh-Hans": ""
      }
    },
    {
      "name": "landscape",
      "type": "boolean",
      "default": "false",
      "source": "picker",
      "description": {
        "en": "Orients picker horizontal",
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
      "name": "max",
      "type": "string",
      "default": "undefined",
      "source": "v-time-picker",
      "description": {
        "en": "Maximum allowed time",
        "zh-Hans": ""
      }
    },
    {
      "name": "min",
      "type": "string",
      "default": "undefined",
      "source": "v-time-picker",
      "description": {
        "en": "Minimum allowed time",
        "zh-Hans": ""
      }
    },
    {
      "name": "no-title",
      "type": "boolean",
      "default": "false",
      "source": "picker",
      "description": {
        "en": "Hide the picker title",
        "zh-Hans": ""
      }
    },
    {
      "name": "readonly",
      "type": "boolean",
      "default": "false",
      "source": "v-time-picker",
      "description": {
        "en": "Puts picker in readonly state",
        "zh-Hans": ""
      }
    },
    {
      "name": "scrollable",
      "type": "boolean",
      "default": "false",
      "source": "v-time-picker",
      "description": {
        "en": "Allows changing hour/minute with mouse scroll",
        "zh-Hans": ""
      }
    },
    {
      "name": "use-seconds",
      "type": "boolean",
      "default": "false",
      "source": "v-time-picker",
      "description": {
        "en": "Toggles the use of seconds in picker",
        "zh-Hans": ""
      }
    },
    {
      "name": "value",
      "type": "any",
      "default": "undefined",
      "source": "v-time-picker",
      "description": {
        "en": "Time picker model (ISO 8601 format, 24hr hh:mm)",
        "zh-Hans": ""
      }
    },
    {
      "name": "width",
      "type": [
        "number",
        "string"
      ],
      "default": 290,
      "source": "picker",
      "description": {
        "en": "Width of the picker",
        "zh-Hans": ""
      }
    }
  ],
  "mixins": [
    "colorable",
    "colorable",
    "colorable",
    "elevatable",
    "picker",
    "themeable"
  ],
  "slots": [
    {
      "name": "default",
      "description": {
        "en": "Displayed below the clock, can be used for example for adding action button (`OK` and `Cancel`)",
        "zh-Hans": ""
      }
    }
  ],
  "events": [
    {
      "name": "change",
      "value": "string",
      "description": {
        "en": "Emitted when the time selection is done (when user changes the minute for HH:MM picker and the second for HH:MM:SS picker",
        "zh-Hans": ""
      }
    },
    {
      "name": "click:hour",
      "value": "string",
      "description": {
        "en": "Emitted when user selects the hour",
        "zh-Hans": ""
      }
    },
    {
      "name": "click:minute",
      "value": "string",
      "description": {
        "en": "Emitted when user selects the minute",
        "zh-Hans": ""
      }
    },
    {
      "name": "click:second",
      "value": "string",
      "description": {
        "en": "Emitted when user selects the second",
        "zh-Hans": ""
      }
    },
    {
      "name": "input",
      "value": "string",
      "description": {
        "en": "The updated bound model",
        "zh-Hans": ""
      }
    },
    {
      "name": "update:period",
      "value": "string",
      "description": {
        "en": "Emitted when user clicks the AM/PM button",
        "zh-Hans": ""
      }
    }
  ],
  "functions": [],
  "name": "v-time-picker",
  "sass": [],
  "component": true
}