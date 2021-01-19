"use strict";

var products = [{
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

var renderProduct = function renderProduct(product) {
  var img = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'https://placehold.it/120x100';
  var _product$title = product.title,
      title = _product$title === void 0 ? "Название товара" : _product$title,
      _product$price = product.price,
      price = _product$price === void 0 ? 100 : _product$price;
  return "<div class=\"product_item\">\n    <img src=\"".concat(img, "\" alt=\"").concat(title, "\">\n    <div class=\"description\">\n    <h3 class=\"title\">").concat(title, "</h3>\n    <p class=\"price\">").concat(price, "</p>\n    <button class=\"buy_btn\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button>\n    </div>\n    </div>");
};

var render = function render(productsList) {
  var productsElements = productsList.map(function (product) {
    return renderProduct(product);
  }).join('');
  document.querySelector('.products').innerHTML = productsElements;
};

render(products);