module.exports = {
  "props": [
    {
      "name": "id",
      "type": "string",
      "default": "'app'",
      "source": "v-app",
      "description": {
        "en": "Sets the DOM id on the component",
        "zh-Hans": ""
      }
    }
  ],
  "mixins": [
    "themeable"
  ],
  "slots": [
    {
      "name": "default",
      "description": {
        "en": "The default Vue slot.",
        "zh-Hans": ""
      }
    }
  ],
  "events": [],
  "functions": [],
  "name": "v-app",
  "sass": [],
  "component": true
}