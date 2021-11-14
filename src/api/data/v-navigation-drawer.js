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
      "name": "bottom",
      "type": "boolean",
      "default": "false",
      "source": "v-navigation-drawer",
      "description": {
        "en": "Expands from the bottom of the screen on mobile devices",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "clipped",
      "type": "boolean",
      "default": "false",
      "source": "v-navigation-drawer",
      "description": {
        "en": "A clipped drawer rests under the application toolbar. **Note:** requires the **clipped-left** or **clipped-right** prop on `v-app-bar` to work as intended",
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
      "name": "disable-resize-watcher",
      "type": "boolean",
      "default": "false",
      "source": "v-navigation-drawer",
      "description": {
        "en": "Will automatically open/close drawer when resized depending if mobile or desktop.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "disable-route-watcher",
      "type": "boolean",
      "default": "false",
      "source": "v-navigation-drawer",
      "description": {
        "en": "Disables opening of navigation drawer when route changes",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "expand-on-hover",
      "type": "boolean",
      "default": "false",
      "source": "v-navigation-drawer",
      "description": {
        "en": "Collapses the drawer to a **mini-variant** until hovering with the mouse",
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
      "name": "floating",
      "type": "boolean",
      "default": "false",
      "source": "v-navigation-drawer",
      "description": {
        "en": "A floating drawer has no visible container (no border-right)",
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
      "default": "100%",
      "source": "v-navigation-drawer",
      "description": {
        "en": "Sets the height of the navigation drawer",
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
      "name": "mini-variant",
      "type": "boolean",
      "default": "false",
      "source": "v-navigation-drawer",
      "description": {
        "en": "Condenses navigation drawer width, also accepts the **.sync** modifier. With this, the drawer will re-open when clicking it",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "mini-variant-width",
      "type": [
        "number",
        "string"
      ],
      "default": 56,
      "source": "v-navigation-drawer",
      "description": {
        "en": "Designates the width assigned when the `mini` prop is turned on",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "mobile-breakpoint",
      "type": [
        "number",
        "string"
      ],
      "source": "mobile",
      "description": {
        "en": "Sets the designated mobile breakpoint for the component. This will apply alternate styles for mobile devices such as the `temporary` prop, or activate the `bottom` prop when the breakpoint value is met. Setting the value to `0` will disable this functionality.",
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
      "name": "permanent",
      "type": "boolean",
      "default": "false",
      "source": "v-navigation-drawer",
      "description": {
        "en": "The drawer remains visible regardless of screen size",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "right",
      "type": "boolean",
      "default": "false",
      "source": "v-navigation-drawer",
      "description": {
        "en": "Places the navigation drawer on the right",
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
      "source": "v-navigation-drawer",
      "description": {
        "en": "Specifies a [v-img](/components/images) as the component's background.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "stateless",
      "type": "boolean",
      "default": "false",
      "source": "v-navigation-drawer",
      "description": {
        "en": "Remove all automated state functionality (resize, mobile, route) and manually control the drawer state",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "tag",
      "type": "string",
      "default": "'aside'",
      "source": "v-navigation-drawer",
      "description": {
        "en": "Specify a custom tag used on the root element.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "temporary",
      "type": "boolean",
      "default": "false",
      "source": "v-navigation-drawer",
      "description": {
        "en": "A temporary drawer sits above its application and uses a scrim (overlay) to darken the background",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "touchless",
      "type": "boolean",
      "default": "false",
      "source": "v-navigation-drawer",
      "description": {
        "en": "Disable mobile touch functionality",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "value",
      "type": "any",
      "default": "undefined",
      "source": "v-navigation-drawer",
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
      "default": 256,
      "source": "v-navigation-drawer",
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
    "dependent",
    "mobile",
    "overlayable",
    "positionable",
    "ssr-bootable",
    "themeable"
  ],
  "slots": [
    {
      "name": "append",
      "description": {
        "en": "A slot at the bottom of the drawer",
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
    },
    {
      "name": "img",
      "props": {
        "height": "string",
        "src": "string | srcObject"
      },
      "description": {
        "en": "Used to modify `v-img` properties when using the **src** prop",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "prepend",
      "description": {
        "en": "A slot at the top of the drawer",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "events": [
    {
      "name": "input",
      "value": "boolean",
      "description": {
        "en": "The updated bound model",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "transitionend",
      "value": "object",
      "description": {
        "en": "Emits event object when transition is complete.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "update:mini-variant",
      "value": "boolean",
      "description": {
        "en": "The `mini-variant.sync` event",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "functions": [],
  "name": "v-navigation-drawer",
  "sass": [
    {
      "name": "$navigation-drawer-border-width",
      "default": "1px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$navigation-drawer-mobile-temporary-elevation",
      "default": "16 !default;",
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