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
      "name": "app",
      "type": "boolean",
      "default": "false",
      "source": "applicationable",
      "description": {
        "en": "Designates the component as part of the application layout. Used for dynamically adjusting content sizing. Components using this prop should reside **outside** of `v-main` component to function properly. You can find more information about layouts on the [application page](/components/application). **Note:** this prop automatically applies **position: fixed** to the layout element. You can overwrite this functionality by using the `absolute` prop",
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
      "default": "auto",
      "source": "measurable",
      "description": {
        "en": "Sets the height for the component.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "inset",
      "type": "boolean",
      "default": "false",
      "source": "v-footer",
      "description": {
        "en": "Positions the toolbar offset from an application `v-navigation-drawer`",
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
      "name": "padless",
      "type": "boolean",
      "default": "false",
      "source": "v-footer",
      "description": {
        "en": "Remove all padding from the footer",
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
      "default": "'footer'",
      "source": "v-sheet",
      "description": {
        "en": "Specify a custom tag used on the root element.",
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
    "applicationable",
    "colorable",
    "elevatable",
    "measurable",
    "positionable",
    "roundable",
    "ssr-bootable",
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
    }
  ],
  "events": [],
  "functions": [],
  "name": "v-footer",
  "sass": [
    {
      "name": "$footer-border-radius",
      "default": "0 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$footer-elevation",
      "default": "0 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$footer-padding",
      "default": "6px 16px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$footer-padless-padding",
      "default": "0px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$footer-shaped-border-radius",
      "default": "map-get($rounded, 'xl') $footer-border-radius !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$footer-transition-duration",
      "default": "0.2s !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$footer-transition-property",
      "default": "background-color, left, right !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$footer-transition-timing-function",
      "default": "map-get($transition, 'fast-out-slow-in') !default;",
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