module.exports = {
  "props": [
    {
      "name": "disable-items-per-page",
      "type": "boolean",
      "default": "false",
      "source": "v-data-footer",
      "description": {
        "en": "Disables items-per-page dropdown",
        "zh-Hans": ""
      }
    },
    {
      "name": "disable-pagination",
      "type": "boolean",
      "default": "false",
      "source": "v-data-footer",
      "description": {
        "en": "Disables pagination buttons",
        "zh-Hans": ""
      }
    },
    {
      "name": "first-icon",
      "type": "string",
      "default": "'$first'",
      "source": "v-data-footer",
      "description": {
        "en": "First icon",
        "zh-Hans": ""
      }
    },
    {
      "name": "items-per-page-all-text",
      "type": "string",
      "default": "'$vuetify.dataFooter.itemsPerPageAll'",
      "source": "v-data-footer",
      "description": {
        "en": "Text for 'All' option in items-per-page dropdown",
        "zh-Hans": ""
      }
    },
    {
      "name": "items-per-page-options",
      "type": "array",
      "default": [
        5,
        10,
        15,
        -1
      ],
      "source": "v-data-footer",
      "description": {
        "en": "Array of options to show in the items-per-page dropdown",
        "zh-Hans": ""
      }
    },
    {
      "name": "items-per-page-text",
      "type": "string",
      "default": "'$vuetify.dataFooter.itemsPerPageText'",
      "source": "v-data-footer",
      "description": {
        "en": "Text for items-per-page dropdown",
        "zh-Hans": ""
      }
    },
    {
      "name": "last-icon",
      "type": "string",
      "default": "'$last'",
      "source": "v-data-footer",
      "description": {
        "en": "Last icon",
        "zh-Hans": ""
      }
    },
    {
      "name": "next-icon",
      "type": "string",
      "default": "'$next'",
      "source": "v-data-footer",
      "description": {
        "en": "Next icon",
        "zh-Hans": ""
      }
    },
    {
      "name": "options",
      "type": "object",
      "default": "undefined",
      "source": "v-data-footer",
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
        "en": "DataOptions",
        "zh-Hans": ""
      }
    },
    {
      "name": "page-text",
      "type": "string",
      "default": "'$vuetify.dataFooter.pageText'",
      "source": "v-data-footer",
      "description": {
        "en": "",
        "zh-Hans": ""
      }
    },
    {
      "name": "pagination",
      "type": "object",
      "default": "undefined",
      "source": "v-data-footer",
      "example": {
        "page": "number",
        "itemsPerPage": "number",
        "pageStart": "number",
        "pageStop": "number",
        "pageCount": "number",
        "itemsLength": "number"
      },
      "description": {
        "en": "DataPagination",
        "zh-Hans": ""
      }
    },
    {
      "name": "prev-icon",
      "type": "string",
      "default": "'$prev'",
      "source": "v-data-footer",
      "description": {
        "en": "Previous icon",
        "zh-Hans": ""
      }
    },
    {
      "name": "show-current-page",
      "type": "boolean",
      "default": "false",
      "source": "v-data-footer",
      "description": {
        "en": "Show current page number between prev/next icons",
        "zh-Hans": ""
      }
    },
    {
      "name": "show-first-last-page",
      "type": "boolean",
      "default": "false",
      "source": "v-data-footer",
      "description": {
        "en": "Show first/last icons",
        "zh-Hans": ""
      }
    }
  ],
  "mixins": [],
  "slots": [
    {
      "name": "page-text",
      "props": {
        "pageStart": "number",
        "pageStop": "number",
        "itemsLength": "number"
      },
      "description": {
        "en": "Defines content for the items-per-page text",
        "zh-Hans": ""
      }
    },
    {
      "name": "prepend",
      "description": {
        "en": "Adds content to the empty space in the footer",
        "zh-Hans": ""
      }
    }
  ],
  "events": [
    {
      "name": "update:options",
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
        "en": "The `.sync` event for `options` prop",
        "zh-Hans": ""
      }
    }
  ],
  "functions": [],
  "name": "v-data-footer",
  "sass": [],
  "component": true
}