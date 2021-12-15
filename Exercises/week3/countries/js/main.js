(() => {
  const app = {
    initialize() {
      this.cacheElements();
      this.getDataFromCountriesAPIEndpoint();
    },
    cacheElements() {
      this.$countriesList = document.querySelector('.countries-list');
    },
    getDataFromCountriesAPIEndpoint() {
      fetch('https://www.gdm.gent/static/data/cases.json')
        .then(data => console.log(data));
    },
    updateCountriesUI() {

    },
    getHTMLForLanguages() {

    }
  };
  app.initialize();
})();