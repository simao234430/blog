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
      "name": "fill-dot",
      "type": "boolean",
      "default": "false",
      "source": "v-timeline-item",
      "description": {
        "en": "Remove padding from dot container",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "hide-dot",
      "type": "boolean",
      "default": "false",
      "source": "v-timeline-item",
      "description": {
        "en": "Hide display of timeline dot",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "icon",
      "type": "string",
      "default": "undefined",
      "source": "v-timeline-item",
      "description": {
        "en": "Specify icon for dot container",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "icon-color",
      "type": "string",
      "default": "undefined",
      "source": "v-timeline-item",
      "description": {
        "en": "Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "large",
      "type": "boolean",
      "default": "false",
      "source": "v-timeline-item",
      "description": {
        "en": "Large size dot",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "left",
      "type": "boolean",
      "default": "false",
      "source": "v-timeline-item",
      "description": {
        "en": "Explicitly set the item to a left orientation",
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
      "name": "right",
      "type": "boolean",
      "default": "false",
      "source": "v-timeline-item",
      "description": {
        "en": "Explicitly set the item to a right orientation",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "small",
      "type": "boolean",
      "default": "false",
      "source": "v-timeline-item",
      "description": {
        "en": "Small size dot",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "mixins": [
    "colorable",
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
      "name": "icon",
      "description": {
        "en": "Used to customize the icon inside the timeline item's dot",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "opposite",
      "description": {
        "en": "Used to customize the opposite side of timeline items",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "events": [],
  "functions": [],
  "name": "v-timeline-item",
  "sass": [],
  "component": true
}