module.exports = {
  "props": [
    {
      "name": "boilerplate",
      "type": "boolean",
      "default": "false",
      "source": "v-skeleton-loader",
      "description": {
        "en": "Remove the loading animation from the skeleton",
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
      "name": "elevation",
      "type": [
        "number",
        "string"
      ],
      "default": "undefined",
      "source": "elevatable",
      "description": {
        "en": "Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).",
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
      "source": "measurable",
      "description": {
        "en": "Sets the height for the component.",
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
      "type": "boolean",
      "default": "false",
      "source": "v-skeleton-loader",
      "description": {
        "en": "Applies a loading animation with a on-hover loading cursor. A value of **false** will only work when there is content in the `default` slot.",
        "zh-Hans": ""
      }
    },
    {
      "name": "max-height",
      "type": [
        "number",
        "string"
      ],
      "default": "undefined",
      "source": "measurable",
      "description": {
        "en": "Sets the maximum height for the component.",
        "zh-Hans": ""
      }
    },
    {
      "name": "max-width",
      "type": [
        "number",
        "string"
      ],
      "default": "undefined",
      "source": "measurable",
      "description": {
        "en": "Sets the maximum width for the component.",
        "zh-Hans": ""
      }
    },
    {
      "name": "min-height",
      "type": [
        "number",
        "string"
      ],
      "default": "undefined",
      "source": "measurable",
      "description": {
        "en": "Sets the minimum height for the component.",
        "zh-Hans": ""
      }
    },
    {
      "name": "min-width",
      "type": [
        "number",
        "string"
      ],
      "default": "undefined",
      "source": "measurable",
      "description": {
        "en": "Sets the minimum width for the component.",
        "zh-Hans": ""
      }
    },
    {
      "name": "tile",
      "type": "boolean",
      "default": "false",
      "source": "v-skeleton-loader",
      "description": {
        "en": "Removes the component's border-radius",
        "zh-Hans": ""
      }
    },
    {
      "name": "transition",
      "type": "string",
      "default": "undefined",
      "source": "v-skeleton-loader",
      "description": {
        "en": "Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own.",
        "zh-Hans": ""
      }
    },
    {
      "name": "type",
      "type": "string",
      "default": "undefined",
      "source": "v-skeleton-loader",
      "example": {
        "actions": "button@2",
        "article": "heading, paragraph",
        "avatar": "avatar",
        "button": "button",
        "card": "image, card-heading",
        "card-avatar": "image, list-item-avatar",
        "card-heading": "heading",
        "chip": "chip",
        "date-picker": "list-item, card-heading, divider, date-picker-options, date-picker-days, actions",
        "date-picker-options": "text, avatar@2",
        "date-picker-days": "avatar@28",
        "heading": "heading",
        "image": "image",
        "list-item": "text",
        "list-item-avatar": "avatar, text",
        "list-item-two-line": "sentences",
        "list-item-avatar-two-line": "avatar, sentences",
        "list-item-three-line": "paragraph",
        "list-item-avatar-three-line": "avatar, paragraph",
        "paragraph": "text@3",
        "sentences": "text@2",
        "table": "table-heading, table-thead, table-tbody, table-tfoot",
        "table-heading": "heading, text",
        "table-thead": "heading@6",
        "table-tbody": "table-row-divider@6",
        "table-row-divider": "table-row, divider",
        "table-row": "table-cell@6",
        "table-cell": "text",
        "table-tfoot": "text@2, avatar@2",
        "text": "text"
      },
      "description": {
        "en": "A string delimited list of skeleton components to create such as `type=\"text@3\"` or `type=\"card, list-item\"`. Will recursively generate a corresponding skeleton from the provided string. Also supports short-hand for multiple elements such as **article@3** and **paragraph@2** which will generate 3 _article_ skeletons and 2 _paragraph_ skeletons. Please see below for a list of available pre-defined options.",
        "zh-Hans": ""
      }
    },
    {
      "name": "types",
      "type": "object",
      "default": {},
      "source": "v-skeleton-loader",
      "description": {
        "en": "A custom types object that will be combined with the pre-defined options. For a list of available pre-defined options, see the **type** prop.",
        "zh-Hans": ""
      }
    },
    {
      "name": "width",
      "type": [
        "number",
        "string"
      ],
      "default": "undefined",
      "source": "measurable",
      "description": {
        "en": "Sets the width for the component.",
        "zh-Hans": ""
      }
    }
  ],
  "mixins": [
    "elevatable",
    "measurable",
    "themeable"
  ],
  "slots": [
    {
      "name": "default",
      "description": {
        "en": "The default Vue slot.",
        "zh-Hans": ""
      }
    }
  ],
  "events": [],
  "functions": [],
  "name": "v-skeleton-loader",
  "sass": [],
  "component": true
}