module.exports = {
  "props": [
    {
      "name": "button",
      "type": "boolean",
      "default": "false",
      "source": "v-progress-circular",
      "description": {
        "en": "Deprecated - Pending removal",
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
      "name": "indeterminate",
      "type": "boolean",
      "default": "false",
      "source": "v-progress-circular",
      "description": {
        "en": "Constantly animates, use when loading progress is unknown.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "rotate",
      "type": [
        "number",
        "string"
      ],
      "default": 0,
      "source": "v-progress-circular",
      "description": {
        "en": "Rotates the circle start point in deg",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "size",
      "type": [
        "number",
        "string"
      ],
      "default": 32,
      "source": "v-progress-circular",
      "description": {
        "en": "Sets the diameter of the circle in pixels",
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
      "source": "v-progress-circular",
      "description": {
        "en": "The percentage value for current progress",
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
      "default": 4,
      "source": "v-progress-circular",
      "description": {
        "en": "Sets the stroke of the circle in pixels",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "mixins": [],
  "slots": [
    {
      "name": "default",
      "props": {
        "value": "number"
      },
      "description": {
        "en": "The default Vue slot.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "events": [],
  "functions": [],
  "name": "v-progress-circular",
  "sass": [
    {
      "name": "$progress-circular-rotate-animation",
      "default": "progress-circular-rotate 1.4s linear infinite !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$progress-circular-rotate-dash",
      "default": "progress-circular-dash 1.4s ease-in-out infinite !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$process-circular-intermediate-svg-transition",
      "default": "all .2s ease-in-out !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$progress-circular-underlay-stroke",
      "default": "rgba(map-get($grey, 'base'), 0.4) !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$progress-circular-overlay-transition",
      "default": "all .6s ease-in-out !default;",
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