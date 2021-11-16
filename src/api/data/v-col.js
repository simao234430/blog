module.exports = {
  "props": [
    {
      "name": "align-self",
      "type": "string",
      "default": "undefined",
      "source": "v-col",
      "description": {
        "en": "Applies the [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) css property. Available options are **start**, **center**, **end**, **auto**, **baseline** and **stretch**.",
        "zh-Hans": ""
      }
    },
    {
      "name": "cols",
      "type": [
        "boolean",
        "string",
        "number"
      ],
      "default": false,
      "source": "v-col",
      "description": {
        "en": "Sets the default number of columns the component extends. Available options are **1 -> 12** and **auto**.",
        "zh-Hans": ""
      }
    },
    {
      "name": "lg",
      "type": [
        "boolean",
        "string",
        "number"
      ],
      "default": false,
      "source": "v-col",
      "description": {
        "en": "Changes the number of columns on large and greater breakpoints.",
        "zh-Hans": ""
      }
    },
    {
      "name": "md",
      "type": [
        "boolean",
        "string",
        "number"
      ],
      "default": false,
      "source": "v-col",
      "description": {
        "en": "Changes the number of columns on medium and greater breakpoints.",
        "zh-Hans": ""
      }
    },
    {
      "name": "offset",
      "type": [
        "string",
        "number"
      ],
      "default": "undefined",
      "source": "v-col",
      "description": {
        "en": "Sets the default offset for the column.",
        "zh-Hans": ""
      }
    },
    {
      "name": "offset-lg",
      "type": [
        "string",
        "number"
      ],
      "default": "undefined",
      "source": "v-col",
      "description": {
        "en": "Changes the offset of the component on large and greater breakpoints.",
        "zh-Hans": ""
      }
    },
    {
      "name": "offset-md",
      "type": [
        "string",
        "number"
      ],
      "default": "undefined",
      "source": "v-col",
      "description": {
        "en": "Changes the offset of the component on medium and greater breakpoints.",
        "zh-Hans": ""
      }
    },
    {
      "name": "offset-sm",
      "type": [
        "string",
        "number"
      ],
      "default": "undefined",
      "source": "v-col",
      "description": {
        "en": "Changes the offset of the component on small and greater breakpoints.",
        "zh-Hans": ""
      }
    },
    {
      "name": "offset-xl",
      "type": [
        "string",
        "number"
      ],
      "default": "undefined",
      "source": "v-col",
      "description": {
        "en": "Changes the offset of the component on extra large and greater breakpoints.",
        "zh-Hans": ""
      }
    },
    {
      "name": "order",
      "type": [
        "string",
        "number"
      ],
      "default": "undefined",
      "source": "v-col",
      "description": {
        "en": "Sets the default [order](https://developer.mozilla.org/en-US/docs/Web/CSS/order) for the column.",
        "zh-Hans": ""
      }
    },
    {
      "name": "order-lg",
      "type": [
        "string",
        "number"
      ],
      "default": "undefined",
      "source": "v-col",
      "description": {
        "en": "Changes the order of the component on large and greater breakpoints.",
        "zh-Hans": ""
      }
    },
    {
      "name": "order-md",
      "type": [
        "string",
        "number"
      ],
      "default": "undefined",
      "source": "v-col",
      "description": {
        "en": "Changes the order of the component on medium and greater breakpoints.",
        "zh-Hans": ""
      }
    },
    {
      "name": "order-sm",
      "type": [
        "string",
        "number"
      ],
      "default": "undefined",
      "source": "v-col",
      "description": {
        "en": "Changes the order of the component on small and greater breakpoints.",
        "zh-Hans": ""
      }
    },
    {
      "name": "order-xl",
      "type": [
        "string",
        "number"
      ],
      "default": "undefined",
      "source": "v-col",
      "description": {
        "en": "Changes the order of the component on extra large and greater breakpoints.",
        "zh-Hans": ""
      }
    },
    {
      "name": "sm",
      "type": [
        "boolean",
        "string",
        "number"
      ],
      "default": false,
      "source": "v-col",
      "description": {
        "en": "Changes the number of columns on small and greater breakpoints.",
        "zh-Hans": ""
      }
    },
    {
      "name": "tag",
      "type": "string",
      "default": "'div'",
      "source": "v-col",
      "description": {
        "en": "Specify a custom tag used on the root element.",
        "zh-Hans": ""
      }
    },
    {
      "name": "xl",
      "type": [
        "boolean",
        "string",
        "number"
      ],
      "default": false,
      "source": "v-col",
      "description": {
        "en": "Changes the number of columns on extra large and greater breakpoints.",
        "zh-Hans": ""
      }
    }
  ],
  "mixins": [],
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
  "name": "v-col",
  "sass": [],
  "component": true
}