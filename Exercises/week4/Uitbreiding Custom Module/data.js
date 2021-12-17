const getDate = () => {
  const date = new Date();
  return `${date.toString()}`;
};

const getTime = (locales = 'nl-BE') => {
  const date = new Date();
  return {
    default: `${date.toLocaleString()}`,
    set: `${date.toLocaleString(locales)}`
  };
};

const getYear = () => {
  const date = new Date();
  return `${date.getFullYear()}`;
};

module.exports = {
  getDate,
  getTime,
  getYear
}