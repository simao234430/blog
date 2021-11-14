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
      "name": "auto",
      "type": "boolean",
      "default": "false",
      "source": "v-menu",
      "description": {
        "en": "Centers list on selected element",
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
        "en": "Milliseconds to wait before closing component. Only works with the **open-on-hover** prop",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "close-on-click",
      "type": "boolean",
      "default": "true",
      "source": "v-menu",
      "description": {
        "en": "Designates if menu should close on outside-activator click",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "close-on-content-click",
      "type": "boolean",
      "default": "true",
      "source": "v-menu",
      "description": {
        "en": "Designates if menu should close when its content is clicked",
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
      "name": "dark",
      "type": "boolean",
      "default": "false",
      "source": "menuable",
      "description": {
        "en": "Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "disable-keys",
      "type": "boolean",
      "default": "false",
      "source": "v-menu",
      "description": {
        "en": "Removes all keyboard interaction",
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
        "en": "Disables the menu",
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
        "en": "Detaches the menu content inside of the component as opposed to the document.",
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
      "source": "menuable",
      "description": {
        "en": "Applies the light theme variant to the component.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "max-height",
      "type": [
        "number",
        "string"
      ],
      "default": "auto",
      "source": "v-menu",
      "description": {
        "en": "Sets the max height of the menu content",
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
      "name": "offset-x",
      "type": "boolean",
      "default": "false",
      "source": "v-menu",
      "description": {
        "en": "Offset the menu on the x-axis. Works in conjunction with direction left/right",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "offset-y",
      "type": "boolean",
      "default": "false",
      "source": "v-menu",
      "description": {
        "en": "Offset the menu on the y-axis. Works in conjunction with direction top/bottom",
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
        "en": "Milliseconds to wait before opening component. Only works with the **open-on-hover** prop",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "open-on-click",
      "type": "boolean",
      "default": "true",
      "source": "menuable",
      "description": {
        "en": "Designates whether menu should open on activator click",
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
      "default": "false",
      "source": "activatable",
      "description": {
        "en": "Designates whether menu should open on activator hover",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "origin",
      "type": "string",
      "default": "'top left'",
      "source": "v-menu",
      "description": {
        "en": "Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).",
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
      "name": "return-value",
      "type": "any",
      "default": "undefined",
      "source": "returnable",
      "description": {
        "en": "The value that is updated when the menu is closed - must be primitive. Dot notation is supported",
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
      "name": "rounded",
      "type": [
        "boolean",
        "string"
      ],
      "default": "undefined",
      "source": "roundable",
      "description": {
        "en": "Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius).",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "tile",
      "type": "boolean",
      "default": "false",
      "source": "roundable",
      "description": {
        "en": "Removes the component's **border-radius**.",
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
      "type": [
        "boolean",
        "string"
      ],
      "default": "v-menu-transition",
      "source": "v-menu",
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
    "delayable",
    "delayable",
    "dependent",
    "detachable",
    "menuable",
    "positionable",
    "returnable",
    "roundable",
    "stackable",
    "themeable",
    "toggleable",
    "toggleable"
  ],
  "slots": [
    {
      "name": "activator",
      "props": {
        "attrs": "{ role: string, aria-haspopup: boolean, aria-expanded: string }",
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
  "events": [
    {
      "name": "input",
      "value": "boolean",
      "description": {
        "en": "The updated bound model",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "functions": [],
  "name": "v-menu",
  "sass": [
    {
      "name": "$menu-content-border-radius",
      "default": "$border-radius-root !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$menu-content-elevation",
      "default": "8 !default;",
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