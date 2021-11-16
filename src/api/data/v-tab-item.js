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
      "name": "eager",
      "type": "boolean",
      "default": "false",
      "source": "bootable",
      "description": {
        "en": "Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.",
        "zh-Hans": ""
      }
    },
    {
      "name": "id",
      "type": "string",
      "default": "undefined",
      "source": "v-tab-item",
      "description": {
        "en": "Sets the DOM id on the component",
        "zh-Hans": ""
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
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
    {
      "name": "value",
      "type": "any",
      "default": "undefined",
      "source": "v-window-item",
      "description": {
        "en": "Sets the value of the tab. If not provided, the index will be used.",
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    }
  ],
  "events": [],
  "functions": [],
  "name": "v-tab-item",
  "sass": [],
  "component": true
}