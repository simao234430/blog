module.exports = {
  "props": [
    {
      "name": "append-icon",
      "type": "string",
      "default": "undefined",
      "source": "v-input",
      "description": {
        "en": "Appends an icon to the component, uses the same syntax as `v-icon`",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "background-color",
      "type": "string",
      "default": "undefined",
      "source": "v-input",
      "description": {
        "en": "Changes the background-color of the input",
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
      "name": "dark",
      "type": "boolean",
      "default": "false",
      "source": "themeable",
      "description": {
        "en": "Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "dense",
      "type": "boolean",
      "default": "false",
      "source": "v-input",
      "description": {
        "en": "Reduces the input height",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "disabled",
      "type": "boolean",
      "default": false,
      "source": "validatable",
      "description": {
        "en": "Disable the input",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "error",
      "type": "boolean",
      "default": "false",
      "source": "validatable",
      "description": {
        "en": "Puts the input in a manual error state",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "error-count",
      "type": [
        "number",
        "string"
      ],
      "default": 1,
      "source": "validatable",
      "description": {
        "en": "The total number of errors that should display at once",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "error-messages",
      "type": [
        "string",
        "array"
      ],
      "default": [],
      "source": "validatable",
      "description": {
        "en": "Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "height",
      "type": [
        "number",
        "string"
      ],
      "default": "undefined",
      "source": "v-input",
      "description": {
        "en": "Sets the height of the input",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "hide-details",
      "type": [
        "boolean",
        "string"
      ],
      "default": "undefined",
      "source": "v-input",
      "description": {
        "en": "Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "hint",
      "type": "string",
      "default": "undefined",
      "source": "v-input",
      "description": {
        "en": "Hint text",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "id",
      "type": "string",
      "default": "undefined",
      "source": "v-input",
      "description": {
        "en": "Sets the DOM id on the component",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "label",
      "type": "string",
      "source": "v-input",
      "description": {
        "en": "Sets input label",
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
      "name": "loading",
      "type": "boolean",
      "default": "false",
      "source": "v-input",
      "description": {
        "en": "Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "messages",
      "type": [
        "string",
        "array"
      ],
      "default": [],
      "source": "validatable",
      "description": {
        "en": "Displays a list of messages or message if using a string",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "persistent-hint",
      "type": "boolean",
      "default": "false",
      "source": "v-input",
      "description": {
        "en": "Forces hint to always be visible",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "prepend-icon",
      "type": "string",
      "default": "undefined",
      "source": "v-input",
      "description": {
        "en": "Prepends an icon to the component, uses the same syntax as `v-icon`",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "readonly",
      "type": "boolean",
      "default": false,
      "source": "validatable",
      "description": {
        "en": "Puts input in readonly state",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "rules",
      "type": "array",
      "default": [],
      "source": "validatable",
      "description": {
        "en": "Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string`",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "success",
      "type": "boolean",
      "default": "false",
      "source": "validatable",
      "description": {
        "en": "Puts the input in a manual success state",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "success-messages",
      "type": [
        "string",
        "array"
      ],
      "default": [],
      "source": "validatable",
      "description": {
        "en": "Puts the input in a success state and passes through custom success messages.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "validate-on-blur",
      "type": "boolean",
      "default": "false",
      "source": "validatable",
      "description": {
        "en": "Delays validation until blur event",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "value",
      "type": "any",
      "source": "v-input",
      "description": {
        "en": "The input's value",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "mixins": [
    "colorable",
    "registrable-inject",
    "themeable",
    "validatable"
  ],
  "slots": [
    {
      "name": "append",
      "source": "v-input",
      "description": {
        "en": "Adds an item inside the input and after input content",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "default",
      "source": "v-input",
      "description": {
        "en": "The default Vue slot.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "label",
      "source": "v-input",
      "description": {
        "en": "Replaces the default label",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "message",
      "props": {
        "key": "number, // the messages index",
        "message": "string, // the message"
      },
      "source": "v-input",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "prepend",
      "source": "v-input",
      "description": {
        "en": "Adds an item outside the input and before input content",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "events": [
    {
      "name": "click",
      "source": "v-input",
      "value": "MouseEvent",
      "description": {
        "en": "Emitted when input is clicked",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "click:append",
      "source": "v-input",
      "value": "Event",
      "description": {
        "en": "Emitted when appended icon is clicked",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "click:prepend",
      "source": "v-input",
      "value": "Event",
      "description": {
        "en": "Emitted when prepended icon is clicked",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "mousedown",
      "source": "v-input",
      "value": "MouseEvent",
      "description": {
        "en": "Emitted when click is pressed",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "mouseup",
      "source": "v-input",
      "value": "MouseEvent",
      "description": {
        "en": "Emitted when click is released",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "update:error",
      "source": "validatable",
      "value": "boolean",
      "description": {
        "en": "The `error.sync` event",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "functions": [],
  "name": "v-input",
  "sass": [
    {
      "name": "$input-font-size",
      "default": "16px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$input-letter-spacing",
      "default": "normal !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$input-text-align",
      "default": "left !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$input-max-height",
      "default": "32px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$input-label-height",
      "default": "20px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$input-label-letter-spacing",
      "default": "normal !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$input-prepend-append-outer-margin",
      "default": "9px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$input-icon-height",
      "default": "24px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$input-icon-min-width",
      "default": "24px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$input-icon-width",
      "default": "24px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$input-slot-margin-bottom",
      "default": "8px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$input-dense-slot-margin-bottom",
      "default": "4px !default;",
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