module.exports = {
  "props": [
    {
      "name": "absolute",
      "type": "boolean",
      "default": "false",
      "source": "v-toolbar",
      "description": {
        "en": "Applies position: absolute to the component.",
        "zh-Hans": ""
      }
    },
    {
      "name": "app",
      "type": "boolean",
      "default": "false",
      "source": "applicationable",
      "description": {
        "en": "Designates the component as part of the application layout. Used for dynamically adjusting content sizing. Components using this prop should reside **outside** of `v-main` component to function properly. You can find more information about layouts on the [application page](/components/application). **Note:** this prop automatically applies **position: fixed** to the layout element. You can overwrite this functionality by using the `absolute` prop",
        "zh-Hans": ""
      }
    },
    {
      "name": "bottom",
      "type": "boolean",
      "default": "false",
      "source": "v-toolbar",
      "description": {
        "en": "Aligns the component towards the bottom.",
        "zh-Hans": ""
      }
    },
    {
      "name": "clipped-left",
      "type": "boolean",
      "default": "false",
      "source": "v-app-bar",
      "description": {
        "en": "Designates that the application's `v-navigation-drawer` that is positioned on the left is below the app-bar.",
        "zh-Hans": ""
      }
    },
    {
      "name": "clipped-right",
      "type": "boolean",
      "default": "false",
      "source": "v-app-bar",
      "description": {
        "en": "Designates that the application's `v-navigation-drawer` that is positioned on the right is below the app-bar.",
        "zh-Hans": ""
      }
    },
    {
      "name": "collapse",
      "type": "boolean",
      "default": "false",
      "source": "v-toolbar",
      "description": {
        "en": "Puts the toolbar into a collapsed state reducing its maximum width.",
        "zh-Hans": ""
      }
    },
    {
      "name": "collapse-on-scroll",
      "type": "boolean",
      "default": "false",
      "source": "v-app-bar",
      "description": {
        "en": "Puts the app-bar into a collapsed state when scrolling.",
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
      "name": "dense",
      "type": "boolean",
      "default": "false",
      "source": "v-toolbar",
      "description": {
        "en": "Reduces the height of the toolbar content to 48px (96px when using the **prominent** prop).",
        "zh-Hans": ""
      }
    },
    {
      "name": "elevate-on-scroll",
      "type": "boolean",
      "default": "false",
      "source": "v-app-bar",
      "description": {
        "en": "Elevates the app-bar when scrolling.",
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
      "name": "extended",
      "type": "boolean",
      "default": "false",
      "source": "v-toolbar",
      "description": {
        "en": "Use this prop to increase the height of the toolbar _without_ using the `extension` slot for adding content. May be used in conjunction with the **extension-height** prop, and any of the other props that affect the height of the toolbar, e.g. **prominent**, **dense**, etc., **WITH THE EXCEPTION** of **height**.",
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
    {
      "name": "fade-img-on-scroll",
      "type": "boolean",
      "default": "false",
      "source": "v-app-bar",
      "description": {
        "en": "When using the **src** prop or `img` slot, will fade the image when scrolling.",
        "zh-Hans": ""
      }
    },
    {
      "name": "fixed",
      "type": "boolean",
      "default": "false",
      "source": "positionable",
      "description": {
        "en": "Applies **position: fixed** to the component.",
        "zh-Hans": ""
      }
    },
    {
      "name": "flat",
      "type": "boolean",
      "default": "false",
      "source": "v-toolbar",
      "description": {
        "en": "Removes the toolbar's box-shadow.",
        "zh-Hans": ""
      }
    },
    {
      "name": "floating",
      "type": "boolean",
      "default": "false",
      "source": "v-toolbar",
      "description": {
        "en": "Applies **display: inline-flex** to the component.",
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
        "en": "Designates a specific height for the toolbar. Overrides the heights imposed by other props, e.g. **prominent**, **dense**, **extended**, etc.",
        "zh-Hans": ""
      }
    },
    {
      "name": "hide-on-scroll",
      "type": "boolean",
      "default": "false",
      "source": "v-app-bar",
      "description": {
        "en": "Hides the app-bar when scrolling. Will still show the `extension` slot.",
        "zh-Hans": ""
      }
    },
    {
      "name": "inverted-scroll",
      "type": "boolean",
      "default": "false",
      "source": "v-app-bar",
      "description": {
        "en": "Hides the app-bar when scrolling down and displays it when scrolling up.",
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
      "name": "prominent",
      "type": "boolean",
      "default": "false",
      "source": "v-toolbar",
      "description": {
        "en": "Increases the height of the toolbar content to 128px.",
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
      "name": "scroll-off-screen",
      "type": "boolean",
      "default": "false",
      "source": "v-app-bar",
      "description": {
        "en": "Hides the app-bar when scrolling. Will **NOT** show the `extension` slot.",
        "zh-Hans": ""
      }
    },
    {
      "name": "scroll-target",
      "type": "string",
      "default": "undefined",
      "source": "scrollable",
      "description": {
        "en": "Designates the element to target for scrolling events. Uses `window` by default.",
        "zh-Hans": ""
      }
    },
    {
      "name": "scroll-threshold",
      "type": [
        "string",
        "number"
      ],
      "default": "undefined",
      "source": "scrollable",
      "description": {
        "en": "The amount of scroll distance down before **hide-on-scroll** activates.",
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
      "name": "short",
      "type": "boolean",
      "default": "false",
      "source": "v-toolbar",
      "description": {
        "en": "Reduce the height of the toolbar content to 56px (112px when using the **prominent** prop).",
        "zh-Hans": ""
      }
    },
    {
      "name": "shrink-on-scroll",
      "type": "boolean",
      "default": "false",
      "source": "v-app-bar",
      "description": {
        "en": "Shrinks a **prominent** toolbar to a **dense** or **short** (default) one when scrolling.",
        "zh-Hans": ""
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
        "en": "Image source. See `v-img` for details",
        "zh-Hans": ""
      }
    },
    {
      "name": "tag",
      "type": "string",
      "default": "'header'",
      "source": "v-sheet",
      "description": {
        "en": "Specify a custom tag used on the root element.",
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
      "name": "value",
      "type": "boolean",
      "default": "true",
      "source": "toggleable",
      "description": {
        "en": "Controls whether the component is visible or hidden.",
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
    "applicationable",
    "colorable",
    "elevatable",
    "measurable",
    "positionable",
    "roundable",
    "scrollable",
    "ssr-bootable",
    "themeable",
    "toggleable",
    "v-toolbar"
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
      "name": "extension",
      "description": {
        "en": "Slot positioned directly under the main content of the toolbar. Height of this slot can be set explicitly with the **extension-height** prop. If this slot has no content, the **extended** prop may be used instead.",
        "zh-Hans": ""
      }
    },
    {
      "name": "img",
      "props": {
        "props": "{ height: string, src: string | srcObject }"
      },
      "description": {
        "en": "Expects the [v-img](/components/images) component. Scoped **props** should be applied with `v-bind=\"props\"`.",
        "zh-Hans": ""
      }
    }
  ],
  "events": [],
  "functions": [],
  "name": "v-app-bar",
  "sass": [],
  "component": true
}