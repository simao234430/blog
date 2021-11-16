module.exports = {
  "props": [
    {
      "name": "append-icon",
      "type": "string",
      "default": "'$dropdown'",
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
      "name": "attach",
      "type": "any",
      "default": false,
      "source": "v-select",
      "description": {
        "en": "Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default.",
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
      "name": "cache-items",
      "type": "boolean",
      "default": "false",
      "source": "v-select",
      "description": {
        "en": "Keeps a local _unique_ copy of all items that have been passed through the **items** prop.",
        "zh-Hans": ""
      }
    },
    {
      "name": "chips",
      "type": "boolean",
      "default": "false",
      "source": "v-select",
      "description": {
        "en": "Changes display of selections to chips",
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
      "name": "deletable-chips",
      "type": "boolean",
      "default": "false",
      "source": "v-select",
      "description": {
        "en": "Adds a remove icon to selected chips",
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
      "name": "disable-lookup",
      "type": "boolean",
      "default": "false",
      "source": "v-select",
      "description": {
        "en": "Disables keyboard lookup",
        "zh-Hans": ""
      }
    },
    {
      "name": "disabled",
      "type": "boolean",
      "default": false,
      "source": "validatable",
      "description": {
        "en": "Disables the input",
        "zh-Hans": ""
      }
    },
    {
      "name": "eager",
      "type": "boolean",
      "default": "false",
      "source": "v-select",
      "description": {
        "en": "Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.",
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
      "name": "hide-selected",
      "type": "boolean",
      "default": "false",
      "source": "v-select",
      "description": {
        "en": "Do not display in the select menu items that are already selected",
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
      "name": "item-color",
      "type": "string",
      "default": "'primary'",
      "source": "v-select",
      "description": {
        "en": "Sets color of selected items",
        "zh-Hans": ""
      }
    },
    {
      "name": "item-disabled",
      "type": [
        "string",
        "array",
        "function"
      ],
      "default": "disabled",
      "source": "v-select",
      "description": {
        "en": "Set property of **items**'s disabled value",
        "zh-Hans": ""
      }
    },
    {
      "name": "item-text",
      "type": [
        "string",
        "array",
        "function"
      ],
      "default": "text",
      "source": "v-select",
      "description": {
        "en": "Set property of **items**'s text value",
        "zh-Hans": ""
      }
    },
    {
      "name": "item-value",
      "type": [
        "string",
        "array",
        "function"
      ],
      "default": "value",
      "source": "v-select",
      "description": {
        "en": "Set property of **items**'s value - **must be primitive**. Dot notation is supported. **Note:** This is currently not supported with `v-combobox` [GitHub Issue](https://github.com/vuetifyjs/vuetify/issues/5479)",
        "zh-Hans": ""
      }
    },
    {
      "name": "items",
      "type": "array",
      "default": [],
      "source": "v-select",
      "example": {
        "text": "string | number | object",
        "value": "string | number | object",
        "disabled": "boolean",
        "divider": "boolean",
        "header": "string"
      },
      "description": {
        "en": "Can be an array of objects or array of strings. When using objects, will look for a text, value and disabled keys. This can be changed using the **item-text**, **item-value** and **item-disabled** props.  Objects that have a **header** or **divider** property are considered special cases and generate a list header or divider; these items are not selectable.",
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
      "name": "menu-props",
      "type": [
        "string",
        "array",
        "object"
      ],
      "default": "{\n  closeOnClick: false,\n  closeOnContentClick: false,\n  disableKeys: true,\n  openOnClick: false,\n  maxHeight: 304\n}",
      "source": "v-select",
      "description": {
        "en": "Pass props through to the `v-menu` component. Accepts either a string for boolean props `menu-props=\"auto, overflowY\"`, or an object `:menu-props=\"{ auto: true, overflowY: true }\"`",
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
      "name": "multiple",
      "type": "boolean",
      "default": "false",
      "source": "v-select",
      "description": {
        "en": "Changes select to multiple. Accepts array for value",
        "zh-Hans": ""
      }
    },
    {
      "name": "no-data-text",
      "type": "string",
      "default": "'$vuetify.noDataText'",
      "source": "filterable",
      "description": {
        "en": "Display text when there is no data",
        "zh-Hans": ""
      }
    },
    {
      "name": "open-on-clear",
      "type": "boolean",
      "default": "false",
      "source": "v-select",
      "description": {
        "en": "When using the **clearable** prop, once cleared, the select menu will either open or stay open, depending on the current state",
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
      "name": "return-object",
      "type": "boolean",
      "default": "false",
      "source": "v-select",
      "description": {
        "en": "Changes the selection behavior to return the object directly rather than the value specified with **item-value**",
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
      "name": "small-chips",
      "type": "boolean",
      "default": "false",
      "source": "v-select",
      "description": {
        "en": "Changes display of selections to chips with the **small** property",
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
    },
    {
      "name": "value-comparator",
      "type": "function",
      "default": "(a: any, b: any): boolean",
      "source": "v-select",
      "description": {
        "en": "The comparison algorithm used for values. [More info](https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/util/helpers.ts)",
        "zh-Hans": ""
      }
    }
  ],
  "mixins": [
    "colorable",
    "comparable",
    "dependent",
    "filterable",
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
      "name": "append-item",
      "source": "v-select",
      "description": {
        "en": "Adds an item after menu content",
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
      "name": "item",
      "props": {
        "parent": "VueComponent",
        "item": "object",
        "on": "object // Only needed when providing your own v-list-item",
        "attrs": "object // Only needed when providing your own v-list-item"
      },
      "source": "v-select",
      "description": {
        "en": "Define a custom item appearance",
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
      "name": "no-data",
      "source": "v-select",
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
      "name": "prepend-item",
      "source": "v-select",
      "description": {
        "en": "Adds an item before menu content",
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
    },
    {
      "name": "selection",
      "props": {
        "parent": "VueComponent",
        "item": "object",
        "index": "number",
        "select": "function",
        "selected": "boolean",
        "disabled": "boolean"
      },
      "source": "v-select",
      "description": {
        "en": "Define a custom selection appearance",
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
    },
    {
      "name": "update:list-index",
      "source": "v-select",
      "value": "number",
      "description": {
        "en": "Emitted when menu item is selected using keyboard arrows",
        "zh-Hans": ""
      }
    },
    {
      "name": "update:search-input",
      "source": "v-select",
      "value": "string",
      "description": {
        "en": "The `search-input.sync` event",
        "zh-Hans": ""
      }
    }
  ],
  "functions": [],
  "name": "v-select",
  "sass": [],
  "component": true
}