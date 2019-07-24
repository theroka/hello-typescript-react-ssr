export const renderFullPage = (title: string, body: string, preloadedState?: string) => {
  return `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8"/>
        <title>${title}</title>
      </head>
      <body>
        <div id="root">${body}</div>
        <script>
          window.__PRELOADED_STATE__ = ${ preloadedState ? preloadedState.replace(/</g, '\\u003c') : null }
        </script>
        <script src="/client.js"></script>
      </body>
    </html>`
}
