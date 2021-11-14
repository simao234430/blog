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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "props": [],
  "name": "v-click-outside",
  "directive": true
}