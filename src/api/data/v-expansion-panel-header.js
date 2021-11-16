module.exports = {
  "props": [
    {
      "name": "color",
      "type": "string",
      "default": "undefined",
      "source": "colorable",
      "description": {
        "en": "Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).",
        "zh-Hans": ""
      }
    },
    {
      "name": "disable-icon-rotate",
      "type": "boolean",
      "default": "false",
      "source": "v-expansion-panel-header",
      "description": {
        "en": "Removes the icon rotation animation when expanding a panel",
        "zh-Hans": ""
      }
    },
    {
      "name": "expand-icon",
      "type": "string",
      "default": "'$expand'",
      "source": "v-expansion-panel-header",
      "description": {
        "en": "Set the expand action icon",
        "zh-Hans": ""
      }
    },
    {
      "name": "hide-actions",
      "type": "boolean",
      "default": "false",
      "source": "v-expansion-panel-header",
      "description": {
        "en": "Hide the expand icon in the content header",
        "zh-Hans": ""
      }
    },
    {
      "name": "ripple",
      "type": [
        "boolean",
        "object"
      ],
      "default": false,
      "source": "v-expansion-panel-header",
      "description": {
        "en": "Applies the [v-ripple](/directives/ripple) directive.",
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
      "name": "actions",
      "description": {
        "en": "Expansion header actions",
        "zh-Hans": ""
      }
    },
    {
      "name": "default",
      "props": {
        "open": "boolean"
      },
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
        "en": "Mouse click event",
        "zh-Hans": ""
      }
    }
  ],
  "functions": [],
  "name": "v-expansion-panel-header",
  "sass": [],
  "component": true
}