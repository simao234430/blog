module.exports = {
  "props": [
    {
      "name": "group",
      "type": "boolean",
      "default": "false",
      "source": "transitions",
      "description": {
        "en": "Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group)",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "hide-on-leave",
      "type": "boolean",
      "default": "false",
      "source": "transitions",
      "description": {
        "en": "Hides the leaving element (no exit animation)",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "leave-absolute",
      "type": "boolean",
      "default": "false",
      "source": "transitions",
      "description": {
        "en": "Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/))",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "mode",
      "type": "string",
      "default": "'out-in'",
      "source": "transitions",
      "description": {
        "en": "Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition).",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "origin",
      "type": "string",
      "default": "'center center'",
      "source": "transitions",
      "description": {
        "en": "Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).",
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
  "name": "v-fab-transition",
  "sass": [],
  "component": true
}