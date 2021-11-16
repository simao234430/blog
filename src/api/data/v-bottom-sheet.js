module.exports = {
  "props": [
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
      "name": "dark",
      "type": "boolean",
      "default": "false",
      "source": "v-dialog",
      "description": {
        "en": "Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).",
        "zh-Hans": ""
      }
    },
    {
      "name": "disabled",
      "type": "boolean",
      "default": "false",
      "source": "activatable",
      "description": {
        "en": "Disables the ability to open the component.",
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
      "name": "fullscreen",
      "type": "boolean",
      "default": "false",
      "source": "v-dialog",
      "description": {
        "en": "Changes layout for fullscreen display.",
        "zh-Hans": ""
      }
    },
    {
      "name": "hide-overlay",
      "type": "boolean",
      "default": "false",
      "source": "overlayable",
      "description": {
        "en": "Hides the display of the overlay.",
        "zh-Hans": ""
      }
    },
    {
      "name": "inset",
      "type": "boolean",
      "default": "false",
      "source": "v-bottom-sheet",
      "description": {
        "en": "Reduces the sheet content maximum width to 70%.",
        "zh-Hans": ""
      }
    },
    {
      "name": "internal-activator",
      "type": "boolean",
      "default": "false",
      "source": "activatable",
      "description": {
        "en": "Detaches the menu content inside of the component as opposed to the document.",
        "zh-Hans": ""
      }
    },
    {
      "name": "light",
      "type": "boolean",
      "default": "false",
      "source": "v-dialog",
      "description": {
        "en": "Applies the light theme variant to the component.",
        "zh-Hans": ""
      }
    },
    {
      "name": "max-width",
      "type": [
        "string",
        "number"
      ],
      "default": "auto",
      "source": "v-dialog",
      "description": {
        "en": "Sets the maximum width for the component.",
        "zh-Hans": ""
      }
    },
    {
      "name": "no-click-animation",
      "type": "boolean",
      "default": "false",
      "source": "v-dialog",
      "description": {
        "en": "Disables the bounce effect when clicking outside of a `v-dialog`'s content when using the **persistent** prop.",
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
      "default": "false",
      "source": "activatable",
      "description": {
        "en": "Designates whether component should activate when its activator is hovered.",
        "zh-Hans": ""
      }
    },
    {
      "name": "origin",
      "type": "string",
      "default": "'center center'",
      "source": "v-dialog",
      "description": {
        "en": "Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).",
        "zh-Hans": ""
      }
    },
    {
      "name": "overlay-color",
      "type": "string",
      "default": "undefined",
      "source": "overlayable",
      "description": {
        "en": "Sets the overlay color.",
        "zh-Hans": ""
      }
    },
    {
      "name": "overlay-opacity",
      "type": [
        "number",
        "string"
      ],
      "default": "undefined",
      "source": "overlayable",
      "description": {
        "en": "Sets the overlay opacity.",
        "zh-Hans": ""
      }
    },
    {
      "name": "persistent",
      "type": "boolean",
      "default": "false",
      "source": "v-dialog",
      "description": {
        "en": "Clicking outside of the element or pressing **esc** key will not deactivate it.",
        "zh-Hans": ""
      }
    },
    {
      "name": "retain-focus",
      "type": "boolean",
      "default": "true",
      "source": "v-dialog",
      "description": {
        "en": "Tab focus will return to the first child of the dialog by default. Disable this when using external tools that require focus such as TinyMCE or vue-clipboard.",
        "zh-Hans": ""
      }
    },
    {
      "name": "return-value",
      "type": "any",
      "default": "undefined",
      "source": "returnable",
      "description": {
        "en": "",
        "zh-Hans": ""
      }
    },
    {
      "name": "scrollable",
      "type": "boolean",
      "default": "false",
      "source": "v-dialog",
      "description": {
        "en": "When set to true, expects a `v-card` and a `v-card-text` component with a designated height. For more information, check out the [scrollable example](/components/dialogs#scrollable).",
        "zh-Hans": ""
      }
    },
    {
      "name": "transition",
      "type": "string",
      "default": "'bottom-sheet-transition'",
      "source": "v-dialog",
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
      "name": "width",
      "type": [
        "string",
        "number"
      ],
      "default": "auto",
      "source": "v-dialog",
      "description": {
        "en": "Sets the width for the component.",
        "zh-Hans": ""
      }
    }
  ],
  "mixins": [
    "activatable",
    "bootable",
    "delayable",
    "dependent",
    "detachable",
    "overlayable",
    "returnable",
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
  "name": "v-bottom-sheet",
  "sass": [],
  "component": true
}