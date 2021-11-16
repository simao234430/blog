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
      "name": "active",
      "type": "boolean",
      "default": "true",
      "source": "v-progress-linear",
      "description": {
        "en": "Reduce the height to 0, hiding component",
        "zh-Hans": ""
      }
    },
    {
      "name": "background-color",
      "type": "string",
      "default": "undefined",
      "source": "v-progress-linear",
      "description": {
        "en": "Background color, set to component's color if null",
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
    {
      "name": "bottom",
      "type": "boolean",
      "default": "false",
      "source": "positionable",
      "description": {
        "en": "Aligns the component towards the bottom.",
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
    {
      "name": "color",
      "type": "string",
      "default": "'primary'",
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
      "name": "height",
      "type": [
        "number",
        "string"
      ],
      "default": 4,
      "source": "v-progress-linear",
      "description": {
        "en": "Sets the height for the component",
        "zh-Hans": ""
      }
    },
    {
      "name": "indeterminate",
      "type": "boolean",
      "default": "false",
      "source": "v-progress-linear",
      "description": {
        "en": "Constantly animates, use when loading progress is unknown.",
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
      "name": "query",
      "type": "boolean",
      "default": "false",
      "source": "v-progress-linear",
      "description": {
        "en": "Animates like **indeterminate** prop but inverse",
        "zh-Hans": ""
      }
    },
    {
      "name": "reverse",
      "type": "boolean",
      "default": "false",
      "source": "v-progress-linear",
      "description": {
        "en": "Displays reversed progress (right to left in LTR mode and left to right in RTL)",
        "zh-Hans": ""
      }
    },
    {
      "name": "rounded",
      "type": "boolean",
      "default": "false",
      "source": "v-progress-linear",
      "description": {
        "en": "Adds a border radius to the progress component",
        "zh-Hans": ""
      }
    },
    {
      "name": "stream",
      "type": "boolean",
      "default": "false",
      "source": "v-progress-linear",
      "description": {
        "en": "An alternative style for portraying loading that works in tandem with **buffer-value**",
        "zh-Hans": ""
      }
    },
    {
      "name": "striped",
      "type": "boolean",
      "default": "false",
      "source": "v-progress-linear",
      "description": {
        "en": "Adds a stripe background to the filled portion of the progress component",
        "zh-Hans": ""
      }
    },
    {
      "name": "top",
      "type": "boolean",
      "default": "false",
      "source": "positionable",
      "description": {
        "en": "Aligns the content towards the top.",
        "zh-Hans": ""
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
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    }
  ],
  "events": [
    {
      "name": "change",
      "value": "number",
      "description": {
        "en": "Emitted when the component value is changed by user interaction",
        "zh-Hans": ""
      }
    }
  ],
  "functions": [],
  "name": "v-progress-linear",
  "sass": [],
  "component": true
}