module.exports = {
  "props": [
    {
      "name": "alt",
      "type": "string",
      "default": "undefined",
      "source": "v-parallax",
      "description": {
        "en": "Attaches an alt property to the parallax image",
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    },
    {
      "name": "src",
      "type": "string",
      "default": "undefined",
      "source": "v-parallax",
      "description": {
        "en": "The image to parallax",
        "zh-Hans": ""
      }
    },
    {
      "name": "srcset",
      "type": "string",
      "default": "undefined",
      "source": "v-parallax",
      "description": {
        "en": "A set of alternate images to use based on device size. [Read more...](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-srcset)",
        "zh-Hans": ""
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
        "zh-Hans": ""
      }
    }
  ],
  "events": [],
  "functions": [],
  "name": "v-parallax",
  "sass": [],
  "component": true
}