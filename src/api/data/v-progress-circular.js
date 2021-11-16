module.exports = {
  "props": [
    {
      "name": "button",
      "type": "boolean",
      "default": "false",
      "source": "v-progress-circular",
      "description": {
        "en": "Deprecated - Pending removal",
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
      "name": "indeterminate",
      "type": "boolean",
      "default": "false",
      "source": "v-progress-circular",
      "description": {
        "en": "Constantly animates, use when loading progress is unknown.",
        "zh-Hans": ""
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
        "zh-Hans": ""
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
      "source": "v-progress-circular",
      "description": {
        "en": "The percentage value for current progress",
        "zh-Hans": ""
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
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    }
  ],
  "events": [],
  "functions": [],
  "name": "v-progress-circular",
  "sass": [],
  "component": true
}