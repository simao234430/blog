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
      "name": "activator",
      "type": "any",
      "default": "undefined",
      "source": "activatable",
      "description": {
        "en": "Designate a custom activator when the `activator` slot is not used. String can be any valid querySelector and Object can be any valid Node.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "allow-overflow",
      "type": "boolean",
      "default": "false",
      "source": "menuable",
      "description": {
        "en": "Removes overflow re-positioning for the content",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "attach",
      "type": "any",
      "default": false,
      "source": "detachable",
      "description": {
        "en": "Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default.",
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
      "name": "close-delay",
      "type": [
        "number",
        "string"
      ],
      "default": 0,
      "source": "delayable",
      "description": {
        "en": "Delay (in ms) after which menu closes (when open-on-hover prop is set to true)",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "color",
      "type": "string",
      "default": "undefined",
      "source": "colorable",
      "description": {
        "en": "Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "content-class",
      "type": "string",
      "default": "undefined",
      "source": "detachable",
      "description": {
        "en": "Applies a custom class to the detached element. This is useful because the content is moved to the beginning of the `v-app` component (unless the **attach** prop is provided) and is not targetable by classes passed directly on the component.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "disabled",
      "type": "boolean",
      "default": "false",
      "source": "activatable",
      "description": {
        "en": "Disables the tooltip",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "eager",
      "type": "boolean",
      "default": "false",
      "source": "bootable",
      "description": {
        "en": "Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "internal-activator",
      "type": "boolean",
      "default": "false",
      "source": "activatable",
      "description": {
        "en": "Designates whether to use an internal activator",
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
      "name": "max-width",
      "type": [
        "number",
        "string"
      ],
      "default": "auto",
      "source": "menuable",
      "description": {
        "en": "Sets the maximum width for the content",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "offset-overflow",
      "type": "boolean",
      "default": "false",
      "source": "menuable",
      "description": {
        "en": "Causes the component to flip to the opposite side when repositioned due to overflow",
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
        "en": "Delay (in ms) after which tooltip opens (when `open-on-hover` prop is set to **true**)",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "open-on-click",
      "type": "boolean",
      "default": "false",
      "source": "menuable",
      "description": {
        "en": "Designates whether the tooltip should open on activator click",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "open-on-focus",
      "type": "boolean",
      "default": "false",
      "source": "activatable",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "open-on-hover",
      "type": "boolean",
      "default": "true",
      "source": "activatable",
      "description": {
        "en": "Designates whether the tooltip should open on activator hover",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "position-x",
      "type": "number",
      "default": "undefined",
      "source": "menuable",
      "description": {
        "en": "Used to position the content when not using an activator slot",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "position-y",
      "type": "number",
      "default": "undefined",
      "source": "menuable",
      "description": {
        "en": "Used to position the content when not using an activator slot",
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
      "name": "tag",
      "type": "string",
      "default": "'span'",
      "source": "v-tooltip",
      "description": {
        "en": "Specifies a custom tag for the activator wrapper",
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
      "default": "undefined",
      "source": "v-tooltip",
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
  "name": "v-tooltip",
  "sass": [
    {
      "name": "$tooltip-background-color",
      "default": "rgba(map-get($grey, 'darken-2'), 0.9) !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$tooltip-text-color",
      "default": "map-get($shades, 'white') !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$tooltip-border-radius",
      "default": "$border-radius-root !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$tooltip-font-size",
      "default": "14px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$tooltip-transition-timing-function",
      "default": "map-get($transition, 'linear-out-slow-in') !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$tooltip-transition-enter-duration",
      "default": "150ms !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$tooltip-transition-leave-duration",
      "default": "75ms !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$tooltip-padding",
      "default": "5px 16px !default;",
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