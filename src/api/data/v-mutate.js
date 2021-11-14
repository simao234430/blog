module.exports = {
  "argument": [
    {
      "name": "argument",
      "default": "(): {}",
      "type": [
        "function",
        "object"
      ],
      "snippet": "\n<template>\n  <div>\n    // By default v-mutate enables all options\n    // available in the Mutation Observer API\n    <v-card v-mutate=\"onMutate\">...</v-card>\n\n    // A custom options object can be provided\n    // in order to override the defaults\n    <v-card v-mutate=\"mutate\">...</v-card>\n  </div>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        mutate: {\n          options: {\n            attributes: true,\n            subtree: true,\n          },\n          handler: this.onMutate\n        },\n      }\n    },\n\n    methods: {\n      onMutate (mutationsList, observer) {}\n    }\n  }\n</script>",
      "description": {
        "en": "The function to invoke when the target element is updated.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "modifiers": [
    {
      "name": "once",
      "default": false,
      "type": [
        "boolean"
      ],
      "snippet": "\n  <template>\n    <div v-mutate.once=\"onMutate\">...</div>\n  </template>\n\n  <script>\n    export default {\n      methods: {\n        onMutate (mutationsList, observer) {}\n      }\n    }\n  </script>",
      "description": {
        "en": "Will only invoke the provided user callback once, then directive will be unbound.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "attr",
      "default": true,
      "type": [
        "boolean"
      ],
      "snippet": "\n  <template>\n    <div v-mutate.attr=\"onMutate\">...</div>\n  </template>\n\n  <script>\n    export default {\n      methods: {\n        onMutate (mutationsList, observer) {}\n      }\n    }\n  </script>",
      "description": {
        "en": "Sets the value of [attributes](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit/attributes) to true.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "char",
      "default": true,
      "type": [
        "boolean"
      ],
      "snippet": "\n  <template>\n    <div v-mutate.char=\"onMutate\">...</div>\n  </template>\n\n  <script>\n    export default {\n      methods: {\n        onMutate (mutationsList, observer) {}\n      }\n    }\n  </script>",
      "description": {
        "en": "Sets the value of [characterData](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit/characterData) to true.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "child",
      "default": true,
      "type": [
        "boolean"
      ],
      "snippet": "\n  <template>\n    <div v-mutate.child=\"onMutate\">...</div>\n  </template>\n\n  <script>\n    export default {\n      methods: {\n        onMutate (mutationsList, observer) {}\n      }\n    }\n  </script>",
      "description": {
        "en": "Sets the value of [childList](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit/childList) to true.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "sub",
      "default": true,
      "type": [
        "boolean"
      ],
      "snippet": "\n  <template>\n    <div v-mutate.attr.char.sub=\"onMutate\">...</div>\n  </template>\n\n  <script>\n    export default {\n      methods: {\n        onMutate (mutationsList, observer) {}\n      }\n    }\n  </script>",
      "description": {
        "en": "Sets the value of [subtree](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/observe#Parameters) to true.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "props": [],
  "name": "v-mutate",
  "directive": true
}