module.exports = {
  "props": [
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
      "name": "divider",
      "type": "string",
      "default": "'/'",
      "source": "v-breadcrumbs",
      "description": {
        "en": "Specifies the dividing character between items.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "items",
      "type": "array",
      "default": [],
      "source": "v-breadcrumbs",
      "example": [
        {
          "disabled": "boolean",
          "exact": "boolean",
          "href": "string",
          "link": "boolean",
          "text": "string | number",
          "to": "string | object"
        }
      ],
      "description": {
        "en": "An array of objects for each breadcrumb.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "large",
      "type": "boolean",
      "default": "false",
      "source": "v-breadcrumbs",
      "description": {
        "en": "Increase the font-size of the breadcrumb item text to 16px (14px default).",
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
    }
  ],
  "mixins": [
    "themeable"
  ],
  "slots": [
    {
      "name": "default",
      "description": {
        "en": "The default Vue slot.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "divider",
      "description": {
        "en": "The slot used for dividers.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "item",
      "props": {
        "item": "any[]"
      },
      "description": {
        "en": "The slot used to override default `v-breadcrumbs-item` behavior when using the **items** prop.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "events": [],
  "functions": [],
  "name": "v-breadcrumbs",
  "sass": [
    {
      "name": "$breadcrumbs-flex",
      "default": "0 1 auto !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$breadcrumbs-padding",
      "default": "18px 12px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$breadcrumbs-even-child-padding",
      "default": "0 12px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$breadcrumbs-item-font-size",
      "default": "14px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$breadcrumbs-item-large-font-size",
      "default": "16px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$breadcrumbs-margin",
      "default": "0 !default;",
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