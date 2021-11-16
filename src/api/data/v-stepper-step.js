module.exports = {
  "props": [
    {
      "name": "color",
      "type": "string",
      "default": "'primary'",
      "source": "colorable",
      "description": {
        "en": "Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).",
        "zh-Hans": ""
      }
    },
    {
      "name": "complete",
      "type": "boolean",
      "default": "false",
      "source": "v-stepper-step",
      "description": {
        "en": "Marks step as complete",
        "zh-Hans": ""
      }
    },
    {
      "name": "complete-icon",
      "type": "string",
      "default": "'$complete'",
      "source": "v-stepper-step",
      "description": {
        "en": "Icon to display when step is marked as completed",
        "zh-Hans": ""
      }
    },
    {
      "name": "edit-icon",
      "type": "string",
      "default": "'$edit'",
      "source": "v-stepper-step",
      "description": {
        "en": "Icon to display when step is editable",
        "zh-Hans": ""
      }
    },
    {
      "name": "editable",
      "type": "boolean",
      "default": "false",
      "source": "v-stepper-step",
      "description": {
        "en": "Marks step as editable",
        "zh-Hans": ""
      }
    },
    {
      "name": "error-icon",
      "type": "string",
      "default": "'$error'",
      "source": "v-stepper-step",
      "description": {
        "en": "Icon to display when step has an error",
        "zh-Hans": ""
      }
    },
    {
      "name": "rules",
      "type": "array",
      "default": [],
      "source": "v-stepper-step",
      "description": {
        "en": "Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string`",
        "zh-Hans": ""
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
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    }
  ],
  "events": [
    {
      "name": "click",
      "value": "MouseEvent",
      "description": {
        "en": "Emitted when component is clicked",
        "zh-Hans": ""
      }
    }
  ],
  "functions": [],
  "name": "v-stepper-step",
  "sass": [],
  "component": true
}