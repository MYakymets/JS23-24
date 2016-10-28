define(
  "model",
  [],
  function () {

    return {
      Model: function(data) {
        var self = this;
        self.data = data;

        self.addItem = function (item) {
          if (item.length === 0) {
            return;
          }
          self.data.push(item);
          return self.data;
        };

        self.removeItem = function (item) {
          var index = parseInt(item) - 1;
          if (index === -1) {
            return;
          }
          self.data.splice(index, 1);
          return self.data;
        };

        self.chgItem = function (item, newDataItem) {
          var index = parseInt(item) - 1;
          if (index === -1) {
            return;
          }
          self.data[index] = newDataItem;
          return self.data;
        }
      }
    }
  }
);



