module.exports = {
  "props": [
    {
      "name": "color",
      "type": "string",
      "default": "undefined",
      "source": "colorable",
      "description": {
        "en": "Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).",
        "zh-Hans": ""
      }
    }
  ],
  "mixins": [
    "colorable"
  ],
  "slots": [],
  "events": [],
  "functions": [],
  "name": "v-tabs-slider",
  "sass": [],
  "component": true
}