const log = (msg) => {
  console.log(msg);
};

// exports.log = (msg) => log(msg);
// exports.text = 'text';
module.exports = {
  log: log,
  text: 'text'
};