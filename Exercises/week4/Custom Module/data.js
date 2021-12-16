const getDate = () => {
  const date = new Date();
  return {
    getString: `${date.toString()}`,
    getYear: `${date.getFullYear()}`,
    timeToString: `${date.getFullYear()}`
  };
};

exports.getDate = getDate;