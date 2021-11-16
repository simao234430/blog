module.exports = {
  "props": [
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
      "name": "divider",
      "type": "string",
      "default": "'/'",
      "source": "v-breadcrumbs",
      "description": {
        "en": "Specifies the dividing character between items.",
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
    {
      "name": "large",
      "type": "boolean",
      "default": "false",
      "source": "v-breadcrumbs",
      "description": {
        "en": "Increase the font-size of the breadcrumb item text to 16px (14px default).",
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
        "zh-Hans": ""
      }
    },
    {
      "name": "divider",
      "description": {
        "en": "The slot used for dividers.",
        "zh-Hans": ""
      }
    },
    {
      "name": "item",
      "props": {
        "item": "any[]"
      },
      "description": {
        "en": "The slot used to override default `v-breadcrumbs-item` behavior when using the **items** prop.",
        "zh-Hans": ""
      }
    }
  ],
  "events": [],
  "functions": [],
  "name": "v-breadcrumbs",
  "sass": [],
  "component": true
}