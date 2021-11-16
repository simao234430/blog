module.exports = {
  "props": [
    {
      "name": "active-class",
      "type": "string",
      "source": "groupable",
      "description": {
        "en": "Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation.",
        "zh-Hans": ""
      }
    },
    {
      "name": "disabled",
      "type": "boolean",
      "default": "false",
      "source": "groupable",
      "description": {
        "en": "Disables the expansion-panel content",
        "zh-Hans": ""
      }
    },
    {
      "name": "readonly",
      "type": "boolean",
      "default": "false",
      "source": "v-expansion-panel",
      "description": {
        "en": "Makes the expansion-panel content read only.",
        "zh-Hans": ""
      }
    }
  ],
  "mixins": [
    "groupable",
    "registrable-provide"
  ],
  "slots": [],
  "events": [
    {
      "name": "change",
      "value": "void",
      "description": {
        "en": "Toggles the value of the selected panel",
        "zh-Hans": ""
      }
    },
    {
      "name": "click",
      "value": "MouseEvent",
      "description": {
        "en": "Mouse click event",
        "zh-Hans": ""
      }
    }
  ],
  "functions": [],
  "name": "v-expansion-panel",
  "sass": [],
  "component": true
}