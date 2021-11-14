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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "ampm-in-title",
      "type": "boolean",
      "default": "false",
      "source": "v-time-picker",
      "description": {
        "en": "Place AM/PM switch in title, not near the clock.",
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
      "name": "disabled",
      "type": "boolean",
      "default": "false",
      "source": "v-time-picker",
      "description": {
        "en": "disables picker",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "flat",
      "type": "boolean",
      "default": "false",
      "source": "picker",
      "description": {
        "en": "Removes  elevation",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "format",
      "type": "string",
      "default": "'ampm'",
      "source": "v-time-picker",
      "description": {
        "en": "Defines the format of a time displayed in picker. Available options are `ampm` and `24hr`.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "full-width",
      "type": "boolean",
      "default": "false",
      "source": "picker",
      "description": {
        "en": "Forces 100% width",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "header-color",
      "type": "string",
      "default": "undefined",
      "source": "picker",
      "description": {
        "en": "Defines the header color. If not specified it will use the color defined by <code>color</code> prop or the default picker color",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "landscape",
      "type": "boolean",
      "default": "false",
      "source": "picker",
      "description": {
        "en": "Orients picker horizontal",
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
      "name": "max",
      "type": "string",
      "default": "undefined",
      "source": "v-time-picker",
      "description": {
        "en": "Maximum allowed time",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "min",
      "type": "string",
      "default": "undefined",
      "source": "v-time-picker",
      "description": {
        "en": "Minimum allowed time",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "no-title",
      "type": "boolean",
      "default": "false",
      "source": "picker",
      "description": {
        "en": "Hide the picker title",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "readonly",
      "type": "boolean",
      "default": "false",
      "source": "v-time-picker",
      "description": {
        "en": "Puts picker in readonly state",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "scrollable",
      "type": "boolean",
      "default": "false",
      "source": "v-time-picker",
      "description": {
        "en": "Allows changing hour/minute with mouse scroll",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "use-seconds",
      "type": "boolean",
      "default": "false",
      "source": "v-time-picker",
      "description": {
        "en": "Toggles the use of seconds in picker",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "value",
      "type": "any",
      "default": "undefined",
      "source": "v-time-picker",
      "description": {
        "en": "Time picker model (ISO 8601 format, 24hr hh:mm)",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "events": [
    {
      "name": "change",
      "value": "string",
      "description": {
        "en": "Emitted when the time selection is done (when user changes the minute for HH:MM picker and the second for HH:MM:SS picker",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "click:hour",
      "value": "string",
      "description": {
        "en": "Emitted when user selects the hour",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "click:minute",
      "value": "string",
      "description": {
        "en": "Emitted when user selects the minute",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "click:second",
      "value": "string",
      "description": {
        "en": "Emitted when user selects the second",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "input",
      "value": "string",
      "description": {
        "en": "The updated bound model",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "update:period",
      "value": "string",
      "description": {
        "en": "Emitted when user clicks the AM/PM button",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "functions": [],
  "name": "v-time-picker",
  "sass": [
    {
      "name": "$time-picker-title-color",
      "default": "map-get($shades, 'white') !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$time-picker-title-btn-height",
      "default": "70px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$time-picker-landscape-title-btn-height",
      "default": "55px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$time-picker-ampm-title-margin-start",
      "default": "8px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$time-picker-ampm-title-margin-bottom",
      "default": "6px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$time-picker-ampm-title-margin",
      "default": "0 0 $time-picker-ampm-title-margin-bottom $time-picker-ampm-title-margin-start !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$time-picker-ampm-title-margin-rtl",
      "default": "0 $time-picker-ampm-title-margin-start $time-picker-ampm-title-margin-bottom 0 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$time-picker-ampm-title-font-size",
      "default": "16px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$time-picker-landscape-ampm-title-margin",
      "default": "16px 0 0 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$time-picker-number-font-size",
      "default": "16px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$time-picker-indicator-size",
      "default": "40px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$time-picker-clock-padding",
      "default": "10px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$time-picker-clock-max-width",
      "default": "290px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$time-picker-clock-hand-height",
      "default": "calc(50% - 4px) !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$time-picker-clock-hand-width",
      "default": "2px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$time-picker-clock-hand-left",
      "default": "calc(50% - 1px) !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$time-picker-clock-center-size",
      "default": "8px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$time-picker-clock-end-size",
      "default": "10px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$time-picker-clock-end-top",
      "default": "-4px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$time-picker-clock-inner-hand-height",
      "default": "14px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$time-picker-clock-inner-offset",
      "default": "27px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$time-picker-ampm-padding",
      "default": "10px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$time-picker-clock-end-border-width",
      "default": "2px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$time-picker-clock-end-border-style",
      "default": "solid !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$time-picker-clock-end-border-color",
      "default": "inherit !default;",
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