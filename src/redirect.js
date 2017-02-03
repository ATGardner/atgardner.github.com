var newPathname = '/';
var pathname = window.location.pathname;
if (/\/\d{4}\/\d{2}\/.*/.test(pathname)) {
  var published = new Date('<data:post.timestampISO8601/>');
  var date = published.getDate();
  if (date < 10) {
    date = '0' + date;
  }

  newPathname = pathname.replace(
    /\/(\d{4})\/(\d{2})\/(.*)/,
    '/$1/$2/' + date + '/$3'
  );
}

location.href = 'http://localhost:4000' + newPathname;
