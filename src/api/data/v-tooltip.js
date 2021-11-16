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
      "name": "activator",
      "type": "any",
      "default": "undefined",
      "source": "activatable",
      "description": {
        "en": "Designate a custom activator when the `activator` slot is not used. String can be any valid querySelector and Object can be any valid Node.",
        "zh-Hans": ""
      }
    },
    {
      "name": "allow-overflow",
      "type": "boolean",
      "default": "false",
      "source": "menuable",
      "description": {
        "en": "Removes overflow re-positioning for the content",
        "zh-Hans": ""
      }
    },
    {
      "name": "attach",
      "type": "any",
      "default": false,
      "source": "detachable",
      "description": {
        "en": "Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default.",
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
      "name": "close-delay",
      "type": [
        "number",
        "string"
      ],
      "default": 0,
      "source": "delayable",
      "description": {
        "en": "Delay (in ms) after which menu closes (when open-on-hover prop is set to true)",
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
      "name": "content-class",
      "type": "string",
      "default": "undefined",
      "source": "detachable",
      "description": {
        "en": "Applies a custom class to the detached element. This is useful because the content is moved to the beginning of the `v-app` component (unless the **attach** prop is provided) and is not targetable by classes passed directly on the component.",
        "zh-Hans": ""
      }
    },
    {
      "name": "disabled",
      "type": "boolean",
      "default": "false",
      "source": "activatable",
      "description": {
        "en": "Disables the tooltip",
        "zh-Hans": ""
      }
    },
    {
      "name": "eager",
      "type": "boolean",
      "default": "false",
      "source": "bootable",
      "description": {
        "en": "Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.",
        "zh-Hans": ""
      }
    },
    {
      "name": "internal-activator",
      "type": "boolean",
      "default": "false",
      "source": "activatable",
      "description": {
        "en": "Designates whether to use an internal activator",
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
      "name": "max-width",
      "type": [
        "number",
        "string"
      ],
      "default": "auto",
      "source": "menuable",
      "description": {
        "en": "Sets the maximum width for the content",
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
      "source": "menuable",
      "description": {
        "en": "Sets the minimum width for the content",
        "zh-Hans": ""
      }
    },
    {
      "name": "nudge-bottom",
      "type": [
        "number",
        "string"
      ],
      "default": 0,
      "source": "menuable",
      "description": {
        "en": "Nudge the content to the bottom",
        "zh-Hans": ""
      }
    },
    {
      "name": "nudge-left",
      "type": [
        "number",
        "string"
      ],
      "default": 0,
      "source": "menuable",
      "description": {
        "en": "Nudge the content to the left",
        "zh-Hans": ""
      }
    },
    {
      "name": "nudge-right",
      "type": [
        "number",
        "string"
      ],
      "default": 0,
      "source": "menuable",
      "description": {
        "en": "Nudge the content to the right",
        "zh-Hans": ""
      }
    },
    {
      "name": "nudge-top",
      "type": [
        "number",
        "string"
      ],
      "default": 0,
      "source": "menuable",
      "description": {
        "en": "Nudge the content to the top",
        "zh-Hans": ""
      }
    },
    {
      "name": "nudge-width",
      "type": [
        "number",
        "string"
      ],
      "default": 0,
      "source": "menuable",
      "description": {
        "en": "Nudge the content width",
        "zh-Hans": ""
      }
    },
    {
      "name": "offset-overflow",
      "type": "boolean",
      "default": "false",
      "source": "menuable",
      "description": {
        "en": "Causes the component to flip to the opposite side when repositioned due to overflow",
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
        "en": "Delay (in ms) after which tooltip opens (when `open-on-hover` prop is set to **true**)",
        "zh-Hans": ""
      }
    },
    {
      "name": "open-on-click",
      "type": "boolean",
      "default": "false",
      "source": "menuable",
      "description": {
        "en": "Designates whether the tooltip should open on activator click",
        "zh-Hans": ""
      }
    },
    {
      "name": "open-on-focus",
      "type": "boolean",
      "default": "false",
      "source": "activatable",
      "description": {
        "en": "",
        "zh-Hans": ""
      }
    },
    {
      "name": "open-on-hover",
      "type": "boolean",
      "default": "true",
      "source": "activatable",
      "description": {
        "en": "Designates whether the tooltip should open on activator hover",
        "zh-Hans": ""
      }
    },
    {
      "name": "position-x",
      "type": "number",
      "default": "undefined",
      "source": "menuable",
      "description": {
        "en": "Used to position the content when not using an activator slot",
        "zh-Hans": ""
      }
    },
    {
      "name": "position-y",
      "type": "number",
      "default": "undefined",
      "source": "menuable",
      "description": {
        "en": "Used to position the content when not using an activator slot",
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
      "name": "tag",
      "type": "string",
      "default": "'span'",
      "source": "v-tooltip",
      "description": {
        "en": "Specifies a custom tag for the activator wrapper",
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
      "default": "undefined",
      "source": "v-tooltip",
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
    },
    {
      "name": "z-index",
      "type": [
        "number",
        "string"
      ],
      "default": "undefined",
      "source": "menuable",
      "description": {
        "en": "The z-index used for the component",
        "zh-Hans": ""
      }
    }
  ],
  "mixins": [
    "activatable",
    "bootable",
    "colorable",
    "delayable",
    "delayable",
    "dependent",
    "detachable",
    "menuable",
    "positionable",
    "stackable",
    "toggleable",
    "toggleable"
  ],
  "slots": [
    {
      "name": "activator",
      "props": {
        "on": "{ [eventName]: eventHandler }",
        "value": "boolean"
      },
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
  "name": "v-tooltip",
  "sass": [],
  "component": true
}