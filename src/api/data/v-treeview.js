module.exports = {
  "props": [
    {
      "name": "activatable",
      "type": "boolean",
      "default": "false",
      "source": "v-treeview",
      "description": {
        "en": "Allows user to mark a node as active by clicking on it",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "active",
      "type": "array",
      "default": [],
      "source": "v-treeview",
      "description": {
        "en": "Syncable prop that allows one to control which nodes are active. The array consists of the `item-key` of each active item.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "active-class",
      "type": "string",
      "default": "'v-treeview-node--active'",
      "source": "v-treeview",
      "description": {
        "en": "The class applied to the node when active",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "color",
      "type": "string",
      "default": "'primary'",
      "source": "v-treeview",
      "description": {
        "en": "Sets the color of the active node",
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
      "name": "dense",
      "type": "boolean",
      "default": "false",
      "source": "v-treeview",
      "description": {
        "en": "Decreases the height of the items",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "expand-icon",
      "type": "string",
      "default": "'$subgroup'",
      "source": "v-treeview",
      "description": {
        "en": "Icon used to indicate that a node can be expanded",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "filter",
      "type": "function",
      "default": "null",
      "source": "v-treeview",
      "description": {
        "en": "Custom item filtering function. By default it will use case-insensitive search in item's label.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "hoverable",
      "type": "boolean",
      "default": "false",
      "source": "v-treeview",
      "description": {
        "en": "Applies a hover class when mousing over nodes",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "indeterminate-icon",
      "type": "string",
      "default": "'$checkboxIndeterminate'",
      "source": "v-treeview",
      "description": {
        "en": "Icon used when node is in an indeterminate state. Only visible when `selectable` is `true`.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "item-children",
      "type": "string",
      "default": "'children'",
      "source": "v-treeview",
      "description": {
        "en": "Property on supplied `items` that contains its children",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "item-disabled",
      "type": "string",
      "default": "'disabled'",
      "source": "v-treeview",
      "description": {
        "en": "Property on supplied `items` that contains the disabled state of the item",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "item-key",
      "type": "string",
      "default": "'id'",
      "source": "v-treeview",
      "description": {
        "en": "Property on supplied `items` used to keep track of node state. The value of this property has to be unique among all items.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "item-text",
      "type": "string",
      "default": "'name'",
      "source": "v-treeview",
      "description": {
        "en": "Property on supplied `items` that contains its label text",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "items",
      "type": "array",
      "default": [],
      "source": "v-treeview",
      "description": {
        "en": "An array of items used to build the treeview",
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
      "name": "load-children",
      "type": "function",
      "default": "null",
      "source": "v-treeview",
      "description": {
        "en": "A function used when dynamically loading children. If this prop is set, then the supplied function will be run if expanding an item that has a `item-children` property that is an empty array. Supports returning a Promise.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "loading-icon",
      "type": "string",
      "default": "'$loading'",
      "source": "v-treeview",
      "description": {
        "en": "Icon used when node is in a loading state",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "multiple-active",
      "type": "boolean",
      "default": "false",
      "source": "v-treeview",
      "description": {
        "en": "When `true`, allows user to have multiple active nodes at the same time",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "off-icon",
      "type": "string",
      "default": "'$checkboxOff'",
      "source": "v-treeview",
      "description": {
        "en": "Icon used when node is not selected. Only visible when `selectable` is `true`.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "on-icon",
      "type": "string",
      "default": "'$checkboxOn'",
      "source": "v-treeview",
      "description": {
        "en": "Icon used when leaf node is selected or when a branch node is fully selected. Only visible when `selectable` is `true`.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "open",
      "type": "array",
      "default": [],
      "source": "v-treeview",
      "description": {
        "en": "Syncable prop that allows one to control which nodes are open. The array consists of the `item-key` of each open item.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "open-all",
      "type": "boolean",
      "default": "false",
      "source": "v-treeview",
      "description": {
        "en": "When `true` will cause all branch nodes to be opened when component is mounted",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "open-on-click",
      "type": "boolean",
      "default": "false",
      "source": "v-treeview",
      "description": {
        "en": "When `true` will cause nodes to be opened by clicking anywhere on it, instead of only opening by clicking on expand icon. When using this prop with `activatable` you will be unable to mark nodes with children as active.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "return-object",
      "type": "boolean",
      "default": "false",
      "source": "v-treeview",
      "description": {
        "en": "When `true` will make `v-model`, `active.sync` and `open.sync` return the complete object instead of just the key",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "rounded",
      "type": "boolean",
      "default": "false",
      "source": "v-treeview",
      "description": {
        "en": "Provides an alternative active style for `v-treeview` node. Only visible when `activatable` is `true` and should not be used in conjunction with the `shaped` prop.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "search",
      "type": "string",
      "default": "undefined",
      "source": "v-treeview",
      "description": {
        "en": "The search model for filtering results",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "selectable",
      "type": "boolean",
      "default": "false",
      "source": "v-treeview",
      "description": {
        "en": "Will render a checkbox next to each node allowing them to be selected",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "selected-color",
      "type": "string",
      "default": "'accent'",
      "source": "v-treeview",
      "description": {
        "en": "The color of the selection checkbox",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "selection-type",
      "type": "string",
      "default": "'leaf'",
      "source": "v-treeview",
      "description": {
        "en": "Controls how the treeview selects nodes. There are two modes available: 'leaf' and 'independent'",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "shaped",
      "type": "boolean",
      "default": "false",
      "source": "v-treeview",
      "description": {
        "en": "Provides an alternative active style for `v-treeview` node. Only visible when `activatable` is `true` and should not be used in conjunction with the `rounded` prop.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "transition",
      "type": "boolean",
      "default": "false",
      "source": "v-treeview",
      "description": {
        "en": "Applies a transition when nodes are opened and closed",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "value",
      "type": "array",
      "default": [],
      "source": "v-treeview",
      "description": {
        "en": "Allows one to control which nodes are selected. The array consists of the `item-key` of each selected item. Is used with `@input` event to allow for `v-model` binding.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "mixins": [
    "registrable-provide",
    "themeable"
  ],
  "slots": [
    {
      "name": "append",
      "props": {
        "item": "any",
        "leaf": "boolean",
        "selected": "boolean",
        "indeterminate": "boolean",
        "active": "boolean",
        "open": "boolean"
      },
      "description": {
        "en": "Appends content after label",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "label",
      "props": {
        "item": "any",
        "leaf": "boolean",
        "selected": "boolean",
        "indeterminate": "boolean",
        "active": "boolean",
        "open": "boolean"
      },
      "description": {
        "en": "Label content",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "prepend",
      "props": {
        "item": "any",
        "leaf": "boolean",
        "selected": "boolean",
        "indeterminate": "boolean",
        "active": "boolean",
        "open": "boolean"
      },
      "description": {
        "en": "Prepends content before label",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "events": [
    {
      "name": "input",
      "value": "array",
      "description": {
        "en": "Emits the array of selected items when this value changes",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "update:active",
      "value": "array",
      "description": {
        "en": "Emits the array of active items when this value changes",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "update:open",
      "value": "array",
      "description": {
        "en": "Emits the array of open items when this value changes",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "functions": [
    {
      "name": "updateAll",
      "signature": "(val: boolean): void",
      "description": {
        "en": "Opens or closes all nodes",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "name": "v-treeview",
  "sass": [
    {
      "name": "$treeview-transition",
      "default": ".2s map-get($transition, 'linear-out-slow-in') !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$treeview-label-font-size",
      "default": "inherit !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$treeview-node-height",
      "default": "48px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$treeview-node-height-dense",
      "default": "40px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$treeview-node-shaped-margin",
      "default": "8px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$treeview-node-padding",
      "default": "8px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$treeview-node-margin",
      "default": "6px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$treeview-node-level-width",
      "default": "24px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "component": true
}