module.exports = {
  "argument": [
    {
      "name": "argument",
      "type": [
        "((e: Event) => void)",
        "ClickOutsideBindingArgs"
      ],
      "example": {
        "handler": "(e: Event) => void",
        "closeConditional?": "(e: Event) => boolean",
        "include?": "() => HTMLElement[]"
      },
      "description": {
        "en": "A callback or options object.",
        "zh-Hans": ""
      }
    }
  ],
  "props": [],
  "name": "v-click-outside",
  "directive": true
}