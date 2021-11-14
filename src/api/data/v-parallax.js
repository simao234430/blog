module.exports = {
  "props": [
    {
      "name": "alt",
      "type": "string",
      "default": "undefined",
      "source": "v-parallax",
      "description": {
        "en": "Attaches an alt property to the parallax image",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "height",
      "type": [
        "string",
        "number"
      ],
      "default": 500,
      "source": "translatable",
      "description": {
        "en": "Sets the height for the component",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "src",
      "type": "string",
      "default": "undefined",
      "source": "v-parallax",
      "description": {
        "en": "The image to parallax",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "srcset",
      "type": "string",
      "default": "undefined",
      "source": "v-parallax",
      "description": {
        "en": "A set of alternate images to use based on device size. [Read more...](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-srcset)",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "mixins": [
    "translatable"
  ],
  "slots": [
    {
      "name": "default",
      "description": {
        "en": "The default Vue slot.",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "events": [],
  "functions": [],
  "name": "v-parallax",
  "sass": [
    {
      "name": "$parallax-transition",
      "default": ".3s opacity map-get($transition, 'swing') !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$parallax-padding",
      "default": "0 1rem !default;",
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