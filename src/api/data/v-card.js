module.exports = {
  "props": [
    {
      "name": "active-class",
      "type": "string",
      "default": "undefined",
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
        "en": "Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).",
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
      "name": "disabled",
      "type": "boolean",
      "default": "false",
      "source": "routable",
      "description": {
        "en": "Removes the ability to click or target the component.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
      "name": "flat",
      "type": "boolean",
      "default": "false",
      "source": "v-card",
      "description": {
        "en": "Removes the card's elevation.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "hover",
      "type": "boolean",
      "default": "false",
      "source": "v-card",
      "description": {
        "en": "Will apply an elevation of 4dp when hovered (default 2dp). You can find more information on the [elevation page](/styles/elevation).",
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
      "name": "img",
      "type": "string",
      "default": "undefined",
      "source": "v-card",
      "description": {
        "en": "Specifies an image background for the card. For more advanced implementations, it is recommended that you use the [v-img](/components/images) component. You can find a [v-img example here](/components/cards/#media-with-text).",
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
      "name": "loader-height",
      "type": [
        "number",
        "string"
      ],
      "default": 4,
      "source": "loadable",
      "description": {
        "en": "Specifies the height of the loader",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
      "default": "undefined",
      "source": "measurable",
      "description": {
        "en": "Sets the maximum height for the component.",
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
      "default": "undefined",
      "source": "measurable",
      "description": {
        "en": "Sets the maximum width for the component.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
      "source": "measurable",
      "description": {
        "en": "Sets the minimum width for the component.",
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
      "name": "outlined",
      "type": "boolean",
      "default": "false",
      "source": "v-sheet",
      "description": {
        "en": "Removes elevation (box-shadow) and adds a *thin* border.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "raised",
      "type": "boolean",
      "default": "false",
      "source": "v-card",
      "description": {
        "en": "Specifies a higher default elevation (8dp). You can find more information on the [elevation page](/styles/elevation).",
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
      "name": "shaped",
      "type": "boolean",
      "default": "false",
      "source": "v-sheet",
      "description": {
        "en": "Applies a large border radius on the top left and bottom right of the card.",
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
      "name": "width",
      "type": [
        "number",
        "string"
      ],
      "default": "undefined",
      "source": "measurable",
      "description": {
        "en": "Sets the width for the component.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "progress",
      "description": {
        "en": "Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False)",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "events": [
    {
      "name": "click",
      "value": "void",
      "description": {
        "en": "Emitted when component is clicked - Will trigger component to ripple when clicked unless the `.native` modifier is used",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "functions": [],
  "name": "v-card",
  "sass": [
    {
      "name": "$card-actions-padding",
      "default": "8px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$card-adjacent-sibling-text-padding-top",
      "default": "0 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$card-border-radius",
      "default": "$border-radius-root !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$card-btn-margin-x",
      "default": "8px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$card-btn-padding",
      "default": "0 8px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$card-btn-small-margin-x",
      "default": "4px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$card-disabled-opacity",
      "default": "0.6 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$card-elevation",
      "default": "2 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$card-hover-elevation",
      "default": "8 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$card-link-focus-opacity",
      "default": "0.08 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$card-outlined-border-width",
      "default": "thin !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$card-overflow-wrap",
      "default": "break-word !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$card-raised-elevation",
      "default": "8 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$card-shaped-border-radius",
      "default": "map-get($rounded, 'xl') $card-border-radius !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$card-subtitle-padding",
      "default": "16px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$card-text-font-size",
      "default": "map-deep-get($headings, 'subtitle-2', 'size') !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$card-text-font-weight",
      "default": "400 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$card-text-letter-spacing",
      "default": "map-deep-get($headings, 'subtitle-2', 'letter-spacing') !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$card-text-line-height",
      "default": "map-deep-get($headings, 'subtitle-2', 'line-height') !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$card-title-adjacent-sibling-subtitle-margin-top",
      "default": "-16px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$card-title-adjacent-sibling-subtitle-text-padding-top",
      "default": "0 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$card-title-font-size",
      "default": "map-deep-get($headings, 'h6', 'size') !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$card-title-font-weight",
      "default": "map-deep-get($headings, 'h6', 'weight') !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$card-title-letter-spacing",
      "default": "map-deep-get($headings, 'h6', 'letter-spacing') !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$card-title-line-height",
      "default": "map-deep-get($headings, 'h6', 'line-height') !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$card-title-word-break",
      "default": "break-all !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$card-white-space",
      "default": "normal !default;",
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