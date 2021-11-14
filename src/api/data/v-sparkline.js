module.exports = {
  "props": [
    {
      "name": "auto-draw",
      "type": "boolean",
      "default": "false",
      "source": "v-sparkline",
      "description": {
        "en": "Trace the length of the line when first rendered",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "auto-draw-duration",
      "type": "number",
      "default": 2000,
      "source": "v-sparkline",
      "description": {
        "en": "Amount of time (in ms) to run the trace animation",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "auto-draw-easing",
      "type": "string",
      "default": "'ease'",
      "source": "v-sparkline",
      "description": {
        "en": "The easing function to use for the trace animation",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "auto-line-width",
      "type": "boolean",
      "default": "false",
      "source": "v-sparkline",
      "description": {
        "en": "Automatically expand bars to use space efficiently",
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
      "name": "fill",
      "type": "boolean",
      "default": "false",
      "source": "v-sparkline",
      "description": {
        "en": "Using the **fill** property allows you to better customize the look and feel of your sparkline.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "gradient",
      "type": "array",
      "default": [],
      "source": "v-sparkline",
      "description": {
        "en": "An array of colors to use as a linear-gradient",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "gradient-direction",
      "type": "string",
      "default": "'top'",
      "source": "v-sparkline",
      "description": {
        "en": "The direction the gradient should run",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "height",
      "type": [
        "string",
        "number"
      ],
      "default": 75,
      "source": "v-sparkline",
      "description": {
        "en": "Height of the SVG trendline or bars",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "label-size",
      "type": [
        "number",
        "string"
      ],
      "default": 7,
      "source": "v-sparkline",
      "description": {
        "en": "The label font size",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "labels",
      "type": "array",
      "default": [],
      "source": "v-sparkline",
      "description": {
        "en": "An array of string labels that correspond to the same index as its data counterpart",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "line-width",
      "type": [
        "string",
        "number"
      ],
      "default": 4,
      "source": "v-sparkline",
      "description": {
        "en": "The thickness of the line, in px",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "padding",
      "type": [
        "string",
        "number"
      ],
      "default": 8,
      "source": "v-sparkline",
      "description": {
        "en": "Low `smooth` or high `line-width` values may result in cropping, increase padding to compensate",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "show-labels",
      "type": "boolean",
      "default": "false",
      "source": "v-sparkline",
      "description": {
        "en": "Show labels below each data point",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "smooth",
      "type": [
        "boolean",
        "number",
        "string"
      ],
      "default": false,
      "source": "v-sparkline",
      "description": {
        "en": "Number of px to use as a corner radius. `true` defaults to 8, `false` is 0",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "type",
      "type": "string",
      "default": "'trend'",
      "source": "v-sparkline",
      "description": {
        "en": "Choose between a trendline or bars",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "value",
      "type": "array",
      "default": [],
      "source": "v-sparkline",
      "description": {
        "en": "An array of numbers.",
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
      "default": 300,
      "source": "v-sparkline",
      "description": {
        "en": "Width of the SVG trendline or bars",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "mixins": [
    "colorable"
  ],
  "slots": [
    {
      "name": "label",
      "description": {
        "en": "Replaces the default label",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "events": [],
  "functions": [],
  "name": "v-sparkline",
  "sass": [],
  "component": true
}