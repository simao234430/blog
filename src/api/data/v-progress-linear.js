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
      "name": "active",
      "type": "boolean",
      "default": "true",
      "source": "v-progress-linear",
      "description": {
        "en": "Reduce the height to 0, hiding component",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "background-color",
      "type": "string",
      "default": "undefined",
      "source": "v-progress-linear",
      "description": {
        "en": "Background color, set to component's color if null",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "background-opacity",
      "type": [
        "number",
        "string"
      ],
      "default": "undefined",
      "source": "v-progress-linear",
      "description": {
        "en": "Background opacity, if null it defaults to 0.3 if background color is not specified or 1 otherwise",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "bottom",
      "type": "boolean",
      "default": "false",
      "source": "positionable",
      "description": {
        "en": "Aligns the component towards the bottom.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "buffer-value",
      "type": [
        "number",
        "string"
      ],
      "default": 100,
      "source": "v-progress-linear",
      "description": {
        "en": "The percentage value for the buffer",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "color",
      "type": "string",
      "default": "'primary'",
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
      "name": "height",
      "type": [
        "number",
        "string"
      ],
      "default": 4,
      "source": "v-progress-linear",
      "description": {
        "en": "Sets the height for the component",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "indeterminate",
      "type": "boolean",
      "default": "false",
      "source": "v-progress-linear",
      "description": {
        "en": "Constantly animates, use when loading progress is unknown.",
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
      "name": "query",
      "type": "boolean",
      "default": "false",
      "source": "v-progress-linear",
      "description": {
        "en": "Animates like **indeterminate** prop but inverse",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "reverse",
      "type": "boolean",
      "default": "false",
      "source": "v-progress-linear",
      "description": {
        "en": "Displays reversed progress (right to left in LTR mode and left to right in RTL)",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "rounded",
      "type": "boolean",
      "default": "false",
      "source": "v-progress-linear",
      "description": {
        "en": "Adds a border radius to the progress component",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "stream",
      "type": "boolean",
      "default": "false",
      "source": "v-progress-linear",
      "description": {
        "en": "An alternative style for portraying loading that works in tandem with **buffer-value**",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "striped",
      "type": "boolean",
      "default": "false",
      "source": "v-progress-linear",
      "description": {
        "en": "Adds a stripe background to the filled portion of the progress component",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "top",
      "type": "boolean",
      "default": "false",
      "source": "positionable",
      "description": {
        "en": "Aligns the content towards the top.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "value",
      "type": [
        "number",
        "string"
      ],
      "default": 0,
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
    "colorable",
    "positionable",
    "proxyable",
    "themeable"
  ],
  "slots": [
    {
      "name": "default",
      "props": {
        "value": "number"
      },
      "description": {
        "en": "Provides the current value of the component",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "events": [
    {
      "name": "change",
      "value": "number",
      "description": {
        "en": "Emitted when the component value is changed by user interaction",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "functions": [],
  "name": "v-progress-linear",
  "sass": [
    {
      "name": "$progress-linear-border-radius",
      "default": "$border-radius-root !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$progress-linear-stream-opacity",
      "default": "0.3 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$progress-linear-stream-border-width",
      "default": "4px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$progress-linear-stripe-gradient",
      "default": "linear-gradient(\n  135deg,\n  hsla(0, 0%, 100%, .25) 25%,\n  transparent 0,\n  transparent 50%,\n  hsla(0, 0%, 100%, .25) 0,\n  hsla(0, 0%, 100%, .25) 75%,\n  transparent 0,\n  transparent\n) !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$progress-linear-stripe-background-size",
      "default": "40px 40px !default;",
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