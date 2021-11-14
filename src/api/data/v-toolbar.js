module.exports = {
  "props": [
    {
      "name": "absolute",
      "type": "boolean",
      "default": "false",
      "source": "v-toolbar",
      "description": {
        "en": "Applies position: absolute to the component.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "bottom",
      "type": "boolean",
      "default": "false",
      "source": "v-toolbar",
      "description": {
        "en": "Aligns the component towards the bottom.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "collapse",
      "type": "boolean",
      "default": "false",
      "source": "v-toolbar",
      "description": {
        "en": "Puts the toolbar into a collapsed state reducing its maximum width.",
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
      "name": "dense",
      "type": "boolean",
      "default": "false",
      "source": "v-toolbar",
      "description": {
        "en": "Reduces the height of the toolbar content to 48px (96px when using the **prominent** prop).",
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
      "name": "extended",
      "type": "boolean",
      "default": "false",
      "source": "v-toolbar",
      "description": {
        "en": "Use this prop to increase the height of the toolbar _without_ using the `extension` slot for adding content. May be used in conjunction with the **extension-height** prop, and any of the other props that affect the height of the toolbar, e.g. **prominent**, **dense**, etc., **WITH THE EXCEPTION** of **height**.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "extension-height",
      "type": [
        "number",
        "string"
      ],
      "default": 48,
      "source": "v-toolbar",
      "description": {
        "en": "Specify an explicit height for the `extension` slot. ",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "flat",
      "type": "boolean",
      "default": "false",
      "source": "v-toolbar",
      "description": {
        "en": "Removes the toolbar's box-shadow.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "floating",
      "type": "boolean",
      "default": "false",
      "source": "v-toolbar",
      "description": {
        "en": "Applies **display: inline-flex** to the component.",
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
        "en": "Designates a specific height for the toolbar. Overrides the heights imposed by other props, e.g. **prominent**, **dense**, **extended**, etc.",
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
      "name": "prominent",
      "type": "boolean",
      "default": "false",
      "source": "v-toolbar",
      "description": {
        "en": "Increases the height of the toolbar content to 128px.",
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
      "name": "short",
      "type": "boolean",
      "default": "false",
      "source": "v-toolbar",
      "description": {
        "en": "Reduce the height of the toolbar content to 56px (112px when using the **prominent** prop).",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "src",
      "type": [
        "string",
        "object"
      ],
      "default": "undefined",
      "source": "v-toolbar",
      "description": {
        "en": "Specifies a [v-img](/components/images) as the component's background.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "tag",
      "type": "string",
      "default": "'header'",
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
    "colorable",
    "elevatable",
    "measurable",
    "roundable",
    "themeable"
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
      "name": "extension",
      "description": {
        "en": "Slot positioned directly under the main content of the toolbar. Height of this slot can be set explicitly with the **extension-height** prop. If this slot has no content, the **extended** prop may be used instead.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "img",
      "props": {
        "props": "{ height: string, src: string | srcObject }"
      },
      "description": {
        "en": "Expects the [v-img](/components/images) component. Scoped **props** should be applied with `v-bind=\"props\"`.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "events": [],
  "functions": [],
  "name": "v-toolbar",
  "sass": [
    {
      "name": "$toolbar-btn-icon-size",
      "default": "48px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$toolbar-content-padding-y",
      "default": "4px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$toolbar-content-padding-x",
      "default": "16px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$toolbar-elevation",
      "default": "4 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$toolbar-border-radius",
      "default": "0 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$toolbar-shaped-border-radius",
      "default": "map-get($rounded, 'xl') $toolbar-border-radius !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$toolbar-title-padding",
      "default": "20px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$toolbar-transition",
      "default": "0.2s map-get($transition, 'fast-out-slow-in') transform,\n                     0.2s map-get($transition, 'fast-out-slow-in') background-color,\n                     0.2s map-get($transition, 'fast-out-slow-in') left,\n                     0.2s map-get($transition, 'fast-out-slow-in') right,\n                     280ms map-get($transition, 'fast-out-slow-in') box-shadow,\n                     0.25s map-get($transition, 'fast-out-slow-in') max-width,\n                     0.25s map-get($transition, 'fast-out-slow-in') width !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$toolbar-collapsed-max-width",
      "default": "112px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$toolbar-collapsed-border-radius",
      "default": "24px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$toolbar-prominent-padding",
      "default": "6px !default;",
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