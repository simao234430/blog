module.exports = {
  "props": [
    {
      "name": "active-class",
      "type": "string",
      "source": "groupable",
      "description": {
        "en": "Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "disabled",
      "type": "boolean",
      "default": "false",
      "source": "groupable",
      "description": {
        "en": "Prevents the item from becoming active when using the \"next\" and \"prev\" buttons or the `toggle` method",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "eager",
      "type": "boolean",
      "default": "false",
      "source": "bootable",
      "description": {
        "en": "Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "reverse-transition",
      "type": [
        "boolean",
        "string"
      ],
      "default": "undefined",
      "source": "v-window-item",
      "description": {
        "en": "Sets the reverse transition",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "transition",
      "type": [
        "boolean",
        "string"
      ],
      "default": "undefined",
      "source": "v-window-item",
      "description": {
        "en": "The transition used when the component progressing through items. Can be one of the [built in transitions](/styles/transitions) or one your own.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "value",
      "type": "any",
      "default": "undefined",
      "source": "v-window-item",
      "description": {
        "en": "The value used when the component is selected in a group. If not provided, the index will be used.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "mixins": [
    "bootable",
    "groupable"
  ],
  "slots": [
    {
      "name": "default",
      "description": {
        "en": "The default Vue slot.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "events": [],
  "functions": [],
  "name": "v-window-item",
  "sass": [],
  "component": true
}