import kebabCase from 'lodash/kebabCase'
export function layout (name = 'Default', children = [], path = '') {
    const dir = kebabCase(name)
  
    return {
      children,
      component: () => import(
        /* webpackChunkName: "layout-[request]" */
        `@/layouts/${dir}/index.vue`
      ),
      path,
    }
  }

//   export function rpath (path = '') {
//     const locale = preferredLocale()
//     const [url, hash] = path.split('#')
  
//     const route = [
//       locale,
//       ...url.split('/').filter(p => !!p && p !== locale),
//     ]
  
//     return `/${route.join('/')}/${hash ? `#${hash}` : ''}`
//   }
  export function route (name, path = '', strict = true) {
    return {
      name,
      component: () => import(
        /* webpackChunkName: "views-[request]" */
        `@/views/${name}`
      ),
      path,
      pathToRegexpOptions: { strict },
    }
  }
  export function error (code = 404) {
    return import(
      /* webpackChunkName: "error-[request]" */
      `@/views/errors/${code}.vue`
    )
  }
  export function abort (code = 404) {
    return {
      name: 'FourOhFour',
      path: '*',
      component: () => error(code),
    }
  }