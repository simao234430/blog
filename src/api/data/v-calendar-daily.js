module.exports = {
  "props": [
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
      "name": "day-format",
      "type": "function",
      "default": "null",
      "source": "calendar-base",
      "description": {
        "en": "Formats day of the month string that appears in a day to a specified locale",
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
    {
      "name": "first-interval",
      "type": [
        "number",
        "string"
      ],
      "default": 0,
      "source": "calendar-with-intervals",
      "description": {
        "en": "The first interval to display in the `day` view. If `intervalMinutes` is set to 60 and this is set to 9 the first time in the view is 9am.",
        "zh-Hans": ""
      }
    },
    {
      "name": "first-time",
      "type": [
        "number",
        "string",
        "object"
      ],
      "default": "undefined",
      "source": "calendar-with-intervals",
      "description": {
        "en": "The first time to display in the `day` view. If specified, this overwrites any `firstInterval` value specified. This can be the number of minutes since midnight, a string in the format of `HH:mm`, or an object with number properties hour and minute.",
        "zh-Hans": ""
      }
    },
    {
      "name": "hide-header",
      "type": "boolean",
      "default": "false",
      "source": "calendar-base",
      "description": {
        "en": "If the header at the top of the `day` view should be visible.",
        "zh-Hans": ""
      }
    },
    {
      "name": "interval-count",
      "type": [
        "number",
        "string"
      ],
      "default": 24,
      "source": "calendar-with-intervals",
      "description": {
        "en": "The number of intervals to display in the `day` view.",
        "zh-Hans": ""
      }
    },
    {
      "name": "interval-format",
      "type": "function",
      "default": "null",
      "source": "calendar-with-intervals",
      "description": {
        "en": "Formats time of day string that appears in the interval gutter of the `day` and `week` view to specified locale",
        "zh-Hans": ""
      }
    },
    {
      "name": "interval-height",
      "type": [
        "number",
        "string"
      ],
      "default": 48,
      "source": "calendar-with-intervals",
      "description": {
        "en": "The height of an interval in pixels in the `day` view.",
        "zh-Hans": ""
      }
    },
    {
      "name": "interval-minutes",
      "type": [
        "number",
        "string"
      ],
      "default": 60,
      "source": "calendar-with-intervals",
      "description": {
        "en": "The number of minutes the intervals are in the `day` view. A common interval is 60 minutes so the intervals are an hour.",
        "zh-Hans": ""
      }
    },
    {
      "name": "interval-style",
      "type": "function",
      "default": "null",
      "source": "calendar-with-intervals",
      "description": {
        "en": "Returns CSS styling to apply to the interval.",
        "zh-Hans": ""
      }
    },
    {
      "name": "interval-width",
      "type": [
        "number",
        "string"
      ],
      "default": 60,
      "source": "calendar-with-intervals",
      "description": {
        "en": "The width of the interval gutter on the left side in the `day` view.",
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
      "name": "locale",
      "type": "string",
      "default": "undefined",
      "source": "localable",
      "description": {
        "en": "The locale of the calendar.",
        "zh-Hans": ""
      }
    },
    {
      "name": "max-days",
      "type": "number",
      "default": 7,
      "source": "calendar-with-intervals",
      "description": {
        "en": "The maximum number of days to display in the custom calendar if an `end` day is not set.",
        "zh-Hans": ""
      }
    },
    {
      "name": "now",
      "type": "string",
      "default": "undefined",
      "source": "times",
      "description": {
        "en": "Override the day & time which is considered now. This is in the format of `YYYY-MM-DD hh:mm:ss`. The calendar is styled according to now.",
        "zh-Hans": ""
      }
    },
    {
      "name": "short-intervals",
      "type": "boolean",
      "default": "true",
      "source": "calendar-with-intervals",
      "description": {
        "en": "If true, the intervals in the `day` view will be 9 AM as opposed to 09:00 AM",
        "zh-Hans": ""
      }
    },
    {
      "name": "short-weekdays",
      "type": "boolean",
      "default": "true",
      "source": "calendar-base",
      "description": {
        "en": "Whether the short versions of a weekday should be used (Mon vs Monday).",
        "zh-Hans": ""
      }
    },
    {
      "name": "show-interval-label",
      "type": "function",
      "default": "null",
      "source": "calendar-with-intervals",
      "description": {
        "en": "Checks if a given day and time should be displayed in the interval gutter of the `day` view.",
        "zh-Hans": ""
      }
    },
    {
      "name": "start",
      "type": [
        "string",
        "number",
        "date"
      ],
      "default": "2021-11-16",
      "source": "calendar-base",
      "description": {
        "en": "The starting date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar.",
        "zh-Hans": ""
      }
    },
    {
      "name": "weekday-format",
      "type": "function",
      "default": "null",
      "source": "calendar-base",
      "description": {
        "en": "Formats day of the week string that appears in the header to specified locale",
        "zh-Hans": ""
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
        "zh-Hans": ""
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
  "name": "v-calendar-daily",
  "sass": [],
  "component": true
}