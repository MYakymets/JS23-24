define(
  "view",
  ['model', 'jquery'],
  function (model, $) {

    return {
      View: function (model) {
          var self = this;
          function init() {
            var wrapper = tmpl($('#wrapper-template').html());

            $('body').append(wrapper);
            self.elements = {
              input: $('.item-value'),
              addBtn: $('.item-add'),
              listContainer: $('.item-list')
            };
            self.renderList(model.data);
          };

          self.showChngBox = function(place, oldContent) {
            var askBox = tmpl($('#list-prompt').html(), {data: oldContent});
            var placeInput = parseInt(place.parentNode.querySelector('span').innerHTML) - 1;
            var objToChng = self.elements.listContainer[0].getElementsByTagName('li')[placeInput].getElementsByClassName('item-content')[0];
            objToChng.innerHTML = askBox;
          };

          self.renderList = function (data) {    // рендерим только список
            var list = tmpl($('#list-template').html(), {data: data});
            self.elements.listContainer.html(list);
          };
          init();
        }
    }
  }
);
