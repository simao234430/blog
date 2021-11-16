module.exports = {
  "props": [
    {
      "name": "active-class",
      "type": "string",
      "default": "undefined",
      "source": "v-tabs",
      "description": {
        "en": "The **active-class** applied to children when they are activated.",
        "zh-Hans": ""
      }
    },
    {
      "name": "align-with-title",
      "type": "boolean",
      "default": "false",
      "source": "v-tabs",
      "description": {
        "en": "Make `v-tabs` lined up with the toolbar title",
        "zh-Hans": ""
      }
    },
    {
      "name": "background-color",
      "type": "string",
      "default": "undefined",
      "source": "v-tabs",
      "description": {
        "en": "Changes the background color of the component.",
        "zh-Hans": ""
      }
    },
    {
      "name": "center-active",
      "type": "boolean",
      "default": "false",
      "source": "v-tabs",
      "description": {
        "en": "Forces the selected tab to be centered",
        "zh-Hans": ""
      }
    },
    {
      "name": "centered",
      "type": "boolean",
      "default": "false",
      "source": "v-tabs",
      "description": {
        "en": "Centers the tabs",
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
      "name": "fixed-tabs",
      "type": "boolean",
      "default": "false",
      "source": "v-tabs",
      "description": {
        "en": "`v-tabs-item` min-width 160px, max-width 360px",
        "zh-Hans": ""
      }
    },
    {
      "name": "grow",
      "type": "boolean",
      "default": "false",
      "source": "v-tabs",
      "description": {
        "en": "Force `v-tab`'s to take up all available space",
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
      "source": "v-tabs",
      "description": {
        "en": "Sets the height of the tabs bar",
        "zh-Hans": ""
      }
    },
    {
      "name": "hide-slider",
      "type": "boolean",
      "default": "false",
      "source": "v-tabs",
      "description": {
        "en": "Hide's the generated `v-tabs-slider`",
        "zh-Hans": ""
      }
    },
    {
      "name": "icons-and-text",
      "type": "boolean",
      "default": "false",
      "source": "v-tabs",
      "description": {
        "en": "Will stack icon and text vertically",
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
      "name": "mobile-breakpoint",
      "type": [
        "string",
        "number"
      ],
      "default": "undefined",
      "source": "v-tabs",
      "description": {
        "en": "Sets the designated mobile breakpoint for the component.",
        "zh-Hans": ""
      }
    },
    {
      "name": "next-icon",
      "type": "string",
      "default": "'$next'",
      "source": "v-tabs",
      "description": {
        "en": "Right pagination icon",
        "zh-Hans": ""
      }
    },
    {
      "name": "optional",
      "type": "boolean",
      "default": "false",
      "source": "v-tabs",
      "description": {
        "en": "Does not require an active item. Useful when using `v-tab` as a `router-link`",
        "zh-Hans": ""
      }
    },
    {
      "name": "prev-icon",
      "type": "string",
      "default": "'$prev'",
      "source": "v-tabs",
      "description": {
        "en": "Left pagination icon",
        "zh-Hans": ""
      }
    },
    {
      "name": "right",
      "type": "boolean",
      "default": "false",
      "source": "v-tabs",
      "description": {
        "en": "Aligns tabs to the right",
        "zh-Hans": ""
      }
    },
    {
      "name": "show-arrows",
      "type": [
        "boolean",
        "string"
      ],
      "default": "undefined",
      "source": "v-tabs",
      "description": {
        "en": "Show pagination arrows if the tab items overflow their container. For mobile devices, arrows will only display when using this prop.",
        "zh-Hans": ""
      }
    },
    {
      "name": "slider-color",
      "type": "string",
      "default": "undefined",
      "source": "v-tabs",
      "description": {
        "en": "Changes the background color of an auto-generated `v-tabs-slider`",
        "zh-Hans": ""
      }
    },
    {
      "name": "slider-size",
      "type": [
        "number",
        "string"
      ],
      "default": 2,
      "source": "v-tabs",
      "description": {
        "en": "Changes the size of the slider, **height** for horizontal, **width** for vertical.",
        "zh-Hans": ""
      }
    },
    {
      "name": "value",
      "type": "any",
      "default": "undefined",
      "source": "proxyable",
      "description": {
        "en": "The designated model value for the component.",
        "zh-Hans": ""
      }
    },
    {
      "name": "vertical",
      "type": "boolean",
      "default": "false",
      "source": "v-tabs",
      "description": {
        "en": "Stacks tabs on top of each other vertically.",
        "zh-Hans": ""
      }
    }
  ],
  "mixins": [
    "colorable",
    "proxyable",
    "themeable"
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
      "value": "number | string",
      "description": {
        "en": "Emitted when tab is changed by user interaction. Returns a string if **href** attribute is set and number if it is not.",
        "zh-Hans": ""
      }
    }
  ],
  "functions": [],
  "name": "v-tabs",
  "sass": [],
  "component": true
}