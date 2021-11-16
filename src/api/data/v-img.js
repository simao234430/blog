module.exports = {
  "props": [
    {
      "name": "alt",
      "type": "string",
      "default": "undefined",
      "source": "v-img",
      "description": {
        "en": "Alternate text for screen readers. Leave empty for decorative images",
        "zh-Hans": ""
      }
    },
    {
      "name": "aspect-ratio",
      "type": [
        "string",
        "number"
      ],
      "default": "undefined",
      "source": "v-responsive",
      "description": {
        "en": "Calculated as `width/height`, so for a 1920x1080px image this will be `1.7778`. Will be calculated automatically if omitted",
        "zh-Hans": ""
      }
    },
    {
      "name": "contain",
      "type": "boolean",
      "default": "false",
      "source": "v-img",
      "description": {
        "en": "Prevents the image from being cropped if it doesn't fit",
        "zh-Hans": ""
      }
    },
    {
      "name": "content-class",
      "type": "string",
      "default": "undefined",
      "source": "v-responsive",
      "description": {
        "en": "Apply a custom class to the responsive content div.",
        "zh-Hans": ""
      }
    },
    {
      "name": "dark",
      "type": "boolean",
      "default": "false",
      "source": "themeable",
      "description": {
        "en": "Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).",
        "zh-Hans": ""
      }
    },
    {
      "name": "eager",
      "type": "boolean",
      "default": "false",
      "source": "v-img",
      "description": {
        "en": "Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.",
        "zh-Hans": ""
      }
    },
    {
      "name": "gradient",
      "type": "string",
      "default": "undefined",
      "source": "v-img",
      "description": {
        "en": "Overlays a gradient onto the image. Only supports [linear-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient) syntax, anything else should be done with classes (see examples)",
        "zh-Hans": ""
      }
    },
    {
      "name": "height",
      "type": [
        "number",
        "string"
      ],
      "default": "undefined",
      "source": "measurable",
      "description": {
        "en": "Sets the height for the component.",
        "zh-Hans": ""
      }
    },
    {
      "name": "lazy-src",
      "type": "string",
      "default": "undefined",
      "source": "v-img",
      "description": {
        "en": "Something to show while waiting for the main image to load, typically a small base64-encoded thumbnail. Has a slight blur filter applied.\n\nUse [vuetify-loader](https://github.com/vuetifyjs/vuetify-loader) to generate automatically",
        "zh-Hans": ""
      }
    },
    {
      "name": "light",
      "type": "boolean",
      "default": "false",
      "source": "themeable",
      "description": {
        "en": "Applies the light theme variant to the component.",
        "zh-Hans": ""
      }
    },
    {
      "name": "max-height",
      "type": [
        "number",
        "string"
      ],
      "default": "undefined",
      "source": "measurable",
      "description": {
        "en": "Sets the maximum height for the component.",
        "zh-Hans": ""
      }
    },
    {
      "name": "max-width",
      "type": [
        "number",
        "string"
      ],
      "default": "undefined",
      "source": "measurable",
      "description": {
        "en": "Sets the maximum width for the component.",
        "zh-Hans": ""
      }
    },
    {
      "name": "min-height",
      "type": [
        "number",
        "string"
      ],
      "default": "undefined",
      "source": "measurable",
      "description": {
        "en": "Sets the minimum height for the component.",
        "zh-Hans": ""
      }
    },
    {
      "name": "min-width",
      "type": [
        "number",
        "string"
      ],
      "default": "undefined",
      "source": "measurable",
      "description": {
        "en": "Sets the minimum width for the component.",
        "zh-Hans": ""
      }
    },
    {
      "name": "options",
      "type": "object",
      "default": {},
      "source": "v-img",
      "description": {
        "en": "Options that are passed to the [Intersection observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) constructor.",
        "zh-Hans": ""
      }
    },
    {
      "name": "position",
      "type": "string",
      "default": "'center center'",
      "source": "v-img",
      "description": {
        "en": "Overrides the default to change which parts get cropped off. Uses the same syntax as [`background-position`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)",
        "zh-Hans": ""
      }
    },
    {
      "name": "sizes",
      "type": "string",
      "default": "undefined",
      "source": "v-img",
      "description": {
        "en": "For use with `srcset`, see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-sizes)",
        "zh-Hans": ""
      }
    },
    {
      "name": "src",
      "type": [
        "string",
        "object"
      ],
      "default": "undefined",
      "source": "v-img",
      "description": {
        "en": "The image URL. This prop is mandatory",
        "zh-Hans": ""
      }
    },
    {
      "name": "srcset",
      "type": "string",
      "default": "undefined",
      "source": "v-img",
      "description": {
        "en": "A set of alternate images to use based on device size. [Read more...](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-srcset)",
        "zh-Hans": ""
      }
    },
    {
      "name": "transition",
      "type": [
        "boolean",
        "string"
      ],
      "default": "fade-transition",
      "source": "v-img",
      "description": {
        "en": "The transition to use when switching from `lazy-src` to `src`",
        "zh-Hans": ""
      }
    },
    {
      "name": "width",
      "type": [
        "number",
        "string"
      ],
      "default": "undefined",
      "source": "measurable",
      "description": {
        "en": "Sets the width for the component.",
        "zh-Hans": ""
      }
    }
  ],
  "mixins": [
    "measurable",
    "themeable",
    "v-responsive"
  ],
  "slots": [
    {
      "name": "default",
      "description": {
        "en": "The default Vue slot.",
        "zh-Hans": ""
      }
    },
    {
      "name": "placeholder",
      "description": {
        "en": "Slot for image placeholder",
        "zh-Hans": ""
      }
    }
  ],
  "events": [
    {
      "name": "error",
      "value": "object | string",
      "description": {
        "en": "Emitted when there is an error",
        "zh-Hans": ""
      }
    },
    {
      "name": "load",
      "value": "object | string",
      "description": {
        "en": "Emitted when image is loaded",
        "zh-Hans": ""
      }
    },
    {
      "name": "loadstart",
      "value": "string",
      "description": {
        "en": "Emitted when the image starts to load",
        "zh-Hans": ""
      }
    }
  ],
  "functions": [],
  "name": "v-img",
  "sass": [],
  "component": true
}