module.exports = {
  "props": [
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
      "name": "day-format",
      "type": "function",
      "default": "null",
      "source": "calendar-base",
      "description": {
        "en": "Formats day of the month string that appears in a day to a specified locale",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "end",
      "type": [
        "string",
        "number",
        "date"
      ],
      "default": "undefined",
      "source": "calendar-base",
      "description": {
        "en": "The ending date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "hide-header",
      "type": "boolean",
      "default": "false",
      "source": "calendar-base",
      "description": {
        "en": "If the header at the top of the `day` view should be visible.",
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
      "name": "locale",
      "type": "string",
      "default": "undefined",
      "source": "localable",
      "description": {
        "en": "The locale of the calendar.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "locale-first-day-of-year",
      "type": [
        "string",
        "number"
      ],
      "default": 0,
      "source": "v-calendar-weekly",
      "description": {
        "en": "Sets the day that determines the first week of the year, starting with 0 for **Sunday**. For ISO 8601 this should be 4.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "min-weeks",
      "type": "any",
      "default": 1,
      "source": "v-calendar-weekly",
      "description": {
        "en": "The minimum number of weeks to display in the `month` or `week` view.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "month-format",
      "type": "function",
      "default": "null",
      "source": "v-calendar-weekly",
      "description": {
        "en": "Formats month string that appears in a day to specified locale",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "now",
      "type": "string",
      "default": "undefined",
      "source": "times",
      "description": {
        "en": "Override the day & time which is considered now. This is in the format of `YYYY-MM-DD hh:mm:ss`. The calendar is styled according to now.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "short-months",
      "type": "boolean",
      "default": "true",
      "source": "v-calendar-weekly",
      "description": {
        "en": "Whether the short versions of a month should be used (Jan vs January).",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "short-weekdays",
      "type": "boolean",
      "default": "true",
      "source": "calendar-base",
      "description": {
        "en": "Whether the short versions of a weekday should be used (Mon vs Monday).",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "show-month-on-first",
      "type": "boolean",
      "default": "true",
      "source": "v-calendar-weekly",
      "description": {
        "en": "Whether the name of the month should be displayed on the first day of the month.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "show-week",
      "type": "boolean",
      "default": "false",
      "source": "v-calendar-weekly",
      "description": {
        "en": "Whether week numbers should be displayed when using the `month` view.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "start",
      "type": [
        "string",
        "number",
        "date"
      ],
      "default": "2021-11-09",
      "source": "calendar-base",
      "description": {
        "en": "The starting date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "weekday-format",
      "type": "function",
      "default": "null",
      "source": "calendar-base",
      "description": {
        "en": "Formats day of the week string that appears in the header to specified locale",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "weekdays",
      "type": [
        "array",
        "string"
      ],
      "default": [
        0,
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "source": "calendar-base",
      "description": {
        "en": "Specifies which days of the week to display. To display Monday through Friday only, a value of `[1, 2, 3, 4, 5]` can be used. To display a week starting on Monday a value of `[1, 2, 3, 4, 5, 6, 0]` can be used.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "mixins": [
    "colorable",
    "localable",
    "mouse",
    "themeable",
    "times"
  ],
  "slots": [],
  "events": [],
  "functions": [],
  "name": "v-calendar-weekly",
  "sass": [],
  "component": true
}