module.exports = {
  "props": [
    {
      "name": "step",
      "type": [
        "number",
        "string"
      ],
      "default": "undefined",
      "source": "v-stepper-content",
      "description": {
        "en": "Sets step to associate the content to",
        "zh-Hans": ""
      }
    }
  ],
  "mixins": [
    "registrable-inject"
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
  "name": "v-stepper-content",
  "sass": [],
  "component": true
}