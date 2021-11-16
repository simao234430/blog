module.exports = {
  "props": [
    {
      "name": "active",
      "type": "boolean",
      "default": "true",
      "source": "v-chip",
      "description": {
        "en": "Determines whether the chip is visible or not.",
        "zh-Hans": ""
      }
    },
    {
      "name": "active-class",
      "type": "string",
      "default": "",
      "source": "routable",
      "description": {
        "en": "Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation.",
        "zh-Hans": ""
      }
    },
    {
      "name": "append",
      "type": "boolean",
      "default": "false",
      "source": "routable",
      "description": {
        "en": "Setting **append** prop always appends the relative path to the current path. You can find more information about the [**append** prop](https://router.vuejs.org/api/#append) on the vue-router documentation.",
        "zh-Hans": ""
      }
    },
    {
      "name": "close",
      "type": "boolean",
      "default": "false",
      "source": "v-chip",
      "description": {
        "en": "Adds remove button",
        "zh-Hans": ""
      }
    },
    {
      "name": "close-icon",
      "type": "string",
      "default": "'$delete'",
      "source": "v-chip",
      "description": {
        "en": "Change the default icon used for **close** chips",
        "zh-Hans": ""
      }
    },
    {
      "name": "close-label",
      "type": "string",
      "default": "'$vuetify.close'",
      "source": "v-chip",
      "description": {
        "en": "Text used for *aria-label* on the close button in **close** chips. Can also be customized globally in [Internationalization](/customization/internationalization).",
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
      "name": "disabled",
      "type": "boolean",
      "default": "false",
      "source": "routable",
      "description": {
        "en": "Disables the chip, making it un-selectable",
        "zh-Hans": ""
      }
    },
    {
      "name": "draggable",
      "type": "boolean",
      "default": "false",
      "source": "v-chip",
      "description": {
        "en": "Makes the chip draggable",
        "zh-Hans": ""
      }
    },
    {
      "name": "exact",
      "type": "boolean",
      "default": "false",
      "source": "routable",
      "description": {
        "en": "Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation.",
        "zh-Hans": ""
      }
    },
    {
      "name": "exact-active-class",
      "type": "string",
      "default": "undefined",
      "source": "routable",
      "description": {
        "en": "Configure the active CSS class applied when the link is active with exact match. You can find more information about the [**exact-active-class** prop](https://router.vuejs.org/api/#exact-active-class) on the vue-router documentation.",
        "zh-Hans": ""
      }
    },
    {
      "name": "exact-path",
      "type": "boolean",
      "default": "false",
      "source": "routable",
      "description": {
        "en": "Exactly match the link, ignoring the `query` and the `hash` sections. You can find more information about the [**exact-path** prop](https://router.vuejs.org/api/#exact-path) on the vue-router documentation.",
        "zh-Hans": ""
      }
    },
    {
      "name": "filter",
      "type": "boolean",
      "default": "false",
      "source": "v-chip",
      "description": {
        "en": "Displays a selection icon when selected",
        "zh-Hans": ""
      }
    },
    {
      "name": "filter-icon",
      "type": "string",
      "default": "'$complete'",
      "source": "v-chip",
      "description": {
        "en": "Change the default icon used for **filter** chips",
        "zh-Hans": ""
      }
    },
    {
      "name": "href",
      "type": [
        "string",
        "object"
      ],
      "default": "undefined",
      "source": "routable",
      "description": {
        "en": "Designates the component as anchor and applies the **href** attribute.",
        "zh-Hans": ""
      }
    },
    {
      "name": "input-value",
      "type": "any",
      "default": "undefined",
      "source": "toggleable",
      "description": {
        "en": "Controls the **active** state of the item. This is typically used to highlight the component.",
        "zh-Hans": ""
      }
    },
    {
      "name": "label",
      "type": "boolean",
      "default": "false",
      "source": "v-chip",
      "description": {
        "en": "Removes circle edges",
        "zh-Hans": ""
      }
    },
    {
      "name": "large",
      "type": "boolean",
      "default": "false",
      "source": "sizeable",
      "description": {
        "en": "Makes the component large.",
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
      "name": "link",
      "type": "boolean",
      "default": "false",
      "source": "routable",
      "description": {
        "en": "Explicitly define the chip as a link",
        "zh-Hans": ""
      }
    },
    {
      "name": "nuxt",
      "type": "boolean",
      "default": "false",
      "source": "routable",
      "description": {
        "en": "Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/).",
        "zh-Hans": ""
      }
    },
    {
      "name": "outlined",
      "type": "boolean",
      "default": "false",
      "source": "v-chip",
      "description": {
        "en": "Removes background and applies border and text color",
        "zh-Hans": ""
      }
    },
    {
      "name": "pill",
      "type": "boolean",
      "default": "false",
      "source": "v-chip",
      "description": {
        "en": "Remove `v-avatar` padding",
        "zh-Hans": ""
      }
    },
    {
      "name": "replace",
      "type": "boolean",
      "default": "false",
      "source": "routable",
      "description": {
        "en": "Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [**replace** prop](https://router.vuejs.org/api/#replace) on the vue-router documentation.",
        "zh-Hans": ""
      }
    },
    {
      "name": "ripple",
      "type": [
        "boolean",
        "object"
      ],
      "default": "undefined",
      "source": "routable",
      "description": {
        "en": "Applies the [v-ripple](/directives/ripple) directive.",
        "zh-Hans": ""
      }
    },
    {
      "name": "small",
      "type": "boolean",
      "default": "false",
      "source": "sizeable",
      "description": {
        "en": "Makes the component small.",
        "zh-Hans": ""
      }
    },
    {
      "name": "tag",
      "type": "string",
      "default": "'span'",
      "source": "routable",
      "description": {
        "en": "Specify a custom tag used on the root element.",
        "zh-Hans": ""
      }
    },
    {
      "name": "target",
      "type": "string",
      "default": "undefined",
      "source": "routable",
      "description": {
        "en": "Designates the target attribute. This should only be applied when using the **href** prop.",
        "zh-Hans": ""
      }
    },
    {
      "name": "text-color",
      "type": "string",
      "default": "undefined",
      "source": "v-chip",
      "description": {
        "en": "Applies a specified color to the control text",
        "zh-Hans": ""
      }
    },
    {
      "name": "to",
      "type": [
        "string",
        "object"
      ],
      "default": "undefined",
      "source": "routable",
      "description": {
        "en": "Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation.",
        "zh-Hans": ""
      }
    },
    {
      "name": "value",
      "type": "any",
      "default": "undefined",
      "source": "v-chip",
      "description": {
        "en": "The value used when a child of a [v-chip-group](/components/chip-groups).",
        "zh-Hans": ""
      }
    },
    {
      "name": "x-large",
      "type": "boolean",
      "default": "false",
      "source": "sizeable",
      "description": {
        "en": "Makes the component extra large.",
        "zh-Hans": ""
      }
    },
    {
      "name": "x-small",
      "type": "boolean",
      "default": "false",
      "source": "sizeable",
      "description": {
        "en": "Makes the component extra small.",
        "zh-Hans": ""
      }
    }
  ],
  "mixins": [
    "colorable",
    "groupable",
    "routable",
    "sizeable",
    "themeable",
    "toggleable"
  ],
  "slots": [
    {
      "name": "default",
      "description": {
        "en": "The default Vue slot.",
        "zh-Hans": ""
      }
    }
  ],
  "events": [
    {
      "name": "click",
      "value": "MouseEvent",
      "description": {
        "en": "Emitted when component is clicked, toggles chip if contained in a chip group - Will trigger component to ripple when clicked unless the `.native` modifier is used",
        "zh-Hans": ""
      }
    },
    {
      "name": "click:close",
      "value": "void",
      "description": {
        "en": "Emitted when close icon is clicked",
        "zh-Hans": ""
      }
    },
    {
      "name": "input",
      "value": "boolean",
      "description": {
        "en": "The updated bound model",
        "zh-Hans": ""
      }
    },
    {
      "name": "update:active",
      "value": "boolean",
      "description": {
        "en": "Emitted when close icon is clicked, sets active to `false`",
        "zh-Hans": ""
      }
    }
  ],
  "functions": [],
  "name": "v-chip",
  "sass": [],
  "component": true
}