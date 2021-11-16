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
      "name": "dense",
      "type": "boolean",
      "default": "false",
      "source": null,
      "description": {
        "en": "Makes icon smaller (20px)",
        "zh-Hans": ""
      }
    },
    {
      "name": "disabled",
      "type": "boolean",
      "default": "false",
      "source": "v-icon",
      "description": {
        "en": "Disable the input",
        "zh-Hans": ""
      }
    },
    {
      "name": "large",
      "type": "boolean",
      "default": "false",
      "source": "sizeable",
      "description": {
        "en": "Makes the component large.",
        "zh-Hans": ""
      }
    },
    {
      "name": "left",
      "type": "boolean",
      "default": "false",
      "source": "v-icon",
      "description": {
        "en": "Applies appropriate margins to the icon inside of a button when placed to the **left** of another element or text",
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
      "name": "right",
      "type": "boolean",
      "default": "false",
      "source": "v-icon",
      "description": {
        "en": "Applies appropriate margins to the icon inside of a button when placed to the **right** of another element or text",
        "zh-Hans": ""
      }
    },
    {
      "name": "size",
      "type": [
        "number",
        "string"
      ],
      "default": "undefined",
      "source": "v-icon",
      "description": {
        "en": "Specifies a custom font size for the icon",
        "zh-Hans": ""
      }
    },
    {
      "name": "small",
      "type": "boolean",
      "default": "false",
      "source": "sizeable",
      "description": {
        "en": "Makes the component small.",
        "zh-Hans": ""
      }
    },
    {
      "name": "tag",
      "type": "string",
      "default": "'i'",
      "source": "v-icon",
      "description": {
        "en": "Specifies a custom tag to be used",
        "zh-Hans": ""
      }
    },
    {
      "name": "x-large",
      "type": "boolean",
      "default": "false",
      "source": "sizeable",
      "description": {
        "en": "Makes the component extra large.",
        "zh-Hans": ""
      }
    },
    {
      "name": "x-small",
      "type": "boolean",
      "default": "false",
      "source": "sizeable",
      "description": {
        "en": "Makes the component extra small.",
        "zh-Hans": ""
      }
    }
  ],
  "mixins": [
    "colorable",
    "sizeable",
    "themeable"
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
  "name": "v-icon",
  "sass": [],
  "component": true
}