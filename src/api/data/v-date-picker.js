module.exports = {
  "props": [
    {
      "name": "active-picker",
      "type": "string",
      "default": "undefined",
      "source": "v-date-picker",
      "description": {
        "en": "Determines which picker in the date or month picker is being displayed. Allowed values: `'DATE'`, `'MONTH'`, `'YEAR'`",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "allowed-dates",
      "type": "function",
      "default": "null",
      "source": "v-date-picker",
      "description": {
        "en": "Restricts which dates can be selected",
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
      "source": "v-date-picker",
      "description": {
        "en": "Allows you to customize the format of the day string that appears in the date table. Called with date (ISO 8601 **date** string) arguments.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "disabled",
      "type": "boolean",
      "default": "false",
      "source": "v-date-picker",
      "description": {
        "en": "Disables interaction with the picker",
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
      "name": "header-date-format",
      "type": "function",
      "default": "null",
      "source": "v-date-picker",
      "description": {
        "en": "Allows you to customize the format of the month string that appears in the header of the calendar. Called with date (ISO 8601 **date** string) arguments.",
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
      "name": "locale",
      "type": "string",
      "default": "undefined",
      "source": "localable",
      "description": {
        "en": "Sets the locale. Accepts a string with a BCP 47 language tag.",
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
      "source": "v-date-picker",
      "description": {
        "en": "Sets the day that determines the first week of the year, starting with 0 for **Sunday**. For ISO 8601 this should be 4.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "max",
      "type": "string",
      "default": "undefined",
      "source": "v-date-picker",
      "description": {
        "en": "Maximum allowed date/month (ISO 8601 format)",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "min",
      "type": "string",
      "default": "undefined",
      "source": "v-date-picker",
      "description": {
        "en": "Minimum allowed date/month (ISO 8601 format)",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "month-format",
      "type": "function",
      "default": "null",
      "source": "v-date-picker",
      "description": {
        "en": "Formatting function used for displaying months in the months table. Called with date (ISO 8601 **date** string) arguments.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "multiple",
      "type": "boolean",
      "default": "false",
      "source": "v-date-picker",
      "description": {
        "en": "Allow the selection of multiple dates",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "next-icon",
      "type": "string",
      "default": "'$next'",
      "source": "v-date-picker",
      "description": {
        "en": "Sets the icon for next month/year button",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "next-month-aria-label",
      "type": "string",
      "default": "'$vuetify.datePicker.nextMonthAriaLabel'",
      "source": "v-date-picker",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "next-year-aria-label",
      "type": "string",
      "default": "'$vuetify.datePicker.nextYearAriaLabel'",
      "source": "v-date-picker",
      "description": {
        "en": "",
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
      "name": "picker-date",
      "type": "string",
      "default": "undefined",
      "source": "v-date-picker",
      "description": {
        "en": "Displayed year/month",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "prev-icon",
      "type": "string",
      "default": "'$prev'",
      "source": "v-date-picker",
      "description": {
        "en": "Sets the icon for previous month/year button",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "prev-month-aria-label",
      "type": "string",
      "default": "'$vuetify.datePicker.prevMonthAriaLabel'",
      "source": "v-date-picker",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "prev-year-aria-label",
      "type": "string",
      "default": "'$vuetify.datePicker.prevYearAriaLabel'",
      "source": "v-date-picker",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "range",
      "type": "boolean",
      "default": "false",
      "source": "v-date-picker",
      "description": {
        "en": "Allow the selection of date range",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "reactive",
      "type": "boolean",
      "default": "false",
      "source": "v-date-picker",
      "description": {
        "en": "Updates the picker model when changing months/years automatically",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "readonly",
      "type": "boolean",
      "default": "false",
      "source": "v-date-picker",
      "description": {
        "en": "Makes the picker readonly (doesn't allow to select new date)",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "scrollable",
      "type": "boolean",
      "default": "false",
      "source": "v-date-picker",
      "description": {
        "en": "Allows changing displayed month with mouse scroll",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "selected-items-text",
      "type": "string",
      "default": "'$vuetify.datePicker.itemsSelected'",
      "source": "v-date-picker",
      "description": {
        "en": "Text used for translating the number of selected dates when using *multiple* prop. Can also be customizing globally in [Internationalization](/customization/internationalization).",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "show-adjacent-months",
      "type": "boolean",
      "default": "false",
      "source": "v-date-picker",
      "description": {
        "en": "Toggles visibility of days from previous and next months",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "show-week",
      "type": "boolean",
      "default": "false",
      "source": "v-date-picker",
      "description": {
        "en": "Toggles visibility of the week numbers in the body of the calendar",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "title-date-format",
      "type": "function",
      "default": "null",
      "source": "v-date-picker",
      "description": {
        "en": "Allows you to customize the format of the date string that appears in the title of the date picker. Called with date (ISO 8601 **date** string) arguments.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "type",
      "type": "string",
      "default": "'date'",
      "source": "v-date-picker",
      "description": {
        "en": "Determines the type of the picker - `date` for date picker, `month` for month picker",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "weekday-format",
      "type": "function",
      "default": "null",
      "source": "v-date-picker",
      "description": {
        "en": "Allows you to customize the format of the weekday string that appears in the body of the calendar. Called with date (ISO 8601 **date** string) arguments.",
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
    },
    {
      "name": "year-format",
      "type": "function",
      "default": "null",
      "source": "v-date-picker",
      "description": {
        "en": "Allows you to customize the format of the year string that appears in the header of the calendar. Called with date (ISO 8601 **date** string) arguments.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "year-icon",
      "type": "string",
      "default": "undefined",
      "source": "v-date-picker",
      "description": {
        "en": "Sets the icon in the year selection button",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "events": [
    {
      "name": "<domevent>:date",
      "value": "string",
      "description": {
        "en": "Emitted when the specified DOM event occurs on the date button",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "<domevent>:month",
      "value": "string",
      "description": {
        "en": "Emitted when the specified DOM event occurs on the month button",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "<domevent>:year",
      "value": "number",
      "description": {
        "en": "Emitted when the specified DOM event occurs on the year button",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "change",
      "value": "string",
      "description": {
        "en": "Reactive date picker emits `input` even when any part of the date (year/month/day) changes, but `change` event is emitted only when the day (for date pickers) or month (for month pickers) changes. If `range` prop is set, date picker emits `change` when both [from, to] are selected.",
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
      "name": "update:active-picker",
      "value": "string",
      "description": {
        "en": "The `.sync` event for `active-picker` prop",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "update:picker-date",
      "value": "string",
      "description": {
        "en": "The `.sync` event for `picker-date` prop",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "functions": [],
  "name": "v-date-picker",
  "sass": [
    {
      "name": "$date-picker-years-font-size",
      "default": "16px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$date-picker-years-font-weight",
      "default": "400 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$date-picker-years-portrait-height",
      "default": "290px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$date-picker-years-landscape-height",
      "default": "290px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$date-picker-years-item-padding",
      "default": "8px 0 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$date-picker-years-active-font-size",
      "default": "26px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$date-picker-years-active-font-weight",
      "default": "500 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$date-picker-years-active-padding",
      "default": "10px 0 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$date-picker-years-item-hover-background",
      "default": "rgba(0, 0, 0, 0.12) !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$date-picker-years-item-align",
      "default": "center !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$date-picker-title-year-font-size",
      "default": "14px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$date-picker-title-year-font-weight",
      "default": "500 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$date-picker-title-year-bottom-margin",
      "default": "8px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$date-picker-title-date-font-size",
      "default": "34px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$date-picker-title-date-font-weight",
      "default": "500 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$date-picker-header-padding",
      "default": "4px 16px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$date-picker-header-value-transition",
      "default": "$primary-transition !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$date-picker-header-button-font-weight",
      "default": "bold !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$date-picker-header-button-padding",
      "default": "0.5rem !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$date-picker-header-button-transition",
      "default": "$primary-transition !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$date-picker-table-padding",
      "default": "0 12px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$date-picker-table-height",
      "default": "242px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$date-picker-table-font-size",
      "default": "12px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$date-picker-table-date-button-width",
      "default": "32px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$date-picker-table-date-button-height",
      "default": "32px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$date-picker-table-active-date-color",
      "default": "map-get($shades, 'white') !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$date-picker-table-month-height",
      "default": "56px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$date-picker-table-month-min-width",
      "default": "40px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$date-picker-table-month-max-width",
      "default": "140px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$date-picker-table-date-padding",
      "default": "8px 0 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$date-picker-table-date-font-weight",
      "default": "600 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$date-picker-table-date-width",
      "default": "45px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$date-picker-event-size",
      "default": "8px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$date-picker-event-margin",
      "default": "0 1px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$date-picker-event-border-radius",
      "default": "50% !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$date-picker-event-month-bottom",
      "default": "6px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$date-picker-event-date-bottom",
      "default": "8px !default;",
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