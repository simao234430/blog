module.exports = {
  "props": [
    {
      "name": "locales",
      "default": "{ en: VuetifyLocale }",
      "type": "Record<string, VuetifyLocale>",
      "description": {
        "en": "Available locales",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "current",
      "default": "en",
      "type": "string",
      "description": {
        "en": "Current locale",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
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
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "name": "internationalization"
}