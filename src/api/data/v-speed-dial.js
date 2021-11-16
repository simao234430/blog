module.exports = {
  "props": [
    {
      "name": "absolute",
      "type": "boolean",
      "default": "false",
      "source": "positionable",
      "description": {
        "en": "Applies **position: absolute** to the component.",
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
      "name": "direction",
      "type": "string",
      "default": "'top'",
      "source": "v-speed-dial",
      "description": {
        "en": "Direction in which speed-dial content will show. Possible values are `top`, `bottom`, `left`, `right`.",
        "zh-Hans": ""
      }
    },
    {
      "name": "fixed",
      "type": "boolean",
      "default": "false",
      "source": "positionable",
      "description": {
        "en": "Applies **position: fixed** to the component.",
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
      "name": "open-on-hover",
      "type": "boolean",
      "default": "false",
      "source": "v-speed-dial",
      "description": {
        "en": "Opens speed-dial on hover",
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
      "name": "right",
      "type": "boolean",
      "default": "false",
      "source": "positionable",
      "description": {
        "en": "Aligns the component towards the right.",
        "zh-Hans": ""
      }
    },
    {
      "name": "top",
      "type": "boolean",
      "default": "false",
      "source": "positionable",
      "description": {
        "en": "Aligns the content towards the top.",
        "zh-Hans": ""
      }
    },
    {
      "name": "transition",
      "type": "string",
      "default": "'scale-transition'",
      "source": "transitionable",
      "description": {
        "en": "Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own.",
        "zh-Hans": ""
      }
    },
    {
      "name": "value",
      "type": "any",
      "default": "undefined",
      "source": "toggleable",
      "description": {
        "en": "Controls whether the component is visible or hidden.",
        "zh-Hans": ""
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
  "name": "v-speed-dial",
  "sass": [],
  "component": true
}