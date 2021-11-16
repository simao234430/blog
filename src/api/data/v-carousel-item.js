module.exports = {
  "props": [
    {
      "name": "active-class",
      "type": "string",
      "default": "undefined",
      "source": "groupable",
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
      "name": "disabled",
      "type": "boolean",
      "default": "false",
      "source": "groupable",
      "description": {
        "en": "Removes the ability to click or target the component.",
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
      "name": "link",
      "type": "boolean",
      "default": "false",
      "source": "routable",
      "description": {
        "en": "Designates that the component is a link. This is automatic when using the **href** or **to** prop.",
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
      "name": "reverse-transition",
      "type": [
        "boolean",
        "string"
      ],
      "default": "undefined",
      "source": "v-window-item",
      "description": {
        "en": "Sets the reverse transition",
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
      "name": "tag",
      "type": "string",
      "default": "undefined",
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
      "name": "transition",
      "type": [
        "boolean",
        "string"
      ],
      "default": "undefined",
      "source": "v-window-item",
      "description": {
        "en": "The transition used when the component progressing through items. Can be one of the [built in transitions](/styles/transitions) or one your own.",
        "zh-Hans": ""
      }
    },
    {
      "name": "value",
      "type": "any",
      "default": "undefined",
      "source": "v-window-item",
      "description": {
        "en": "The value used when the component is selected in a group. If not provided, the index will be used.",
        "zh-Hans": ""
      }
    }
  ],
  "mixins": [
    "bootable",
    "groupable",
    "routable",
    "v-window-item"
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
  "events": [],
  "functions": [],
  "name": "v-carousel-item",
  "sass": [],
  "component": true
}