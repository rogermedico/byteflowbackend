(function ($, Drupal, once) {
  Drupal.behaviors.bitcoinoperation = {
    attach: function (context, settings) {
      once('edit-field-price-0-value','input#edit-field-price-0-value', context).forEach(function(){

        function fakeAJAXCall() {
          const max = 60000;
          const min = 40000;
          return Math.floor(Math.random() * (max - min)) + min;
        }

        const el = document.getElementById('edit-field-price-0-value');

        setInterval(function () {
          el.value = fakeAJAXCall();
        }, 1000);

      });
    }
  }
})(jQuery, Drupal, once);


