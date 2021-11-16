module.exports = {
  "props": [
    {
      "name": "append-icon",
      "type": "string",
      "default": "undefined",
      "source": "v-input",
      "description": {
        "en": "Appends an icon to the component, uses the same syntax as `v-icon`",
        "zh-Hans": ""
      }
    },
    {
      "name": "append-outer-icon",
      "type": "string",
      "default": "undefined",
      "source": "v-text-field",
      "description": {
        "en": "Appends an icon to the outside the component's input, uses same syntax as `v-icon`",
        "zh-Hans": ""
      }
    },
    {
      "name": "auto-grow",
      "type": "boolean",
      "default": "false",
      "source": "v-textarea",
      "description": {
        "en": "Automatically grow the textarea depending on amount of text",
        "zh-Hans": ""
      }
    },
    {
      "name": "autofocus",
      "type": "boolean",
      "default": "false",
      "source": "v-text-field",
      "description": {
        "en": "Enables autofocus",
        "zh-Hans": ""
      }
    },
    {
      "name": "background-color",
      "type": "string",
      "default": "undefined",
      "source": "v-input",
      "description": {
        "en": "Changes the background-color of the input",
        "zh-Hans": ""
      }
    },
    {
      "name": "clear-icon",
      "type": "string",
      "default": "'$clear'",
      "source": "v-text-field",
      "description": {
        "en": "Applied when using **clearable** and the input is dirty",
        "zh-Hans": ""
      }
    },
    {
      "name": "clearable",
      "type": "boolean",
      "default": "false",
      "source": "v-text-field",
      "description": {
        "en": "Add input clear functionality, default icon is Material Design Icons **mdi-clear**",
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
        "zh-Hans": ""
      }
    },
    {
      "name": "counter-value",
      "type": "function",
      "default": "null",
      "source": "v-text-field",
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
        "en": "Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).",
        "zh-Hans": ""
      }
    },
    {
      "name": "dense",
      "type": "boolean",
      "default": "false",
      "source": "v-input",
      "description": {
        "en": "Reduces the input height",
        "zh-Hans": ""
      }
    },
    {
      "name": "disabled",
      "type": "boolean",
      "default": false,
      "source": "validatable",
      "description": {
        "en": "Disable the input",
        "zh-Hans": ""
      }
    },
    {
      "name": "error",
      "type": "boolean",
      "default": "false",
      "source": "validatable",
      "description": {
        "en": "Puts the input in a manual error state",
        "zh-Hans": ""
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
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
    {
      "name": "filled",
      "type": "boolean",
      "default": "false",
      "source": "v-text-field",
      "description": {
        "en": "Applies the alternate filled input style",
        "zh-Hans": ""
      }
    },
    {
      "name": "flat",
      "type": "boolean",
      "default": "false",
      "source": "v-text-field",
      "description": {
        "en": "Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props",
        "zh-Hans": ""
      }
    },
    {
      "name": "full-width",
      "type": "boolean",
      "default": "false",
      "source": "v-text-field",
      "description": {
        "en": "Designates input type as full-width",
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
      "source": "v-input",
      "description": {
        "en": "Sets the height of the input",
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
    {
      "name": "hint",
      "type": "string",
      "default": "undefined",
      "source": "v-input",
      "description": {
        "en": "Hint text",
        "zh-Hans": ""
      }
    },
    {
      "name": "id",
      "type": "string",
      "default": "undefined",
      "source": "v-input",
      "description": {
        "en": "Sets the DOM id on the component",
        "zh-Hans": ""
      }
    },
    {
      "name": "label",
      "type": "string",
      "source": "v-input",
      "description": {
        "en": "Sets input label",
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
      "name": "loader-height",
      "type": [
        "number",
        "string"
      ],
      "default": 2,
      "source": "loadable",
      "description": {
        "en": "Specifies the height of the loader",
        "zh-Hans": ""
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
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
    {
      "name": "no-resize",
      "type": "boolean",
      "default": "false",
      "source": "v-textarea",
      "description": {
        "en": "Remove resize handle",
        "zh-Hans": ""
      }
    },
    {
      "name": "outlined",
      "type": "boolean",
      "default": "false",
      "source": "v-text-field",
      "description": {
        "en": "Applies the outlined style to the input",
        "zh-Hans": ""
      }
    },
    {
      "name": "persistent-hint",
      "type": "boolean",
      "default": "false",
      "source": "v-input",
      "description": {
        "en": "Forces hint to always be visible",
        "zh-Hans": ""
      }
    },
    {
      "name": "persistent-placeholder",
      "type": "boolean",
      "default": "false",
      "source": "v-text-field",
      "description": {
        "en": "Forces placeholder to always be visible",
        "zh-Hans": ""
      }
    },
    {
      "name": "placeholder",
      "type": "string",
      "default": "undefined",
      "source": "v-text-field",
      "description": {
        "en": "Sets the input's placeholder text",
        "zh-Hans": ""
      }
    },
    {
      "name": "prefix",
      "type": "string",
      "default": "undefined",
      "source": "v-text-field",
      "description": {
        "en": "Displays prefix text",
        "zh-Hans": ""
      }
    },
    {
      "name": "prepend-icon",
      "type": "string",
      "default": "undefined",
      "source": "v-input",
      "description": {
        "en": "Prepends an icon to the component, uses the same syntax as `v-icon`",
        "zh-Hans": ""
      }
    },
    {
      "name": "prepend-inner-icon",
      "type": "string",
      "default": "undefined",
      "source": "v-text-field",
      "description": {
        "en": "Prepends an icon inside the component's input, uses the same syntax as `v-icon`",
        "zh-Hans": ""
      }
    },
    {
      "name": "readonly",
      "type": "boolean",
      "default": false,
      "source": "validatable",
      "description": {
        "en": "Puts input in readonly state",
        "zh-Hans": ""
      }
    },
    {
      "name": "reverse",
      "type": "boolean",
      "default": "false",
      "source": "v-text-field",
      "description": {
        "en": "Reverses the input orientation",
        "zh-Hans": ""
      }
    },
    {
      "name": "rounded",
      "type": "boolean",
      "default": "false",
      "source": "v-text-field",
      "description": {
        "en": "Adds a border radius to the input",
        "zh-Hans": ""
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
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
    {
      "name": "rules",
      "type": "array",
      "default": [],
      "source": "validatable",
      "description": {
        "en": "Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string`",
        "zh-Hans": ""
      }
    },
    {
      "name": "shaped",
      "type": "boolean",
      "default": "false",
      "source": "v-text-field",
      "description": {
        "en": "Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled`",
        "zh-Hans": ""
      }
    },
    {
      "name": "single-line",
      "type": "boolean",
      "default": "false",
      "source": "v-text-field",
      "description": {
        "en": "Label does not move on focus/dirty",
        "zh-Hans": ""
      }
    },
    {
      "name": "solo",
      "type": "boolean",
      "default": "false",
      "source": "v-text-field",
      "description": {
        "en": "Changes the style of the input",
        "zh-Hans": ""
      }
    },
    {
      "name": "solo-inverted",
      "type": "boolean",
      "default": "false",
      "source": "v-text-field",
      "description": {
        "en": "Reduces element opacity until focused",
        "zh-Hans": ""
      }
    },
    {
      "name": "success",
      "type": "boolean",
      "default": "false",
      "source": "validatable",
      "description": {
        "en": "Puts the input in a manual success state",
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
    {
      "name": "suffix",
      "type": "string",
      "default": "undefined",
      "source": "v-text-field",
      "description": {
        "en": "Displays suffix text",
        "zh-Hans": ""
      }
    },
    {
      "name": "type",
      "type": "string",
      "default": "'text'",
      "source": "v-text-field",
      "description": {
        "en": "Sets input type",
        "zh-Hans": ""
      }
    },
    {
      "name": "validate-on-blur",
      "type": "boolean",
      "default": "false",
      "source": "validatable",
      "description": {
        "en": "Delays validation until blur event",
        "zh-Hans": ""
      }
    },
    {
      "name": "value",
      "type": "any",
      "source": "v-input",
      "description": {
        "en": "The input's value",
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
    {
      "name": "append-outer",
      "source": "v-text-field",
      "description": {
        "en": "Adds an item outside the input and after input content",
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
    {
      "name": "label",
      "source": "v-input",
      "description": {
        "en": "Replaces the default label",
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
    {
      "name": "prepend",
      "source": "v-input",
      "description": {
        "en": "Adds an item outside the input and before input content",
        "zh-Hans": ""
      }
    },
    {
      "name": "prepend-inner",
      "source": "v-text-field",
      "description": {
        "en": "Adds an item inside the input and before input content",
        "zh-Hans": ""
      }
    },
    {
      "name": "progress",
      "source": "v-text-field",
      "description": {
        "en": "Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False)",
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
    {
      "name": "change",
      "source": "v-text-field",
      "value": "any",
      "description": {
        "en": "Emitted when the input is changed by user interaction",
        "zh-Hans": ""
      }
    },
    {
      "name": "click",
      "source": "v-input",
      "value": "MouseEvent",
      "description": {
        "en": "Emitted when input is clicked",
        "zh-Hans": ""
      }
    },
    {
      "name": "click:append",
      "source": "v-input",
      "value": "Event",
      "description": {
        "en": "Emitted when appended icon is clicked",
        "zh-Hans": ""
      }
    },
    {
      "name": "click:append-outer",
      "source": "v-text-field",
      "value": "Event",
      "description": {
        "en": "Emitted when appended outer icon is clicked",
        "zh-Hans": ""
      }
    },
    {
      "name": "click:clear",
      "source": "v-text-field",
      "value": "Event",
      "description": {
        "en": "Emitted when clearable icon clicked",
        "zh-Hans": ""
      }
    },
    {
      "name": "click:prepend",
      "source": "v-input",
      "value": "Event",
      "description": {
        "en": "Emitted when prepended icon is clicked",
        "zh-Hans": ""
      }
    },
    {
      "name": "click:prepend-inner",
      "source": "v-text-field",
      "value": "Event",
      "description": {
        "en": "Emitted when prepended inner icon is clicked",
        "zh-Hans": ""
      }
    },
    {
      "name": "focus",
      "source": "v-text-field",
      "value": "Event",
      "description": {
        "en": "Emitted when component is focused",
        "zh-Hans": ""
      }
    },
    {
      "name": "input",
      "source": "v-text-field",
      "value": "any",
      "description": {
        "en": "The updated bound model",
        "zh-Hans": ""
      }
    },
    {
      "name": "keydown",
      "source": "v-text-field",
      "value": "KeyboardEvent",
      "description": {
        "en": "Emitted when **any** key is pressed",
        "zh-Hans": ""
      }
    },
    {
      "name": "mousedown",
      "source": "v-input",
      "value": "MouseEvent",
      "description": {
        "en": "Emitted when click is pressed",
        "zh-Hans": ""
      }
    },
    {
      "name": "mouseup",
      "source": "v-input",
      "value": "MouseEvent",
      "description": {
        "en": "Emitted when click is released",
        "zh-Hans": ""
      }
    },
    {
      "name": "update:error",
      "source": "validatable",
      "value": "boolean",
      "description": {
        "en": "The `error.sync` event",
        "zh-Hans": ""
      }
    }
  ],
  "functions": [],
  "name": "v-textarea",
  "sass": [],
  "component": true
}