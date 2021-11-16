module.exports = {
  "props": [
    {
      "name": "circle",
      "type": "boolean",
      "default": "false",
      "source": "v-pagination",
      "description": {
        "en": "Shape pagination elements as circles",
        "zh-Hans": ""
      }
    },
    {
      "name": "color",
      "type": "string",
      "default": "undefined",
      "source": "colorable",
      "description": {
        "en": "Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).",
        "zh-Hans": ""
      }
    },
    {
      "name": "current-page-aria-label",
      "type": "string",
      "default": "'$vuetify.pagination.ariaLabel.currentPage'",
      "source": "v-pagination",
      "description": {
        "en": "",
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
      "name": "disabled",
      "type": "boolean",
      "default": "false",
      "source": "v-pagination",
      "description": {
        "en": "Disables component",
        "zh-Hans": ""
      }
    },
    {
      "name": "length",
      "type": "number",
      "default": 0,
      "source": "v-pagination",
      "description": {
        "en": "The length of the pagination component",
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
      "name": "next-aria-label",
      "type": "string",
      "default": "'$vuetify.pagination.ariaLabel.next'",
      "source": "v-pagination",
      "description": {
        "en": "",
        "zh-Hans": ""
      }
    },
    {
      "name": "next-icon",
      "type": "string",
      "default": "'$next'",
      "source": "v-pagination",
      "description": {
        "en": "Specify the icon to use for the next icon",
        "zh-Hans": ""
      }
    },
    {
      "name": "page-aria-label",
      "type": "string",
      "default": "'$vuetify.pagination.ariaLabel.page'",
      "source": "v-pagination",
      "description": {
        "en": "",
        "zh-Hans": ""
      }
    },
    {
      "name": "prev-icon",
      "type": "string",
      "default": "'$prev'",
      "source": "v-pagination",
      "description": {
        "en": "Specify the icon to use for the prev icon",
        "zh-Hans": ""
      }
    },
    {
      "name": "previous-aria-label",
      "type": "string",
      "default": "'$vuetify.pagination.ariaLabel.previous'",
      "source": "v-pagination",
      "description": {
        "en": "",
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
    {
      "name": "value",
      "type": "number",
      "default": 0,
      "source": "v-pagination",
      "description": {
        "en": "Current selected page",
        "zh-Hans": ""
      }
    },
    {
      "name": "wrapper-aria-label",
      "type": "string",
      "default": "'$vuetify.pagination.ariaLabel.wrapper'",
      "source": "v-pagination",
      "description": {
        "en": "",
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
    {
      "name": "next",
      "value": "void",
      "description": {
        "en": "Emitted when going to next item",
        "zh-Hans": ""
      }
    },
    {
      "name": "previous",
      "value": "void",
      "description": {
        "en": "Emitted when going to previous item",
        "zh-Hans": ""
      }
    }
  ],
  "functions": [],
  "name": "v-pagination",
  "sass": [],
  "component": true
}