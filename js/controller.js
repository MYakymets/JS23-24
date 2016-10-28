define(
  "controller",
  ['model', 'view', 'jquery'],
  function (model, view, $) {

    return {
      Controller: function (model, view) {

        var self = this;
        view.elements.addBtn.on('click', addItem);
        view.elements.listContainer.on('click', '.item-delete', removeItem);
        view.elements.listContainer.on('click', '.item-change', chgItem);

        function addItem() {
          var newItem = view.elements.input.val();
          model.addItem(newItem);
          view.renderList(model.data);
          view.elements.input.val('');
        }

        function removeItem() {
          var itemIndex = this.parentNode.querySelector('span').innerHTML;
          model.removeItem(itemIndex);
          view.renderList(model.data);
        }

        function chgItem() {
          view.renderList(model.data);
          var itemIndex = this.parentNode.querySelector('span').innerHTML;
          var presentContent = this.parentNode.getElementsByClassName('item-content')[0].innerHTML;
          view.showChngBox(this, presentContent);

          $('.item-chg').on('click', function () {
              var newData = this.parentNode.querySelector('input').value;
              if (newData) {
                model.chgItem(itemIndex, newData);
                view.renderList(model.data);
              };
            });
          $('.item-cncl').on('click', function () {
              view.renderList(model.data);
            });
        }
      }
    }
  }
);
