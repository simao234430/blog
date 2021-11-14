module.exports = {
  "props": [
    {
      "name": "active-class",
      "type": "string",
      "default": "undefined",
      "source": "v-tabs",
      "description": {
        "en": "The **active-class** applied to children when they are activated.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "align-with-title",
      "type": "boolean",
      "default": "false",
      "source": "v-tabs",
      "description": {
        "en": "Make `v-tabs` lined up with the toolbar title",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "background-color",
      "type": "string",
      "default": "undefined",
      "source": "v-tabs",
      "description": {
        "en": "Changes the background color of the component.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "center-active",
      "type": "boolean",
      "default": "false",
      "source": "v-tabs",
      "description": {
        "en": "Forces the selected tab to be centered",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "centered",
      "type": "boolean",
      "default": "false",
      "source": "v-tabs",
      "description": {
        "en": "Centers the tabs",
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
      "name": "fixed-tabs",
      "type": "boolean",
      "default": "false",
      "source": "v-tabs",
      "description": {
        "en": "`v-tabs-item` min-width 160px, max-width 360px",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "grow",
      "type": "boolean",
      "default": "false",
      "source": "v-tabs",
      "description": {
        "en": "Force `v-tab`'s to take up all available space",
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
      "source": "v-tabs",
      "description": {
        "en": "Sets the height of the tabs bar",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "hide-slider",
      "type": "boolean",
      "default": "false",
      "source": "v-tabs",
      "description": {
        "en": "Hide's the generated `v-tabs-slider`",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "icons-and-text",
      "type": "boolean",
      "default": "false",
      "source": "v-tabs",
      "description": {
        "en": "Will stack icon and text vertically",
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
      "name": "mobile-breakpoint",
      "type": [
        "string",
        "number"
      ],
      "default": "undefined",
      "source": "v-tabs",
      "description": {
        "en": "Sets the designated mobile breakpoint for the component.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "next-icon",
      "type": "string",
      "default": "'$next'",
      "source": "v-tabs",
      "description": {
        "en": "Right pagination icon",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "optional",
      "type": "boolean",
      "default": "false",
      "source": "v-tabs",
      "description": {
        "en": "Does not require an active item. Useful when using `v-tab` as a `router-link`",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "prev-icon",
      "type": "string",
      "default": "'$prev'",
      "source": "v-tabs",
      "description": {
        "en": "Left pagination icon",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "right",
      "type": "boolean",
      "default": "false",
      "source": "v-tabs",
      "description": {
        "en": "Aligns tabs to the right",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "slider-color",
      "type": "string",
      "default": "undefined",
      "source": "v-tabs",
      "description": {
        "en": "Changes the background color of an auto-generated `v-tabs-slider`",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "en": "The designated model value for the component.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "vertical",
      "type": "boolean",
      "default": "false",
      "source": "v-tabs",
      "description": {
        "en": "Stacks tabs on top of each other vertically.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "events": [
    {
      "name": "change",
      "value": "number | string",
      "description": {
        "en": "Emitted when tab is changed by user interaction. Returns a string if **href** attribute is set and number if it is not.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "functions": [],
  "name": "v-tabs",
  "sass": [
    {
      "name": "$tab-disabled-opacity",
      "default": ".5 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$tab-font-size",
      "default": "map-deep-get($headings, 'subtitle-2', 'size') !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$tab-font-weight",
      "default": "map-deep-get($headings, 'subtitle-2', 'weight') !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$tab-line-height",
      "default": "normal !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$tabs-bar-background-color",
      "default": "'cards' !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$tabs-bar-height",
      "default": "48px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$tabs-icons-and-text-bar-height",
      "default": "72px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$tabs-icons-and-text-first-tab-margin-bottom",
      "default": "6px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$tabs-item-align-with-title-margin",
      "default": "42px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$tabs-item-letter-spacing",
      "default": ".0892857143em !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$tabs-item-max-width",
      "default": "360px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$tabs-item-min-width",
      "default": "90px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$tabs-item-padding",
      "default": "0 16px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$tabs-item-vertical-height",
      "default": "$tabs-bar-height !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$tabs-item-vertical-icons-and-text-height",
      "default": "$tabs-icons-and-text-bar-height !default;",
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