module.exports = {
  "props": [
    {
      "name": "cancel-text",
      "type": "any",
      "default": "Cancel",
      "source": "v-edit-dialog",
      "description": {
        "en": "Sets the default text for the cancel button when using the **large** prop",
        "zh-Hans": ""
      }
    },
    {
      "name": "dark",
      "type": "boolean",
      "default": "false",
      "source": "themeable",
      "description": {
        "en": "Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).",
        "zh-Hans": ""
      }
    },
    {
      "name": "eager",
      "type": "boolean",
      "default": "false",
      "source": "v-edit-dialog",
      "description": {
        "en": "Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.",
        "zh-Hans": ""
      }
    },
    {
      "name": "large",
      "type": "boolean",
      "default": "false",
      "source": "v-edit-dialog",
      "description": {
        "en": "Attaches a submit and cancel button to the dialog",
        "zh-Hans": ""
      }
    },
    {
      "name": "light",
      "type": "boolean",
      "default": "false",
      "source": "themeable",
      "description": {
        "en": "Applies the light theme variant to the component.",
        "zh-Hans": ""
      }
    },
    {
      "name": "persistent",
      "type": "boolean",
      "default": "false",
      "source": "v-edit-dialog",
      "description": {
        "en": "Clicking outside or pressing **esc** key will not dismiss the dialog",
        "zh-Hans": ""
      }
    },
    {
      "name": "return-value",
      "type": "any",
      "default": "undefined",
      "source": "returnable",
      "description": {
        "en": "",
        "zh-Hans": ""
      }
    },
    {
      "name": "save-text",
      "type": "any",
      "default": "Save",
      "source": "v-edit-dialog",
      "description": {
        "en": "Sets the default text for the save button when using the **large** prop",
        "zh-Hans": ""
      }
    },
    {
      "name": "transition",
      "type": "string",
      "default": "'slide-x-reverse-transition'",
      "source": "v-edit-dialog",
      "description": {
        "en": "Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own.",
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
    {
      "name": "input",
      "description": {
        "en": "Slot used to denote input component for v-edit-dialog",
        "zh-Hans": ""
      }
    }
  ],
  "events": [
    {
      "name": "cancel",
      "value": "void",
      "description": {
        "en": "Emits when editing is canceled",
        "zh-Hans": ""
      }
    },
    {
      "name": "close",
      "value": "void",
      "description": {
        "en": "Emits when edit-dialog close button is pressed",
        "zh-Hans": ""
      }
    },
    {
      "name": "open",
      "value": "void",
      "description": {
        "en": "Emits when editing is opened",
        "zh-Hans": ""
      }
    },
    {
      "name": "save",
      "value": "void",
      "description": {
        "en": "Emits when edit-dialog save button is pressed",
        "zh-Hans": ""
      }
    }
  ],
  "functions": [],
  "name": "v-edit-dialog",
  "sass": [],
  "component": true
}