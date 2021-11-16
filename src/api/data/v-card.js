module.exports = {
  "props": [
    {
      "name": "active-class",
      "type": "string",
      "default": "undefined",
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
        "en": "Removes the ability to click or target the component.",
        "zh-Hans": ""
      }
    },
    {
      "name": "elevation",
      "type": [
        "number",
        "string"
      ],
      "default": "undefined",
      "source": "elevatable",
      "description": {
        "en": "Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).",
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
      "name": "flat",
      "type": "boolean",
      "default": "false",
      "source": "v-card",
      "description": {
        "en": "Removes the card's elevation.",
        "zh-Hans": ""
      }
    },
    {
      "name": "height",
      "type": [
        "number",
        "string"
      ],
      "default": "undefined",
      "source": "measurable",
      "description": {
        "en": "Sets the height for the component.",
        "zh-Hans": ""
      }
    },
    {
      "name": "hover",
      "type": "boolean",
      "default": "false",
      "source": "v-card",
      "description": {
        "en": "Will apply an elevation of 4dp when hovered (default 2dp). You can find more information on the [elevation page](/styles/elevation).",
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
      "name": "img",
      "type": "string",
      "default": "undefined",
      "source": "v-card",
      "description": {
        "en": "Specifies an image background for the card. For more advanced implementations, it is recommended that you use the [v-img](/components/images) component. You can find a [v-img example here](/components/cards/#media-with-text).",
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
        "en": "Designates that the component is a link. This is automatic when using the **href** or **to** prop.",
        "zh-Hans": ""
      }
    },
    {
      "name": "loader-height",
      "type": [
        "number",
        "string"
      ],
      "default": 4,
      "source": "loadable",
      "description": {
        "en": "Specifies the height of the loader",
        "zh-Hans": ""
      }
    },
    {
      "name": "loading",
      "type": [
        "boolean",
        "string"
      ],
      "default": false,
      "source": "loadable",
      "description": {
        "en": "Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color",
        "zh-Hans": ""
      }
    },
    {
      "name": "max-height",
      "type": [
        "number",
        "string"
      ],
      "default": "undefined",
      "source": "measurable",
      "description": {
        "en": "Sets the maximum height for the component.",
        "zh-Hans": ""
      }
    },
    {
      "name": "max-width",
      "type": [
        "number",
        "string"
      ],
      "default": "undefined",
      "source": "measurable",
      "description": {
        "en": "Sets the maximum width for the component.",
        "zh-Hans": ""
      }
    },
    {
      "name": "min-height",
      "type": [
        "number",
        "string"
      ],
      "default": "undefined",
      "source": "measurable",
      "description": {
        "en": "Sets the minimum height for the component.",
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
      "source": "measurable",
      "description": {
        "en": "Sets the minimum width for the component.",
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
      "source": "v-sheet",
      "description": {
        "en": "Removes elevation (box-shadow) and adds a *thin* border.",
        "zh-Hans": ""
      }
    },
    {
      "name": "raised",
      "type": "boolean",
      "default": "false",
      "source": "v-card",
      "description": {
        "en": "Specifies a higher default elevation (8dp). You can find more information on the [elevation page](/styles/elevation).",
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
      "name": "rounded",
      "type": [
        "boolean",
        "string"
      ],
      "default": "undefined",
      "source": "roundable",
      "description": {
        "en": "Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius).",
        "zh-Hans": ""
      }
    },
    {
      "name": "shaped",
      "type": "boolean",
      "default": "false",
      "source": "v-sheet",
      "description": {
        "en": "Applies a large border radius on the top left and bottom right of the card.",
        "zh-Hans": ""
      }
    },
    {
      "name": "tag",
      "type": "string",
      "default": "'div'",
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
      "name": "tile",
      "type": "boolean",
      "default": "false",
      "source": "roundable",
      "description": {
        "en": "Removes the component's **border-radius**.",
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
      "name": "width",
      "type": [
        "number",
        "string"
      ],
      "default": "undefined",
      "source": "measurable",
      "description": {
        "en": "Sets the width for the component.",
        "zh-Hans": ""
      }
    }
  ],
  "mixins": [
    "colorable",
    "elevatable",
    "loadable",
    "measurable",
    "roundable",
    "routable",
    "themeable",
    "v-sheet"
  ],
  "slots": [
    {
      "name": "default",
      "description": {
        "en": "The default Vue slot.",
        "zh-Hans": ""
      }
    },
    {
      "name": "progress",
      "description": {
        "en": "Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False)",
        "zh-Hans": ""
      }
    }
  ],
  "events": [
    {
      "name": "click",
      "value": "void",
      "description": {
        "en": "Emitted when component is clicked - Will trigger component to ripple when clicked unless the `.native` modifier is used",
        "zh-Hans": ""
      }
    }
  ],
  "functions": [],
  "name": "v-card",
  "sass": [],
  "component": true
}