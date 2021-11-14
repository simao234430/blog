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
        "en": "Disables the expansion-panel content",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "readonly",
      "type": "boolean",
      "default": "false",
      "source": "v-expansion-panel",
      "description": {
        "en": "Makes the expansion-panel content read only.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "mixins": [
    "groupable",
    "registrable-provide"
  ],
  "slots": [],
  "events": [
    {
      "name": "change",
      "value": "void",
      "description": {
        "en": "Toggles the value of the selected panel",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "click",
      "value": "MouseEvent",
      "description": {
        "en": "Mouse click event",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "functions": [],
  "name": "v-expansion-panel",
  "sass": [
    {
      "name": "$expansion-panel-border-radius",
      "default": "$border-radius-root !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$expansion-panel-active-margin",
      "default": "16px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$expansion-panel-header-font-size",
      "default": "0.9375rem !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$expansion-panel-header-min-height",
      "default": "48px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$expansion-panel-active-header-min-height",
      "default": "64px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$expansion-panel-header-padding",
      "default": "16px 24px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$expansion-panel-content-padding",
      "default": "0 24px 16px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$expansion-panel-popout-max-width",
      "default": "calc(100% - #{$expansion-panel-active-margin * 2}) !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$expansion-panel-popout-active-max-width",
      "default": "calc(100% + #{$expansion-panel-active-margin}) !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$expansion-panel-inset-max-width",
      "default": "100% !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$expansion-panel-inset-active-max-width",
      "default": "calc(100% - #{$expansion-panel-active-margin * 2}) !default;",
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