module.exports = {
  "argument": [
    {
      "name": "argument",
      "type": [
        "Function"
      ],
      "description": {
        "en": "The function to invoke on target scroll",
        "zh-Hans": ""
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
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    }
  ],
  "props": [],
  "name": "v-scroll",
  "directive": true
}