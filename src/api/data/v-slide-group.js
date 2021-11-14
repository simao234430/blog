module.exports = {
  "props": [
    {
      "name": "active-class",
      "type": "string",
      "default": "'v-slide-item--active'",
      "source": "base-item-group",
      "description": {
        "en": "The **active-class** applied to children when they are activated.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "center-active",
      "type": "boolean",
      "default": "false",
      "source": "base-slide-group",
      "description": {
        "en": "Forces the selected component to be centered",
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
      "source": "base-item-group",
      "description": {
        "en": "Forces a value to always be selected (if available).",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "max",
      "type": [
        "number",
        "string"
      ],
      "default": "undefined",
      "source": "base-item-group",
      "description": {
        "en": "Sets a maximum number of selections that can be made.",
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
        "en": "Sets the designated mobile breakpoint for the component.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "multiple",
      "type": "boolean",
      "default": "false",
      "source": "base-item-group",
      "description": {
        "en": "Allow multiple selections. The **value** prop must be an _array_.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "next-icon",
      "type": "string",
      "default": "'$next'",
      "source": "base-slide-group",
      "description": {
        "en": "The appended slot when arrows are shown",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "prev-icon",
      "type": "string",
      "default": "'$prev'",
      "source": "base-slide-group",
      "description": {
        "en": "The prepended slot when arrows are shown",
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
      "source": "base-slide-group",
      "description": {
        "en": "Change when the overflow arrow indicators are shown. By **default**, arrows *always* display on Desktop when the container is overflowing. When the container overflows on mobile, arrows are not shown by default. A **show-arrows** value of `true` allows these arrows to show on Mobile if the container overflowing. A value of `desktop` *always* displays arrows on Desktop while a value of `mobile` always displays arrows on Mobile. A value of `always` always displays arrows on Desktop *and* Mobile. Find more information on how to customize breakpoint thresholds on the [breakpoints page](/customizing/breakpoints).",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "tag",
      "type": "string",
      "default": "'div'",
      "source": "base-item-group",
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
        "en": "The designated model value for the component.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "mixins": [
    "base-item-group",
    "mobile",
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
    },
    {
      "name": "next",
      "description": {
        "en": "The next slot",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "prev",
      "description": {
        "en": "The prev slot",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "events": [
    {
      "name": "change",
      "value": "any[] | any",
      "description": {
        "en": "Emitted when the component value is changed by user interaction",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "click:next",
      "value": "void",
      "description": {
        "en": "Emitted when the next is clicked",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "click:prev",
      "value": "void",
      "description": {
        "en": "Emitted when the prev is clicked",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "functions": [],
  "name": "v-slide-group",
  "sass": [
    {
      "name": "$slide-group-prev-basis",
      "default": "52px !default;",
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