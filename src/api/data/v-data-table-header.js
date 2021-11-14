module.exports = {
  "props": [
    {
      "name": "checkbox-color",
      "type": "string",
      "default": "undefined",
      "source": "v-data-table-header",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "disable-sort",
      "type": "boolean",
      "default": "false",
      "source": "v-data-table-header",
      "description": {
        "en": "Toggles rendering of sort button",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "every-item",
      "type": "boolean",
      "default": "false",
      "source": "v-data-table-header",
      "description": {
        "en": "Indicates if all items in table are selected",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "headers",
      "type": "array",
      "default": [],
      "source": "v-data-table-header",
      "description": {
        "en": "Array of header items to display",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "mobile",
      "type": "boolean",
      "default": "false",
      "source": "v-data-table-header",
      "description": {
        "en": "Renders mobile view of headers",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "show-group-by",
      "type": "boolean",
      "default": "false",
      "source": "v-data-table-header",
      "description": {
        "en": "Shows group by button",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "single-select",
      "type": "boolean",
      "default": "false",
      "source": "v-data-table-header",
      "description": {
        "en": "Toggles rendering of select-all checkbox",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "some-items",
      "type": "boolean",
      "default": "false",
      "source": "v-data-table-header",
      "description": {
        "en": "Indicates if one or more items in table are selected",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "sort-by-text",
      "default": "'Sort by'",
      "source": "v-data-table-header",
      "type": "string",
      "description": {
        "en": "Sets the label text used by the default sort-by selector when `v-data-table` is rendering the mobile view",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "sort-icon",
      "type": "string",
      "default": "'$sort'",
      "source": "v-data-table-header",
      "description": {
        "en": "Icon used for sort button",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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