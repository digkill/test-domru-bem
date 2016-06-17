(function(){
	var content = document.getElementById('block-tarif');
	var html = '';
	var data = {
		tarif: [
			{
				tarif: "S",
				internet:  "50 Мбит/с",
				sd:  "88 SD каналов",
				hd:  "15 HD каналов",
				sale:  "600 ₽ в мес",
				price:  "480 ₽ в мес",
				change:  "Выбрать «S»",
				hit: "",
				sales: "600",
				prices: "480"
			},
			{
				tarif: "L",
				internet:  "80 Мбит/с",
				sd:  "102 SD каналов",
				hd:  "31  HD каналов",
				sale:  "785 ₽ в мес",
				price:  "628 ₽ в мес",
				change:  "Выбрать «L»",
				hit: "domru-hit",
				sales: "785",
				prices: "628"
			},
			{
				tarif: "XL",
				internet:  "50 Мбит/с",
				sd:  "111 SD каналов",
				hd:  "52 HD каналов",
				sale:  "895 ₽ в мес",
				price:  "716 ₽ в мес",
				change:  "Выбрать «XL»",
				hit: "",
				sales: "895",
				prices: "716"
			},
			{
				tarif: "XXL",
				internet:  "100 Мбит/с",
				sd:  "111 SD каналов",
				hd:  "52 HD каналов",
				sale:  "1050 ₽ в мес",
				price:  "840 ₽ в мес",
				change:  "Выбрать «XXL»",
				hit: "",
				sales: "1050",
				prices: "840"
			}
		]
	};


	Handlebars.registerHelper('list', function(items, options){
		var out = '<ul>';

		for(var i = 0, length = items.length; i < length; i++){
			out += '<li>' + options.fn(items[i]) + '</li>';
		}

		return out + '</ul>';
	});

	var template = Handlebars.compile(document.getElementById('tarif-template').innerHTML);

	content.innerHTML = template(data);

})();












/*
















var mData = {
		megafonTarif: [	 
			 {
				megafonTarifName: "S",
				megafonTarifCall:  "500 минут",
				megafonTarifInternet:  "1 Гб",
				megafonTarifSms:  "500 SMS",
				megafonTarifSale:  "300 ₽ в мес",
				megafonTarifPrice:  "240 ₽ в мес",
				megafonTarifChange:  "Выбрать «S»"
			},
			{
				megafonTarifName:  "M",
				megafonTarifCall: "500 минут",
				megafonTarifInternet: "1 Гб",
				megafonTarifSms: "500 SMS",
				megafonTarifSale: "300 ₽ в мес",
				megafonTarifPrice: "240 ₽ в мес",
				megafonTarifChange: "Выбрать «M»",
			},
			 {
				"megafonTarifName": [ "L" ],
				"megafonTarifCall": [ "500 минут" ],
				"megafonTarifInternet": [ "1 Гб" ],
				"megafonTarifSms": [ "500 SMS" ],
				"megafonTarifSale": [ "300 ₽ в мес" ],
				"megafonTarifPrice": [ "240 ₽ в мес" ],
				"megafonTarifChange": [ "Выбрать «L»" ],
			},
			 {
				"megafonTarifName": [ "VIP" ],
				"megafonTarifCall": [ "500 минут" ],
				"megafonTarifInternet": [ "1 Гб" ],
				"megafonTarifSms": [ "500 SMS" ],
				"megafonTarifSale": [ "300 ₽ в мес" ],
				"megafonTarifPrice": [ "240 ₽ в мес" ],
				"megafonTarifChange": [ "Выбрать «VIP»" ],
			}
		]
	};



// Получаем шаблон
var templateScript = $('#megafonTarif').html();

// Функция Handlebars.compile принимает шаблон и возвращает новую функцию
var template = Handlebars.compile(templateScript);

// Формируем HTML и вставляем в документ
$(document.body).append(template(mData));

alert('asd');
*/