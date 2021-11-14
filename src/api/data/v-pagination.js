module.exports = {
  "props": [
    {
      "name": "circle",
      "type": "boolean",
      "default": "false",
      "source": "v-pagination",
      "description": {
        "en": "Shape pagination elements as circles",
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
      "name": "current-page-aria-label",
      "type": "string",
      "default": "'$vuetify.pagination.ariaLabel.currentPage'",
      "source": "v-pagination",
      "description": {
        "en": "",
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
      "name": "disabled",
      "type": "boolean",
      "default": "false",
      "source": "v-pagination",
      "description": {
        "en": "Disables component",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "length",
      "type": "number",
      "default": 0,
      "source": "v-pagination",
      "description": {
        "en": "The length of the pagination component",
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
      "name": "next-aria-label",
      "type": "string",
      "default": "'$vuetify.pagination.ariaLabel.next'",
      "source": "v-pagination",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "next-icon",
      "type": "string",
      "default": "'$next'",
      "source": "v-pagination",
      "description": {
        "en": "Specify the icon to use for the next icon",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "page-aria-label",
      "type": "string",
      "default": "'$vuetify.pagination.ariaLabel.page'",
      "source": "v-pagination",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "prev-icon",
      "type": "string",
      "default": "'$prev'",
      "source": "v-pagination",
      "description": {
        "en": "Specify the icon to use for the prev icon",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "previous-aria-label",
      "type": "string",
      "default": "'$vuetify.pagination.ariaLabel.previous'",
      "source": "v-pagination",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "total-visible",
      "type": [
        "number",
        "string"
      ],
      "default": "undefined",
      "source": "v-pagination",
      "description": {
        "en": "Specify the max total visible pagination numbers",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "value",
      "type": "number",
      "default": 0,
      "source": "v-pagination",
      "description": {
        "en": "Current selected page",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "wrapper-aria-label",
      "type": "string",
      "default": "'$vuetify.pagination.ariaLabel.wrapper'",
      "source": "v-pagination",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "mixins": [
    "colorable",
    "intersectable",
    "themeable"
  ],
  "slots": [],
  "events": [
    {
      "name": "input",
      "value": "number",
      "description": {
        "en": "The updated bound model",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "next",
      "value": "void",
      "description": {
        "en": "Emitted when going to next item",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "previous",
      "value": "void",
      "description": {
        "en": "Emitted when going to previous item",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "functions": [],
  "name": "v-pagination",
  "sass": [
    {
      "name": "$pagination-border-radius",
      "default": "$border-radius-root !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$pagination-disabled-opacity",
      "default": "0.6 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$pagination-item-font-size",
      "default": "map-deep-get($headings, 'subtitle-1', 'size') !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$pagination-item-height",
      "default": "34px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$pagination-item-margin",
      "default": ".3rem !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$pagination-item-min-width",
      "default": "34px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$pagination-item-padding",
      "default": "0 5px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$pagination-more-height",
      "default": "32px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$pagination-more-margin",
      "default": ".3rem !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$pagination-more-width",
      "default": "32px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$pagination-navigation-disabled-opacity",
      "default": "0.6 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$pagination-navigation-height",
      "default": "32px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$pagination-navigation-margin",
      "default": ".3rem 10px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$pagination-navigation-width",
      "default": "32px !default;",
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