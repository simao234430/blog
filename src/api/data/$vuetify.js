module.exports = {
  "functions": [
    {
      "name": "goTo",
      "signature": "(target: number | string | HTMLElement | Vue, options?: {\n    container?: string | HTMLElement | Vue\n    duration?: number\n    offset?: number\n    easing?: VuetifyGoToEasing\n    appOffset?: boolean\n}): Promise<number>",
      "description": {
        "en": "Scroll to target location, using provided options",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ],
  "props": [],
  "name": "$vuetify",
  "sass": [
    {
      "name": "$amber",
      "default": "map-deep-merge(\n  (\n    'base': #ffc107,\n    'lighten-5': #fff8e1,\n    'lighten-4': #ffecb3,\n    'lighten-3': #ffe082,\n    'lighten-2': #ffd54f,\n    'lighten-1': #ffca28,\n    'darken-1': #ffb300,\n    'darken-2': #ffa000,\n    'darken-3': #ff8f00,\n    'darken-4': #ff6f00,\n    'accent-1': #ffe57f,\n    'accent-2': #ffd740,\n    'accent-3': #ffc400,\n    'accent-4': #ffab00\n  ),\n  $amber\n);",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$blockquote-font-size",
      "default": "18px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$blockquote-font-weight",
      "default": "300 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$blue",
      "default": "map-deep-merge(\n  (\n    'base': #2196F3,\n    'lighten-5': #E3F2FD,\n    'lighten-4': #BBDEFB,\n    'lighten-3': #90CAF9,\n    'lighten-2': #64B5F6,\n    'lighten-1': #42A5F5,\n    'darken-1': #1E88E5,\n    'darken-2': #1976D2,\n    'darken-3': #1565C0,\n    'darken-4': #0D47A1,\n    'accent-1': #82B1FF,\n    'accent-2': #448AFF,\n    'accent-3': #2979FF,\n    'accent-4': #2962FF\n  ),\n  $blue\n);",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$blue-grey",
      "default": "map-deep-merge(\n  (\n    'base': #607d8b,\n    'lighten-5': #eceff1,\n    'lighten-4': #cfd8dc,\n    'lighten-3': #b0bec5,\n    'lighten-2': #90a4ae,\n    'lighten-1': #78909c,\n    'darken-1': #546e7a,\n    'darken-2': #455a64,\n    'darken-3': #37474f,\n    'darken-4': #263238\n  ),\n  $blue-grey\n);",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$body-font-family",
      "default": "'Roboto', sans-serif !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$bootable-transition",
      "default": "0.2s map-get($transition, 'fast-out-slow-in') !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$border-radius-root",
      "default": "4px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$brown",
      "default": "map-deep-merge(\n  (\n    'base': #795548,\n    'lighten-5': #efebe9,\n    'lighten-4': #d7ccc8,\n    'lighten-3': #bcaaa4,\n    'lighten-2': #a1887f,\n    'lighten-1': #8d6e63,\n    'darken-1': #6d4c41,\n    'darken-2': #5d4037,\n    'darken-3': #4e342e,\n    'darken-4': #3e2723\n  ),\n  $brown\n);",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$code-kbd-border-radius",
      "default": "3px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$code-kbd-font-size",
      "default": "85% !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$code-kbd-font-weight",
      "default": "normal !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$code-padding",
      "default": ".2em .4em !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$color-pack",
      "default": "true !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$colors",
      "default": "map-deep-merge(\n  (\n    'red': $red,\n    'pink': $pink,\n    'purple': $purple,\n    'deep-purple': $deep-purple,\n    'indigo': $indigo,\n    'blue': $blue,\n    'light-blue': $light-blue,\n    'cyan': $cyan,\n    'teal': $teal,\n    'green': $green,\n    'light-green': $light-green,\n    'lime': $lime,\n    'yellow': $yellow,\n    'amber': $amber,\n    'orange': $orange,\n    'deep-orange': $deep-orange,\n    'brown': $brown,\n    'blue-grey': $blue-grey,\n    'grey': $grey,\n    'shades': $shades\n  ),\n  $colors\n);",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$container-max-widths",
      "default": "map-deep-merge(\n  (\n    'md': map-get($grid-breakpoints, 'md') * 0.9375,\n    'lg': map-get($grid-breakpoints, 'lg') * 0.9375,\n    'xl': map-get($grid-breakpoints, 'xl') * 0.9375\n  ),\n  $container-max-widths\n);",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$container-padding-x",
      "default": "$grid-gutter / 2 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$cyan",
      "default": "map-deep-merge(\n  (\n    'base': #00bcd4,\n    'lighten-5': #e0f7fa,\n    'lighten-4': #b2ebf2,\n    'lighten-3': #80deea,\n    'lighten-2': #4dd0e1,\n    'lighten-1': #26c6da,\n    'darken-1': #00acc1,\n    'darken-2': #0097a7,\n    'darken-3': #00838f,\n    'darken-4': #006064,\n    'accent-1': #84ffff,\n    'accent-2': #18ffff,\n    'accent-3': #00e5ff,\n    'accent-4': #00b8d4\n  ),\n  $cyan\n);",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$deep-orange",
      "default": "(\n  'base': #ff5722,\n  'lighten-5': #fbe9e7,\n  'lighten-4': #ffccbc,\n  'lighten-3': #ffab91,\n  'lighten-2': #ff8a65,\n  'lighten-1': #ff7043,\n  'darken-1': #f4511e,\n  'darken-2': #e64a19,\n  'darken-3': #d84315,\n  'darken-4': #bf360c,\n  'accent-1': #ff9e80,\n  'accent-2': #ff6e40,\n  'accent-3': #ff3d00,\n  'accent-4': #dd2c00\n);",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$deep-purple",
      "default": "map-deep-merge(\n  (\n    'base': #673ab7,\n    'lighten-5': #ede7f6,\n    'lighten-4': #d1c4e9,\n    'lighten-3': #b39ddb,\n    'lighten-2': #9575cd,\n    'lighten-1': #7e57c2,\n    'darken-1': #5e35b1,\n    'darken-2': #512da8,\n    'darken-3': #4527a0,\n    'darken-4': #311b92,\n    'accent-1': #b388ff,\n    'accent-2': #7c4dff,\n    'accent-3': #651fff,\n    'accent-4': #6200ea\n  ),\n  $deep-purple\n);",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$display-breakpoints",
      "default": "map-deep-merge(\n  (\n    'print-only': 'only print',\n    'screen-only': 'only screen',\n    'xs-only': 'only screen and (max-width: #{map-get($grid-breakpoints, 'sm') - 1})',\n    'sm-only': 'only screen and (min-width: #{map-get($grid-breakpoints, 'sm')}) and (max-width: #{map-get($grid-breakpoints, 'md') - 1})',\n    'sm-and-down': 'only screen and (max-width: #{map-get($grid-breakpoints, 'md') - 1})',\n    'sm-and-up': 'only screen and (min-width: #{map-get($grid-breakpoints, 'sm')})',\n    'md-only': 'only screen and (min-width: #{map-get($grid-breakpoints, 'md')}) and (max-width: #{map-get($grid-breakpoints, 'lg') - 1})',\n    'md-and-down': 'only screen and (max-width: #{map-get($grid-breakpoints, 'lg') - 1})',\n    'md-and-up': 'only screen and (min-width: #{map-get($grid-breakpoints, 'md')})',\n    'lg-only': 'only screen and (min-width: #{map-get($grid-breakpoints, 'lg')}) and (max-width: #{map-get($grid-breakpoints, 'xl') - 1})',\n    'lg-and-down': 'only screen and (max-width: #{map-get($grid-breakpoints, 'xl') - 1})',\n    'lg-and-up': 'only screen and (min-width: #{map-get($grid-breakpoints, 'lg')})',\n    'xl-only': 'only screen and (min-width: #{map-get($grid-breakpoints, 'xl')})'\n  ),\n  $display-breakpoints\n);",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$font-size-root",
      "default": "16px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$font-weights",
      "default": "map-deep-merge(\n  (\n    'thin': 100,\n    'light': 300,\n    'regular': 400,\n    'medium': 500,\n    'bold': 700,\n    'black': 900\n  ),\n  $font-weights\n);",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$form-grid-gutter",
      "default": "$spacer * 2 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$green",
      "default": "map-deep-merge(\n  (\n    'base': #4CAF50,\n    'lighten-5': #E8F5E9,\n    'lighten-4': #C8E6C9,\n    'lighten-3': #A5D6A7,\n    'lighten-2': #81C784,\n    'lighten-1': #66BB6A,\n    'darken-1': #43A047,\n    'darken-2': #388E3C,\n    'darken-3': #2E7D32,\n    'darken-4': #1B5E20,\n    'accent-1': #B9F6CA,\n    'accent-2': #69F0AE,\n    'accent-3': #00E676,\n    'accent-4': #00C853\n  ),\n  $green\n);",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$grey",
      "default": "map-deep-merge(\n  (\n    'base': #9e9e9e,\n    'lighten-5': #fafafa,\n    'lighten-4': #f5f5f5,\n    'lighten-3': #eeeeee,\n    'lighten-2': #e0e0e0,\n    'lighten-1': #bdbdbd,\n    'darken-1': #757575,\n    'darken-2': #616161,\n    'darken-3': #424242,\n    'darken-4': #212121\n  ),\n  $grey\n);",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$grid-breakpoints",
      "default": "map-deep-merge(\n  (\n    'xs': 0,\n    'sm': 600px,\n    'md': 960px,\n    'lg': 1280px - 16px,\n    'xl': 1920px - 16px\n  ),\n  $grid-breakpoints\n);",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$grid-columns",
      "default": "12 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$grid-gutter",
      "default": "$spacer * 6 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$grid-gutters",
      "default": "map-deep-merge(\n  (\n    'xs': $grid-gutter / 12,\n    'sm': $grid-gutter / 6,\n    'md': $grid-gutter / 3,\n    'lg': $grid-gutter * 2/3,\n    'xl': $grid-gutter\n  ),\n  $grid-gutters\n);",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$heading-font-family",
      "default": "$body-font-family !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$headings",
      "default": "map-deep-merge(\n  (\n    'h1': (\n      'size': 6rem,\n      'weight': 300,\n      'line-height': 6rem,\n      'letter-spacing': -.015625em,\n      'font-family': $heading-font-family,\n      'text-transform': false\n    ),\n    'h2': (\n      'size': 3.75rem,\n      'weight': 300,\n      'line-height': 3.75rem,\n      'letter-spacing': -.0083333333em,\n      'font-family': $heading-font-family,\n      'text-transform': false\n    ),\n    'h3': (\n      'size': 3rem,\n      'weight': 400,\n      'line-height': 3.125rem,\n      'letter-spacing': normal,\n      'font-family': $heading-font-family,\n      'text-transform': false\n    ),\n    'h4': (\n      'size': 2.125rem,\n      'weight': 400,\n      'line-height': 2.5rem,\n      'letter-spacing': .0073529412em,\n      'font-family': $heading-font-family,\n      'text-transform': false\n    ),\n    'h5': (\n      'size': 1.5rem,\n      'weight': 400,\n      'line-height': 2rem,\n      'letter-spacing': normal,\n      'font-family': $heading-font-family,\n      'text-transform': false\n    ),\n    'h6': (\n      'size': 1.25rem,\n      'weight': 500,\n      'line-height': 2rem,\n      'letter-spacing': .0125em,\n      'font-family': $heading-font-family,\n      'text-transform': false\n    ),\n    'subtitle-1': (\n      'size': 1rem,\n      'weight': normal,\n      'line-height': 1.75rem,\n      'letter-spacing': .009375em,\n      'font-family': $body-font-family,\n      'text-transform': false\n    ),\n    'subtitle-2': (\n      'size': .875rem,\n      'weight': 500,\n      'line-height': 1.375rem,\n      'letter-spacing': .0071428571em,\n      'font-family': $body-font-family,\n      'text-transform': false\n    ),\n    'body-1': (\n      'size': 1rem,\n      'weight': 400,\n      'line-height': 1.5rem,\n      'letter-spacing': .03125em,\n      'font-family': $body-font-family,\n      'text-transform': false\n    ),\n    'body-2': (\n      'size': .875rem,\n      'weight': 400,\n      'line-height': 1.25rem,\n      'letter-spacing': .0178571429em,\n      'font-family': $body-font-family,\n      'text-transform': false\n    ),\n    'button': (\n      'size': .875rem,\n      'weight': 500,\n      'line-height': 2.25rem,\n      'letter-spacing': .0892857143em,\n      'font-family': $body-font-family,\n      'text-transform': uppercase\n    ),\n    'caption': (\n      'size': .75rem,\n      'weight': 400,\n      'line-height': 1.25rem,\n      'letter-spacing': .0333333333em,\n      'font-family': $body-font-family,\n      'text-transform': false\n    ),\n    'overline': (\n      'size': .75rem,\n      'weight': 500,\n      'line-height': 2rem,\n      'letter-spacing': .1666666667em,\n      'font-family': $body-font-family,\n      'text-transform': uppercase\n    )\n  ),\n  $headings\n);",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$indigo",
      "default": "map-deep-merge(\n  (\n    'base': #3f51b5,\n    'lighten-5': #e8eaf6,\n    'lighten-4': #c5cae9,\n    'lighten-3': #9fa8da,\n    'lighten-2': #7986cb,\n    'lighten-1': #5c6bc0,\n    'darken-1': #3949ab,\n    'darken-2': #303f9f,\n    'darken-3': #283593,\n    'darken-4': #1a237e,\n    'accent-1': #8c9eff,\n    'accent-2': #536dfe,\n    'accent-3': #3d5afe,\n    'accent-4': #304ffe\n  ),\n  $indigo\n);",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$input-top-spacing",
      "default": "16px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$kbd-padding",
      "default": ".2em .4rem !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$light-blue",
      "default": "map-deep-merge(\n  (\n    'base': #03a9f4,\n    'lighten-5': #e1f5fe,\n    'lighten-4': #b3e5fc,\n    'lighten-3': #81d4fa,\n    'lighten-2': #4fc3f7,\n    'lighten-1': #29b6f6,\n    'darken-1': #039be5,\n    'darken-2': #0288d1,\n    'darken-3': #0277bd,\n    'darken-4': #01579b,\n    'accent-1': #80d8ff,\n    'accent-2': #40c4ff,\n    'accent-3': #00b0ff,\n    'accent-4': #0091ea\n  ),\n  $light-blue\n);",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$light-green",
      "default": "map-deep-merge(\n  (\n    'base': #8bc34a,\n    'lighten-5': #f1f8e9,\n    'lighten-4': #dcedc8,\n    'lighten-3': #c5e1a5,\n    'lighten-2': #aed581,\n    'lighten-1': #9ccc65,\n    'darken-1': #7cb342,\n    'darken-2': #689f38,\n    'darken-3': #558b2f,\n    'darken-4': #33691e,\n    'accent-1': #ccff90,\n    'accent-2': #b2ff59,\n    'accent-3': #76ff03,\n    'accent-4': #64dd17\n  ),\n  $light-green\n);",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$lime",
      "default": "map-deep-merge(\n  (\n    'base': #cddc39,\n    'lighten-5': #f9fbe7,\n    'lighten-4': #f0f4c3,\n    'lighten-3': #e6ee9c,\n    'lighten-2': #dce775,\n    'lighten-1': #d4e157,\n    'darken-1': #c0ca33,\n    'darken-2': #afb42b,\n    'darken-3': #9e9d24,\n    'darken-4': #827717,\n    'accent-1': #f4ff81,\n    'accent-2': #eeff41,\n    'accent-3': #c6ff00,\n    'accent-4': #aeea00\n  ),\n  $lime\n);",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$line-height-root",
      "default": "1.5 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$material-dark",
      "default": "map-deep-merge(\n  (\n    'status-bar': (\n      'regular': map-get($shades, 'black'),\n      'lights-out': rgba(map-get($shades, 'black'), 0.2)\n    ),\n    'app-bar': map-get($material-dark-elevation-colors, '4'),\n    'background': #121212,\n    'bottom-navigation': map-get($material-dark-elevation-colors, '8'),\n    'surface': #121212,\n    'calendar': (\n      'background-color': #303030,\n      'outside-background-color': #202020,\n      'weeknumber-background-color': #202020,\n      'line-color': map-get($grey, 'base'),\n      'interval-color': map-get($grey, 'lighten-3'),\n      'interval-line-color': map-get($grey, 'darken-2'),\n      'text-color': map-get($shades, 'white'),\n      'past-color': rgba(map-get($shades, 'white'), .50)\n      ),\n    'cards': map-get($material-dark-elevation-colors, '1'),\n    'chips': #555,\n    'code': (\n      'background': rgba(map-get($shades, 'white'), 0.1),\n      'color': currentColor\n    ),\n    'kbd': (\n      'background': #212529,\n      'color': map-get($shades, 'white')\n    ),\n    'dividers': rgba(map-get($shades, 'white'), 0.12),\n    'text': (\n      'theme': map-get($shades, 'white'),\n      'primary': map-get($shades, 'white'),\n      'secondary': rgba(map-get($shades, 'white'), 0.7),\n      'disabled': rgba(map-get($shades, 'white'), 0.5),\n      'link': map-get($blue, 'accent-1'),\n      'link-hover': map-get($grey, 'lighten-3')\n    ),\n    'icons': (\n      'active': map-get($shades, 'white'),\n      'inactive': rgba(map-get($shades, 'white'), 0.5)\n    ),\n    'inputs': (\n      'box': map-get($shades, 'white'),\n      'solo-inverted': rgba(map-get($shades, 'white'), 0.16),\n      'solo-inverted-focused': map-get($shades, 'white'),\n      'solo-inverted-focused-label': rgba(map-get($shades, 'black'), .6),\n      'solo-inverted-focused-placeholder': rgba(map-get($shades, 'black'), 0.38),\n      'solo-inverted-focused-text': rgba(map-get($shades, 'black'), 0.87)\n    ),\n    'buttons': (\n      'disabled': rgba(map-get($shades, 'white'), 0.3),\n      'focused': rgba(map-get($shades, 'white'), 0.12),\n      'focused-alt': rgba(map-get($shades, 'white'), 0.1),\n      'pressed': rgba(#ccc, 0.25)\n    ),\n    'expansion-panels': (\n      'focus': #494949\n    ),\n    'navigation-drawer': map-get($material-dark-elevation-colors, '16'),\n    'selection-controls': (\n      'disabled': rgba(map-get($shades, 'white'), 0.3),\n      'thumb': (\n        'inactive': map-get($grey, 'lighten-1'),\n        'disabled': map-get($grey, 'darken-3')\n      ),\n      'track': (\n        'inactive': rgba(map-get($shades, 'white'), 0.3),\n        'disabled': rgba(map-get($shades, 'white'), 0.1)\n      )\n    ),\n    'slider': (\n      'active': rgba(map-get($shades, 'white'), 0.3),\n      'inactive': rgba(map-get($shades, 'white'), 0.2),\n      'disabled': rgba(map-get($shades, 'white'), 0.2),\n      'discrete': map-get($shades, 'white')\n    ),\n    'skeleton': linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, .05), rgba(255, 255, 255, 0)),\n    'states': (\n      'hover': 0.08,\n      'focus': 0.24,\n      'selected': 0.16,\n      'activated': 0.24,\n      'pressed': 0.32,\n      'dragged': 0.16\n    ),\n    'tabs': rgba(map-get($shades, 'white'), 0.6),\n    'toggle-buttons': (\n      'color': map-get($shades, 'white')\n    ),\n    'text-fields': (\n      'filled': rgba(map-get($shades, 'white'), 0.08),\n      'filled-hover': rgba(map-get($shades, 'white'), 0.16),\n      'outlined': rgba(map-get($shades, 'white'), 0.24),\n      'outlined-disabled': rgba(map-get($shades, 'white'), 0.16),\n      'outlined-hover': map-get($shades, 'white')\n    ),\n    'input-bottom-line': rgba(map-get($shades, 'white'), 0.7),\n    'stepper': (\n      'active': rgba(map-get($shades, 'white'), 1),\n      'completed': rgba(map-get($shades, 'white'), 0.87),\n      'hover': rgba(map-get($shades, 'white'), 0.75)\n    ),\n    'table': (\n      'active': #505050,\n      'hover': map-get($grey, 'darken-2'),\n      'group': map-get($grey, 'darken-2')\n    ),\n    'toolbar': map-get($material-dark-elevation-colors, '4'),\n    'picker': (\n      'body': map-get($grey, 'darken-3'),\n      'clock': map-get($grey, 'darken-2'),\n      'indeterminateTime': map-get($grey, 'darken-1'),\n      'title': map-get($grey, 'darken-2')\n    ),\n    'color-picker': (\n      'checkerboard': rgba(map-get($shades, 'white'), 0.12)\n    ),\n    'bg-color': #303030,\n    'fg-color': map-get($shades, 'white'),\n    'text-color': map-get($shades, 'white'),\n    'primary-text-percent': 1,\n    'secondary-text-percent': 0.7,\n    'disabledORhints-text-percent': 0.5,\n    'divider-percent': 0.12,\n    'active-icon-percent': 1,\n    'inactive-icon-percent': 0.5\n  ),\n  $material-dark\n);",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$material-dark-elevation-colors",
      "default": "() !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$material-light",
      "default": "map-deep-merge(\n  (\n    'status-bar': (\n      'regular': map-get($grey, 'lighten-2'),\n      'lights-out': rgba(map-get($shades, 'white'), 0.7)\n    ),\n    'app-bar': map-get($grey, 'lighten-4'),\n    'background': map-get($shades, 'white'),\n    'bottom-navigation': map-get($shades, 'white'),\n    'surface': map-get($shades, 'white'),\n    'calendar': (\n      'background-color': map-get($shades, 'white'),\n      'outside-background-color': #f7f7f7,\n      'weeknumber-background-color': #f1f3f4,\n      'line-color': map-get($grey, 'lighten-2'),\n      'interval-color': map-get($grey, 'darken-3'),\n      'interval-line-color': map-get($grey, 'lighten-2'),\n      'text-color': map-get($shades, 'black'),\n      'past-color': rgba(map-get($shades, 'black'), .38)\n    ),\n    'cards': map-get($shades, 'white'),\n    'chips': #e0e0e0,\n    'code': (\n      'background': rgba(map-get($shades, 'black'), 0.05),\n      'color': currentColor\n    ),\n    'kbd': (\n      'background': #212529,\n      'color': map-get($shades, 'white')\n    ),\n    'dividers': rgba(map-get($shades, 'black'), 0.12),\n    'text': (\n      'theme': map-get($shades, 'white'),\n      'primary': rgba(map-get($shades, 'black'), 0.87),\n      'secondary': rgba(map-get($shades, 'black'), 0.6),\n      'disabled': rgba(map-get($shades, 'black'), 0.38),\n      'link': map-get($blue, 'darken-2'),\n      'link-hover': map-get($grey, 'darken-3')\n    ),\n    'icons': (\n      'active': rgba(map-get($shades, 'black'), 0.54),\n      'inactive': rgba(map-get($shades, 'black'), 0.38)\n    ),\n    'inputs': (\n      'box': rgba(map-get($shades, 'black'), 0.04),\n      'solo-inverted': rgba(map-get($shades, 'black'), 0.06),\n      'solo-inverted-focused': map-get($grey, 'darken-3'),\n      'solo-inverted-focused-label': rgba(map-get($shades, 'white'), .7),\n      'solo-inverted-focused-placeholder': rgba(map-get($shades, 'white'), 0.5),\n      'solo-inverted-focused-text': map-get($shades, 'white')\n    ),\n    'buttons': (\n      'disabled': rgba(map-get($shades, 'black'), 0.26),\n      'focused': rgba(map-get($shades, 'black'), 0.12),\n      'focused-alt': rgba(map-get($shades, 'white'), 0.6),\n      'pressed': rgba(#999, 0.4)\n    ),\n    'expansion-panels': (\n      'focus': map-get($grey, 'lighten-3')\n    ),\n    'navigation-drawer': map-get($shades, 'white'),\n    'selection-controls': (\n      'disabled': rgba(map-get($shades, 'black'), 0.26),\n      'thumb': (\n        'inactive': map-get($shades, 'white'),\n        'disabled': map-get($grey, 'lighten-5')\n      ),\n      'track': (\n        'inactive': rgba(map-get($shades, 'black'), 0.38),\n        'disabled': rgba(map-get($shades, 'black'), 0.12)\n      )\n    ),\n    'slider': (\n      'active': rgba(map-get($shades, 'black'), 0.38),\n      'inactive': rgba(map-get($shades, 'black'), 0.26),\n      'disabled': rgba(map-get($shades, 'black'), 0.26),\n      'discrete': map-get($shades, 'black')\n    ),\n    'skeleton': linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, .3), rgba(255, 255, 255, 0)),\n    'states': (\n      'hover': 0.04,\n      'focus': 0.12,\n      'selected': 0.08,\n      'activated': 0.12,\n      'pressed': 0.16,\n      'dragged': 0.08\n    ),\n    'tabs': rgba(0, 0, 0, 0.54),\n    'toggle-buttons': (\n      'color': map-get($shades, 'black')\n    ),\n    'text-fields': (\n      'filled': rgba(map-get($shades, 'black'), 0.06),\n      'filled-hover': rgba(map-get($shades, 'black'), 0.12),\n      'outlined': rgba(map-get($shades, 'black'), 0.38),\n      'outlined-disabled': rgba(map-get($shades, 'black'), 0.26),\n      'outlined-hover': rgba(map-get($shades, 'black'), 0.86)\n    ),\n    'toolbar': map-get($shades, 'white'),\n    'input-bottom-line': rgba(map-get($shades, 'black'), 0.42),\n    'stepper': (\n      'active': rgba(map-get($shades, 'white'), 1),\n      'completed': rgba(map-get($shades, 'black'), 0.87),\n      'hover': rgba(map-get($shades, 'black'), 0.54)\n    ),\n    'table': (\n      'active': map-get($grey, 'lighten-4'),\n      'hover': map-get($grey, 'lighten-3'),\n      'group': map-get($grey, 'lighten-3')\n    ),\n    'picker': (\n      'body': map-get($shades, 'white'),\n      'clock': map-get($grey, 'lighten-2'),\n      'indeterminateTime': map-get($grey, 'lighten-1'),\n      'title': map-get($grey, 'lighten-2')\n    ),\n    'color-picker': (\n      'checkerboard': rgba(map-get($shades, 'white'), 0)\n    ),\n    'bg-color': map-get($shades, 'white'),\n    'fg-color': map-get($shades, 'black'),\n    'text-color': map-get($shades, 'black'),\n    'primary-text-percent': 0.87,\n    'secondary-text-percent': 0.6,\n    'disabledORhints-text-percent': 0.38,\n    'divider-percent': 0.12,\n    'active-icon-percent': 0.54,\n    'inactive-icon-percent': 0.38\n  ),\n  $material-light\n);",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$material-theme",
      "default": "$material-light !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$orange",
      "default": "map-deep-merge(\n  (\n    'base': #ff9800,\n    'lighten-5': #fff3e0,\n    'lighten-4': #ffe0b2,\n    'lighten-3': #ffcc80,\n    'lighten-2': #ffb74d,\n    'lighten-1': #ffa726,\n    'darken-1': #fb8c00,\n    'darken-2': #f57c00,\n    'darken-3': #ef6c00,\n    'darken-4': #e65100,\n    'accent-1': #ffd180,\n    'accent-2': #ffab40,\n    'accent-3': #ff9100,\n    'accent-4': #ff6d00\n  ),\n  $orange\n);",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$pink",
      "default": "map-deep-merge(\n  (\n    'base': #e91e63,\n    'lighten-5': #fce4ec,\n    'lighten-4': #f8bbd0,\n    'lighten-3': #f48fb1,\n    'lighten-2': #f06292,\n    'lighten-1': #ec407a,\n    'darken-1': #d81b60,\n    'darken-2': #c2185b,\n    'darken-3': #ad1457,\n    'darken-4': #880e4f,\n    'accent-1': #ff80ab,\n    'accent-2': #ff4081,\n    'accent-3': #f50057,\n    'accent-4': #c51162\n  ),\n  $pink\n);",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$primary-transition",
      "default": "0.3s map-get($transition, 'swing') !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$purple",
      "default": "map-deep-merge(\n  (\n    'base': #9c27b0,\n    'lighten-5': #f3e5f5,\n    'lighten-4': #e1bee7,\n    'lighten-3': #ce93d8,\n    'lighten-2': #ba68c8,\n    'lighten-1': #ab47bc,\n    'darken-1': #8e24aa,\n    'darken-2': #7b1fa2,\n    'darken-3': #6a1b9a,\n    'darken-4': #4a148c,\n    'accent-1': #ea80fc,\n    'accent-2': #e040fb,\n    'accent-3': #d500f9,\n    'accent-4': #aa00ff\n  ),\n  $purple\n);",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$red",
      "default": "map-deep-merge(\n  (\n    'base': #F44336,\n    'lighten-5': #FFEBEE,\n    'lighten-4': #FFCDD2,\n    'lighten-3': #EF9A9A,\n    'lighten-2': #E57373,\n    'lighten-1': #EF5350,\n    'darken-1': #E53935,\n    'darken-2': #D32F2F,\n    'darken-3': #C62828,\n    'darken-4': #B71C1C,\n    'accent-1': #FF8A80,\n    'accent-2': #FF5252,\n    'accent-3': #FF1744,\n    'accent-4': #D50000\n  ),\n  $red\n);",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$ripple-animation-transition-in",
      "default": "transform 0.25s map-get($transition, 'fast-out-slow-in'), opacity 0.1s map-get($transition, 'fast-out-slow-in') !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$ripple-animation-transition-out",
      "default": "opacity 0.3s map-get($transition, 'fast-out-slow-in') !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$ripple-animation-visible-opacity",
      "default": "0.15 !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$rounded",
      "default": "map-deep-merge(\n  (\n    0: 0,\n    'sm': $border-radius-root / 2,\n    null: $border-radius-root,\n    'lg': $border-radius-root * 2,\n    'xl': $border-radius-root * 6,\n    'pill': 9999px,\n    'circle': 50%\n  ),\n  $rounded\n);",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$secondary-transition",
      "default": "0.2s map-get($transition, 'ease-in-out') !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$shades",
      "default": "map-deep-merge(\n  (\n    'black': #000000,\n    'white': #FFFFFF,\n    'transparent': transparent\n  ),\n  $shades\n);",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$shadow-key-ambient",
      "default": "map-deep-merge(\n  (\n    0: (0px 0px 0px 0px $shadow-key-ambient-opacity),\n    1: (0px 1px 3px 0px $shadow-key-ambient-opacity),\n    2: (0px 1px 5px 0px $shadow-key-ambient-opacity),\n    3: (0px 1px 8px 0px $shadow-key-ambient-opacity),\n    4: (0px 1px 10px 0px $shadow-key-ambient-opacity),\n    5: (0px 1px 14px 0px $shadow-key-ambient-opacity),\n    6: (0px 1px 18px 0px $shadow-key-ambient-opacity),\n    7: (0px 2px 16px 1px $shadow-key-ambient-opacity),\n    8: (0px 3px 14px 2px $shadow-key-ambient-opacity),\n    9: (0px 3px 16px 2px $shadow-key-ambient-opacity),\n    10: (0px 4px 18px 3px $shadow-key-ambient-opacity),\n    11: (0px 4px 20px 3px $shadow-key-ambient-opacity),\n    12: (0px 5px 22px 4px $shadow-key-ambient-opacity),\n    13: (0px 5px 24px 4px $shadow-key-ambient-opacity),\n    14: (0px 5px 26px 4px $shadow-key-ambient-opacity),\n    15: (0px 6px 28px 5px $shadow-key-ambient-opacity),\n    16: (0px 6px 30px 5px $shadow-key-ambient-opacity),\n    17: (0px 6px 32px 5px $shadow-key-ambient-opacity),\n    18: (0px 7px 34px 6px $shadow-key-ambient-opacity),\n    19: (0px 7px 36px 6px $shadow-key-ambient-opacity),\n    20: (0px 8px 38px 7px $shadow-key-ambient-opacity),\n    21: (0px 8px 40px 7px $shadow-key-ambient-opacity),\n    22: (0px 8px 42px 7px $shadow-key-ambient-opacity),\n    23: (0px 9px 44px 8px $shadow-key-ambient-opacity),\n    24: (0px 9px 46px 8px $shadow-key-ambient-opacity)\n  ),\n  $shadow-key-ambient\n);",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$shadow-key-ambient-opacity",
      "default": "rgba(0, 0, 0, 0.12) !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$shadow-key-penumbra",
      "default": "map-deep-merge(\n  (\n    0: (0px 0px 0px 0px $shadow-key-penumbra-opacity),\n    1: (0px 1px 1px 0px $shadow-key-penumbra-opacity),\n    2: (0px 2px 2px 0px $shadow-key-penumbra-opacity),\n    3: (0px 3px 4px 0px $shadow-key-penumbra-opacity),\n    4: (0px 4px 5px 0px $shadow-key-penumbra-opacity),\n    5: (0px 5px 8px 0px $shadow-key-penumbra-opacity),\n    6: (0px 6px 10px 0px $shadow-key-penumbra-opacity),\n    7: (0px 7px 10px 1px $shadow-key-penumbra-opacity),\n    8: (0px 8px 10px 1px $shadow-key-penumbra-opacity),\n    9: (0px 9px 12px 1px $shadow-key-penumbra-opacity),\n    10: (0px 10px 14px 1px $shadow-key-penumbra-opacity),\n    11: (0px 11px 15px 1px $shadow-key-penumbra-opacity),\n    12: (0px 12px 17px 2px $shadow-key-penumbra-opacity),\n    13: (0px 13px 19px 2px $shadow-key-penumbra-opacity),\n    14: (0px 14px 21px 2px $shadow-key-penumbra-opacity),\n    15: (0px 15px 22px 2px $shadow-key-penumbra-opacity),\n    16: (0px 16px 24px 2px $shadow-key-penumbra-opacity),\n    17: (0px 17px 26px 2px $shadow-key-penumbra-opacity),\n    18: (0px 18px 28px 2px $shadow-key-penumbra-opacity),\n    19: (0px 19px 29px 2px $shadow-key-penumbra-opacity),\n    20: (0px 20px 31px 3px $shadow-key-penumbra-opacity),\n    21: (0px 21px 33px 3px $shadow-key-penumbra-opacity),\n    22: (0px 22px 35px 3px $shadow-key-penumbra-opacity),\n    23: (0px 23px 36px 3px $shadow-key-penumbra-opacity),\n    24: (0px 24px 38px 3px $shadow-key-penumbra-opacity)\n  ),\n  $shadow-key-penumbra\n);",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$shadow-key-penumbra-opacity",
      "default": "rgba(0, 0, 0, 0.14) !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$shadow-key-umbra",
      "default": "map-deep-merge(\n  (\n    0: (0px 0px 0px 0px $shadow-key-umbra-opacity),\n    1: (0px 2px 1px -1px $shadow-key-umbra-opacity),\n    2: (0px 3px 1px -2px $shadow-key-umbra-opacity),\n    3: (0px 3px 3px -2px $shadow-key-umbra-opacity),\n    4: (0px 2px 4px -1px $shadow-key-umbra-opacity),\n    5: (0px 3px 5px -1px $shadow-key-umbra-opacity),\n    6: (0px 3px 5px -1px $shadow-key-umbra-opacity),\n    7: (0px 4px 5px -2px $shadow-key-umbra-opacity),\n    8: (0px 5px 5px -3px $shadow-key-umbra-opacity),\n    9: (0px 5px 6px -3px $shadow-key-umbra-opacity),\n    10: (0px 6px 6px -3px $shadow-key-umbra-opacity),\n    11: (0px 6px 7px -4px $shadow-key-umbra-opacity),\n    12: (0px 7px 8px -4px $shadow-key-umbra-opacity),\n    13: (0px 7px 8px -4px $shadow-key-umbra-opacity),\n    14: (0px 7px 9px -4px $shadow-key-umbra-opacity),\n    15: (0px 8px 9px -5px $shadow-key-umbra-opacity),\n    16: (0px 8px 10px -5px $shadow-key-umbra-opacity),\n    17: (0px 8px 11px -5px $shadow-key-umbra-opacity),\n    18: (0px 9px 11px -5px $shadow-key-umbra-opacity),\n    19: (0px 9px 12px -6px $shadow-key-umbra-opacity),\n    20: (0px 10px 13px -6px $shadow-key-umbra-opacity),\n    21: (0px 10px 13px -6px $shadow-key-umbra-opacity),\n    22: (0px 10px 14px -6px $shadow-key-umbra-opacity),\n    23: (0px 11px 14px -7px $shadow-key-umbra-opacity),\n    24: (0px 11px 15px -7px $shadow-key-umbra-opacity)\n  ),\n  $shadow-key-umbra\n);",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$shadow-key-umbra-opacity",
      "default": "rgba(0, 0, 0, 0.2) !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$spacer",
      "default": "4px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$spacers",
      "default": "@if (type-of($spacers) == list) {\n  @for $i from 0 through 16 {\n    $spacers: map-merge($spacers, ($i: $spacer * $i))\n  }\n}\n\n$negative-spacers: () !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$teal",
      "default": "map-deep-merge(\n  (\n    'base': #009688,\n    'lighten-5': #e0f2f1,\n    'lighten-4': #b2dfdb,\n    'lighten-3': #80cbc4,\n    'lighten-2': #4db6ac,\n    'lighten-1': #26a69a,\n    'darken-1': #00897b,\n    'darken-2': #00796b,\n    'darken-3': #00695c,\n    'darken-4': #004d40,\n    'accent-1': #a7ffeb,\n    'accent-2': #64ffda,\n    'accent-3': #1de9b6,\n    'accent-4': #00bfa5\n  ),\n  $teal\n);",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$text-field-active-label-height",
      "default": "12px !default;",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$transition",
      "default": "map-deep-merge(\n  (\n    'fast-out-slow-in': cubic-bezier(0.4, 0, 0.2, 1),\n    'linear-out-slow-in': cubic-bezier(0, 0, 0.2, 1),\n    'fast-out-linear-in': cubic-bezier(0.4, 0, 1, 1),\n    'ease-in-out': cubic-bezier(0.4, 0, 0.6, 1),\n    'fast-in-fast-out': cubic-bezier(0.25, 0.8, 0.25, 1),\n    'swing': cubic-bezier(0.25, 0.8, 0.5, 1)\n  ),\n  $transition\n);",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$typography",
      "default": "@each $type, $values in $headings {\n  $typography: map-deep-merge(\n    $typography,\n    (#{$type}: map-values($values))\n  );",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    },
    {
      "name": "$yellow",
      "default": "map-deep-merge(\n  (\n    'base': #ffeb3b,\n    'lighten-5': #fffde7,\n    'lighten-4': #fff9c4,\n    'lighten-3': #fff59d,\n    'lighten-2': #fff176,\n    'lighten-1': #ffee58,\n    'darken-1': #fdd835,\n    'darken-2': #fbc02d,\n    'darken-3': #f9a825,\n    'darken-4': #f57f17,\n    'accent-1': #ffff8d,\n    'accent-2': #ffff00,\n    'accent-3': #ffea00,\n    'accent-4': #ffd600\n  ),\n  $yellow\n);",
      "description": {
        "en": "",
        "ja": "",
        "zh-Hans": "",
        "eo-UY": ""
      }
    }
  ]
}