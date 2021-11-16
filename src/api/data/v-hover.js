module.exports = {
  "props": [
    {
      "name": "close-delay",
      "type": [
        "number",
        "string"
      ],
      "default": 0,
      "source": "delayable",
      "description": {
        "en": "Milliseconds to wait before closing component.",
        "zh-Hans": ""
      }
    },
    {
      "name": "disabled",
      "type": "boolean",
      "default": "false",
      "source": "v-hover",
      "description": {
        "en": "Turns off hover functionality",
        "zh-Hans": ""
      }
    },
    {
      "name": "open-delay",
      "type": [
        "number",
        "string"
      ],
      "default": 0,
      "source": "delayable",
      "description": {
        "en": "Milliseconds to wait before opening component.",
        "zh-Hans": ""
      }
    },
    {
      "name": "value",
      "type": "boolean",
      "default": "false",
      "source": "toggleable",
      "description": {
        "en": "Controls whether the component is visible or hidden.",
        "zh-Hans": ""
      }
    }
  ],
  "mixins": [
    "delayable",
    "toggleable"
  ],
  "slots": [
    {
      "name": "default",
      "props": {
        "hover": "boolean"
      },
      "description": {
        "en": "The default Vue slot.",
        "zh-Hans": ""
      }
    }
  ],
  "events": [],
  "functions": [],
  "name": "v-hover",
  "sass": [],
  "component": true
}