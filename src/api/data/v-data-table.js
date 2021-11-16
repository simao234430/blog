module.exports = {
  "props": [
    {
      "name": "calculate-widths",
      "type": "boolean",
      "default": "false",
      "source": "v-data-table",
      "description": {
        "en": "Enables calculation of column widths. `widths` property will be available in select scoped slots",
        "zh-Hans": ""
      }
    },
    {
      "name": "caption",
      "type": "string",
      "default": "undefined",
      "source": "v-data-table",
      "description": {
        "en": "Set the caption (using `<caption>`)",
        "zh-Hans": ""
      }
    },
    {
      "name": "checkbox-color",
      "type": "string",
      "default": "undefined",
      "source": "v-data",
      "description": {
        "en": "Set the color of the checkboxes (showSelect must be used)",
        "zh-Hans": ""
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
      "name": "dense",
      "type": "boolean",
      "default": "false",
      "source": "v-data-table",
      "description": {
        "en": "Decreases the height of rows",
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
      "name": "expand-icon",
      "type": "string",
      "default": "'$expand'",
      "source": "v-data-table",
      "description": {
        "en": "Icon used for expand toggle button.",
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
      "name": "fixed-header",
      "type": "boolean",
      "default": "false",
      "source": "v-data-table",
      "description": {
        "en": "Fixed header to top of table. **NOTE:** Does not work in IE11",
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
      "name": "header-props",
      "type": "object",
      "default": "undefined",
      "source": "v-data-table",
      "description": {
        "en": "Pass props to the default header. See [`v-data-table-header` API](/api/v-data-table-header) for more information",
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
    {
      "name": "headers-length",
      "type": "number",
      "default": "undefined",
      "source": "v-data-table",
      "description": {
        "en": "Can be used in combination with `hide-default-header` to specify the number of columns in the table to allow expansion rows and loading bar to function properly",
        "zh-Hans": ""
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
      "name": "hide-default-header",
      "type": "boolean",
      "default": "false",
      "source": "v-data-table",
      "description": {
        "en": "Hide the default headers",
        "zh-Hans": ""
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
      "name": "loader-height",
      "type": [
        "number",
        "string"
      ],
      "default": 4,
      "source": "loadable",
      "description": {
        "en": "Specifies the height of the loader",
        "zh-Hans": ""
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
      "name": "show-expand",
      "type": "boolean",
      "default": "false",
      "source": "v-data-table",
      "description": {
        "en": "Shows the expand toggle in default rows",
        "zh-Hans": ""
      }
    },
    {
      "name": "show-group-by",
      "type": "boolean",
      "default": "false",
      "source": "v-data-table",
      "description": {
        "en": "Shows the group by toggle in the header and enables grouped rows",
        "zh-Hans": ""
      }
    },
    {
      "name": "show-select",
      "type": "boolean",
      "default": "false",
      "source": "v-data-table",
      "description": {
        "en": "Shows the select checkboxes in both the header and rows (if using default rows)",
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
        "zh-Hans": ""
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
        "zh-Hans": ""
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
        "zh-Hans": ""
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
        "zh-Hans": ""
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
        "zh-Hans": ""
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
      "description": {
        "en": "Slot to customize footer page text",
        "zh-Hans": ""
      }
    },
    {
      "name": "footer.prepend",
      "description": {
        "en": "Adds content to the empty space in the footer",
        "zh-Hans": ""
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
        "zh-Hans": ""
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
        "zh-Hans": ""
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
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
    {
      "name": "header.<name>",
      "props": {
        "header": "DataTableHeader"
      },
      "description": {
        "en": "Slot to customize a specific header column",
        "zh-Hans": ""
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
        "select": "(v: boolean) => void",
        "headers": "DataTableHeader[]"
      },
      "description": {
        "en": "Slot to replace the default rendering of a row",
        "zh-Hans": ""
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
        "zh-Hans": ""
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
        "zh-Hans": ""
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
    },
    {
      "name": "progress",
      "description": {
        "en": "Slot to replace the default `<v-progress-linear>` component",
        "zh-Hans": ""
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
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
    {
      "name": "contextmenu:row",
      "source": "v-data-table",
      "value": "MouseEvent, {\n  expand: (value: boolean) => void,\n  headers: DataTableHeader[],\n  isExpanded: boolean,\n  isMobile: boolean,\n  isSelected: boolean,\n  item: any,\n  select: (value: boolean) => void\n}",
      "description": {
        "en": "Emits when a table row is right-clicked. The item for the row is included. **NOTE:** will not emit when table rows are defined through a slot such as `item` or `body`.",
        "zh-Hans": ""
      }
    },
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
      "name": "dblclick:row",
      "source": "v-data-table",
      "value": "MouseEvent, {\n  expand: (value: boolean) => void,\n  headers: DataTableHeader[],\n  isExpanded: boolean,\n  isMobile: boolean,\n  isSelected: boolean,\n  item: any,\n  select: (value: boolean) => void\n}",
      "description": {
        "en": "Emits when a table row is double-clicked. The item for the row is included. **NOTE:** will not emit when table rows are defined through a slot such as `item` or `body`.",
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
  "name": "v-data-table",
  "sass": [],
  "component": true
}