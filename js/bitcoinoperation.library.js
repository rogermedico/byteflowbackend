(function ($, Drupal, once) {
  Drupal.behaviors.bitcoinoperation = {
    attach: function (context, settings) {
      once('edit-price-0-value','input#edit-price-0-value', context).forEach(function(){

        async function getBitcoinPrice() {
          const endpoint1 = 'https://www.random.org/integers/?num=1&min=40000&max=60000&col=1&base=10&format=plain';

          return  await fetch(endpoint1, {
            method: 'get',
          })
          .then(response => response.text())
          .then(response => {
            return parseInt(response);
          });
        }

        const el = document.getElementById('edit-price-0-value');

        setInterval(async function () {
          el.value = await getBitcoinPrice();
        }, 1000);

      });
    }
  }
})(jQuery, Drupal, once);


