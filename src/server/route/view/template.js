export default ({ req, isProd } = {}) => {
  return `
  <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>TEST</title>
    </head>
    <body>
      <div id="root"></div>
      <script type="module" src="${isProd ? '/app.js' : '/src/client/main.tsx'}"></script>
    </body>
  </html>
  `
};