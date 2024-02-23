export default ({ children }: any) => (
  (
    <html lang="ja">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>HTMX</title>
      <link rel="stylesheet" href="/public/index.css" />
      <script src="https://unpkg.com/htmx.org@1.9.10"></script>
    </head>
    <body>
    <main class="py-12">{children}</main>
    </body>
    </html>
  )
)
