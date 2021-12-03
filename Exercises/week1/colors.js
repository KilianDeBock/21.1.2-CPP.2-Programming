const colors = [
  {
    name: 'Dark Blue',
    code: {
      rgba: 'rgb(21,38,72)',
      hsla: 'hsl(220, 55%, 18%, 1)',
      hex: '#152648'
    }
  },
  {
    name: 'Light Green',
    code: {
      rgba: 'rgb(85,255,0)',
      hsla: 'hsla(100, 100%, 50%, 1)',
      hex: '#55ff00'
    }
  },
  {
    name: 'Red',
    code: {
      rgba: 'rgb(255,0,0)',
      hsla: 'hsl(0, 100%, 50%, 1)',
      hex: '#ff0000'
    }
  },
];

function getInfo(colors) {
  return colors.map(color => {
    return `Name: ${color.name}\n${'-'.repeat(20)}\nRGBA: ${color.code.rgba}\nHSLA: ${color.code.hsla}\nHAX: ${color.code.hex}\n${'='.repeat(20)}\n`;
  }).join('');
}

console.log(getInfo(colors));