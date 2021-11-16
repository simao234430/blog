module.exports = {
  "props": [
    {
      "name": "fluid",
      "type": "boolean",
      "default": "false",
      "source": "v-container",
      "description": {
        "en": "Removes viewport maximum-width size breakpoints",
        "zh-Hans": ""
      }
    },
    {
      "name": "id",
      "type": "string",
      "default": "undefined",
      "source": "v-container",
      "description": {
        "en": "Sets the DOM id on the component",
        "zh-Hans": ""
      }
    },
    {
      "name": "tag",
      "type": "string",
      "default": "'div'",
      "source": "v-container",
      "description": {
        "en": "Specify a custom tag used on the root element.",
        "zh-Hans": ""
      }
    }
  ],
  "mixins": [],
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
  "name": "v-container",
  "sass": [],
  "component": true
}