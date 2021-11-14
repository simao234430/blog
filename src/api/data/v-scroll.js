module.exports = {
  "argument": [
    {
      "name": "argument",
      "type": [
        "Function"
      ],
      "description": {
        "en": "The function to invoke on target scroll",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "modifiers": [
    {
      "name": "#target",
      "default": "window",
      "type": [
        "string"
      ],
      "description": {
        "en": "The target watched for scroll changes. Defaults to window but can be changed to any valid id selector.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "self",
      "default": false,
      "type": [
        "boolean"
      ],
      "description": {
        "en": "Binds to the element that the the directive is attached.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "props": [],
  "name": "v-scroll",
  "directive": true
}