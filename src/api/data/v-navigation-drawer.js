module.exports = {
  "props": [
    {
      "name": "absolute",
      "type": "boolean",
      "default": "false",
      "source": "positionable",
      "description": {
        "en": "Applies **position: absolute** to the component.",
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
      "source": "v-navigation-drawer",
      "description": {
        "en": "Expands from the bottom of the screen on mobile devices",
        "zh-Hans": ""
      }
    },
    {
      "name": "clipped",
      "type": "boolean",
      "default": "false",
      "source": "v-navigation-drawer",
      "description": {
        "en": "A clipped drawer rests under the application toolbar. **Note:** requires the **clipped-left** or **clipped-right** prop on `v-app-bar` to work as intended",
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
      "name": "disable-resize-watcher",
      "type": "boolean",
      "default": "false",
      "source": "v-navigation-drawer",
      "description": {
        "en": "Will automatically open/close drawer when resized depending if mobile or desktop.",
        "zh-Hans": ""
      }
    },
    {
      "name": "disable-route-watcher",
      "type": "boolean",
      "default": "false",
      "source": "v-navigation-drawer",
      "description": {
        "en": "Disables opening of navigation drawer when route changes",
        "zh-Hans": ""
      }
    },
    {
      "name": "expand-on-hover",
      "type": "boolean",
      "default": "false",
      "source": "v-navigation-drawer",
      "description": {
        "en": "Collapses the drawer to a **mini-variant** until hovering with the mouse",
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
      "name": "floating",
      "type": "boolean",
      "default": "false",
      "source": "v-navigation-drawer",
      "description": {
        "en": "A floating drawer has no visible container (no border-right)",
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
    {
      "name": "hide-overlay",
      "type": "boolean",
      "default": "false",
      "source": "overlayable",
      "description": {
        "en": "Hides the display of the overlay.",
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
      "name": "mini-variant",
      "type": "boolean",
      "default": "false",
      "source": "v-navigation-drawer",
      "description": {
        "en": "Condenses navigation drawer width, also accepts the **.sync** modifier. With this, the drawer will re-open when clicking it",
        "zh-Hans": ""
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
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
    {
      "name": "overlay-color",
      "type": "string",
      "default": "undefined",
      "source": "overlayable",
      "description": {
        "en": "Sets the overlay color.",
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
    {
      "name": "permanent",
      "type": "boolean",
      "default": "false",
      "source": "v-navigation-drawer",
      "description": {
        "en": "The drawer remains visible regardless of screen size",
        "zh-Hans": ""
      }
    },
    {
      "name": "right",
      "type": "boolean",
      "default": "false",
      "source": "v-navigation-drawer",
      "description": {
        "en": "Places the navigation drawer on the right",
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
      "source": "v-navigation-drawer",
      "description": {
        "en": "Specifies a [v-img](/components/images) as the component's background.",
        "zh-Hans": ""
      }
    },
    {
      "name": "stateless",
      "type": "boolean",
      "default": "false",
      "source": "v-navigation-drawer",
      "description": {
        "en": "Remove all automated state functionality (resize, mobile, route) and manually control the drawer state",
        "zh-Hans": ""
      }
    },
    {
      "name": "tag",
      "type": "string",
      "default": "'aside'",
      "source": "v-navigation-drawer",
      "description": {
        "en": "Specify a custom tag used on the root element.",
        "zh-Hans": ""
      }
    },
    {
      "name": "temporary",
      "type": "boolean",
      "default": "false",
      "source": "v-navigation-drawer",
      "description": {
        "en": "A temporary drawer sits above its application and uses a scrim (overlay) to darken the background",
        "zh-Hans": ""
      }
    },
    {
      "name": "touchless",
      "type": "boolean",
      "default": "false",
      "source": "v-navigation-drawer",
      "description": {
        "en": "Disable mobile touch functionality",
        "zh-Hans": ""
      }
    },
    {
      "name": "value",
      "type": "any",
      "default": "undefined",
      "source": "v-navigation-drawer",
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
      "default": 256,
      "source": "v-navigation-drawer",
      "description": {
        "en": "Sets the width for the component.",
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
    {
      "name": "default",
      "description": {
        "en": "The default Vue slot.",
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
    {
      "name": "prepend",
      "description": {
        "en": "A slot at the top of the drawer",
        "zh-Hans": ""
      }
    }
  ],
  "events": [
    {
      "name": "input",
      "value": "boolean",
      "description": {
        "en": "The updated bound model",
        "zh-Hans": ""
      }
    },
    {
      "name": "transitionend",
      "value": "object",
      "description": {
        "en": "Emits event object when transition is complete.",
        "zh-Hans": ""
      }
    },
    {
      "name": "update:mini-variant",
      "value": "boolean",
      "description": {
        "en": "The `mini-variant.sync` event",
        "zh-Hans": ""
      }
    }
  ],
  "functions": [],
  "name": "v-navigation-drawer",
  "sass": [],
  "component": true
}