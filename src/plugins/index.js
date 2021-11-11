import { registerComponents } from './app'
import { loadFonts } from './webfontloader'
export function registerPlugins (app) {
  registerComponents(app)
  loadFonts(app)
}