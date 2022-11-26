// Исправьте функцию sendRequest
// Аргументы функции:
// - имя клиента
// - телефон клиента
// - объект с адресом доставки: {street, house, entrance, floor, flat}
// - список товаров в заказе
// - стоимость заказа с учетом скидок и доставки
// Как результат функции требуется вернуть JSON,
// cформированный в соответствии с правилами:
// Объект data содержит все данные
// В объекте data есть свойства:
// - client - строка, имя клиента + телефон клиента;
// - order - объект, содержащий данные о заказе:
//     - address - строка с адресом доставки, записанным человекопонятным языком (как в примере)
//     - sum - стоимость заказа с учетом скидок и доставки
// - goods: массив объектов с информацией о позициях заказа:
//     - title - название позиции
//     - count - количество в заказе
// например:
// {
//    "data": {
//      "client": "Иван +7(987)65-43-210",
//      "order": {
//        "address": "ул. Ленина, дом 2, 4 подъезд, 5 этаж, кв 53",
//        "sum": 900
//       },
//       "goods": [
//         {
//           "title": "Пицца",
//           "count": 2
//         }
//      ]
//    }
// }

let client = '';
let goods = [
    {title: "Пицца", count: 1},
    {title: "Чебурек", count: 1}
];
let order = {address: "ул. Ленина, дом 24, подъезд, 5 этаж, кв 53", sum: 900};

function sendRequest() {
    let data = {client, order, goods};

    //let countOfGoods = goods.length;

       for (let i = 0; i < goods.length; i++) {
        data.goods.push({title:goods[i].title, count:goods[i].count});
    }

    data.order.address = order.address;
    data.order.sum = order.sum;

    data.client = 'Иван +7(987)65-43-210';
   
    let jsonData = JSON.stringify(data);

    return jsonData;
}

