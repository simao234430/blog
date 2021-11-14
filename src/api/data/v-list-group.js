module.exports = {
  "props": [
    {
      "name": "active-class",
      "type": "string",
      "default": "undefined",
      "source": "v-list-group",
      "description": {
        "en": "Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "append-icon",
      "type": "string",
      "default": "'$expand'",
      "source": "v-list-group",
      "description": {
        "en": "Appends an icon to the component, uses the same syntax as `v-icon`",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
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
      "name": "disabled",
      "type": "boolean",
      "default": "false",
      "source": "v-list-group",
      "description": {
        "en": "Disables all children `v-list-item` components",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "eager",
      "type": "boolean",
      "default": "false",
      "source": "bootable",
      "description": {
        "en": "Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "group",
      "type": [
        "string",
        "regexp"
      ],
      "default": "undefined",
      "source": "v-list-group",
      "description": {
        "en": "Assign a route namespace. Accepts a string or regexp for determining active state",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "no-action",
      "type": "boolean",
      "default": "false",
      "source": "v-list-group",
      "description": {
        "en": "Removes left padding assigned for action icons from group items",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "prepend-icon",
      "type": "string",
      "default": "undefined",
      "source": "v-list-group",
      "description": {
        "en": "Prepends an icon to the component, uses the same syntax as `v-icon`",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "ripple",
      "type": [
        "boolean",
        "object"
      ],
      "default": true,
      "source": "v-list-group",
      "description": {
        "en": "Applies the [v-ripple](/directives/ripple) directive.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "sub-group",
      "type": "boolean",
      "default": "false",
      "source": "v-list-group",
      "description": {
        "en": "Designate the component as nested list group",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "value",
      "type": "any",
      "default": "undefined",
      "source": "toggleable",
      "description": {
        "en": "Expands / Collapse the list-group",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "mixins": [
    "bootable",
    "colorable",
    "registrable-inject",
    "toggleable"
  ],
  "slots": [
    {
      "name": "activator",
      "description": {
        "en": "When used, will activate the component when clicked (or hover for specific components). This manually stops the event propagation. Without this slot, if you open the component through its model, you will need to manually stop the event propagation",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "appendIcon",
      "description": {
        "en": "Appends an icon to the component, uses the same syntax as `v-icon`",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
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
      "name": "prependIcon",
      "description": {
        "en": "Prepends an icon to the component, uses the same syntax as `v-icon`",
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
        "en": "Event that is emitted when the component is clicked",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "functions": [],
  "name": "v-list-group",
  "sass": [],
  "component": true
}