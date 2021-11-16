module.exports = {
  "props": [
    {
      "name": "active-picker",
      "type": "string",
      "default": "undefined",
      "source": "v-date-picker",
      "description": {
        "en": "Determines which picker in the date or month picker is being displayed. Allowed values: `'DATE'`, `'MONTH'`, `'YEAR'`",
        "zh-Hans": ""
      }
    },
    {
      "name": "allowed-dates",
      "type": "function",
      "default": "null",
      "source": "v-date-picker",
      "description": {
        "en": "Restricts which dates can be selected",
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
      "name": "day-format",
      "type": "function",
      "default": "null",
      "source": "v-date-picker",
      "description": {
        "en": "Allows you to customize the format of the day string that appears in the date table. Called with date (ISO 8601 **date** string) arguments.",
        "zh-Hans": ""
      }
    },
    {
      "name": "disabled",
      "type": "boolean",
      "default": "false",
      "source": "v-date-picker",
      "description": {
        "en": "Disables interaction with the picker",
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
      "name": "event-color",
      "type": [
        "array",
        "function",
        "object",
        "string"
      ],
      "default": "warning",
      "source": "v-date-picker",
      "description": {
        "en": "Sets the color for event dot. It can be string (all events will have the same color) or `object` where attribute is the event date and value is boolean/color/array of colors for specified date or `function` taking date as a parameter and returning boolean/color/array of colors for that date",
        "zh-Hans": ""
      }
    },
    {
      "name": "events",
      "type": [
        "array",
        "function",
        "object"
      ],
      "default": null,
      "source": "v-date-picker",
      "description": {
        "en": "Array of dates or object defining events or colors or function returning boolean/color/array of colors",
        "zh-Hans": ""
      }
    },
    {
      "name": "first-day-of-week",
      "type": [
        "string",
        "number"
      ],
      "default": 0,
      "source": "v-date-picker",
      "description": {
        "en": "Sets the first day of the week, starting with 0 for Sunday.",
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
      "name": "header-date-format",
      "type": "function",
      "default": "null",
      "source": "v-date-picker",
      "description": {
        "en": "Allows you to customize the format of the month string that appears in the header of the calendar. Called with date (ISO 8601 **date** string) arguments.",
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
      "name": "locale",
      "type": "string",
      "default": "undefined",
      "source": "localable",
      "description": {
        "en": "Sets the locale. Accepts a string with a BCP 47 language tag.",
        "zh-Hans": ""
      }
    },
    {
      "name": "locale-first-day-of-year",
      "type": [
        "string",
        "number"
      ],
      "default": 0,
      "source": "v-date-picker",
      "description": {
        "en": "Sets the day that determines the first week of the year, starting with 0 for **Sunday**. For ISO 8601 this should be 4.",
        "zh-Hans": ""
      }
    },
    {
      "name": "max",
      "type": "string",
      "default": "undefined",
      "source": "v-date-picker",
      "description": {
        "en": "Maximum allowed date/month (ISO 8601 format)",
        "zh-Hans": ""
      }
    },
    {
      "name": "min",
      "type": "string",
      "default": "undefined",
      "source": "v-date-picker",
      "description": {
        "en": "Minimum allowed date/month (ISO 8601 format)",
        "zh-Hans": ""
      }
    },
    {
      "name": "month-format",
      "type": "function",
      "default": "null",
      "source": "v-date-picker",
      "description": {
        "en": "Formatting function used for displaying months in the months table. Called with date (ISO 8601 **date** string) arguments.",
        "zh-Hans": ""
      }
    },
    {
      "name": "multiple",
      "type": "boolean",
      "default": "false",
      "source": "v-date-picker",
      "description": {
        "en": "Allow the selection of multiple dates",
        "zh-Hans": ""
      }
    },
    {
      "name": "next-icon",
      "type": "string",
      "default": "'$next'",
      "source": "v-date-picker",
      "description": {
        "en": "Sets the icon for next month/year button",
        "zh-Hans": ""
      }
    },
    {
      "name": "next-month-aria-label",
      "type": "string",
      "default": "'$vuetify.datePicker.nextMonthAriaLabel'",
      "source": "v-date-picker",
      "description": {
        "en": "",
        "zh-Hans": ""
      }
    },
    {
      "name": "next-year-aria-label",
      "type": "string",
      "default": "'$vuetify.datePicker.nextYearAriaLabel'",
      "source": "v-date-picker",
      "description": {
        "en": "",
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
      "name": "picker-date",
      "type": "string",
      "default": "undefined",
      "source": "v-date-picker",
      "description": {
        "en": "Displayed year/month",
        "zh-Hans": ""
      }
    },
    {
      "name": "prev-icon",
      "type": "string",
      "default": "'$prev'",
      "source": "v-date-picker",
      "description": {
        "en": "Sets the icon for previous month/year button",
        "zh-Hans": ""
      }
    },
    {
      "name": "prev-month-aria-label",
      "type": "string",
      "default": "'$vuetify.datePicker.prevMonthAriaLabel'",
      "source": "v-date-picker",
      "description": {
        "en": "",
        "zh-Hans": ""
      }
    },
    {
      "name": "prev-year-aria-label",
      "type": "string",
      "default": "'$vuetify.datePicker.prevYearAriaLabel'",
      "source": "v-date-picker",
      "description": {
        "en": "",
        "zh-Hans": ""
      }
    },
    {
      "name": "range",
      "type": "boolean",
      "default": "false",
      "source": "v-date-picker",
      "description": {
        "en": "Allow the selection of date range",
        "zh-Hans": ""
      }
    },
    {
      "name": "reactive",
      "type": "boolean",
      "default": "false",
      "source": "v-date-picker",
      "description": {
        "en": "Updates the picker model when changing months/years automatically",
        "zh-Hans": ""
      }
    },
    {
      "name": "readonly",
      "type": "boolean",
      "default": "false",
      "source": "v-date-picker",
      "description": {
        "en": "Makes the picker readonly (doesn't allow to select new date)",
        "zh-Hans": ""
      }
    },
    {
      "name": "scrollable",
      "type": "boolean",
      "default": "false",
      "source": "v-date-picker",
      "description": {
        "en": "Allows changing displayed month with mouse scroll",
        "zh-Hans": ""
      }
    },
    {
      "name": "selected-items-text",
      "type": "string",
      "default": "'$vuetify.datePicker.itemsSelected'",
      "source": "v-date-picker",
      "description": {
        "en": "Text used for translating the number of selected dates when using *multiple* prop. Can also be customizing globally in [Internationalization](/customization/internationalization).",
        "zh-Hans": ""
      }
    },
    {
      "name": "show-adjacent-months",
      "type": "boolean",
      "default": "false",
      "source": "v-date-picker",
      "description": {
        "en": "Toggles visibility of days from previous and next months",
        "zh-Hans": ""
      }
    },
    {
      "name": "show-current",
      "type": [
        "boolean",
        "string"
      ],
      "default": true,
      "source": "v-date-picker",
      "description": {
        "en": "Toggles visibility of the current date/month outline or shows the provided date/month as a current",
        "zh-Hans": ""
      }
    },
    {
      "name": "show-week",
      "type": "boolean",
      "default": "false",
      "source": "v-date-picker",
      "description": {
        "en": "Toggles visibility of the week numbers in the body of the calendar",
        "zh-Hans": ""
      }
    },
    {
      "name": "title-date-format",
      "type": "function",
      "default": "null",
      "source": "v-date-picker",
      "description": {
        "en": "Allows you to customize the format of the date string that appears in the title of the date picker. Called with date (ISO 8601 **date** string) arguments.",
        "zh-Hans": ""
      }
    },
    {
      "name": "type",
      "type": "string",
      "default": "'date'",
      "source": "v-date-picker",
      "description": {
        "en": "Determines the type of the picker - `date` for date picker, `month` for month picker",
        "zh-Hans": ""
      }
    },
    {
      "name": "value",
      "type": [
        "array",
        "string"
      ],
      "default": "undefined",
      "source": "v-date-picker",
      "description": {
        "en": "Date picker model (ISO 8601 format, YYYY-mm-dd or YYYY-mm)",
        "zh-Hans": ""
      }
    },
    {
      "name": "weekday-format",
      "type": "function",
      "default": "null",
      "source": "v-date-picker",
      "description": {
        "en": "Allows you to customize the format of the weekday string that appears in the body of the calendar. Called with date (ISO 8601 **date** string) arguments.",
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
    },
    {
      "name": "year-format",
      "type": "function",
      "default": "null",
      "source": "v-date-picker",
      "description": {
        "en": "Allows you to customize the format of the year string that appears in the header of the calendar. Called with date (ISO 8601 **date** string) arguments.",
        "zh-Hans": ""
      }
    },
    {
      "name": "year-icon",
      "type": "string",
      "default": "undefined",
      "source": "v-date-picker",
      "description": {
        "en": "Sets the icon in the year selection button",
        "zh-Hans": ""
      }
    }
  ],
  "mixins": [
    "colorable",
    "elevatable",
    "localable",
    "picker",
    "themeable"
  ],
  "slots": [
    {
      "name": "default",
      "description": {
        "en": "Displayed below the calendar, can be used for example for adding action button (`OK` and `Cancel`)",
        "zh-Hans": ""
      }
    }
  ],
  "events": [
    {
      "name": "<domevent>:date",
      "value": "string",
      "description": {
        "en": "Emitted when the specified DOM event occurs on the date button",
        "zh-Hans": ""
      }
    },
    {
      "name": "<domevent>:month",
      "value": "string",
      "description": {
        "en": "Emitted when the specified DOM event occurs on the month button",
        "zh-Hans": ""
      }
    },
    {
      "name": "<domevent>:year",
      "value": "number",
      "description": {
        "en": "Emitted when the specified DOM event occurs on the year button",
        "zh-Hans": ""
      }
    },
    {
      "name": "change",
      "value": "string",
      "description": {
        "en": "Reactive date picker emits `input` even when any part of the date (year/month/day) changes, but `change` event is emitted only when the day (for date pickers) or month (for month pickers) changes. If `range` prop is set, date picker emits `change` when both [from, to] are selected.",
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
      "name": "update:active-picker",
      "value": "string",
      "description": {
        "en": "The `.sync` event for `active-picker` prop",
        "zh-Hans": ""
      }
    },
    {
      "name": "update:picker-date",
      "value": "string",
      "description": {
        "en": "The `.sync` event for `picker-date` prop",
        "zh-Hans": ""
      }
    }
  ],
  "functions": [],
  "name": "v-date-picker",
  "sass": [],
  "component": true
}