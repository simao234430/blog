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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "disabled",
      "type": "boolean",
      "default": "false",
      "source": "v-hover",
      "description": {
        "en": "Turns off hover functionality",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "value",
      "type": "boolean",
      "default": "false",
      "source": "toggleable",
      "description": {
        "en": "Controls whether the component is visible or hidden.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "events": [],
  "functions": [],
  "name": "v-hover",
  "sass": [],
  "component": true
}