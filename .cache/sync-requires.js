
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/carinagonzalez/Documents/wa/gastby/dro-gatsby/src/pages/404.js")),
  "component---src-pages-contacto-js": preferDefault(require("/Users/carinagonzalez/Documents/wa/gastby/dro-gatsby/src/pages/contacto.js")),
  "component---src-pages-index-copy-js": preferDefault(require("/Users/carinagonzalez/Documents/wa/gastby/dro-gatsby/src/pages/index copy.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/carinagonzalez/Documents/wa/gastby/dro-gatsby/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/carinagonzalez/Documents/wa/gastby/dro-gatsby/src/pages/page-2.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/Users/carinagonzalez/Documents/wa/gastby/dro-gatsby/src/pages/using-typescript.tsx"))
}

