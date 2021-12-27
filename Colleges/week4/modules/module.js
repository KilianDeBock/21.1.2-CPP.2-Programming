const log = (msg) => {
  console.log(msg);
};

// exports.log = (msg) => log(msg);
// exports.text = 'text';
exports.module = {
  log: log,
  text: 'text'
};