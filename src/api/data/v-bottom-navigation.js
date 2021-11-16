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
      "name": "active-class",
      "type": "string",
      "default": "'v-btn--active'",
      "source": "v-bottom-navigation",
      "description": {
        "en": "The class applied to a [v-btn](/components/buttons) when activated.",
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
      "name": "background-color",
      "type": "string",
      "default": "undefined",
      "source": "v-bottom-navigation",
      "description": {
        "en": "Changes the background-color for the component.",
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
      "name": "grow",
      "type": "boolean",
      "default": "false",
      "source": "v-bottom-navigation",
      "description": {
        "en": "Force [v-btn](/components/buttons)s to take up all available space.",
        "zh-Hans": ""
      }
    },
    {
      "name": "height",
      "type": [
        "number",
        "string"
      ],
      "default": 56,
      "source": "measurable",
      "description": {
        "en": "Sets the height for the component.",
        "zh-Hans": ""
      }
    },
    {
      "name": "hide-on-scroll",
      "type": "boolean",
      "default": "false",
      "source": "v-bottom-navigation",
      "description": {
        "en": "Will transition the navigation off screen when scrolling up.",
        "zh-Hans": ""
      }
    },
    {
      "name": "horizontal",
      "type": "boolean",
      "default": "false",
      "source": "v-bottom-navigation",
      "description": {
        "en": "Uses an alternative horizontal styling for [v-btn](/components/buttons).",
        "zh-Hans": ""
      }
    },
    {
      "name": "input-value",
      "type": "boolean",
      "default": "true",
      "source": "toggleable",
      "description": {
        "en": "Controls whether the component is visible or hidden. Supports the **.sync** modifier.",
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
      "name": "mandatory",
      "type": "boolean",
      "default": "false",
      "source": "v-bottom-navigation",
      "description": {
        "en": "Forces a value to always be selected (if available).",
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
      "name": "shift",
      "type": "boolean",
      "default": "false",
      "source": "v-bottom-navigation",
      "description": {
        "en": "Hides text of [v-btn](/components/buttons)s when they are not active.",
        "zh-Hans": ""
      }
    },
    {
      "name": "tag",
      "type": "string",
      "default": "'div'",
      "source": "v-bottom-navigation",
      "description": {
        "en": "Specify a custom tag used on the root element.",
        "zh-Hans": ""
      }
    },
    {
      "name": "value",
      "type": "any",
      "default": "undefined",
      "source": "proxyable",
      "description": {
        "en": "Holds the value of the currently active [v-btn](/components/buttons). If the button has no value supplied, its index will be used instead..",
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
    "measurable",
    "positionable",
    "proxyable",
    "scrollable",
    "themeable",
    "toggleable"
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
  "events": [
    {
      "name": "change",
      "value": "any",
      "description": {
        "en": "The value of currently selected button. If no value is assigned, will be the current index of the button.",
        "zh-Hans": ""
      }
    },
    {
      "name": "update:input-value",
      "value": "string | number",
      "description": {
        "en": "The event used for `input-value.sync`.",
        "zh-Hans": ""
      }
    }
  ],
  "functions": [],
  "name": "v-bottom-navigation",
  "sass": [],
  "component": true
}