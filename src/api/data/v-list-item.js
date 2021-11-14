module.exports = {
  "props": [
    {
      "name": "active-class",
      "type": "string",
      "default": "",
      "source": "routable",
      "description": {
        "en": "Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "append",
      "type": "boolean",
      "default": "false",
      "source": "routable",
      "description": {
        "en": "Setting **append** prop always appends the relative path to the current path. You can find more information about the [**append** prop](https://router.vuejs.org/api/#append) on the vue-router documentation.",
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
        "en": "Applies specified color to the control when in an **active** state or **input-value** is **true** - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`)",
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
      "name": "dense",
      "type": "boolean",
      "default": "false",
      "source": "v-list-item",
      "description": {
        "en": "Lowers max height of list tiles",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "disabled",
      "type": "boolean",
      "default": "false",
      "source": "routable",
      "description": {
        "en": "Disables the component",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "exact",
      "type": "boolean",
      "default": "false",
      "source": "routable",
      "description": {
        "en": "Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "exact-active-class",
      "type": "string",
      "default": "undefined",
      "source": "routable",
      "description": {
        "en": "Configure the active CSS class applied when the link is active with exact match. You can find more information about the [**exact-active-class** prop](https://router.vuejs.org/api/#exact-active-class) on the vue-router documentation.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "exact-path",
      "type": "boolean",
      "default": "false",
      "source": "routable",
      "description": {
        "en": "Exactly match the link, ignoring the `query` and the `hash` sections. You can find more information about the [**exact-path** prop](https://router.vuejs.org/api/#exact-path) on the vue-router documentation.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "inactive",
      "type": "boolean",
      "default": "false",
      "source": "v-list-item",
      "description": {
        "en": "If set, the list tile will not be rendered as a link even if it has to/href prop or @click handler",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "input-value",
      "type": "any",
      "default": "undefined",
      "source": "toggleable",
      "description": {
        "en": "Controls the **active** state of the item. This is typically used to highlight the component",
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
      "name": "link",
      "type": "boolean",
      "default": "false",
      "source": "routable",
      "description": {
        "en": "Designates that the component is a link. This is automatic when using the **href** or **to** prop.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "nuxt",
      "type": "boolean",
      "default": "false",
      "source": "routable",
      "description": {
        "en": "Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/).",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "replace",
      "type": "boolean",
      "default": "false",
      "source": "routable",
      "description": {
        "en": "Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [**replace** prop](https://router.vuejs.org/api/#replace) on the vue-router documentation.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "selectable",
      "type": "boolean",
      "default": "false",
      "source": "v-list-item",
      "description": {
        "en": "Allow text selection inside `v-list-item`. This prop uses [user-select](https://developer.mozilla.org/en-US/docs/Web/CSS/user-select)",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "tag",
      "type": "string",
      "default": "'div'",
      "source": "routable",
      "description": {
        "en": "Specify a custom tag used on the root element.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "target",
      "type": "string",
      "default": "undefined",
      "source": "routable",
      "description": {
        "en": "Designates the target attribute. This should only be applied when using the **href** prop.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "three-line",
      "type": "boolean",
      "default": "false",
      "source": "v-list-item",
      "description": {
        "en": "Increases list-item height for three lines. This prop uses [line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp) and is not supported in all browsers.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "two-line",
      "type": "boolean",
      "default": "false",
      "source": "v-list-item",
      "description": {
        "en": "Increases list-item height for two lines. This prop uses [line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp) and is not supported in all browsers.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "value",
      "type": "any",
      "default": "undefined",
      "source": "v-list-item",
      "description": {
        "en": "The value used when a child of a [v-list-item-group](/components/list-item-groups).",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "mixins": [
    "colorable",
    "groupable",
    "routable",
    "themeable",
    "toggleable"
  ],
  "slots": [
    {
      "name": "default",
      "props": {
        "active": "boolean",
        "toggle": "Function"
      },
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
      "name": "click",
      "value": "MouseEvent | KeyboardEvent",
      "description": {
        "en": "Event that is emitted when the component is clicked",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "keydown",
      "value": "KeyboardEvent",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "functions": [],
  "name": "v-list-item",
  "sass": [],
  "component": true
}