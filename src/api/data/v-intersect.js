module.exports = {
  "argument": [
    {
      "name": "value",
      "type": [
        "Function",
        "{ handler: Function, options?: IntersectionObserverInit }"
      ],
      "snippet": "\n<template>\n<v-card v-intersect=\"onIntersect\">...</v-card>\n</template>\n\n<script>\nexport default {\n  methods: {\n    // Will be invoked on DOM mount and when the element is intersected\n    onIntersect (entries, observer, isIntersecting) {}\n  }\n}\n</script>",
      "description": {
        "en": "The function to invoke when the targeted element is intersected.",
        "zh-Hans": ""
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
      "snippet": "\n<template>\n  <v-card v-intersect.once=\"onIntersect\">...</v-card>\n</template>\n\n<script>\n  export default {\n    methods: {\n      // Will be invoked once at mount and once when it intersects\n      // After the intersection the callback unbinds\n      // Can be used with the quiet modifier\n      onIntersect (entries, observer, isIntersecting) {}\n    }\n  }\n</script>",
      "description": {
        "en": "Will only invoke the provided user callback on mount and once intersected. If using the **quiet** modifier will only invoke once.",
        "zh-Hans": ""
      }
    },
    {
      "name": "quiet",
      "default": false,
      "type": [
        "boolean"
      ],
      "snippet": "\n<template>\n  <v-card v-intersect.quiet=\"onIntersect\">...</v-card>\n</template>\n\n<script>\n  export default {\n    methods: {\n      // Will only be called once the element is intersected\n      onIntersect (entries, observer, isIntersecting) {}\n    }\n  }\n</script>",
      "description": {
        "en": "Will not automatically invoke the provided callback on bind.",
        "zh-Hans": ""
      }
    }
  ],
  "props": [],
  "name": "v-intersect",
  "directive": true
}