(() => {
  const app = {
    initialize() {
      this.cacheElements();
      this.getDataFromEmojisFile();
    },
    cacheElements() {
      this.$emojiBox = document.querySelector('.emojis-list');
      this.$tooltip = document.querySelector('.tooltip');
    },
    getDataFromEmojisFile() {
      loadJsonByPromise('data/emojis.json')
        .then(data => this.getHTMLForEmojis(data))
        .catch(err => console.log(err));
    },
    updateEmojisUI(html) {
      this.$emojiBox.innerHTML = html;
    },
    getHTMLForEmojis(data) {
      const html = data.map(emoji => this.getHTMLForEmoji(emoji)).join('');
      this.updateEmojisUI(html);
    },
    getHTMLForEmoji(emoji) {
      const keywords = [...new Set(emoji.keywords.split(' '))];
      const tags = keywords.join(', ');
      return `
            <li>
                <p class="emoji">${emoji.symbol}</p>
                <h2>${emoji.title}</h2>
                <p class="details">Tags: ${tags}</p>
            </li>`;
    },
    generateUI() {
      loadJsonByPromise('data/emojis.json').then(result => {
        this.$emojiBox.innerHTML =
          this.$tooltip.innerHTML = result.map(emoji => {
            const keywords = [...new Set(emoji.keywords.split(' '))];
            const tags = keywords.join(', ');
            return `
            <li>
                <p class="emoji">${emoji.symbol}</p>
                <h2>${emoji.title}</h2>
                <p class="details">Tags: ${tags}</p>
            </li>`;
          }).join('');
      });
    }
  };
  app.initialize();
})();
