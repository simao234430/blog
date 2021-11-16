module.exports = {
  "props": [
    {
      "name": "disabled",
      "type": "boolean",
      "default": "false",
      "source": "v-form",
      "description": {
        "en": "Puts all children inputs into a disabled state.",
        "zh-Hans": ""
      }
    },
    {
      "name": "lazy-validation",
      "type": "boolean",
      "default": "false",
      "source": "v-form",
      "description": {
        "en": "If enabled, **value** will always be _true_ unless there are visible validation errors. You can still call `validate()` to manually trigger validation",
        "zh-Hans": ""
      }
    },
    {
      "name": "readonly",
      "type": "boolean",
      "default": "false",
      "source": "v-form",
      "description": {
        "en": "Puts all children inputs into a readonly state.",
        "zh-Hans": ""
      }
    },
    {
      "name": "value",
      "type": "boolean",
      "default": "false",
      "source": "v-form",
      "description": {
        "en": "A boolean value representing the validity of the form.",
        "zh-Hans": ""
      }
    }
  ],
  "mixins": [
    "registrable-provide"
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
  "events": [
    {
      "name": "input",
      "value": "boolean",
      "description": {
        "en": "The updated bound model",
        "zh-Hans": ""
      }
    },
    {
      "name": "submit",
      "value": "event",
      "description": {
        "en": "Emitted when form is submitted",
        "zh-Hans": ""
      }
    }
  ],
  "functions": [
    {
      "name": "reset",
      "signature": "(): void",
      "description": {
        "en": "Resets the state of all registered inputs (inside the form) to **{}** for arrays and **null** for all other values. Resets errors bag when using the **lazy-validation** prop.",
        "zh-Hans": ""
      }
    },
    {
      "name": "resetValidation",
      "signature": "(): void",
      "description": {
        "en": "Resets validation of all registered inputs without modifying their state",
        "zh-Hans": ""
      }
    },
    {
      "name": "validate",
      "signature": "(): boolean",
      "description": {
        "en": "Validates all registered inputs. Returns **true** if successful and **false** if not",
        "zh-Hans": ""
      }
    }
  ],
  "name": "v-form",
  "sass": [],
  "component": true
}