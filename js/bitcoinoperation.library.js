(function ($, Drupal, once) {
  Drupal.behaviors.bitcoinoperation = {
    attach: function (context, settings) {
      once('edit-price-0-value','input#edit-price-0-value', context).forEach(function(){

        function fakeGetBitcoinPrice() {
          const max = 60000;
          const min = 40000;
          return Math.floor(Math.random() * (max - min)) + min;
        }

        function getBitcoinPrice() {

          const headers = new Headers();
          headers.append('Access-Control-Allow-Origin','*');
          headers.append('Access-Control-Allow-Methods','GET');

          return fetch('http://www.randomnumberapi.com/api/v1.0/random?min=40000&max=60000', {
            method: 'get',
            // mode: 'no-cors',
            headers: headers,
          }).then(response => {
            console.log(response);
            return response[0];
          })
        }

        const el = document.getElementById('edit-price-0-value');

        setInterval(function () {
          el.value = fakeGetBitcoinPrice();
          //el.value = getBitcoinPrice();
        }, 1000);

      });
    }
  }
})(jQuery, Drupal, once);


