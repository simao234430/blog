module.exports = {
  "props": [
    {
      "name": "absolute",
      "type": "boolean",
      "default": "false",
      "source": "positionable",
      "description": {
        "en": "Applies **position: absolute** to the component.",
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
      "name": "direction",
      "type": "string",
      "default": "'top'",
      "source": "v-speed-dial",
      "description": {
        "en": "Direction in which speed-dial content will show. Possible values are `top`, `bottom`, `left`, `right`.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "fixed",
      "type": "boolean",
      "default": "false",
      "source": "positionable",
      "description": {
        "en": "Applies **position: fixed** to the component.",
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
      "name": "open-on-hover",
      "type": "boolean",
      "default": "false",
      "source": "v-speed-dial",
      "description": {
        "en": "Opens speed-dial on hover",
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
      "name": "right",
      "type": "boolean",
      "default": "false",
      "source": "positionable",
      "description": {
        "en": "Aligns the component towards the right.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "top",
      "type": "boolean",
      "default": "false",
      "source": "positionable",
      "description": {
        "en": "Aligns the content towards the top.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "transition",
      "type": "string",
      "default": "'scale-transition'",
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
      "default": "undefined",
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
    "positionable",
    "toggleable",
    "transitionable"
  ],
  "slots": [
    {
      "name": "activator",
      "description": {
        "en": "When used, will activate the component when clicked (or hover for specific components). This manually stops the event propagation. Without this slot, if you open the component through its model, you will need to manually stop the event propagation",
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
  "name": "v-speed-dial",
  "sass": [
    {
      "name": "$speed-dial-padding",
      "default": "16px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$speed-dial-button-margin",
      "default": "6px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$speed-dial-z-index",
      "default": "1 !default;",
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