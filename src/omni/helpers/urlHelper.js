export const paramToURL = (url, data) => {
  if (data != null) {
    url = url.includes('?') ? url : url + '?';
    Object.keys(data).forEach(function (key) {
      if (Array.isArray(data[key])) {
        let loopData = data[key];
        Object.keys(loopData).forEach(function (ke) {
          url += '&' + key + '[]=' + loopData[ke];
        });
      } else {
        url += `&${key}=${data[key]}`;
      }
    });
  }
  return url;
};
