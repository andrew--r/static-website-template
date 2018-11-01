module.exports = ({ context, children }) => `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>${context.title || ''}</title>
  <link rel="stylesheet" href="${context.getAssetUrl('main.css')}"/>
</head>

<body>
  <header>
    <nav>
      <ul>
        <li><a href="/">Index</a></li>
        <li><a href="/notes">Notes</a></li>
      </ul>
    </nav>
  </header>

  <main>
    ${children}
  </main>
</body>
</html>
`;
