module.exports = {
  "props": [
    {
      "name": "avatar",
      "type": "boolean",
      "default": "false",
      "source": "v-badge",
      "description": {
        "en": "Removes badge padding for the use of the `v-avatar` in the **badge** slot.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "bordered",
      "type": "boolean",
      "default": "false",
      "source": "v-badge",
      "description": {
        "en": "Applies a **2px** by default and **1.5px** border around the badge when using the **dot** property.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "bottom",
      "type": "boolean",
      "default": "false",
      "source": "positionable",
      "description": {
        "en": "Aligns the component towards the bottom.",
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
      "name": "content",
      "type": "any",
      "default": "undefined",
      "source": "v-badge",
      "description": {
        "en": "Any content you want injected as text into the badge.",
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
      "name": "dot",
      "type": "boolean",
      "default": "false",
      "source": "v-badge",
      "description": {
        "en": "Reduce the size of the badge and hide its contents",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "icon",
      "type": "string",
      "default": "undefined",
      "source": "v-badge",
      "description": {
        "en": "Designates a specific icon used in the badge.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "inline",
      "type": "boolean",
      "default": "false",
      "source": "v-badge",
      "description": {
        "en": "Moves the badge to be inline with the wrapping element. Supports the usage of the **left** prop.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "label",
      "type": "string",
      "default": "'$vuetify.badge'",
      "source": "v-badge",
      "description": {
        "en": "The **aria-label** used for the badge",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "left",
      "type": "boolean",
      "default": "false",
      "source": "positionable",
      "description": {
        "en": "Aligns the component towards the left.",
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
      "name": "mode",
      "type": "string",
      "default": "undefined",
      "source": "transitionable",
      "description": {
        "en": "Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition).",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "offset-x",
      "type": [
        "number",
        "string"
      ],
      "default": "undefined",
      "source": "v-badge",
      "description": {
        "en": "Offset the badge on the x-axis.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "offset-y",
      "type": [
        "number",
        "string"
      ],
      "default": "undefined",
      "source": "v-badge",
      "description": {
        "en": "Offset the badge on the y-axis.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "origin",
      "type": "string",
      "default": "undefined",
      "source": "transitionable",
      "description": {
        "en": "Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "overlap",
      "type": "boolean",
      "default": "false",
      "source": "v-badge",
      "description": {
        "en": "Overlaps the slotted content on top of the component.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "tile",
      "type": "boolean",
      "default": "false",
      "source": "v-badge",
      "description": {
        "en": "Removes the component's border-radius.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "transition",
      "type": "string",
      "default": "'scale-rotate-transition'",
      "source": "transitionable",
      "description": {
        "en": "Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "value",
      "type": "any",
      "default": true,
      "source": "toggleable",
      "description": {
        "en": "Controls whether the component is visible or hidden.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "mixins": [
    "colorable",
    "positionable",
    "themeable",
    "toggleable",
    "transitionable"
  ],
  "slots": [
    {
      "name": "badge",
      "description": {
        "en": "The slot used for the badge's content.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "default",
      "description": {
        "en": "The default Vue slot.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "events": [],
  "functions": [],
  "name": "v-badge",
  "sass": [
    {
      "name": "$badge-border-radius",
      "default": "10px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$badge-bordered-width",
      "default": "2px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$badge-color",
      "default": "map-get($shades, 'white') !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$badge-dot-border-radius",
      "default": "4.5px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$badge-dot-border-width",
      "default": "1.5px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$badge-dot-height",
      "default": "9px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$badge-dot-width",
      "default": "9px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$badge-font-family",
      "default": "$body-font-family !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$badge-font-size",
      "default": "12px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$badge-height",
      "default": "20px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$badge-icon-margin",
      "default": "0 -2px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$badge-icon-padding",
      "default": "4px 6px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$badge-letter-spacing",
      "default": "0 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$badge-line-height",
      "default": "1 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$badge-min-width",
      "default": "20px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$badge-padding",
      "default": "4px 6px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$badge-right",
      "default": "auto !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$badge-top",
      "default": "auto !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$badge-wrapper-margin",
      "default": "0 4px !default;",
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