"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Product =
/*#__PURE__*/
function () {
  function Product(product) {
    var img = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'https://placehold.it/120x100';

    _classCallCheck(this, Product);

    var _product$title = product.title,
        title = _product$title === void 0 ? "Название товара" : _product$title,
        _product$price = product.price,
        price = _product$price === void 0 ? 100 : _product$price,
        id = product.id;
    this.title = title;
    this.img = img;
    this.price = price;
    this.id = id;
  }

  _createClass(Product, [{
    key: "render",
    value: function render() {
      return "<div class=\"product_item\">\n                  <img src=\"".concat(this.img, "\" alt=\"").concat(this.title, "\">\n                  <div class=\"description\">\n                      <h3 class=\"title\">").concat(this.title, "</h3>\n                      <p class=\"price\">").concat(this.price, "</p>\n                      <button class=\"buy_btn\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button>\n                  </div>\n              </div>");
    }
  }]);

  return Product;
}();

var ProductsList =
/*#__PURE__*/
function () {
  function ProductsList() {
    var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.products';

    _classCallCheck(this, ProductsList);

    this.data = [];
    this.products = [];
    this.container = document.querySelector(container);

    this._fetchData();

    this._render();
  }

  _createClass(ProductsList, [{
    key: "init",
    value: function init() {} // 2. Добавьте для ProductsList метод, определяющий суммарную стоимость всех товаров. 

  }, {
    key: "calcSum",
    value: function calcSum() {
      var initialValue = 0;
      return this.products.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.price;
      }, initialValue);
    }
  }, {
    key: "_fetchData",
    value: function _fetchData() {
      this.data = [{
        id: 1,
        title: 'Notebook',
        price: 2000
      }, {
        id: 2,
        title: 'Keyboard',
        price: 200
      }, {
        id: 3,
        title: 'Mouse',
        price: 100
      }, {
        id: 4,
        title: 'Gamepad',
        price: 87
      }, {
        id: 5,
        title: 'Notebook',
        price: 2500
      }, {
        id: 6,
        title: 'Keyboard',
        price: 150
      }, {
        id: 7,
        title: 'Mouse',
        price: 300
      }, {
        id: 8,
        title: 'Gamepad',
        price: 500
      }, {
        id: 9,
        title: 'Notebook',
        price: 3000
      }, {
        id: 10,
        title: 'Keyboard',
        price: 100
      }, {
        id: 11,
        title: 'Mouse',
        price: 190
      }, {
        id: 12,
        title: 'Gamepad',
        price: 56
      }, {
        id: 13,
        title: 'Notebook',
        price: 4000
      }, {
        id: 14,
        title: 'Keyboard',
        price: 1000
      }, {
        id: 15,
        title: 'Mouse',
        price: 700
      }, {
        id: 16,
        title: 'Gamepad',
        price: 1100
      }];
    }
  }, {
    key: "_render",
    value: function _render() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var dataEl = _step.value;
          var product = new Product(dataEl);
          this.products.push(product);
          this.container.insertAdjacentHTML('beforeend', product.render());
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);

  return ProductsList;
}();

var list = new ProductsList(); // выведение результата

alert("Сумма = " + list.calcSum());
/*class Cart {
    constructor() {
        let { title = "Название товара", price = 100, id } = product;
        this.title = title;
        this.img = img;
        this.price = price;
        this.id = id;
    }

    Возможные методы:
    1. Добавление товара - Cart.addItem( $object );
    2. Удаление товара - Cart.removeItem( variant_id [, $link] );
    3. Пересчет корзины - Cart.recalculateOrder( form );
    4. Обновление состава корзины - 'onCart_Update' - возвращает актуальный состав корзины.
*/