module.exports = {
  "props": [
    {
      "name": "background-color",
      "type": "string",
      "default": "'accent'",
      "source": "v-rating",
      "description": {
        "en": "The color used empty icons",
        "zh-Hans": ""
      }
    },
    {
      "name": "clearable",
      "type": "boolean",
      "default": "false",
      "source": "v-rating",
      "description": {
        "en": "Allows for the component to be cleared. Triggers when the icon containing the current value is clicked.",
        "zh-Hans": ""
      }
    },
    {
      "name": "close-delay",
      "type": [
        "number",
        "string"
      ],
      "default": 0,
      "source": "delayable",
      "description": {
        "en": "Milliseconds to wait before closing component.",
        "zh-Hans": ""
      }
    },
    {
      "name": "color",
      "type": "string",
      "default": "'primary'",
      "source": "colorable",
      "description": {
        "en": "Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).",
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
      "source": "v-rating",
      "description": {
        "en": "Icons have a smaller size",
        "zh-Hans": ""
      }
    },
    {
      "name": "empty-icon",
      "type": "string",
      "default": "'$ratingEmpty'",
      "source": "v-rating",
      "description": {
        "en": "The icon displayed when empty",
        "zh-Hans": ""
      }
    },
    {
      "name": "full-icon",
      "type": "string",
      "default": "'$ratingFull'",
      "source": "v-rating",
      "description": {
        "en": "The icon displayed when full",
        "zh-Hans": ""
      }
    },
    {
      "name": "half-icon",
      "type": "string",
      "default": "'$ratingHalf'",
      "source": "v-rating",
      "description": {
        "en": "The icon displayed when half (requires **half-increments** prop)",
        "zh-Hans": ""
      }
    },
    {
      "name": "half-increments",
      "type": "boolean",
      "default": "false",
      "source": "v-rating",
      "description": {
        "en": "Allows the selection of half increments",
        "zh-Hans": ""
      }
    },
    {
      "name": "hover",
      "type": "boolean",
      "default": "false",
      "source": "v-rating",
      "description": {
        "en": "Provides visual feedback when hovering over icons",
        "zh-Hans": ""
      }
    },
    {
      "name": "icon-label",
      "type": "string",
      "default": "'$vuetify.rating.ariaLabel.icon'",
      "source": "v-rating",
      "description": {
        "en": "The **aria-label** used for icons",
        "zh-Hans": ""
      }
    },
    {
      "name": "large",
      "type": "boolean",
      "default": "false",
      "source": "sizeable",
      "description": {
        "en": "Makes the component large.",
        "zh-Hans": ""
      }
    },
    {
      "name": "length",
      "type": [
        "number",
        "string"
      ],
      "default": 5,
      "source": "v-rating",
      "description": {
        "en": "The amount of ratings to show",
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
      "name": "open-delay",
      "type": [
        "number",
        "string"
      ],
      "default": 0,
      "source": "delayable",
      "description": {
        "en": "Milliseconds to wait before opening component.",
        "zh-Hans": ""
      }
    },
    {
      "name": "readonly",
      "type": "boolean",
      "default": "false",
      "source": "v-rating",
      "description": {
        "en": "Removes all hover effects and pointer events",
        "zh-Hans": ""
      }
    },
    {
      "name": "ripple",
      "type": [
        "boolean",
        "object"
      ],
      "default": true,
      "source": "rippleable",
      "description": {
        "en": "Applies the [v-ripple](/directives/ripple) directive.",
        "zh-Hans": ""
      }
    },
    {
      "name": "size",
      "type": [
        "number",
        "string"
      ],
      "default": "undefined",
      "source": "v-rating",
      "description": {
        "en": "Sets the height and width of the component.",
        "zh-Hans": ""
      }
    },
    {
      "name": "small",
      "type": "boolean",
      "default": "false",
      "source": "sizeable",
      "description": {
        "en": "Makes the component small.",
        "zh-Hans": ""
      }
    },
    {
      "name": "value",
      "type": "number",
      "default": 0,
      "source": "v-rating",
      "description": {
        "en": "The rating value",
        "zh-Hans": ""
      }
    },
    {
      "name": "x-large",
      "type": "boolean",
      "default": "false",
      "source": "sizeable",
      "description": {
        "en": "Makes the component extra large.",
        "zh-Hans": ""
      }
    },
    {
      "name": "x-small",
      "type": "boolean",
      "default": "false",
      "source": "sizeable",
      "description": {
        "en": "Makes the component extra small.",
        "zh-Hans": ""
      }
    }
  ],
  "mixins": [
    "colorable",
    "delayable",
    "rippleable",
    "sizeable",
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
      "name": "item",
      "props": {
        "click": "(i: number) => void",
        "index": "number",
        "isFilled": "boolean",
        "isHalfFilled": "?boolean",
        "isHalfHovered": "?boolean",
        "isHovered": "boolean",
        "value": "number"
      },
      "description": {
        "en": "The slot for rendered items",
        "zh-Hans": ""
      }
    }
  ],
  "events": [
    {
      "name": "input",
      "value": "Number",
      "description": {
        "en": "Emits the rating number when this value changes",
        "zh-Hans": ""
      }
    }
  ],
  "functions": [],
  "name": "v-rating",
  "sass": [],
  "component": true
}