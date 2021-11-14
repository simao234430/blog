module.exports = {
  "props": [
    {
      "name": "tag",
      "type": "string",
      "default": "'main'",
      "source": "v-main",
      "description": {
        "en": "Specify a custom tag used on the root element.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "mixins": [],
  "slots": [],
  "events": [],
  "functions": [],
  "name": "v-main",
  "sass": [
    {
      "name": "$main-transition",
      "default": "0.2s map-get($transition, 'fast-out-slow-in') !default;",
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