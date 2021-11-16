module.exports = {
  "props": [
    {
      "name": "locales",
      "default": "{ en: VuetifyLocale }",
      "type": "Record<string, VuetifyLocale>",
      "description": {
        "en": "Available locales",
        "zh-Hans": ""
      }
    },
    {
      "name": "current",
      "default": "en",
      "type": "string",
      "description": {
        "en": "Current locale",
        "zh-Hans": ""
      }
    }
  ],
  "functions": [
    {
      "name": "t",
      "default": "(key: string, ...params: Array<string | number>): string",
      "type": "Function",
      "description": {
        "en": "Translation function used internally",
        "zh-Hans": ""
      }
    }
  ],
  "name": "internationalization"
}