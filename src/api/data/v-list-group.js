module.exports = {
  "props": [
    {
      "name": "active-class",
      "type": "string",
      "default": "undefined",
      "source": "v-list-group",
      "description": {
        "en": "Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation.",
        "zh-Hans": ""
      }
    },
    {
      "name": "append-icon",
      "type": "string",
      "default": "'$expand'",
      "source": "v-list-group",
      "description": {
        "en": "Appends an icon to the component, uses the same syntax as `v-icon`",
        "zh-Hans": ""
      }
    },
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
      "name": "disabled",
      "type": "boolean",
      "default": "false",
      "source": "v-list-group",
      "description": {
        "en": "Disables all children `v-list-item` components",
        "zh-Hans": ""
      }
    },
    {
      "name": "eager",
      "type": "boolean",
      "default": "false",
      "source": "bootable",
      "description": {
        "en": "Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.",
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
    {
      "name": "no-action",
      "type": "boolean",
      "default": "false",
      "source": "v-list-group",
      "description": {
        "en": "Removes left padding assigned for action icons from group items",
        "zh-Hans": ""
      }
    },
    {
      "name": "prepend-icon",
      "type": "string",
      "default": "undefined",
      "source": "v-list-group",
      "description": {
        "en": "Prepends an icon to the component, uses the same syntax as `v-icon`",
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
    {
      "name": "sub-group",
      "type": "boolean",
      "default": "false",
      "source": "v-list-group",
      "description": {
        "en": "Designate the component as nested list group",
        "zh-Hans": ""
      }
    },
    {
      "name": "value",
      "type": "any",
      "default": "undefined",
      "source": "toggleable",
      "description": {
        "en": "Expands / Collapse the list-group",
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
    {
      "name": "appendIcon",
      "description": {
        "en": "Appends an icon to the component, uses the same syntax as `v-icon`",
        "zh-Hans": ""
      }
    },
    {
      "name": "default",
      "description": {
        "en": "The default Vue slot.",
        "zh-Hans": ""
      }
    },
    {
      "name": "prependIcon",
      "description": {
        "en": "Prepends an icon to the component, uses the same syntax as `v-icon`",
        "zh-Hans": ""
      }
    }
  ],
  "events": [
    {
      "name": "click",
      "value": "MouseEvent",
      "description": {
        "en": "Event that is emitted when the component is clicked",
        "zh-Hans": ""
      }
    }
  ],
  "functions": [],
  "name": "v-list-group",
  "sass": [],
  "component": true
}