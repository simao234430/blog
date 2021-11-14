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
      "name": "block",
      "type": "boolean",
      "default": "false",
      "source": "v-btn",
      "description": {
        "en": "Expands the button to 100% of available space.",
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
      "name": "depressed",
      "type": "boolean",
      "default": "false",
      "source": "v-btn",
      "description": {
        "en": "Removes the button box shadow.",
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
      "name": "fab",
      "type": "boolean",
      "default": "false",
      "source": "v-btn",
      "description": {
        "en": "Designates the button as a floating-action-button. Button will become _round_.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "fixed",
      "type": "boolean",
      "default": "false",
      "source": "positionable",
      "description": {
        "en": "Applies **position: fixed** to the component.",
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
      "name": "icon",
      "type": "boolean",
      "default": "false",
      "source": "v-btn",
      "description": {
        "en": "Designates the button as icon. Button will become _round_ and applies the **text** prop.",
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
        "en": "Controls the button's active state.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "large",
      "type": "boolean",
      "default": "false",
      "source": "sizeable",
      "description": {
        "en": "Makes the component large.",
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
        "en": "Aligns the component towards the left. This should be used with the **absolute** or **fixed** props.",
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
      "name": "loading",
      "type": "boolean",
      "default": "false",
      "source": "v-btn",
      "description": {
        "en": "Adds a loading icon animation.",
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
        "en": "Makes the background transparent and applies a thin border.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "plain",
      "type": "boolean",
      "default": "false",
      "source": "v-btn",
      "description": {
        "en": "Removes the default background change applied when hovering over the button.",
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
      "name": "retain-focus-on-click",
      "type": "boolean",
      "default": "false",
      "source": "v-btn",
      "description": {
        "en": "Don't blur on click.",
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
        "en": "Aligns the component towards the right. This should be used with the **absolute** or **fixed** props.",
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
      "type": "boolean",
      "default": "false",
      "source": "roundable",
      "description": {
        "en": "Applies a large border radius on the button.",
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
      "name": "small",
      "type": "boolean",
      "default": "false",
      "source": "sizeable",
      "description": {
        "en": "Makes the component small.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "tag",
      "type": "string",
      "default": "'button'",
      "source": "v-sheet",
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
      "name": "text",
      "type": "boolean",
      "default": "false",
      "source": "v-btn",
      "description": {
        "en": "Makes the background transparent. When using the **color** prop, the color will be applied to the button text instead of the background.",
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
      "name": "type",
      "type": "string",
      "default": "'button'",
      "source": "v-btn",
      "description": {
        "en": "Set the button's **type** attribute.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "value",
      "type": "any",
      "default": "undefined",
      "source": "v-btn",
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
    },
    {
      "name": "x-large",
      "type": "boolean",
      "default": "false",
      "source": "sizeable",
      "description": {
        "en": "Makes the component extra large.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "x-small",
      "type": "boolean",
      "default": "false",
      "source": "sizeable",
      "description": {
        "en": "Makes the component extra small.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "mixins": [
    "colorable",
    "elevatable",
    "groupable",
    "measurable",
    "positionable",
    "roundable",
    "routable",
    "sizeable",
    "themeable",
    "toggleable",
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
      "name": "loader",
      "description": {
        "en": "Custom loader.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "events": [
    {
      "name": "click",
      "value": "Event",
      "description": {
        "en": "Event that is emitted when the component is clicked",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "functions": [],
  "name": "v-btn",
  "sass": [
    {
      "name": "$btn-active-opacity",
      "default": "0.18 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$btn-border-radius",
      "default": "$border-radius-root !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$btn-focus-opacity",
      "default": "0.24 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$btn-font-weight",
      "default": "500 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$btn-hover-opacity",
      "default": "0.08 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$btn-icon-font-size",
      "default": "18px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$btn-icon-padding",
      "default": "12px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$btn-letter-spacing",
      "default": ".0892857143em !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$btn-outline-border-width",
      "default": "thin !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$btn-round-border-radius",
      "default": "50% !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$btn-rounded-border-radius",
      "default": "28px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$btn-text-transform",
      "default": "uppercase !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$btn-tile-border-radius",
      "default": "0 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$btn-transition-duration",
      "default": "0.28s !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$btn-transition-fn",
      "default": "map-get($transition, 'fast-out-slow-in') !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$btn-transition",
      "default": "opacity 0.2s map-get($transition, 'ease-in-out') !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$btn-states",
      "default": "(\n  'states': (\n    'activated': $btn-active-opacity,\n    'focus': $btn-focus-opacity,\n    'hover': $btn-hover-opacity\n  )\n);",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$btn-sizes",
      "default": "map-deep-merge(\n  (\n    'x-small': 20,\n    'small': 28,\n    'default': 36,\n    'large': 44,\n    'x-large': 52\n  ),\n  $btn-sizes\n);",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$btn-font-sizes",
      "default": "map-deep-merge(\n  (\n    'x-small': .625rem,\n    'small': .75rem,\n    'default': .875rem,\n    'large': .875rem,\n    'x-large': 1rem\n  ),\n  $btn-font-sizes\n);",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$fab-sizes",
      "default": "map-deep-merge(\n  (\n    'x-small': 32,\n    'small': 40,\n    'default': 56,\n    'large': 64,\n    'x-large': 72\n  ),\n  $fab-sizes\n);",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$fab-icon-sizes",
      "default": "map-deep-merge(\n  (\n    'x-small': 18,\n    'small': 24,\n    'default': 24,\n    'large': 28,\n    'x-large': 32\n  ),\n  $fab-icon-sizes\n);",
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