module.exports = {
  "globDirectory": "dist/",
  "globPatterns": [
    "**/*.{html,css,js,png,svg,json}"
  ],
  globIgnores: ['blog/**', 'projects/**'],
  "swDest": "dist/sw.js",
  "swSrc": "./src/pwa/worker.js"
};