module.exports = {
  "props": [
    {
      "name": "cancel-text",
      "type": "any",
      "default": "Cancel",
      "source": "v-edit-dialog",
      "description": {
        "en": "Sets the default text for the cancel button when using the **large** prop",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "dark",
      "type": "boolean",
      "default": "false",
      "source": "themeable",
      "description": {
        "en": "Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "eager",
      "type": "boolean",
      "default": "false",
      "source": "v-edit-dialog",
      "description": {
        "en": "Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "large",
      "type": "boolean",
      "default": "false",
      "source": "v-edit-dialog",
      "description": {
        "en": "Attaches a submit and cancel button to the dialog",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "light",
      "type": "boolean",
      "default": "false",
      "source": "themeable",
      "description": {
        "en": "Applies the light theme variant to the component.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "persistent",
      "type": "boolean",
      "default": "false",
      "source": "v-edit-dialog",
      "description": {
        "en": "Clicking outside or pressing **esc** key will not dismiss the dialog",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "return-value",
      "type": "any",
      "default": "undefined",
      "source": "returnable",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "save-text",
      "type": "any",
      "default": "Save",
      "source": "v-edit-dialog",
      "description": {
        "en": "Sets the default text for the save button when using the **large** prop",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "transition",
      "type": "string",
      "default": "'slide-x-reverse-transition'",
      "source": "v-edit-dialog",
      "description": {
        "en": "Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "mixins": [
    "returnable",
    "themeable"
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
    },
    {
      "name": "input",
      "description": {
        "en": "Slot used to denote input component for v-edit-dialog",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "events": [
    {
      "name": "cancel",
      "value": "void",
      "description": {
        "en": "Emits when editing is canceled",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "close",
      "value": "void",
      "description": {
        "en": "Emits when edit-dialog close button is pressed",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "open",
      "value": "void",
      "description": {
        "en": "Emits when editing is opened",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "save",
      "value": "void",
      "description": {
        "en": "Emits when edit-dialog save button is pressed",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "functions": [],
  "name": "v-edit-dialog",
  "sass": [],
  "component": true
}