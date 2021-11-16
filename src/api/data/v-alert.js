module.exports = {
  "props": [
    {
      "name": "border",
      "type": "string",
      "default": "undefined",
      "source": "v-alert",
      "description": {
        "en": "Puts a border on the alert. Accepts **top** \\| **right** \\| **bottom** \\| **left**.",
        "zh-Hans": ""
      }
    },
    {
      "name": "close-icon",
      "type": "string",
      "default": "'$cancel'",
      "source": "v-alert",
      "description": {
        "en": "Change the default icon used for **dismissible** alerts.",
        "zh-Hans": ""
      }
    },
    {
      "name": "close-label",
      "type": "string",
      "default": "'$vuetify.close'",
      "source": "v-alert",
      "description": {
        "en": "Text used for *aria-label* on **dismissible** alerts. Can also be customizing globally in [Internationalization](/customization/internationalization).",
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
      "name": "colored-border",
      "type": "boolean",
      "default": "false",
      "source": "v-alert",
      "description": {
        "en": "Applies the defined **color** to the alert's border.",
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
      "name": "dense",
      "type": "boolean",
      "default": "false",
      "source": "v-alert",
      "description": {
        "en": "Decreases component's height.",
        "zh-Hans": ""
      }
    },
    {
      "name": "dismissible",
      "type": "boolean",
      "default": "false",
      "source": "v-alert",
      "description": {
        "en": "Adds a close icon that can hide the alert.",
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
      "name": "icon",
      "type": [
        "boolean",
        "string"
      ],
      "default": "undefined",
      "source": "v-alert",
      "description": {
        "en": "Designates a specific icon.",
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
      "name": "mode",
      "type": "string",
      "default": "undefined",
      "source": "transitionable",
      "description": {
        "en": "Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition).",
        "zh-Hans": ""
      }
    },
    {
      "name": "origin",
      "type": "string",
      "default": "undefined",
      "source": "transitionable",
      "description": {
        "en": "Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).",
        "zh-Hans": ""
      }
    },
    {
      "name": "outlined",
      "type": "boolean",
      "default": "false",
      "source": "v-sheet",
      "description": {
        "en": "Makes the background transparent and applies a thin border.",
        "zh-Hans": ""
      }
    },
    {
      "name": "prominent",
      "type": "boolean",
      "default": "false",
      "source": "v-alert",
      "description": {
        "en": "Displays a larger vertically centered icon to draw more attention.",
        "zh-Hans": ""
      }
    },
    {
      "name": "rounded",
      "type": [
        "boolean",
        "string"
      ],
      "default": "undefined",
      "source": "roundable",
      "description": {
        "en": "Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius).",
        "zh-Hans": ""
      }
    },
    {
      "name": "shaped",
      "type": "boolean",
      "default": "false",
      "source": "v-sheet",
      "description": {
        "en": "Applies a large border radius on the top left and bottom right of the card.",
        "zh-Hans": ""
      }
    },
    {
      "name": "tag",
      "type": "string",
      "default": "'div'",
      "source": "v-sheet",
      "description": {
        "en": "Specify a custom tag used on the root element.",
        "zh-Hans": ""
      }
    },
    {
      "name": "text",
      "type": "boolean",
      "default": "false",
      "source": "v-alert",
      "description": {
        "en": "Applies the defined **color** to text and a low opacity background of the same.",
        "zh-Hans": ""
      }
    },
    {
      "name": "tile",
      "type": "boolean",
      "default": "false",
      "source": "roundable",
      "description": {
        "en": "Removes the component's border-radius.",
        "zh-Hans": ""
      }
    },
    {
      "name": "transition",
      "type": "string",
      "default": "undefined",
      "source": "transitionable",
      "description": {
        "en": "Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own.",
        "zh-Hans": ""
      }
    },
    {
      "name": "type",
      "type": "string",
      "default": "undefined",
      "source": "v-alert",
      "description": {
        "en": "Specify a **success**, **info**, **warning** or **error** alert. Uses the contextual color and has a pre-defined icon.",
        "zh-Hans": ""
      }
    },
    {
      "name": "value",
      "type": "boolean",
      "default": "true",
      "source": "toggleable",
      "description": {
        "en": "Controls whether the component is visible or hidden.",
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
    "colorable",
    "elevatable",
    "measurable",
    "roundable",
    "themeable",
    "toggleable",
    "transitionable",
    "v-sheet"
  ],
  "slots": [
    {
      "name": "append",
      "description": {
        "en": "Slot for icon at end of alert.",
        "zh-Hans": ""
      }
    },
    {
      "name": "close",
      "props": {
        "toggle": "Function"
      },
      "description": {
        "en": "Slot for icon used in **dismissible** prop.",
        "zh-Hans": ""
      }
    },
    {
      "name": "default",
      "description": {
        "en": "The default Vue slot.",
        "zh-Hans": ""
      }
    },
    {
      "name": "prepend",
      "description": {
        "en": "Slot for icon at beginning of alert.",
        "zh-Hans": ""
      }
    }
  ],
  "events": [
    {
      "name": "input",
      "value": "boolean",
      "description": {
        "en": "The updated bound model",
        "zh-Hans": ""
      }
    }
  ],
  "functions": [
    {
      "name": "toggle",
      "signature": "(): void",
      "description": {
        "en": "Toggles the alert's active state. Available in the close slot and used as the click action in **dismissible**.",
        "zh-Hans": ""
      }
    }
  ],
  "name": "v-alert",
  "sass": [],
  "component": true
}