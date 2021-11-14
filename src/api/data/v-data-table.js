module.exports = {
  "props": [
    {
      "name": "calculate-widths",
      "type": "boolean",
      "default": "false",
      "source": "v-data-table",
      "description": {
        "en": "Enables calculation of column widths. `widths` property will be available in select scoped slots",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "caption",
      "type": "string",
      "default": "undefined",
      "source": "v-data-table",
      "description": {
        "en": "Set the caption (using `<caption>`)",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "checkbox-color",
      "type": "string",
      "default": "undefined",
      "source": "v-data",
      "description": {
        "en": "Set the color of the checkboxes (showSelect must be used)",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "custom-filter",
      "type": "function",
      "default": "gh:defaultFilter",
      "source": "v-data",
      "example": "(value: any, search: string | null, item: any) => boolean",
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
      "name": "dense",
      "type": "boolean",
      "default": "false",
      "source": "v-data-table",
      "description": {
        "en": "Decreases the height of rows",
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
      "name": "expand-icon",
      "type": "string",
      "default": "'$expand'",
      "source": "v-data-table",
      "description": {
        "en": "Icon used for expand toggle button.",
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
      "name": "fixed-header",
      "type": "boolean",
      "default": "false",
      "source": "v-data-table",
      "description": {
        "en": "Fixed header to top of table. **NOTE:** Does not work in IE11",
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
      "name": "header-props",
      "type": "object",
      "default": "undefined",
      "source": "v-data-table",
      "description": {
        "en": "Pass props to the default header. See [`v-data-table-header` API](/api/v-data-table-header) for more information",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "headers",
      "type": "DataTableHeader[]",
      "default": [],
      "source": "v-data-table",
      "example": {
        "text": "string",
        "value": "string",
        "align?": "'start' | 'center' | 'end'",
        "sortable?": "boolean",
        "filterable?": "boolean",
        "groupable?": "boolean",
        "divider?": "boolean",
        "class?": "string | string[]",
        "cellClass?": "string | string[]",
        "width?": "string | number",
        "filter?": "(value: any, search: string, item: any) => boolean",
        "sort?": "(a: any, b: any) => number"
      },
      "description": {
        "en": "An array of objects that each describe a header column. See the example below for a definition of all properties",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "headers-length",
      "type": "number",
      "default": "undefined",
      "source": "v-data-table",
      "description": {
        "en": "Can be used in combination with `hide-default-header` to specify the number of columns in the table to allow expansion rows and loading bar to function properly",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "height",
      "type": [
        "number",
        "string"
      ],
      "default": "undefined",
      "source": "v-data-table",
      "description": {
        "en": "Set an explicit height of table",
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
      "name": "hide-default-header",
      "type": "boolean",
      "default": "false",
      "source": "v-data-table",
      "description": {
        "en": "Hide the default headers",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "item-class",
      "type": [
        "string",
        "function"
      ],
      "default": "",
      "source": "v-data-table",
      "description": {
        "en": "Property on supplied `items` that contains item's row class or function that takes an item as an argument and returns the class of corresponding row",
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
      "name": "loader-height",
      "type": [
        "number",
        "string"
      ],
      "default": 4,
      "source": "loadable",
      "description": {
        "en": "Specifies the height of the loader",
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
      "default": false,
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
      "name": "show-expand",
      "type": "boolean",
      "default": "false",
      "source": "v-data-table",
      "description": {
        "en": "Shows the expand toggle in default rows",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "show-group-by",
      "type": "boolean",
      "default": "false",
      "source": "v-data-table",
      "description": {
        "en": "Shows the group by toggle in the header and enables grouped rows",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "show-select",
      "type": "boolean",
      "default": "false",
      "source": "v-data-table",
      "description": {
        "en": "Shows the select checkboxes in both the header and rows (if using default rows)",
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
    "loadable",
    "mobile",
    "themeable",
    "v-data-iterator"
  ],
  "slots": [
    {
      "name": "body",
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
        "headers": "DataTableHeader[]",
        "isMobile": "boolean",
        "isSelected": "(item: any) => boolean",
        "select": "(item: any, value: boolean) => void",
        "isExpanded": "(item: any) => boolean",
        "expand": "(item: any, value: boolean) => void"
      },
      "description": {
        "en": "Slot to replace the default table `<tbody>`",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "body.append",
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
        "headers": "DataTableHeader[]",
        "isMobile": "boolean",
        "isSelected": "(item: any) => boolean",
        "select": "(item: any, value: boolean) => void",
        "isExpanded": "(item: any) => boolean",
        "expand": "(item: any, value: boolean) => void"
      },
      "description": {
        "en": "Appends elements to the end of the default table `<tbody>`",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "body.prepend",
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
        "headers": "DataTableHeader[]",
        "isMobile": "boolean",
        "isSelected": "(item: any) => boolean",
        "select": "(item: any, value: boolean) => void",
        "isExpanded": "(item: any) => boolean",
        "expand": "(item: any, value: boolean) => void"
      },
      "description": {
        "en": "Prepends elements to the start of the default table `<tbody>`",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "expanded-item",
      "props": {
        "isMobile": "boolean",
        "item": "any",
        "headers": "DataTableHeader[]"
      },
      "description": {
        "en": "Slot to customize expanded rows",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "foot",
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
      "description": {
        "en": "Slot to add a `<tfoot>` element after the `<tbody>`. Not to be confused with the `footer` slot",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "footer",
      "props": {
        "props": {
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
          "pagination": {
            "page": "number",
            "itemsPerPage": "number",
            "pageStart": "number",
            "pageStop": "number",
            "pageCount": "number",
            "itemsLength": "number"
          },
          "itemsPerPageText": "string"
        },
        "on": "{}",
        "headers": "DataTableHeader[]",
        "widths": "[]"
      },
      "description": {
        "en": "Slot to add a custom footer",
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
      "description": {
        "en": "Slot to customize footer page text",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "footer.prepend",
      "description": {
        "en": "Adds content to the empty space in the footer",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "group",
      "props": {
        "group": "string",
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
        "isMobile": "boolean",
        "items": "any[]",
        "headers": "i DataTableHeader[]"
      },
      "description": {
        "en": "Slot to replace the default rendering of grouped rows",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "group.header",
      "props": {
        "group": "string",
        "groupBy": "string[]",
        "isMobile": "boolean",
        "items": "any[]",
        "headers": "DataTableHeader[]",
        "isOpen": "boolean",
        "toggle": "() => void",
        "remove": "() => void"
      },
      "description": {
        "en": "Slot to customize the default rendering of group headers",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "group.summary",
      "props": {
        "group": "string",
        "groupBy": "string[]",
        "isMobile": "boolean",
        "items": "any[]",
        "headers": "DataTableHeader[]",
        "isOpen": "boolean",
        "toggle": "() => void"
      },
      "description": {
        "en": "Slot to customize the default rendering of group summaries",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "header",
      "props": {
        "isMobile": "boolean",
        "props": {
          "headers": "DataTableHeader[]",
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
          "mobile": "boolean",
          "showGroupBy": "boolean",
          "someItems": "boolean",
          "everyItem": "boolean"
        },
        "on": {
          "sort": "(value: string) => void",
          "group": "(value: string) => void",
          "toggle-select-all": "(value: boolean) => void"
        }
      },
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "header.<name>",
      "props": {
        "header": "DataTableHeader"
      },
      "description": {
        "en": "Slot to customize a specific header column",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "header.data-table-select",
      "props": {
        "isMobile": "boolean",
        "props": {
          "value": "boolean",
          "indeterminate": "boolean"
        },
        "on": {
          "input": "(value: boolean) => void"
        }
      },
      "description": {
        "en": "Slot to replace the default `v-simple-checkbox` in header",
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
        "select": "(v: boolean) => void",
        "headers": "DataTableHeader[]"
      },
      "description": {
        "en": "Slot to replace the default rendering of a row",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "item.<name>",
      "props": {
        "isMobile": "boolean",
        "item": "any",
        "header": "DataTableHeader",
        "value": "any"
      },
      "description": {
        "en": "Slot to customize a specific column",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "item.data-table-expand",
      "props": {
        "expand": "(v: boolean) => void",
        "index": "number",
        "item": "any",
        "isExpanded": "boolean",
        "isMobile": "boolean",
        "isSelected": "boolean",
        "select": "(v: boolean) => void",
        "headers": "DataTableHeader[]"
      },
      "description": {
        "en": "Slot to replace the default `v-icon` used when expanding rows",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "item.data-table-select",
      "props": {
        "expand": "(v: boolean) => void",
        "index": "number",
        "item": "any",
        "isExpanded": "boolean",
        "isMobile": "boolean",
        "isSelected": "boolean",
        "select": "(v: boolean) => void",
        "headers": "DataTableHeader[]"
      },
      "description": {
        "en": "Slot to replace the default `v-simple-checkbox` used when selecting rows",
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
    },
    {
      "name": "progress",
      "description": {
        "en": "Slot to replace the default `<v-progress-linear>` component",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "top",
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
        "isMobile": "boolean"
      },
      "description": {
        "en": "Slot to add content above the table",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "events": [
    {
      "name": "click:row",
      "source": "v-data-table",
      "value": "any, {\n  expand: (value: boolean) => void,\n  headers: DataTableHeader[],\n  isExpanded: boolean,\n  isMobile: boolean,\n  isSelected: boolean,\n  item: any,\n  select: (value: boolean) => void\n}",
      "description": {
        "en": "Emits when a table row is clicked. This event provides 2 arguments: the first is the item data that was clicked and the second is the other related data provided by the `item` slot. **NOTE:** will not emit when table rows are defined through a slot such as `item` or `body`.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "contextmenu:row",
      "source": "v-data-table",
      "value": "MouseEvent, {\n  expand: (value: boolean) => void,\n  headers: DataTableHeader[],\n  isExpanded: boolean,\n  isMobile: boolean,\n  isSelected: boolean,\n  item: any,\n  select: (value: boolean) => void\n}",
      "description": {
        "en": "Emits when a table row is right-clicked. The item for the row is included. **NOTE:** will not emit when table rows are defined through a slot such as `item` or `body`.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
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
      "name": "dblclick:row",
      "source": "v-data-table",
      "value": "MouseEvent, {\n  expand: (value: boolean) => void,\n  headers: DataTableHeader[],\n  isExpanded: boolean,\n  isMobile: boolean,\n  isSelected: boolean,\n  item: any,\n  select: (value: boolean) => void\n}",
      "description": {
        "en": "Emits when a table row is double-clicked. The item for the row is included. **NOTE:** will not emit when table rows are defined through a slot such as `item` or `body`.",
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
  "name": "v-data-table",
  "sass": [
    {
      "name": "$data-table-border-radius",
      "default": "$border-radius-root !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$data-table-dense-header-height",
      "default": "32px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$data-table-dense-row-height",
      "default": "$data-table-dense-header-height !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$data-table-expanded-content-box-shadow",
      "default": "inset 0px 4px 8px -5px rgba(50, 50, 50, 0.75), inset 0px -4px 8px -5px rgba(50, 50, 50, 0.75) !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$data-table-header-mobile-select-chip-height",
      "default": "24px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$data-table-header-mobile-select-margin-bottom",
      "default": "8px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$data-table-header-mobile-select-max-width",
      "default": "56px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$data-table-header-sort-badge-height",
      "default": "18px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$data-table-header-sort-badge-min-height",
      "default": "18px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$data-table-header-sort-badge-min-width",
      "default": "18px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$data-table-header-sort-badge-width",
      "default": "18px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$data-table-mobile-row-header-font-weight",
      "default": "600 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$data-table-mobile-row-min-height",
      "default": "48px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$data-table-progress-border-radius",
      "default": "$data-table-border-radius $data-table-border-radius 0 0 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$data-table-regular-header-height",
      "default": "48px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$data-table-regular-row-height",
      "default": "48px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$data-table-row-group-children-td-height",
      "default": "35px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$data-table-scroll-bar-width",
      "default": "17px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$edit-dialog-content-padding",
      "default": "0 16px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$edit-dialog-actions-padding",
      "default": "8px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$data-table-regular-header-font-size",
      "default": "map-deep-get($headings, 'caption', 'size') !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$data-table-regular-row-font-size",
      "default": "map-deep-get($headings, 'subtitle-2', 'size') !default;",
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