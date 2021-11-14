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
      "default": "'v-btn--active'",
      "source": "v-bottom-navigation",
      "description": {
        "en": "The class applied to a [v-btn](/components/buttons) when activated.",
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
      "name": "background-color",
      "type": "string",
      "default": "undefined",
      "source": "v-bottom-navigation",
      "description": {
        "en": "Changes the background-color for the component.",
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
      "name": "grow",
      "type": "boolean",
      "default": "false",
      "source": "v-bottom-navigation",
      "description": {
        "en": "Force [v-btn](/components/buttons)s to take up all available space.",
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
      "default": 56,
      "source": "measurable",
      "description": {
        "en": "Sets the height for the component.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "hide-on-scroll",
      "type": "boolean",
      "default": "false",
      "source": "v-bottom-navigation",
      "description": {
        "en": "Will transition the navigation off screen when scrolling up.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "horizontal",
      "type": "boolean",
      "default": "false",
      "source": "v-bottom-navigation",
      "description": {
        "en": "Uses an alternative horizontal styling for [v-btn](/components/buttons).",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "input-value",
      "type": "boolean",
      "default": "true",
      "source": "toggleable",
      "description": {
        "en": "Controls whether the component is visible or hidden. Supports the **.sync** modifier.",
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
      "name": "mandatory",
      "type": "boolean",
      "default": "false",
      "source": "v-bottom-navigation",
      "description": {
        "en": "Forces a value to always be selected (if available).",
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
      "name": "scroll-target",
      "type": "string",
      "default": "undefined",
      "source": "scrollable",
      "description": {
        "en": "Designates the element to target for scrolling events. Uses `window` by default.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "shift",
      "type": "boolean",
      "default": "false",
      "source": "v-bottom-navigation",
      "description": {
        "en": "Hides text of [v-btn](/components/buttons)s when they are not active.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "tag",
      "type": "string",
      "default": "'div'",
      "source": "v-bottom-navigation",
      "description": {
        "en": "Specify a custom tag used on the root element.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "value",
      "type": "any",
      "default": "undefined",
      "source": "proxyable",
      "description": {
        "en": "Holds the value of the currently active [v-btn](/components/buttons). If the button has no value supplied, its index will be used instead..",
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "events": [
    {
      "name": "change",
      "value": "any",
      "description": {
        "en": "The value of currently selected button. If no value is assigned, will be the current index of the button.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "update:input-value",
      "value": "string | number",
      "description": {
        "en": "The event used for `input-value.sync`.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "functions": [],
  "name": "v-bottom-navigation",
  "sass": [
    {
      "name": "$bottom-nav-btn-font-size",
      "default": "map-deep-get($headings, 'caption', 'size') !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$bottom-nav-btn-min-width",
      "default": "80px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$bottom-nav-btn-max-width",
      "default": "168px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$bottom-nav-shift-btn-top",
      "default": "calc(100% - 12px) !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$bottom-nav-shift-btn-active-top",
      "default": "calc(100% - 22px) !default;",
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