module.exports = {
  "props": [
    {
      "name": "checkbox-color",
      "type": "string",
      "default": "undefined",
      "source": "v-data-table-header",
      "description": {
        "en": "",
        "zh-Hans": ""
      }
    },
    {
      "name": "disable-sort",
      "type": "boolean",
      "default": "false",
      "source": "v-data-table-header",
      "description": {
        "en": "Toggles rendering of sort button",
        "zh-Hans": ""
      }
    },
    {
      "name": "every-item",
      "type": "boolean",
      "default": "false",
      "source": "v-data-table-header",
      "description": {
        "en": "Indicates if all items in table are selected",
        "zh-Hans": ""
      }
    },
    {
      "name": "headers",
      "type": "array",
      "default": [],
      "source": "v-data-table-header",
      "description": {
        "en": "Array of header items to display",
        "zh-Hans": ""
      }
    },
    {
      "name": "mobile",
      "type": "boolean",
      "default": "false",
      "source": "v-data-table-header",
      "description": {
        "en": "Renders mobile view of headers",
        "zh-Hans": ""
      }
    },
    {
      "name": "options",
      "type": "object",
      "default": {
        "page": 1,
        "itemsPerPage": 10,
        "sortBy": [],
        "sortDesc": [],
        "groupBy": [],
        "groupDesc": [],
        "multiSort": false,
        "mustSort": false
      },
      "source": "v-data-table-header",
      "description": {
        "en": "Options object. Identical to the one on `v-data-table`",
        "zh-Hans": ""
      }
    },
    {
      "name": "show-group-by",
      "type": "boolean",
      "default": "false",
      "source": "v-data-table-header",
      "description": {
        "en": "Shows group by button",
        "zh-Hans": ""
      }
    },
    {
      "name": "single-select",
      "type": "boolean",
      "default": "false",
      "source": "v-data-table-header",
      "description": {
        "en": "Toggles rendering of select-all checkbox",
        "zh-Hans": ""
      }
    },
    {
      "name": "some-items",
      "type": "boolean",
      "default": "false",
      "source": "v-data-table-header",
      "description": {
        "en": "Indicates if one or more items in table are selected",
        "zh-Hans": ""
      }
    },
    {
      "name": "sort-by-text",
      "default": "'Sort by'",
      "source": "v-data-table-header",
      "type": "string",
      "description": {
        "en": "Sets the label text used by the default sort-by selector when `v-data-table` is rendering the mobile view",
        "zh-Hans": ""
      }
    },
    {
      "name": "sort-icon",
      "type": "string",
      "default": "'$sort'",
      "source": "v-data-table-header",
      "description": {
        "en": "Icon used for sort button",
        "zh-Hans": ""
      }
    }
  ],
  "mixins": [],
  "slots": [],
  "events": [],
  "functions": [],
  "name": "v-data-table-header",
  "sass": [],
  "component": true
}