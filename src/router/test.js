 

const { kebabCase } = require('lodash')
const glob = require('glob')
const path = require('path')
const resolve = file => path.resolve(__dirname, file)
const DATA_PATH_API_FILES = resolve('../../src/api/en/')
const DATA_PATH_DOC_FILES = resolve('../../src/pages/en/**/')

require('dotenv').config({ path: resolve('../.env.local') })

const languages = process.env.EN_LOCALE_ONLY === 'true'
  ? ['en']
  : require('../i18n/locales')
    .map(lang => lang.alternate || lang.locale)
    .filter(lang => lang !== 'eo-UY')

function genRoutes (data, prefix) {
    const files = require.context(data, true, /\.md$/)
//   const files = glob.sync(data)
  const paths = []

  for (const file of files.keys()) {
    const route = file
      .split('/en/')
      .pop()
      .split('/')
      .map(i => kebabCase(i.replace(/md/, '')).toLowerCase())
      .join('/')

    if (route === 'home') continue
    paths.push(`/${prefix}${route}/`)
  }

  return paths
}

function genDemos () {
    const files = require.context('../examples/wireframes', true, /\.vue$/)
    // const files = glob.sync(resolve('../src/examples/wireframes/*.vue'))
    const paths = []
  
    for (const file of files.keys()) {
      const route = file
        .split('./')
        .pop()
        .replace(/\.vue$/, '')
  
      paths.push(`/examples/wireframes/${route}/`)
  
    return paths
  }
}

function generateRoutes (options = {}) {
  const { excludeDemos } = options
  const paths = [
    // ...genRoutes(DATA_PATH_DOC_FILES, ''),
    // ...genRoutes(DATA_PATH_API_FILES, 'api/'),
  ]
  if (!excludeDemos) {
    paths.push(...genDemos())
  }
//   paths.push(...genRoutes(DATA_PATH_DOC_FILES, ''))
  const routes = [{ locale: '', path: '', fullPath: '/' }]

  for (const locale of languages) {
    routes.push({ locale, path: '', fullPath: `/${locale}/` })
    for (const path of paths) {
      routes.push({ locale, path, fullPath: `/${locale}${path}` })
    }
  }

  return routes
}
// console.log(generateRoutes())
// module.exports = { generateRoutes }

const routes = [
 
  ...generateRoutes(),
    
];
 

 export default routes  

