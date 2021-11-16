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
        "en": "Removes the ability to click or target the component.",
        "zh-Hans": ""
      }
    },
    {
      "name": "value",
      "type": "any",
      "default": "undefined",
      "source": "groupable",
      "description": {
        "en": "The value used when the component is selected in a group. If not provided, the index will be used.",
        "zh-Hans": ""
      }
    }
  ],
  "mixins": [
    "groupable"
  ],
  "slots": [
    {
      "name": "default",
      "props": {
        "active": "boolean",
        "toggle": "Function"
      },
      "description": {
        "en": "The default Vue slot.",
        "zh-Hans": ""
      }
    }
  ],
  "events": [],
  "functions": [],
  "name": "v-item",
  "sass": [],
  "component": true
}