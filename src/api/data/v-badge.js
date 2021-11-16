module.exports = {
  "props": [
    {
      "name": "avatar",
      "type": "boolean",
      "default": "false",
      "source": "v-badge",
      "description": {
        "en": "Removes badge padding for the use of the `v-avatar` in the **badge** slot.",
        "zh-Hans": ""
      }
    },
    {
      "name": "bordered",
      "type": "boolean",
      "default": "false",
      "source": "v-badge",
      "description": {
        "en": "Applies a **2px** by default and **1.5px** border around the badge when using the **dot** property.",
        "zh-Hans": ""
      }
    },
    {
      "name": "bottom",
      "type": "boolean",
      "default": "false",
      "source": "positionable",
      "description": {
        "en": "Aligns the component towards the bottom.",
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
      "name": "content",
      "type": "any",
      "default": "undefined",
      "source": "v-badge",
      "description": {
        "en": "Any content you want injected as text into the badge.",
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
      "name": "dot",
      "type": "boolean",
      "default": "false",
      "source": "v-badge",
      "description": {
        "en": "Reduce the size of the badge and hide its contents",
        "zh-Hans": ""
      }
    },
    {
      "name": "icon",
      "type": "string",
      "default": "undefined",
      "source": "v-badge",
      "description": {
        "en": "Designates a specific icon used in the badge.",
        "zh-Hans": ""
      }
    },
    {
      "name": "inline",
      "type": "boolean",
      "default": "false",
      "source": "v-badge",
      "description": {
        "en": "Moves the badge to be inline with the wrapping element. Supports the usage of the **left** prop.",
        "zh-Hans": ""
      }
    },
    {
      "name": "label",
      "type": "string",
      "default": "'$vuetify.badge'",
      "source": "v-badge",
      "description": {
        "en": "The **aria-label** used for the badge",
        "zh-Hans": ""
      }
    },
    {
      "name": "left",
      "type": "boolean",
      "default": "false",
      "source": "positionable",
      "description": {
        "en": "Aligns the component towards the left.",
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
      "name": "offset-x",
      "type": [
        "number",
        "string"
      ],
      "default": "undefined",
      "source": "v-badge",
      "description": {
        "en": "Offset the badge on the x-axis.",
        "zh-Hans": ""
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
      "name": "overlap",
      "type": "boolean",
      "default": "false",
      "source": "v-badge",
      "description": {
        "en": "Overlaps the slotted content on top of the component.",
        "zh-Hans": ""
      }
    },
    {
      "name": "tile",
      "type": "boolean",
      "default": "false",
      "source": "v-badge",
      "description": {
        "en": "Removes the component's border-radius.",
        "zh-Hans": ""
      }
    },
    {
      "name": "transition",
      "type": "string",
      "default": "'scale-rotate-transition'",
      "source": "transitionable",
      "description": {
        "en": "Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own.",
        "zh-Hans": ""
      }
    },
    {
      "name": "value",
      "type": "any",
      "default": true,
      "source": "toggleable",
      "description": {
        "en": "Controls whether the component is visible or hidden.",
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
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
  "name": "v-badge",
  "sass": [],
  "component": true
}