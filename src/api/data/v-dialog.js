module.exports = {
  "props": [
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
      "source": "v-dialog",
      "description": {
        "en": "Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).",
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
        "en": "Disables the ability to open the component.",
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
      "name": "fullscreen",
      "type": "boolean",
      "default": "false",
      "source": "v-dialog",
      "description": {
        "en": "Changes layout for fullscreen display.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "hide-overlay",
      "type": "boolean",
      "default": "false",
      "source": "overlayable",
      "description": {
        "en": "Hides the display of the overlay.",
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
      "name": "light",
      "type": "boolean",
      "default": "false",
      "source": "v-dialog",
      "description": {
        "en": "Applies the light theme variant to the component.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "max-width",
      "type": [
        "string",
        "number"
      ],
      "default": "none",
      "source": "v-dialog",
      "description": {
        "en": "Sets the maximum width for the component.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "no-click-animation",
      "type": "boolean",
      "default": "false",
      "source": "v-dialog",
      "description": {
        "en": "Disables the bounce effect when clicking outside of a `v-dialog`'s content when using the **persistent** prop.",
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
        "en": "Designates whether component should activate when its activator is hovered.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "origin",
      "type": "string",
      "default": "'center center'",
      "source": "v-dialog",
      "description": {
        "en": "Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "overlay-color",
      "type": "string",
      "default": "undefined",
      "source": "overlayable",
      "description": {
        "en": "Sets the overlay color.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "persistent",
      "type": "boolean",
      "default": "false",
      "source": "v-dialog",
      "description": {
        "en": "Clicking outside of the element or pressing **esc** key will not deactivate it.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "retain-focus",
      "type": "boolean",
      "default": "true",
      "source": "v-dialog",
      "description": {
        "en": "Tab focus will return to the first child of the dialog by default. Disable this when using external tools that require focus such as TinyMCE or vue-clipboard.",
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
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "scrollable",
      "type": "boolean",
      "default": "false",
      "source": "v-dialog",
      "description": {
        "en": "When set to true, expects a `v-card` and a `v-card-text` component with a designated height. For more information, check out the [scrollable example](/components/dialogs#scrollable).",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "transition",
      "type": [
        "string",
        "boolean"
      ],
      "default": "dialog-transition",
      "source": "v-dialog",
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
      "name": "width",
      "type": [
        "string",
        "number"
      ],
      "default": "auto",
      "source": "v-dialog",
      "description": {
        "en": "Sets the width for the component.",
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
      "name": "click:outside",
      "value": "MouseEvent",
      "description": {
        "en": "Event that fires when clicking outside an active dialog.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "input",
      "value": "Boolean",
      "description": {
        "en": "The updated bound model",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "keydown",
      "value": "KeyboardEvent",
      "description": {
        "en": "Event that fires when key is pressed. If dialog is active and not using the **persistent** prop, the **esc** key will deactivate it.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "functions": [],
  "name": "v-dialog",
  "sass": [
    {
      "name": "$dialog-border-radius",
      "default": "$border-radius-root !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$dialog-card-subtitle-padding",
      "default": "0 24px 20px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$dialog-card-actions-padding",
      "default": "8px 16px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$dialog-card-text-padding",
      "default": "0 24px 20px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$dialog-card-title-font-size",
      "default": "map-deep-get($headings, 'h6', 'size') !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$dialog-card-title-font-weight",
      "default": "map-deep-get($headings, 'h6', 'weight') !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$dialog-card-title-letter-spacing",
      "default": "map-deep-get($headings, 'h6', 'letter-spacing') !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$dialog-card-title-padding",
      "default": "16px 24px 10px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$dialog-elevation",
      "default": "24 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$dialog-margin",
      "default": "24px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$dialog-max-height",
      "default": "90% !default;",
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