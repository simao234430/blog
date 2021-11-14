module.exports = {
  "props": [
    {
      "name": "checkbox-color",
      "source": "v-data",
      "type": "string",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "custom-filter",
      "type": "function",
      "default": "gh:searchItems",
      "source": "v-data",
      "example": "(items: any[], search: string) => any[]",
      "description": {
        "en": "Function to filter items",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "custom-group",
      "type": "function",
      "default": "gh:groupItems",
      "source": "v-data",
      "example": "(items: any[], groupBy: string[], groupDesc: boolean[]) => Record<string, any[]>",
      "description": {
        "en": "Function used to group items",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "custom-sort",
      "type": "function",
      "default": "gh:sortItems",
      "source": "v-data",
      "example": "(items: any[], sortBy: string[], sortDesc: boolean[], locale: string, customSorters?: Record<string, compareFn>) => any[]",
      "description": {
        "en": "Function used to sort items",
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
      "name": "disable-filtering",
      "type": "boolean",
      "default": "false",
      "source": "v-data",
      "description": {
        "en": "Disables filtering completely",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "disable-pagination",
      "type": "boolean",
      "default": "false",
      "source": "v-data",
      "description": {
        "en": "Disables pagination completely",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "disable-sort",
      "type": "boolean",
      "default": "false",
      "source": "v-data",
      "description": {
        "en": "Disables sorting completely",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "expanded",
      "type": "array",
      "default": [],
      "source": "v-data-iterator",
      "description": {
        "en": "Array of expanded items. Can be used with `.sync` modifier",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "footer-props",
      "type": "object",
      "default": "undefined",
      "source": "v-data-iterator",
      "description": {
        "en": "See the [`v-data-footer`](/api/v-data-footer) API for more information",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "group-by",
      "type": [
        "string",
        "array"
      ],
      "default": [],
      "source": "v-data",
      "description": {
        "en": "Changes which item property should be used for grouping items. Currently only supports a single grouping in the format: `group` or `['group']`. When using an array, only the first element is considered. Can be used with `.sync` modifier",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "group-desc",
      "type": [
        "boolean",
        "array"
      ],
      "default": [],
      "source": "v-data",
      "description": {
        "en": "Changes which direction grouping is done. Can be used with `.sync` modifier",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "hide-default-footer",
      "type": "boolean",
      "default": "false",
      "source": "v-data-iterator",
      "description": {
        "en": "Hides default footer",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "item-key",
      "type": "string",
      "default": "'id'",
      "source": "v-data-iterator",
      "description": {
        "en": "The property on each item that is used as a unique key",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "items",
      "type": "array",
      "default": [],
      "source": "v-data",
      "description": {
        "en": "The array of items to display",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "items-per-page",
      "type": "number",
      "default": 10,
      "source": "v-data",
      "description": {
        "en": "Changes how many items per page should be visible. Can be used with `.sync` modifier. Setting this prop to `-1` will display all items on the page",
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
      "name": "loading",
      "type": [
        "boolean",
        "string"
      ],
      "default": "undefined",
      "source": "v-data-iterator",
      "description": {
        "en": "If `true` and no items are provided, then a loading text will be shown",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "loading-text",
      "type": "string",
      "default": "'$vuetify.dataIterator.loadingText'",
      "source": "v-data-iterator",
      "description": {
        "en": "Text shown when `loading` is true and no items are provided",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "locale",
      "type": "string",
      "default": "'en-US'",
      "source": "v-data",
      "description": {
        "en": "Sets the locale used for sorting. This is passed into [`Intl.Collator()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator) in the default `customSort` function",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "mobile-breakpoint",
      "type": [
        "number",
        "string"
      ],
      "default": 600,
      "source": "mobile",
      "description": {
        "en": "Used to set when to toggle between regular table and mobile view",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "multi-sort",
      "type": "boolean",
      "default": "false",
      "source": "v-data",
      "description": {
        "en": "If `true` then one can sort on multiple properties",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "must-sort",
      "type": "boolean",
      "default": "false",
      "source": "v-data",
      "description": {
        "en": "If `true` then one can not disable sorting, it will always switch between ascending and descending",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "no-data-text",
      "type": "string",
      "default": "'$vuetify.noDataText'",
      "source": "v-data-iterator",
      "description": {
        "en": "Text shown when no items are provided to the component",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "no-results-text",
      "type": "string",
      "default": "'$vuetify.dataIterator.noResultsText'",
      "source": "v-data-iterator",
      "description": {
        "en": "Text shown when `search` prop is used and there are no results",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "options",
      "type": "DataOptions",
      "default": {},
      "source": "v-data",
      "example": {
        "page": "number",
        "itemsPerPage": "number",
        "sortBy": "string[]",
        "sortDesc": "boolean[]",
        "groupBy": "string[]",
        "groupDesc": "boolean[]",
        "multiSort": "boolean",
        "mustSort": "boolean"
      },
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "page",
      "type": "number",
      "default": 1,
      "source": "v-data",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "search",
      "type": "string",
      "default": "undefined",
      "source": "v-data",
      "description": {
        "en": "Text input used to filter items",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "selectable-key",
      "type": "string",
      "default": "'isSelectable'",
      "source": "v-data-iterator",
      "description": {
        "en": "The property on each item that is used to determine if it is selectable or not",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "server-items-length",
      "type": "number",
      "default": -1,
      "source": "v-data",
      "description": {
        "en": "Used only when data is provided by a server. Should be set to the total amount of items available on server so that pagination works correctly",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "single-expand",
      "type": "boolean",
      "default": "false",
      "source": "v-data-iterator",
      "description": {
        "en": "Changes expansion mode to single expand",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "single-select",
      "type": "boolean",
      "default": "false",
      "source": "v-data-iterator",
      "description": {
        "en": "Changes selection mode to single select",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "sort-by",
      "type": [
        "string",
        "array"
      ],
      "default": [],
      "source": "v-data",
      "description": {
        "en": "Changes which item property (or properties) should be used for sort order. Can be used with `.sync` modifier",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "sort-desc",
      "type": [
        "boolean",
        "array"
      ],
      "default": [],
      "source": "v-data",
      "description": {
        "en": "Changes which direction sorting is done. Can be used with `.sync` modifier",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "value",
      "type": "array",
      "default": [],
      "source": "v-data-iterator",
      "description": {
        "en": "Used for controlling selected rows",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "mixins": [
    "mobile",
    "themeable"
  ],
  "slots": [
    {
      "name": "default",
      "source": "v-data-iterator",
      "description": {
        "en": "The default slot. Use this to render your items",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "default",
      "props": {
        "items": "any[]",
        "originalItemsLength": "number",
        "pagination": {
          "page": "number",
          "itemsPerPage": "number",
          "pageStart": "number",
          "pageStop": "number",
          "pageCount": "number",
          "itemsLength": "number"
        },
        "options": {
          "page": "number",
          "itemsPerPage": "number",
          "sortBy": "string[]",
          "sortDesc": "boolean[]",
          "groupBy": "string[]",
          "groupDesc": "boolean[]",
          "multiSort": "boolean",
          "mustSort": "boolean"
        },
        "groupedItems": "Array<{ name: string, items: any[] }>",
        "updateOptions": "(obj: any) => void",
        "sort": "(value: string) => void",
        "sortArray": "(sortBy: string[]) => void",
        "group": "(value: string) => void",
        "isSelected": "(item: any) => boolean",
        "select": "(item: any, value: boolean) => void",
        "isExpanded": "(item: any) => boolean",
        "expand": "(item: any, value: boolean) => void"
      },
      "source": "data-iterator",
      "description": {
        "en": "The default slot. Use this to render your items",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "footer",
      "props": {
        "items": "any[]",
        "originalItemsLength": "number",
        "pagination": {
          "page": "number",
          "itemsPerPage": "number",
          "pageStart": "number",
          "pageStop": "number",
          "pageCount": "number",
          "itemsLength": "number"
        },
        "options": {
          "page": "number",
          "itemsPerPage": "number",
          "sortBy": "string[]",
          "sortDesc": "boolean[]",
          "groupBy": "string[]",
          "groupDesc": "boolean[]",
          "multiSort": "boolean",
          "mustSort": "boolean"
        },
        "groupedItems": "Array<{ name: string, items: any[] }>",
        "updateOptions": "(obj: any) => void",
        "sort": "(value: string) => void",
        "sortArray": "(sortBy: string[]) => void",
        "group": "(value: string) => void"
      },
      "source": "data-iterator",
      "description": {
        "en": "Defines a footer below the items",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "footer.page-text",
      "props": {
        "pageStart": "number",
        "pageStop": "number",
        "itemsLength": "number"
      },
      "source": "data-iterator",
      "description": {
        "en": "This slot is forwarded to the default footer. See the [`v-data-footer`](/api/v-data-footer) API for more information",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "header",
      "props": {
        "items": "any[]",
        "originalItemsLength": "number",
        "pagination": {
          "page": "number",
          "itemsPerPage": "number",
          "pageStart": "number",
          "pageStop": "number",
          "pageCount": "number",
          "itemsLength": "number"
        },
        "options": {
          "page": "number",
          "itemsPerPage": "number",
          "sortBy": "string[]",
          "sortDesc": "boolean[]",
          "groupBy": "string[]",
          "groupDesc": "boolean[]",
          "multiSort": "boolean",
          "mustSort": "boolean"
        },
        "groupedItems": "Array<{ name: string, items: any[] }>",
        "updateOptions": "(obj: any) => void",
        "sort": "(value: string) => void",
        "sortArray": "(sortBy: string[]) => void",
        "group": "(value: string) => void"
      },
      "source": "data-iterator",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "item",
      "props": {
        "expand": "(v: boolean) => void",
        "index": "number",
        "item": "any",
        "isExpanded": "boolean",
        "isMobile": "boolean",
        "isSelected": "boolean",
        "select": "(v: boolean) => void"
      },
      "source": "data-iterator",
      "description": {
        "en": "Slot for each item",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "loading",
      "source": "v-data-iterator",
      "description": {
        "en": "Defines content for when `loading` is true and no items are provided",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "no-data",
      "source": "v-data-iterator",
      "description": {
        "en": "Defines content for when no items are provided",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "no-results",
      "source": "v-data-iterator",
      "description": {
        "en": "Defines content for when `search` is provided but no results are found",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "events": [
    {
      "name": "current-items",
      "source": "v-data",
      "value": "any[]",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "input",
      "source": "v-data-iterator",
      "value": "any[]",
      "description": {
        "en": "Array of selected items",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "item-expanded",
      "source": "v-data-iterator",
      "value": "{ item: any, value: boolean }",
      "description": {
        "en": "Event emitted when an item is expanded or closed",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "item-selected",
      "source": "v-data-iterator",
      "value": "{ item: any, value: boolean }",
      "description": {
        "en": "Event emitted when an item is selected or deselected",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "page-count",
      "source": "v-data",
      "value": "number",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "pagination",
      "source": "v-data",
      "value": {
        "page": "number",
        "itemsPerPage": "number",
        "pageStart": "number",
        "pageStop": "number",
        "pageCount": "number",
        "itemsLength": "number"
      },
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "toggle-select-all",
      "source": "v-data-iterator",
      "value": "{ items: any[], value: boolean }",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "update:expanded",
      "source": "v-data-iterator",
      "value": "any[]",
      "description": {
        "en": "The `.sync` event for `expanded` prop",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "update:group-by",
      "source": "v-data",
      "value": "string | string[]",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "update:group-desc",
      "source": "v-data",
      "value": "boolean | boolean[]",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "update:items-per-page",
      "source": "v-data",
      "value": "number",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "update:multi-sort",
      "source": "v-data",
      "value": "boolean",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "update:must-sort",
      "source": "v-data",
      "value": "boolean",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "update:options",
      "source": "v-data",
      "value": {
        "page": "number",
        "itemsPerPage": "number",
        "sortBy": "string[]",
        "sortDesc": "boolean[]",
        "groupBy": "string[]",
        "groupDesc": "boolean[]",
        "multiSort": "boolean",
        "mustSort": "boolean"
      },
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "update:page",
      "source": "v-data",
      "value": "number",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "update:sort-by",
      "source": "v-data",
      "value": "string | string[]",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "update:sort-desc",
      "source": "v-data",
      "value": "boolean | boolean[]",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "functions": [],
  "name": "v-data-iterator",
  "sass": [
    {
      "name": "$data-footer-font-size",
      "default": "map-deep-get($headings, 'caption', 'size') !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$data-footer-icons-after-btn-margin-start",
      "default": "7px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$data-footer-icons-before-btn-margin-end",
      "default": "7px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$data-footer-padding",
      "default": "0 8px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$data-footer-pagination-margin-end",
      "default": "32px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$data-footer-pagination-margin-start",
      "default": "24px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$data-footer-select-margin-end",
      "default": "14px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$data-footer-select-select-margin-start",
      "default": "34px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$data-footer-select-select-margin-y",
      "default": "13px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$data-footer-select-selections-comma-font-size",
      "default": "map-deep-get($headings, 'caption', 'size') !default;",
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