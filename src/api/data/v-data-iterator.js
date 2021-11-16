module.exports = {
  "props": [
    {
      "name": "checkbox-color",
      "source": "v-data",
      "type": "string",
      "description": {
        "en": "",
        "zh-Hans": ""
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
        "zh-Hans": ""
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
        "zh-Hans": ""
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
      "name": "disable-filtering",
      "type": "boolean",
      "default": "false",
      "source": "v-data",
      "description": {
        "en": "Disables filtering completely",
        "zh-Hans": ""
      }
    },
    {
      "name": "disable-pagination",
      "type": "boolean",
      "default": "false",
      "source": "v-data",
      "description": {
        "en": "Disables pagination completely",
        "zh-Hans": ""
      }
    },
    {
      "name": "disable-sort",
      "type": "boolean",
      "default": "false",
      "source": "v-data",
      "description": {
        "en": "Disables sorting completely",
        "zh-Hans": ""
      }
    },
    {
      "name": "expanded",
      "type": "array",
      "default": [],
      "source": "v-data-iterator",
      "description": {
        "en": "Array of expanded items. Can be used with `.sync` modifier",
        "zh-Hans": ""
      }
    },
    {
      "name": "footer-props",
      "type": "object",
      "default": "undefined",
      "source": "v-data-iterator",
      "description": {
        "en": "See the [`v-data-footer`](/api/v-data-footer) API for more information",
        "zh-Hans": ""
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
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
    {
      "name": "hide-default-footer",
      "type": "boolean",
      "default": "false",
      "source": "v-data-iterator",
      "description": {
        "en": "Hides default footer",
        "zh-Hans": ""
      }
    },
    {
      "name": "item-key",
      "type": "string",
      "default": "'id'",
      "source": "v-data-iterator",
      "description": {
        "en": "The property on each item that is used as a unique key",
        "zh-Hans": ""
      }
    },
    {
      "name": "items",
      "type": "array",
      "default": [],
      "source": "v-data",
      "description": {
        "en": "The array of items to display",
        "zh-Hans": ""
      }
    },
    {
      "name": "items-per-page",
      "type": "number",
      "default": 10,
      "source": "v-data",
      "description": {
        "en": "Changes how many items per page should be visible. Can be used with `.sync` modifier. Setting this prop to `-1` will display all items on the page",
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
      "name": "loading",
      "type": [
        "boolean",
        "string"
      ],
      "default": "undefined",
      "source": "v-data-iterator",
      "description": {
        "en": "If `true` and no items are provided, then a loading text will be shown",
        "zh-Hans": ""
      }
    },
    {
      "name": "loading-text",
      "type": "string",
      "default": "'$vuetify.dataIterator.loadingText'",
      "source": "v-data-iterator",
      "description": {
        "en": "Text shown when `loading` is true and no items are provided",
        "zh-Hans": ""
      }
    },
    {
      "name": "locale",
      "type": "string",
      "default": "'en-US'",
      "source": "v-data",
      "description": {
        "en": "Sets the locale used for sorting. This is passed into [`Intl.Collator()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator) in the default `customSort` function",
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
    {
      "name": "multi-sort",
      "type": "boolean",
      "default": "false",
      "source": "v-data",
      "description": {
        "en": "If `true` then one can sort on multiple properties",
        "zh-Hans": ""
      }
    },
    {
      "name": "must-sort",
      "type": "boolean",
      "default": "false",
      "source": "v-data",
      "description": {
        "en": "If `true` then one can not disable sorting, it will always switch between ascending and descending",
        "zh-Hans": ""
      }
    },
    {
      "name": "no-data-text",
      "type": "string",
      "default": "'$vuetify.noDataText'",
      "source": "v-data-iterator",
      "description": {
        "en": "Text shown when no items are provided to the component",
        "zh-Hans": ""
      }
    },
    {
      "name": "no-results-text",
      "type": "string",
      "default": "'$vuetify.dataIterator.noResultsText'",
      "source": "v-data-iterator",
      "description": {
        "en": "Text shown when `search` prop is used and there are no results",
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
    {
      "name": "page",
      "type": "number",
      "default": 1,
      "source": "v-data",
      "description": {
        "en": "",
        "zh-Hans": ""
      }
    },
    {
      "name": "search",
      "type": "string",
      "default": "undefined",
      "source": "v-data",
      "description": {
        "en": "Text input used to filter items",
        "zh-Hans": ""
      }
    },
    {
      "name": "selectable-key",
      "type": "string",
      "default": "'isSelectable'",
      "source": "v-data-iterator",
      "description": {
        "en": "The property on each item that is used to determine if it is selectable or not",
        "zh-Hans": ""
      }
    },
    {
      "name": "server-items-length",
      "type": "number",
      "default": -1,
      "source": "v-data",
      "description": {
        "en": "Used only when data is provided by a server. Should be set to the total amount of items available on server so that pagination works correctly",
        "zh-Hans": ""
      }
    },
    {
      "name": "single-expand",
      "type": "boolean",
      "default": "false",
      "source": "v-data-iterator",
      "description": {
        "en": "Changes expansion mode to single expand",
        "zh-Hans": ""
      }
    },
    {
      "name": "single-select",
      "type": "boolean",
      "default": "false",
      "source": "v-data-iterator",
      "description": {
        "en": "Changes selection mode to single select",
        "zh-Hans": ""
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
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
    {
      "name": "value",
      "type": "array",
      "default": [],
      "source": "v-data-iterator",
      "description": {
        "en": "Used for controlling selected rows",
        "zh-Hans": ""
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
        "zh-Hans": ""
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
        "zh-Hans": ""
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
        "zh-Hans": ""
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
        "zh-Hans": ""
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
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
    {
      "name": "loading",
      "source": "v-data-iterator",
      "description": {
        "en": "Defines content for when `loading` is true and no items are provided",
        "zh-Hans": ""
      }
    },
    {
      "name": "no-data",
      "source": "v-data-iterator",
      "description": {
        "en": "Defines content for when no items are provided",
        "zh-Hans": ""
      }
    },
    {
      "name": "no-results",
      "source": "v-data-iterator",
      "description": {
        "en": "Defines content for when `search` is provided but no results are found",
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
    {
      "name": "input",
      "source": "v-data-iterator",
      "value": "any[]",
      "description": {
        "en": "Array of selected items",
        "zh-Hans": ""
      }
    },
    {
      "name": "item-expanded",
      "source": "v-data-iterator",
      "value": "{ item: any, value: boolean }",
      "description": {
        "en": "Event emitted when an item is expanded or closed",
        "zh-Hans": ""
      }
    },
    {
      "name": "item-selected",
      "source": "v-data-iterator",
      "value": "{ item: any, value: boolean }",
      "description": {
        "en": "Event emitted when an item is selected or deselected",
        "zh-Hans": ""
      }
    },
    {
      "name": "page-count",
      "source": "v-data",
      "value": "number",
      "description": {
        "en": "",
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
    {
      "name": "toggle-select-all",
      "source": "v-data-iterator",
      "value": "{ items: any[], value: boolean }",
      "description": {
        "en": "",
        "zh-Hans": ""
      }
    },
    {
      "name": "update:expanded",
      "source": "v-data-iterator",
      "value": "any[]",
      "description": {
        "en": "The `.sync` event for `expanded` prop",
        "zh-Hans": ""
      }
    },
    {
      "name": "update:group-by",
      "source": "v-data",
      "value": "string | string[]",
      "description": {
        "en": "",
        "zh-Hans": ""
      }
    },
    {
      "name": "update:group-desc",
      "source": "v-data",
      "value": "boolean | boolean[]",
      "description": {
        "en": "",
        "zh-Hans": ""
      }
    },
    {
      "name": "update:items-per-page",
      "source": "v-data",
      "value": "number",
      "description": {
        "en": "",
        "zh-Hans": ""
      }
    },
    {
      "name": "update:multi-sort",
      "source": "v-data",
      "value": "boolean",
      "description": {
        "en": "",
        "zh-Hans": ""
      }
    },
    {
      "name": "update:must-sort",
      "source": "v-data",
      "value": "boolean",
      "description": {
        "en": "",
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
    {
      "name": "update:page",
      "source": "v-data",
      "value": "number",
      "description": {
        "en": "",
        "zh-Hans": ""
      }
    },
    {
      "name": "update:sort-by",
      "source": "v-data",
      "value": "string | string[]",
      "description": {
        "en": "",
        "zh-Hans": ""
      }
    },
    {
      "name": "update:sort-desc",
      "source": "v-data",
      "value": "boolean | boolean[]",
      "description": {
        "en": "",
        "zh-Hans": ""
      }
    }
  ],
  "functions": [],
  "name": "v-data-iterator",
  "sass": [],
  "component": true
}