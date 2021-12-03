const fetchData = (method = 'GET', url) => {
  const request = new XMLHttpRequest();

  request.onreadystatechange = () => {
    // console.log('Iets is veranderd. ', request.readyState);
    switch (request.readyState) {
      case 0:
        console.log('UNSENT');
        break;
      case 1:
        console.log('OPENED CONNECTION');
        break;
      case 2:
        console.log('HEADERS ACCEPTED');
        break;
      case 3:
        console.log('LOADING');
        break;
      case 4:
        console.log('LOADED ', request.status);
        if (request.status === 200) {
          console.log('SUCCESS!');
          console.log(request.responseType);
          console.log(JSON.parse(request.response));
        } else {
          throw new Error('Could not be loaded.');
        }
        break;
      default:
        break;
    }
  };

  // request.open('GET', 'data.txt', true);
  request.open('GET', url, true);
  request.send();

  // // kan ook:
  // request.onload
  // request.addEventListener('load', ....)
  // const handleProgress = () => {
  //
  // }
  // request.addEventListener('progress', handleProgress)


  request.addEventListener('progress', (e) => {
    // console.log(e);
    const p = document.getElementById('progress');
    console.log();
    p.setAttribute('value', e.loaded);
    p.setAttribute('value', e.total);
    p.innerHTML = (e.loaded / e.total) * 100;
  });
};

fetchData(null, 'test.json');