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
      "name": "append-outer-icon",
      "type": "string",
      "default": "undefined",
      "source": "v-text-field",
      "description": {
        "en": "Appends an icon to the outside the component's input, uses same syntax as `v-icon`",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "auto-grow",
      "type": "boolean",
      "default": "false",
      "source": "v-textarea",
      "description": {
        "en": "Automatically grow the textarea depending on amount of text",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "autofocus",
      "type": "boolean",
      "default": "false",
      "source": "v-text-field",
      "description": {
        "en": "Enables autofocus",
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
      "name": "clear-icon",
      "type": "string",
      "default": "'$clear'",
      "source": "v-text-field",
      "description": {
        "en": "Applied when using **clearable** and the input is dirty",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "clearable",
      "type": "boolean",
      "default": "false",
      "source": "v-text-field",
      "description": {
        "en": "Add input clear functionality, default icon is Material Design Icons **mdi-clear**",
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
      "name": "counter",
      "type": [
        "boolean",
        "number",
        "string"
      ],
      "default": "undefined",
      "source": "v-text-field",
      "description": {
        "en": "Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "counter-value",
      "type": "function",
      "default": "null",
      "source": "v-text-field",
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
      "name": "filled",
      "type": "boolean",
      "default": "false",
      "source": "v-text-field",
      "description": {
        "en": "Applies the alternate filled input style",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "flat",
      "type": "boolean",
      "default": "false",
      "source": "v-text-field",
      "description": {
        "en": "Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "full-width",
      "type": "boolean",
      "default": "false",
      "source": "v-text-field",
      "description": {
        "en": "Designates input type as full-width",
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
      "name": "loader-height",
      "type": [
        "number",
        "string"
      ],
      "default": 2,
      "source": "loadable",
      "description": {
        "en": "Specifies the height of the loader",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "loading",
      "type": [
        "boolean",
        "string"
      ],
      "default": false,
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
      "name": "no-resize",
      "type": "boolean",
      "default": "false",
      "source": "v-textarea",
      "description": {
        "en": "Remove resize handle",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "outlined",
      "type": "boolean",
      "default": "false",
      "source": "v-text-field",
      "description": {
        "en": "Applies the outlined style to the input",
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
      "name": "persistent-placeholder",
      "type": "boolean",
      "default": "false",
      "source": "v-text-field",
      "description": {
        "en": "Forces placeholder to always be visible",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "placeholder",
      "type": "string",
      "default": "undefined",
      "source": "v-text-field",
      "description": {
        "en": "Sets the input's placeholder text",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "prefix",
      "type": "string",
      "default": "undefined",
      "source": "v-text-field",
      "description": {
        "en": "Displays prefix text",
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
      "name": "prepend-inner-icon",
      "type": "string",
      "default": "undefined",
      "source": "v-text-field",
      "description": {
        "en": "Prepends an icon inside the component's input, uses the same syntax as `v-icon`",
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
      "name": "reverse",
      "type": "boolean",
      "default": "false",
      "source": "v-text-field",
      "description": {
        "en": "Reverses the input orientation",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "rounded",
      "type": "boolean",
      "default": "false",
      "source": "v-text-field",
      "description": {
        "en": "Adds a border radius to the input",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "row-height",
      "type": [
        "number",
        "string"
      ],
      "default": 24,
      "source": "v-textarea",
      "description": {
        "en": "Height value for each row. Requires the use of the **auto-grow** prop.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "rows",
      "type": [
        "number",
        "string"
      ],
      "default": 5,
      "source": "v-textarea",
      "description": {
        "en": "Default row count",
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
      "name": "shaped",
      "type": "boolean",
      "default": "false",
      "source": "v-text-field",
      "description": {
        "en": "Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled`",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "single-line",
      "type": "boolean",
      "default": "false",
      "source": "v-text-field",
      "description": {
        "en": "Label does not move on focus/dirty",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "solo",
      "type": "boolean",
      "default": "false",
      "source": "v-text-field",
      "description": {
        "en": "Changes the style of the input",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "solo-inverted",
      "type": "boolean",
      "default": "false",
      "source": "v-text-field",
      "description": {
        "en": "Reduces element opacity until focused",
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
      "name": "suffix",
      "type": "string",
      "default": "undefined",
      "source": "v-text-field",
      "description": {
        "en": "Displays suffix text",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "type",
      "type": "string",
      "default": "'text'",
      "source": "v-text-field",
      "description": {
        "en": "Sets input type",
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
    "intersectable",
    "loadable",
    "registrable-inject",
    "themeable",
    "v-input",
    "v-text-field",
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
      "name": "append-outer",
      "source": "v-text-field",
      "description": {
        "en": "Adds an item outside the input and after input content",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "counter",
      "source": "v-text-field",
      "props": {
        "props": {
          "dark": "boolean",
          "light": "boolean",
          "max": "string | number",
          "value": "string"
        }
      },
      "description": {
        "en": "",
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
    },
    {
      "name": "prepend-inner",
      "source": "v-text-field",
      "description": {
        "en": "Adds an item inside the input and before input content",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "progress",
      "source": "v-text-field",
      "description": {
        "en": "Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False)",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "events": [
    {
      "name": "blur",
      "source": "v-text-field",
      "value": "Event",
      "description": {
        "en": "Emitted when the input is blurred",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "change",
      "source": "v-text-field",
      "value": "any",
      "description": {
        "en": "Emitted when the input is changed by user interaction",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
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
      "name": "click:append-outer",
      "source": "v-text-field",
      "value": "Event",
      "description": {
        "en": "Emitted when appended outer icon is clicked",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "click:clear",
      "source": "v-text-field",
      "value": "Event",
      "description": {
        "en": "Emitted when clearable icon clicked",
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
      "name": "click:prepend-inner",
      "source": "v-text-field",
      "value": "Event",
      "description": {
        "en": "Emitted when prepended inner icon is clicked",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "focus",
      "source": "v-text-field",
      "value": "Event",
      "description": {
        "en": "Emitted when component is focused",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "input",
      "source": "v-text-field",
      "value": "any",
      "description": {
        "en": "The updated bound model",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "keydown",
      "source": "v-text-field",
      "value": "KeyboardEvent",
      "description": {
        "en": "Emitted when **any** key is pressed",
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
  "name": "v-textarea",
  "sass": [
    {
      "name": "$textarea-box-enclosed-prefix-margin-top",
      "default": "24px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$textarea-box-enclosed-single-outlined-label-top",
      "default": "18px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$textarea-box-enclosed-single-outlined-margin-top",
      "default": "10px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$textarea-dense-box-enclosed-single-outlined-margin-top",
      "default": "6px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$textarea-dense-append-prepend-margin-top",
      "default": "8px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$textarea-enclosed-text-slot-margin",
      "default": "-12px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$textarea-enclosed-text-slot-padding",
      "default": "12px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$textarea-line-height",
      "default": "1.75rem !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$textarea-min-height",
      "default": "32px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$textarea-padding",
      "default": "0 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$textarea-prefix-padding-top",
      "default": "2px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$textarea-solo-append-padding",
      "default": "12px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$textarea-solo-append-prepend-margin-top",
      "default": "12px !default;",
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