module.exports = {
  "props": [
    {
      "name": "background-color",
      "type": "string",
      "default": "'accent'",
      "source": "v-rating",
      "description": {
        "en": "The color used empty icons",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "clearable",
      "type": "boolean",
      "default": "false",
      "source": "v-rating",
      "description": {
        "en": "Allows for the component to be cleared. Triggers when the icon containing the current value is clicked.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "color",
      "type": "string",
      "default": "'primary'",
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
        "en": "Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "dense",
      "type": "boolean",
      "default": "false",
      "source": "v-rating",
      "description": {
        "en": "Icons have a smaller size",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "empty-icon",
      "type": "string",
      "default": "'$ratingEmpty'",
      "source": "v-rating",
      "description": {
        "en": "The icon displayed when empty",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "full-icon",
      "type": "string",
      "default": "'$ratingFull'",
      "source": "v-rating",
      "description": {
        "en": "The icon displayed when full",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "half-icon",
      "type": "string",
      "default": "'$ratingHalf'",
      "source": "v-rating",
      "description": {
        "en": "The icon displayed when half (requires **half-increments** prop)",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "half-increments",
      "type": "boolean",
      "default": "false",
      "source": "v-rating",
      "description": {
        "en": "Allows the selection of half increments",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "hover",
      "type": "boolean",
      "default": "false",
      "source": "v-rating",
      "description": {
        "en": "Provides visual feedback when hovering over icons",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "icon-label",
      "type": "string",
      "default": "'$vuetify.rating.ariaLabel.icon'",
      "source": "v-rating",
      "description": {
        "en": "The **aria-label** used for icons",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "large",
      "type": "boolean",
      "default": "false",
      "source": "sizeable",
      "description": {
        "en": "Makes the component large.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
      "name": "open-delay",
      "type": [
        "number",
        "string"
      ],
      "default": 0,
      "source": "delayable",
      "description": {
        "en": "Milliseconds to wait before opening component.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "readonly",
      "type": "boolean",
      "default": "false",
      "source": "v-rating",
      "description": {
        "en": "Removes all hover effects and pointer events",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "small",
      "type": "boolean",
      "default": "false",
      "source": "sizeable",
      "description": {
        "en": "Makes the component small.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "value",
      "type": "number",
      "default": 0,
      "source": "v-rating",
      "description": {
        "en": "The rating value",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "x-large",
      "type": "boolean",
      "default": "false",
      "source": "sizeable",
      "description": {
        "en": "Makes the component extra large.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "x-small",
      "type": "boolean",
      "default": "false",
      "source": "sizeable",
      "description": {
        "en": "Makes the component extra small.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "events": [
    {
      "name": "input",
      "value": "Number",
      "description": {
        "en": "Emits the rating number when this value changes",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "functions": [],
  "name": "v-rating",
  "sass": [
    {
      "name": "$rating-padding",
      "default": "0.5rem !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$rating-border-radius",
      "default": "50% !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$rating-dense-padding",
      "default": "0.1rem !default;",
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