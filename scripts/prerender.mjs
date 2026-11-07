// Build-time prerender: renders <App /> to HTML and injects it into dist/index.html,
// so crawlers, link previews and no-JS readers get the full page content.
// Runs automatically as the last step of `npm run build` (and therefore on Vercel).
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const htmlPath = path.join(root, 'dist', 'index.html')
const ssrDir = path.join(root, 'dist-ssr')

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)
const appHtml = render()

const template = fs.readFileSync(htmlPath, 'utf8')
const marker = '<div id="root"></div>'
if (!template.includes(marker)) {
  throw new Error(`prerender: ${marker} not found in dist/index.html`)
}
fs.writeFileSync(htmlPath, template.replace(marker, `<div id="root">${appHtml}</div>`))

// The SSR bundle is only a build tool; it is not deployed.
fs.rmSync(ssrDir, { recursive: true, force: true })

console.log(`prerender: wrote ${(appHtml.length / 1024).toFixed(1)} kB of HTML into dist/index.html`)
