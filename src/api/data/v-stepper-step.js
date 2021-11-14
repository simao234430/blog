module.exports = {
  "props": [
    {
      "name": "color",
      "type": "string",
      "default": "'primary'",
      "source": "colorable",
      "description": {
        "en": "Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "complete",
      "type": "boolean",
      "default": "false",
      "source": "v-stepper-step",
      "description": {
        "en": "Marks step as complete",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "complete-icon",
      "type": "string",
      "default": "'$complete'",
      "source": "v-stepper-step",
      "description": {
        "en": "Icon to display when step is marked as completed",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "edit-icon",
      "type": "string",
      "default": "'$edit'",
      "source": "v-stepper-step",
      "description": {
        "en": "Icon to display when step is editable",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "editable",
      "type": "boolean",
      "default": "false",
      "source": "v-stepper-step",
      "description": {
        "en": "Marks step as editable",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "error-icon",
      "type": "string",
      "default": "'$error'",
      "source": "v-stepper-step",
      "description": {
        "en": "Icon to display when step has an error",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "rules",
      "type": "array",
      "default": [],
      "source": "v-stepper-step",
      "description": {
        "en": "Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string`",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "step",
      "type": [
        "number",
        "string"
      ],
      "default": "undefined",
      "source": "v-stepper-step",
      "description": {
        "en": "Content to display inside step circle",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "mixins": [
    "colorable",
    "registrable-inject"
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
  "events": [
    {
      "name": "click",
      "value": "MouseEvent",
      "description": {
        "en": "Emitted when component is clicked",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "functions": [],
  "name": "v-stepper-step",
  "sass": [],
  "component": true
}