module.exports = {
  "props": [
    {
      "name": "categories",
      "type": [
        "array",
        "string"
      ],
      "default": "undefined",
      "source": "calendar-with-events",
      "description": {
        "en": "Specifies what categories to display in the `category` view. This controls the order of the categories as well. If the calendar uses events any categories specified in those events not specified in this value are dynamically rendered in the view unless `category-hide-dynamic` is true.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "category-days",
      "type": [
        "number",
        "string"
      ],
      "default": 1,
      "source": "calendar-with-events",
      "description": {
        "en": "The number of days to render in the `category` view.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "category-for-invalid",
      "type": "string",
      "default": "undefined",
      "source": "calendar-with-events",
      "description": {
        "en": "The category to place events in that have invalid categories. A category is invalid when it is not a string. By default events without a category are not displayed until this value is specified.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "category-hide-dynamic",
      "type": "boolean",
      "default": "false",
      "source": "calendar-with-events",
      "description": {
        "en": "Sets whether categories specified in an event should be hidden if it's not defined in `categories`.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "category-show-all",
      "type": "boolean",
      "default": "false",
      "source": "calendar-with-events",
      "description": {
        "en": "Set whether the `category` view should show all defined `categories` even if there are no events for a category.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "category-text",
      "type": [
        "string",
        "function"
      ],
      "default": "undefined",
      "source": "calendar-with-events",
      "description": {
        "en": "If categories is a list of objects, you can use this to determine what property to print out as the category text on the calendar. You can provide a function to do some logic or just define the prop name. It's similar to item-text on v-select",
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
      "name": "event-category",
      "type": [
        "string",
        "function"
      ],
      "default": "category",
      "source": "calendar-with-events",
      "description": {
        "en": "Set property of *event*'s category. Instead of a property a function can be given which takes an event and returns the category.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "event-color",
      "type": [
        "string",
        "function"
      ],
      "default": "primary",
      "source": "calendar-with-events",
      "description": {
        "en": "A background color for all events or a function which accepts an event object passed to the calendar to return a color.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "event-end",
      "type": "string",
      "default": "'end'",
      "source": "calendar-with-events",
      "description": {
        "en": "Set property of *event*'s end timestamp.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "event-height",
      "type": "number",
      "default": 20,
      "source": "calendar-with-events",
      "description": {
        "en": "The height of an event in pixels in the `month` view and at the top of the `day` views.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "event-margin-bottom",
      "type": "number",
      "default": 1,
      "source": "calendar-with-events",
      "description": {
        "en": "Margin bottom for event",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "event-more",
      "type": "boolean",
      "default": "true",
      "source": "calendar-with-events",
      "description": {
        "en": "Whether the more 'button' is displayed on a calendar with too many events in a given day. It will say something like '5 more' and when clicked generates a `click:more` event.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "event-more-text",
      "type": "string",
      "default": "'$vuetify.calendar.moreEvents'",
      "source": "calendar-with-events",
      "description": {
        "en": "The text to display in the more 'button' given the number of hidden events.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "event-name",
      "type": [
        "string",
        "function"
      ],
      "default": "name",
      "source": "calendar-with-events",
      "description": {
        "en": "Set property of *event*'s displayed name, or a function which accepts an event object passed to the calendar as the first argument and a flag signalling whether the name is for a timed event (true) or an event over a day.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "event-overlap-mode",
      "type": [
        "string",
        "function"
      ],
      "default": "stack",
      "source": "calendar-with-events",
      "description": {
        "en": "One of `stack`, `column`, or a custom render function",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "event-overlap-threshold",
      "type": [
        "string",
        "number"
      ],
      "default": 60,
      "source": "calendar-with-events",
      "description": {
        "en": "A value in minutes that's used to determine whether two timed events should be placed in column beside each other or should be treated as slightly overlapping events.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "event-ripple",
      "type": [
        "boolean",
        "object"
      ],
      "default": "undefined",
      "source": "calendar-with-events",
      "description": {
        "en": "Applies the `v-ripple` directive.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "event-start",
      "type": "string",
      "default": "'start'",
      "source": "calendar-with-events",
      "description": {
        "en": "Set property of *event*'s start timestamp.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "event-text-color",
      "type": [
        "string",
        "function"
      ],
      "default": "white",
      "source": "calendar-with-events",
      "description": {
        "en": "A text color for all events or a function which accepts an event object passed to the calendar to return a color.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "event-timed",
      "type": [
        "string",
        "function"
      ],
      "default": "timed",
      "source": "calendar-with-events",
      "description": {
        "en": "If Dates or milliseconds are used as the start or end timestamp of an event, this prop can be a string to a property on the event that is truthy if the event is a timed event or a function which takes the event and returns a truthy value if the event is a timed event.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "events",
      "type": "array",
      "default": [],
      "source": "calendar-with-events",
      "description": {
        "en": "An array of event objects with a property for a start timestamp and optionally a name and end timestamp. If an end timestamp is not given, the value of start will be used. If no name is given, you must provide an implementation for the `event` slot.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "first-interval",
      "type": [
        "number",
        "string"
      ],
      "default": 0,
      "source": "v-calendar",
      "description": {
        "en": "The first interval to display in the `day` view. If `intervalMinutes` is set to 60 and this is set to 9 the first time in the view is 9am.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
      "source": "v-calendar",
      "description": {
        "en": "The first time to display in the `day` view. If specified, this overwrites any `firstInterval` value specified. This can be the number of minutes since midnight, a string in the format of `HH:mm`, or an object with number properties hour and minute.",
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
      "name": "interval-count",
      "type": [
        "number",
        "string"
      ],
      "default": 24,
      "source": "v-calendar",
      "description": {
        "en": "The number of intervals to display in the `day` view.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "interval-format",
      "type": "function",
      "default": "null",
      "source": "v-calendar",
      "description": {
        "en": "Formats time of day string that appears in the interval gutter of the `day` and `week` view to specified locale",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "interval-height",
      "type": [
        "number",
        "string"
      ],
      "default": 48,
      "source": "v-calendar",
      "description": {
        "en": "The height of an interval in pixels in the `day` view.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "interval-minutes",
      "type": [
        "number",
        "string"
      ],
      "default": 60,
      "source": "v-calendar",
      "description": {
        "en": "The number of minutes the intervals are in the `day` view. A common interval is 60 minutes so the intervals are an hour.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "interval-style",
      "type": "function",
      "default": "null",
      "source": "v-calendar",
      "description": {
        "en": "Returns CSS styling to apply to the interval.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "interval-width",
      "type": [
        "number",
        "string"
      ],
      "default": 60,
      "source": "v-calendar",
      "description": {
        "en": "The width of the interval gutter on the left side in the `day` view.",
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
      "source": "v-calendar",
      "description": {
        "en": "Sets the day that determines the first week of the year, starting with 0 for **Sunday**. For ISO 8601 this should be 4.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "max-days",
      "type": "number",
      "default": 7,
      "source": "v-calendar",
      "description": {
        "en": "The maximum number of days to display in the custom calendar if an `end` day is not set.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "min-weeks",
      "type": "any",
      "default": 1,
      "source": "v-calendar",
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
      "source": "v-calendar",
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
      "name": "short-intervals",
      "type": "boolean",
      "default": "true",
      "source": "v-calendar",
      "description": {
        "en": "If true, the intervals in the `day` view will be 9 AM as opposed to 09:00 AM",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "short-months",
      "type": "boolean",
      "default": "true",
      "source": "v-calendar",
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
      "name": "show-interval-label",
      "type": "function",
      "default": "null",
      "source": "v-calendar",
      "description": {
        "en": "Checks if a given day and time should be displayed in the interval gutter of the `day` view.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "show-month-on-first",
      "type": "boolean",
      "default": "true",
      "source": "v-calendar",
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
      "source": "v-calendar",
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
      "name": "type",
      "type": "string",
      "default": "'month'",
      "source": "calendar-with-events",
      "description": {
        "en": "A string which is one of `month`, `week`, `day`, `4day`, `custom-weekly`, `custom-daily`, and `category`. The custom types look at the `start` and `end` dates passed to the component as opposed to the `value`.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "value",
      "type": [
        "string",
        "number",
        "date"
      ],
      "default": "undefined",
      "source": "calendar-with-events",
      "description": {
        "en": "A date in the format of `YYYY-MM-DD` which determines what span of time for the calendar.",
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
  "slots": [
    {
      "name": "category",
      "props": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ],
        "category": "string | null"
      },
      "description": {
        "en": "The content placed in a category header for the `category` type. The category variable is null for events with invalid (non-string) categories.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "day",
      "props": {
        "outside": "boolean",
        "index": "number",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ],
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean"
      },
      "description": {
        "en": "The content that is placed in a `week` or `month` view. The day & time object is passed through this slots scope.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "day-body",
      "props": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number | false",
        "timeDelta": "(time: string | number | {hour: number, minute: number}): number | false",
        "minutesToPixels": "(minutes: number): number",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ]
      },
      "description": {
        "en": "The content that is placed in a `day` view in the scrollable interval container. The day & time object is passed through this slots scope.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "day-header",
      "props": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number | false",
        "timeDelta": "(time: string | number | {hour: number, minute: number}): number | false",
        "minutesToPixels": "(minutes: number): number",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ]
      },
      "description": {
        "en": "The content that is placed in a `day` view in the top container. The day & time object is passed through this slots scope.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "day-label",
      "props": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean"
      },
      "description": {
        "en": "The content that is placed in the day of the month space in the `custom-weekly` or `month` view. The day & time object is passed through this slots scope.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "day-label-header",
      "props": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean"
      },
      "description": {
        "en": "The content that is placed in the day of the month space in the `week`, `day`, `4day`, or `custom-daily` view. The day & time object is passed through this slots scope.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "day-month",
      "props": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean"
      },
      "description": {
        "en": "The content that is placed in the month space in the `week` or `month` view. The day & time object is passed through this slots scope.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "event",
      "props": {
        "event": "any",
        "eventParsed": {
          "input": "any",
          "start": {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          },
          "startIdentifier": "number",
          "startTimestampIdentifier": "number",
          "end": {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          },
          "endIdentifier": "number",
          "endTimestampIdentifier": "number",
          "allDay": "boolean",
          "index": "number",
          "category": "string"
        },
        "day": {
          "outside": "boolean",
          "index": "number",
          "week": [
            {
              "date": "string",
              "time": "string",
              "year": "number",
              "month": "number",
              "day": "number",
              "hour": "number",
              "minute": "number",
              "weekday": "number",
              "hasDay": "boolean",
              "hasTime": "boolean",
              "past": "boolean",
              "present": "boolean",
              "future": "boolean"
            }
          ],
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean"
        },
        "outside": "boolean",
        "start": "boolean",
        "end": "boolean",
        "timed": "boolean",
        "singleline": "boolean",
        "overlapsNoon": "boolean",
        "formatTime": "(time: VTimestamp, ampm: boolean): string",
        "timeSummary": "(): string",
        "eventSummary": "(): string"
      },
      "description": {
        "en": "The content placed in an event. This ignores the `event-name` prop.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "interval",
      "props": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number | false",
        "timeDelta": "(time: string | number | {hour: number, minute: number}): number | false",
        "minutesToPixels": "(minutes: number): number",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ]
      },
      "description": {
        "en": "The content that is placed in the interval space in the `day` view. The day & time object is passed through this slots scope.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "events": [
    {
      "name": "change",
      "value": {
        "start": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean"
        },
        "end": {
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean"
        }
      },
      "description": {
        "en": "The range of days displayed on the calendar changed. This is triggered on initialization. The event passed is an object with start and end date objects.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "click:date",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number | false",
        "timeDelta": "(time: string | number | {hour: number, minute: number}): number | false",
        "minutesToPixels": "(minutes: number): number",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ]
      },
      "description": {
        "en": "The click event on the day of the month link. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "click:day",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number | false",
        "timeDelta": "(time: string | number | {hour: number, minute: number}): number | false",
        "minutesToPixels": "(minutes: number): number",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ]
      },
      "description": {
        "en": "The click event on a day. The event passed is the day object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "click:day-category",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ],
        "category": "string | null"
      },
      "description": {
        "en": "The click event on a day in the `category` view. The event passed is the day object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "click:event",
      "value": {
        "event": "any",
        "eventParsed": {
          "input": "any",
          "start": {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          },
          "startIdentifier": "number",
          "startTimestampIdentifier": "number",
          "end": {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          },
          "endIdentifier": "number",
          "endTimestampIdentifier": "number",
          "allDay": "boolean",
          "index": "number",
          "category": "string"
        },
        "day": {
          "outside": "boolean",
          "index": "number",
          "week": [
            {
              "date": "string",
              "time": "string",
              "year": "number",
              "month": "number",
              "day": "number",
              "hour": "number",
              "minute": "number",
              "weekday": "number",
              "hasDay": "boolean",
              "hasTime": "boolean",
              "past": "boolean",
              "present": "boolean",
              "future": "boolean"
            }
          ],
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean"
        },
        "outside": "boolean",
        "start": "boolean",
        "end": "boolean",
        "timed": "boolean",
        "singleline": "boolean",
        "overlapsNoon": "boolean",
        "formatTime": "(time: VTimestamp, ampm: boolean): string",
        "timeSummary": "(): string",
        "eventSummary": "(): string"
      },
      "description": {
        "en": "The click event on a specific event. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "click:interval",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean"
      },
      "description": {
        "en": "The click event at a specific interval label in the `day` view. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "click:more",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean"
      },
      "description": {
        "en": "The click event on the `X more` button on views with too many events in a day.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "click:time",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number | false",
        "timeDelta": "(time: string | number | {hour: number, minute: number}): number | false",
        "minutesToPixels": "(minutes: number): number",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ]
      },
      "description": {
        "en": "The click event at a specific time in the `day` view. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "click:time-category",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number | false",
        "timeDelta": "(time: string | number | {hour: number, minute: number}): number | false",
        "minutesToPixels": "(minutes: number): number",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ],
        "category": "string | null"
      },
      "description": {
        "en": "The click event at a specific time in the `category` view. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "contextmenu:date",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number | false",
        "timeDelta": "(time: string | number | {hour: number, minute: number}): number | false",
        "minutesToPixels": "(minutes: number): number",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ]
      },
      "description": {
        "en": "The right-click event on the day of the month link. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "contextmenu:day",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number | false",
        "timeDelta": "(time: string | number | {hour: number, minute: number}): number | false",
        "minutesToPixels": "(minutes: number): number",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ]
      },
      "description": {
        "en": "The right-click event on a day. The event passed is the day object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "contextmenu:day-category",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ],
        "category": "string | null"
      },
      "description": {
        "en": "The right-click event on a day in the `category` view. The event passed is the day object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "contextmenu:event",
      "value": {
        "event": "any",
        "eventParsed": {
          "input": "any",
          "start": {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          },
          "startIdentifier": "number",
          "startTimestampIdentifier": "number",
          "end": {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          },
          "endIdentifier": "number",
          "endTimestampIdentifier": "number",
          "allDay": "boolean",
          "index": "number",
          "category": "string"
        },
        "day": {
          "outside": "boolean",
          "index": "number",
          "week": [
            {
              "date": "string",
              "time": "string",
              "year": "number",
              "month": "number",
              "day": "number",
              "hour": "number",
              "minute": "number",
              "weekday": "number",
              "hasDay": "boolean",
              "hasTime": "boolean",
              "past": "boolean",
              "present": "boolean",
              "future": "boolean"
            }
          ],
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean"
        },
        "outside": "boolean",
        "start": "boolean",
        "end": "boolean",
        "timed": "boolean",
        "singleline": "boolean",
        "overlapsNoon": "boolean",
        "formatTime": "(time: VTimestamp, ampm: boolean): string",
        "timeSummary": "(): string",
        "eventSummary": "(): string"
      },
      "description": {
        "en": "The right-click event on an event. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "contextmenu:interval",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean"
      },
      "description": {
        "en": "The right-click event at a specific interval label in the `day` view. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "contextmenu:time",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number | false",
        "timeDelta": "(time: string | number | {hour: number, minute: number}): number | false",
        "minutesToPixels": "(minutes: number): number",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ]
      },
      "description": {
        "en": "The right-click event at a specific time in the `day` view. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "contextmenu:time-category",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number | false",
        "timeDelta": "(time: string | number | {hour: number, minute: number}): number | false",
        "minutesToPixels": "(minutes: number): number",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ],
        "category": "string | null"
      },
      "description": {
        "en": "The right-click event at a specific time in the `category` view. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "input",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean"
      },
      "description": {
        "en": "An alias to the `click:date` event used to support v-model.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "mousedown:day",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number | false",
        "timeDelta": "(time: string | number | {hour: number, minute: number}): number | false",
        "minutesToPixels": "(minutes: number): number",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ]
      },
      "description": {
        "en": "The mousedown event on a day. The event passed is the day object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "mousedown:day-category",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ],
        "category": "string | null"
      },
      "description": {
        "en": "The mousedown event on a day in the `category` view. The event passed is the day object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "mousedown:event",
      "value": {
        "event": "any",
        "eventParsed": {
          "input": "any",
          "start": {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          },
          "startIdentifier": "number",
          "startTimestampIdentifier": "number",
          "end": {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          },
          "endIdentifier": "number",
          "endTimestampIdentifier": "number",
          "allDay": "boolean",
          "index": "number",
          "category": "string"
        },
        "day": {
          "outside": "boolean",
          "index": "number",
          "week": [
            {
              "date": "string",
              "time": "string",
              "year": "number",
              "month": "number",
              "day": "number",
              "hour": "number",
              "minute": "number",
              "weekday": "number",
              "hasDay": "boolean",
              "hasTime": "boolean",
              "past": "boolean",
              "present": "boolean",
              "future": "boolean"
            }
          ],
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean"
        },
        "outside": "boolean",
        "start": "boolean",
        "end": "boolean",
        "timed": "boolean",
        "singleline": "boolean",
        "overlapsNoon": "boolean",
        "formatTime": "(time: VTimestamp, ampm: boolean): string",
        "timeSummary": "(): string",
        "eventSummary": "(): string"
      },
      "description": {
        "en": "The mousedown event on an event. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "mousedown:interval",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean"
      },
      "description": {
        "en": "The mousedown event at a specific interval label in the `day` view. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "mousedown:time",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number | false",
        "timeDelta": "(time: string | number | {hour: number, minute: number}): number | false",
        "minutesToPixels": "(minutes: number): number",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ]
      },
      "description": {
        "en": "The mousedown event at a specific time in the `day` view. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "mousedown:time-category",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number | false",
        "timeDelta": "(time: string | number | {hour: number, minute: number}): number | false",
        "minutesToPixels": "(minutes: number): number",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ],
        "category": "string | null"
      },
      "description": {
        "en": "The mousedown event at a specific time in the `category` view. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "mouseenter:day",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number | false",
        "timeDelta": "(time: string | number | {hour: number, minute: number}): number | false",
        "minutesToPixels": "(minutes: number): number",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ]
      },
      "description": {
        "en": "The mouseenter event on a day. The event passed is the day object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "mouseenter:day-category",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ],
        "category": "string | null"
      },
      "description": {
        "en": "The mouseenter event on a day in the `category` view. The event passed is the day object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "mouseenter:event",
      "value": {
        "event": "any",
        "eventParsed": {
          "input": "any",
          "start": {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          },
          "startIdentifier": "number",
          "startTimestampIdentifier": "number",
          "end": {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          },
          "endIdentifier": "number",
          "endTimestampIdentifier": "number",
          "allDay": "boolean",
          "index": "number",
          "category": "string"
        },
        "day": {
          "outside": "boolean",
          "index": "number",
          "week": [
            {
              "date": "string",
              "time": "string",
              "year": "number",
              "month": "number",
              "day": "number",
              "hour": "number",
              "minute": "number",
              "weekday": "number",
              "hasDay": "boolean",
              "hasTime": "boolean",
              "past": "boolean",
              "present": "boolean",
              "future": "boolean"
            }
          ],
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean"
        },
        "outside": "boolean",
        "start": "boolean",
        "end": "boolean",
        "timed": "boolean",
        "singleline": "boolean",
        "overlapsNoon": "boolean",
        "formatTime": "(time: VTimestamp, ampm: boolean): string",
        "timeSummary": "(): string",
        "eventSummary": "(): string"
      },
      "description": {
        "en": "The mouseenter event on an event. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "mouseenter:interval",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean"
      },
      "description": {
        "en": "The mouseenter event at a specific interval label in the `day` view. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "mouseenter:time",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number | false",
        "timeDelta": "(time: string | number | {hour: number, minute: number}): number | false",
        "minutesToPixels": "(minutes: number): number",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ]
      },
      "description": {
        "en": "The mouseenter event at a specific time in the `day` view. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "mouseenter:time-category",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number | false",
        "timeDelta": "(time: string | number | {hour: number, minute: number}): number | false",
        "minutesToPixels": "(minutes: number): number",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ],
        "category": "string | null"
      },
      "description": {
        "en": "The mouseenter event at a specific time in the `category` view. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "mouseleave:day",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number | false",
        "timeDelta": "(time: string | number | {hour: number, minute: number}): number | false",
        "minutesToPixels": "(minutes: number): number",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ]
      },
      "description": {
        "en": "The mouseleave event on a day. The event passed is the day object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "mouseleave:day-category",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ],
        "category": "string | null"
      },
      "description": {
        "en": "The mouseleave event on a day in the `category` view. The event passed is the day object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "mouseleave:event",
      "value": {
        "event": "any",
        "eventParsed": {
          "input": "any",
          "start": {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          },
          "startIdentifier": "number",
          "startTimestampIdentifier": "number",
          "end": {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          },
          "endIdentifier": "number",
          "endTimestampIdentifier": "number",
          "allDay": "boolean",
          "index": "number",
          "category": "string"
        },
        "day": {
          "outside": "boolean",
          "index": "number",
          "week": [
            {
              "date": "string",
              "time": "string",
              "year": "number",
              "month": "number",
              "day": "number",
              "hour": "number",
              "minute": "number",
              "weekday": "number",
              "hasDay": "boolean",
              "hasTime": "boolean",
              "past": "boolean",
              "present": "boolean",
              "future": "boolean"
            }
          ],
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean"
        },
        "outside": "boolean",
        "start": "boolean",
        "end": "boolean",
        "timed": "boolean",
        "singleline": "boolean",
        "overlapsNoon": "boolean",
        "formatTime": "(time: VTimestamp, ampm: boolean): string",
        "timeSummary": "(): string",
        "eventSummary": "(): string"
      },
      "description": {
        "en": "The mouseleave event on an event. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "mouseleave:interval",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean"
      },
      "description": {
        "en": "The mouseleave event at a specific interval label in the `day` view. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "mouseleave:time",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number | false",
        "timeDelta": "(time: string | number | {hour: number, minute: number}): number | false",
        "minutesToPixels": "(minutes: number): number",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ]
      },
      "description": {
        "en": "The mouseleave event at a specific time in the `day` view. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "mouseleave:time-category",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number | false",
        "timeDelta": "(time: string | number | {hour: number, minute: number}): number | false",
        "minutesToPixels": "(minutes: number): number",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ],
        "category": "string | null"
      },
      "description": {
        "en": "The mouseleave event at a specific time in the `category` view. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "mousemove:day",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number | false",
        "timeDelta": "(time: string | number | {hour: number, minute: number}): number | false",
        "minutesToPixels": "(minutes: number): number",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ]
      },
      "description": {
        "en": "The mousemove event on a day. The event passed is the day object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "mousemove:day-category",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ],
        "category": "string | null"
      },
      "description": {
        "en": "The mousemove event on a day in the `category` view. The event passed is the day object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "mousemove:event",
      "value": {
        "event": "any",
        "eventParsed": {
          "input": "any",
          "start": {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          },
          "startIdentifier": "number",
          "startTimestampIdentifier": "number",
          "end": {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          },
          "endIdentifier": "number",
          "endTimestampIdentifier": "number",
          "allDay": "boolean",
          "index": "number",
          "category": "string"
        },
        "day": {
          "outside": "boolean",
          "index": "number",
          "week": [
            {
              "date": "string",
              "time": "string",
              "year": "number",
              "month": "number",
              "day": "number",
              "hour": "number",
              "minute": "number",
              "weekday": "number",
              "hasDay": "boolean",
              "hasTime": "boolean",
              "past": "boolean",
              "present": "boolean",
              "future": "boolean"
            }
          ],
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean"
        },
        "outside": "boolean",
        "start": "boolean",
        "end": "boolean",
        "timed": "boolean",
        "singleline": "boolean",
        "overlapsNoon": "boolean",
        "formatTime": "(time: VTimestamp, ampm: boolean): string",
        "timeSummary": "(): string",
        "eventSummary": "(): string"
      },
      "description": {
        "en": "The mousemove event on an event. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "mousemove:interval",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean"
      },
      "description": {
        "en": "The mousemove event at a specific interval label in the `day` view. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "mousemove:time",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number | false",
        "timeDelta": "(time: string | number | {hour: number, minute: number}): number | false",
        "minutesToPixels": "(minutes: number): number",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ]
      },
      "description": {
        "en": "The mousemove event at a specific time in the `day` view. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "mousemove:time-category",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number | false",
        "timeDelta": "(time: string | number | {hour: number, minute: number}): number | false",
        "minutesToPixels": "(minutes: number): number",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ],
        "category": "string | null"
      },
      "description": {
        "en": "The mousemove event at a specific time in the `category` view. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "mouseup:day",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number | false",
        "timeDelta": "(time: string | number | {hour: number, minute: number}): number | false",
        "minutesToPixels": "(minutes: number): number",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ]
      },
      "description": {
        "en": "The mouseup event on a day. The event passed is the day object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "mouseup:day-category",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ],
        "category": "string | null"
      },
      "description": {
        "en": "The mouseup event on a day in the `category` view. The event passed is the day object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "mouseup:event",
      "value": {
        "event": "any",
        "eventParsed": {
          "input": "any",
          "start": {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          },
          "startIdentifier": "number",
          "startTimestampIdentifier": "number",
          "end": {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          },
          "endIdentifier": "number",
          "endTimestampIdentifier": "number",
          "allDay": "boolean",
          "index": "number",
          "category": "string"
        },
        "day": {
          "outside": "boolean",
          "index": "number",
          "week": [
            {
              "date": "string",
              "time": "string",
              "year": "number",
              "month": "number",
              "day": "number",
              "hour": "number",
              "minute": "number",
              "weekday": "number",
              "hasDay": "boolean",
              "hasTime": "boolean",
              "past": "boolean",
              "present": "boolean",
              "future": "boolean"
            }
          ],
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean"
        },
        "outside": "boolean",
        "start": "boolean",
        "end": "boolean",
        "timed": "boolean",
        "singleline": "boolean",
        "overlapsNoon": "boolean",
        "formatTime": "(time: VTimestamp, ampm: boolean): string",
        "timeSummary": "(): string",
        "eventSummary": "(): string"
      },
      "description": {
        "en": "The mouseup event on an event. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "mouseup:interval",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean"
      },
      "description": {
        "en": "The mouseup event at a specific interval label in the `day` view. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "mouseup:time",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number | false",
        "timeDelta": "(time: string | number | {hour: number, minute: number}): number | false",
        "minutesToPixels": "(minutes: number): number",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ]
      },
      "description": {
        "en": "The mouseup event at a specific time in the `day` view. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "mouseup:time-category",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number | false",
        "timeDelta": "(time: string | number | {hour: number, minute: number}): number | false",
        "minutesToPixels": "(minutes: number): number",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ],
        "category": "string | null"
      },
      "description": {
        "en": "The mouseup event at a specific time in the `category` view. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "moved",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean"
      },
      "description": {
        "en": "One of the functions `next`, `prev`, and `move` was called. The event passed is the day object calculated for the movement.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "touchend:day",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number | false",
        "timeDelta": "(time: string | number | {hour: number, minute: number}): number | false",
        "minutesToPixels": "(minutes: number): number",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ]
      },
      "description": {
        "en": "The touchend event on a day. The event passed is the day object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "touchend:day-category",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ],
        "category": "string | null"
      },
      "description": {
        "en": "The touchend event on a day in the `category` view. The event passed is the day object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "touchend:event",
      "value": {
        "event": "any",
        "eventParsed": {
          "input": "any",
          "start": {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          },
          "startIdentifier": "number",
          "startTimestampIdentifier": "number",
          "end": {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          },
          "endIdentifier": "number",
          "endTimestampIdentifier": "number",
          "allDay": "boolean",
          "index": "number",
          "category": "string"
        },
        "day": {
          "outside": "boolean",
          "index": "number",
          "week": [
            {
              "date": "string",
              "time": "string",
              "year": "number",
              "month": "number",
              "day": "number",
              "hour": "number",
              "minute": "number",
              "weekday": "number",
              "hasDay": "boolean",
              "hasTime": "boolean",
              "past": "boolean",
              "present": "boolean",
              "future": "boolean"
            }
          ],
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean"
        },
        "outside": "boolean",
        "start": "boolean",
        "end": "boolean",
        "timed": "boolean",
        "singleline": "boolean",
        "overlapsNoon": "boolean",
        "formatTime": "(time: VTimestamp, ampm: boolean): string",
        "timeSummary": "(): string",
        "eventSummary": "(): string"
      },
      "description": {
        "en": "The touchend event on am view. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "touchend:interval",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean"
      },
      "description": {
        "en": "The touchend event at a specific interval label in the `day` view. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "touchend:time",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number | false",
        "timeDelta": "(time: string | number | {hour: number, minute: number}): number | false",
        "minutesToPixels": "(minutes: number): number",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ]
      },
      "description": {
        "en": "The touchend event at a specific time in the `day` view. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "touchend:time-category",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number | false",
        "timeDelta": "(time: string | number | {hour: number, minute: number}): number | false",
        "minutesToPixels": "(minutes: number): number",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ],
        "category": "string | null"
      },
      "description": {
        "en": "The touchend event at a specific time in the `category` view. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "touchmove:day",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number | false",
        "timeDelta": "(time: string | number | {hour: number, minute: number}): number | false",
        "minutesToPixels": "(minutes: number): number",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ]
      },
      "description": {
        "en": "The touchmove event on a day. The event passed is the day object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "touchmove:day-category",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ],
        "category": "string | null"
      },
      "description": {
        "en": "The touchmove event on a day in the `category` view. The event passed is the day object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "touchmove:event",
      "value": {
        "event": "any",
        "eventParsed": {
          "input": "any",
          "start": {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          },
          "startIdentifier": "number",
          "startTimestampIdentifier": "number",
          "end": {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          },
          "endIdentifier": "number",
          "endTimestampIdentifier": "number",
          "allDay": "boolean",
          "index": "number",
          "category": "string"
        },
        "day": {
          "outside": "boolean",
          "index": "number",
          "week": [
            {
              "date": "string",
              "time": "string",
              "year": "number",
              "month": "number",
              "day": "number",
              "hour": "number",
              "minute": "number",
              "weekday": "number",
              "hasDay": "boolean",
              "hasTime": "boolean",
              "past": "boolean",
              "present": "boolean",
              "future": "boolean"
            }
          ],
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean"
        },
        "outside": "boolean",
        "start": "boolean",
        "end": "boolean",
        "timed": "boolean",
        "singleline": "boolean",
        "overlapsNoon": "boolean",
        "formatTime": "(time: VTimestamp, ampm: boolean): string",
        "timeSummary": "(): string",
        "eventSummary": "(): string"
      },
      "description": {
        "en": "The touchmove event on an `event` view. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "touchmove:interval",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean"
      },
      "description": {
        "en": "The touchmove event at a specific interval label in the `day` view. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "touchmove:time",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number | false",
        "timeDelta": "(time: string | number | {hour: number, minute: number}): number | false",
        "minutesToPixels": "(minutes: number): number",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ]
      },
      "description": {
        "en": "The touchmove event at a specific time in the `day` view. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "touchmove:time-category",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number | false",
        "timeDelta": "(time: string | number | {hour: number, minute: number}): number | false",
        "minutesToPixels": "(minutes: number): number",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ],
        "category": "string | null"
      },
      "description": {
        "en": "The touchmove event at a specific time in the `category` view. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "touchstart:day",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number | false",
        "timeDelta": "(time: string | number | {hour: number, minute: number}): number | false",
        "minutesToPixels": "(minutes: number): number",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ]
      },
      "description": {
        "en": "The touchstart event on a day. The event passed is the day object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "touchstart:day-category",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ],
        "category": "string | null"
      },
      "description": {
        "en": "The touchstart event on a day in the `category` view. The event passed is the day object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "touchstart:event",
      "value": {
        "event": "any",
        "eventParsed": {
          "input": "any",
          "start": {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          },
          "startIdentifier": "number",
          "startTimestampIdentifier": "number",
          "end": {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          },
          "endIdentifier": "number",
          "endTimestampIdentifier": "number",
          "allDay": "boolean",
          "index": "number",
          "category": "string"
        },
        "day": {
          "outside": "boolean",
          "index": "number",
          "week": [
            {
              "date": "string",
              "time": "string",
              "year": "number",
              "month": "number",
              "day": "number",
              "hour": "number",
              "minute": "number",
              "weekday": "number",
              "hasDay": "boolean",
              "hasTime": "boolean",
              "past": "boolean",
              "present": "boolean",
              "future": "boolean"
            }
          ],
          "date": "string",
          "time": "string",
          "year": "number",
          "month": "number",
          "day": "number",
          "hour": "number",
          "minute": "number",
          "weekday": "number",
          "hasDay": "boolean",
          "hasTime": "boolean",
          "past": "boolean",
          "present": "boolean",
          "future": "boolean"
        },
        "outside": "boolean",
        "start": "boolean",
        "end": "boolean",
        "timed": "boolean",
        "singleline": "boolean",
        "overlapsNoon": "boolean",
        "formatTime": "(time: VTimestamp, ampm: boolean): string",
        "timeSummary": "(): string",
        "eventSummary": "(): string"
      },
      "description": {
        "en": "The touchstart event on an event` view. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "touchstart:interval",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean"
      },
      "description": {
        "en": "The touchstart event at a specific interval label in the `day` view. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "touchstart:time",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number | false",
        "timeDelta": "(time: string | number | {hour: number, minute: number}): number | false",
        "minutesToPixels": "(minutes: number): number",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ]
      },
      "description": {
        "en": "The touchstart event at a specific time in the `day` view. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "touchstart:time-category",
      "value": {
        "date": "string",
        "time": "string",
        "year": "number",
        "month": "number",
        "day": "number",
        "hour": "number",
        "minute": "number",
        "weekday": "number",
        "hasDay": "boolean",
        "hasTime": "boolean",
        "past": "boolean",
        "present": "boolean",
        "future": "boolean",
        "timeToY": "(time: string | number | {hour: number, minute: number}, clamp: boolean = false): number | false",
        "timeDelta": "(time: string | number | {hour: number, minute: number}): number | false",
        "minutesToPixels": "(minutes: number): number",
        "week": [
          {
            "date": "string",
            "time": "string",
            "year": "number",
            "month": "number",
            "day": "number",
            "hour": "number",
            "minute": "number",
            "weekday": "number",
            "hasDay": "boolean",
            "hasTime": "boolean",
            "past": "boolean",
            "present": "boolean",
            "future": "boolean"
          }
        ],
        "category": "string | null"
      },
      "description": {
        "en": "The touchstart event at a specific time in the `category` view. The event passed is the day & time object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "functions": [
    {
      "name": "checkChange",
      "signature": "(): void",
      "description": {
        "en": "Checks for change in start and end dates. Updates and emits a change event if they have changed.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "getVisibleEvents",
      "signature": "(): CalendarEventParsed[]",
      "description": {
        "en": "Returns the list of events seen on the current calendar where each element returned has the following properties:<br>- `input`: the event passed in the `events` prop.<br>- `start`: a CalendarTimestamp of the start timestamp parsed.<br>- `startIdentifier`: a number which represents the day the event starts on.<br>- `startTimestampIdentifier`: a number which represents the day and time the event starts on.<br>- `end`: a CalendarTimestamp of the end timestamp parsed.<br>- `endIdentifier`: a number which represents the day the event ends on.<br>- `endTimestampIdentifier`: a number which represents the day & time the event ends on.<br>- `allDay`: if this is an all-day event (has no time specified in the `start`/`end` on the event).<br>- `index`: the index of the event in the given array.<br>- `category`: the category of the event if the calendar type is category, otherwise false.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "minutesToPixels",
      "signature": "(minutes: number): number",
      "description": {
        "en": "Converts minutes to a pixel value on the y-axis for the `day` view. If the view is not `day` then -1 is returned.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "move",
      "signature": "(amount: number = 1): void",
      "description": {
        "en": "A generic function that moves the calendar next (if amount is positive) or previous (if amount is negative).",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "next",
      "signature": "(amount: number = 1): void",
      "description": {
        "en": "Triggers the input event with a date that would progress the calendar to the next timespan. If the type is `month` it will return a day in the next month, if the type is `4day` it will return a date 4 days after `value`/`v-model`, etc.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "parseEvent",
      "signature": "(input: CalendarEvent, index: number = 0): CalendarEventParsed",
      "description": {
        "en": "A utility function which takes an event and returns the parsed version of that event.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "parseTimestamp",
      "signature": "(input: VTimestampInput, required?: false): CalendarTimestamp | null",
      "description": {
        "en": "A utility function which takes timestamp input and returns a timestamp object.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "prev",
      "signature": "(amount: number = 1): void",
      "description": {
        "en": "Triggers the input event with a date that would progress the calendar to the previous timespan. If the type is `month` it will return a day in the previous month, if the type is `4day` it will return a date 4 days before `value`/`v-model`, etc.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "scrollToTime",
      "signature": "(time: number | string | { hour: number, minute: number }): boolean",
      "description": {
        "en": "Scrolls the scrollable area in the `day` view to the given time. If the time is not in a valid format or if the calendar is not in the `day` view then false is returned.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "timeDelta",
      "signature": "(time: number | string | { hour: number, minute: number }): number | false",
      "description": {
        "en": "Converts a time to a delta value for the `day` view. If the time is not in a valid format or if the calendar is not in the `day` view then false is returned. A delta value is typically between 0 and 1. If the time given is before the first interval then a negative number will be returned. If the time given is after the last interval than a number greater than 1 will be returned.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "timestampToDate",
      "signature": "(timestamp: CalendarTimestamp): Date",
      "description": {
        "en": "A utility function which takes timestamp and returns a Date.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "timeToY",
      "signature": "(time: number | string | { hour: number, minute: number }, clamp: boolean = true): number | false",
      "description": {
        "en": "Converts a time to a pixel value on the y-axis for the `day` view. If the time is not in a valid format or if the calendar is not in the `day` view then false is returned.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "updateTimes",
      "signature": "(): void",
      "description": {
        "en": "Updates now & today in the calendar, possibly updating the styles in the calendar.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "name": "v-calendar",
  "sass": [
    {
      "name": "$calendar-line-width",
      "default": "1px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$calendar-daily-weekday-padding",
      "default": "3px 0px 0px 0px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$calendar-daily-weekday-font-size",
      "default": "11px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$calendar-daily-day-padding",
      "default": "0px 0px 3px 0px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$calendar-daily-day-font-size",
      "default": "40px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$calendar-daily-interval-gutter-top",
      "default": "-6px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$calendar-daily-interval-gutter-width",
      "default": "4px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$calendar-daily-interval-gutter-align",
      "default": "right !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$calendar-daily-interval-gutter-line-width",
      "default": "8px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$calendar-daily-interval-gutter-font-size",
      "default": "10px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$calendar-weekly-weekday-padding",
      "default": "0px 4px 0px 4px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$calendar-weekly-weekday-font-size",
      "default": "11px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$calendar-weekly-day-padding",
      "default": "0px 0px 0px 0px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$calendar-weekly-day-label-size",
      "default": "32px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$calendar-weekly-day-label-font-size",
      "default": "12px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$calendar-weekly-day-label-margin",
      "default": "4px 0 0 0 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$calendar-weekly-day-month-left",
      "default": "36px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$calendar-weekly-weeknumber-flex-basis",
      "default": "24px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$calendar-weekly-weeknumber-padding-top",
      "default": "14.5px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$calendar-event-bottom-space",
      "default": "1px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$calendar-event-border-width",
      "default": "1px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$calendar-event-border-radius",
      "default": "$border-radius-root !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$calendar-event-font-size",
      "default": "12px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$calendar-event-line-height",
      "default": "20px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$calendar-event-right-empty",
      "default": "10px !default;",
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