export function redirect(timestamp) {
  let newPathname = '/';
  const {location: {pathname}} = window;
  if (/\/\d{4}\/\d{2}\/.*/.test(pathname)) {
    const published = new Date(timestamp);
    let date = published.getDate();
    if (date < 10) {
      date = '0' + date;
    }

    newPathname = pathname.replace(
      /\/(\d{4})\/(\d{2})\/(.*)/,
      '/$1/$2/' + date + '/$3'
    );
  }

  location.href = 'https://atgardner.github.io' + newPathname;
}