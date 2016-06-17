$(document).ready(function(){

	var mflag='';
	var mtemp='';
	var mindex='';

	var dflag='';
	var dtemp='';
	var dindex='';

	var mprice=0;
	var dprice=0;


	$(".js-m-change").click(function(){
			//Если тариф не выбран
			if (mflag=='' || mtemp=='') {						
				mtemp = $(this, ".js-m-change").data('name');
				$(this, ".js-m-change").text('');
				$(this, ".js-m-change").addClass('js-change');
				mflag=mtemp;
				mindex=$(".js-m-change").index(this);

				$(".js-m-tarif-title").text('Мобильную связь тариф «'+$(this, ".js-m-change").data('tarif')+'»');
				$(".js-m-tarif-price").text($(this, ".js-m-change").data('price')+' ₽');
				$(".js-m-tarif-sale").text('Скидка -'+$(this, ".js-m-change").data('sale')+'%');
				$(".js-m-tarif-summa").text('='+$(this, ".js-m-change").data('summa')+' ₽ в месяц');


				mprice=$(this, ".js-m-change").data('summa');
				if ((mprice && dprice) !=0) {
					$(".js-tarif-itogo").append('Итого =');
					$(".js-tarif-itogo").append(mprice+dprice);
					$(".js-tarif-itogo").append(' ₽ в месяц');
				}else{
					$(".js-tarif-itogo").text('');
				};


			} else{
				//Если выбран тот же тариф который выключаем
				if (mflag==$(this, ".js-m-change").data('name')) {
					$(this, ".js-m-change").text(mflag);
					$(this, ".js-m-change").removeClass('js-change');
					mflag='';

					$(".js-m-tarif-title").text('Мобильная связь тариф не выбран');
					$(".js-m-tarif-price").text('');
					$(".js-m-tarif-sale").text('');
					$(".js-m-tarif-summa").text('');

					mprice=0;
					$(".js-tarif-itogo").text('');

				}
				//Если выбираем тариф при уже выбранном тарифе  
				else{
					$('.js-m-change').eq(mindex).text(mflag);
					$('.js-m-change').eq(mindex).removeClass('js-change');
					mtemp = $(this, ".js-m-change").data('name');
					$(this, ".js-m-change").text('');
					$(this, ".js-m-change").addClass('js-change');
					mflag=mtemp;
					mindex=$(".js-m-change").index(this);

					$(".js-m-tarif-title").text('Мобильную связь тариф «'+$(this, ".js-m-change").data('tarif')+'»');
					$(".js-m-tarif-price").text($(this, ".js-m-change").data('price')+' ₽');
					$(".js-m-tarif-sale").text('Скидка -'+$(this, ".js-m-change").data('sale')+'%');
					$(".js-m-tarif-summa").text('='+$(this, ".js-m-change").data('summa')+' ₽ в месяц');

					
					mprice=$(this, ".js-m-change").data('summa');
					if ((mprice && dprice) !=0) {
						$(".js-tarif-itogo").text('')
						$(".js-tarif-itogo").append('Итого =');
						$(".js-tarif-itogo").append(mprice+dprice);
						$(".js-tarif-itogo").append(' ₽ в месяц');
					}else{
						$(".js-tarif-itogo").text('');
					};

				};
			};

	});

	$(".js-d-change").click(function(){
			//Если тариф не выбран
			if (dflag=='' || dtemp=='') {						
				dtemp = $(this, ".js-d-change").data('name');
				/*$(this, ".js-d-change").text('Выбрано');*/
				$(this, ".js-d-change").text('');
				$(this, ".js-d-change").addClass('js-change');
				dflag=dtemp;
				dindex=$(".js-d-change").index(this);

				$(".js-d-tarif-title").text('Мобильную связь тариф «'+$(this, ".js-d-change").data('tarif')+'»');
				$(".js-d-tarif-price").text($(this, ".js-d-change").data('price')+' ₽');
				$(".js-d-tarif-sale").text('Скидка -'+$(this, ".js-d-change").data('sale')+'%');
				$(".js-d-tarif-summa").text('='+$(this, ".js-d-change").data('summa')+' ₽ в месяц');


				dprice=$(this, ".js-d-change").data('summa');
				if ((mprice && dprice) !=0) {
					$(".js-tarif-itogo").append('Итого =');
					$(".js-tarif-itogo").append(mprice+dprice);
					$(".js-tarif-itogo").append(' ₽ в месяц');
				}else{
					$(".js-tarif-itogo").text('');
				};

			} else{
				//Если выбран тот же тариф который выключаем
				if (dflag==$(this, ".js-d-change").data('name')) {
					$(this, ".js-d-change").text(dflag);
					$(this, ".js-d-change").removeClass('js-change');
					dflag='';

					$(".js-d-tarif-title").text('Интернет и цифравое ТВ не выбрано');
					$(".js-d-tarif-price").text('');
					$(".js-d-tarif-sale").text('');
					$(".js-d-tarif-summa").text('');

					dprice=0;
					$(".js-tarif-itogo").text('');

				}
				//Если выбираем тариф при уже выбранном тарифе  
				else{
					$('.js-d-change').eq(dindex).text(dflag);
					$('.js-d-change').eq(dindex).removeClass('js-change');
					dtemp = $(this, ".js-d-change").data('name');
					/*$(this, ".js-d-change").text('Выбрано');*/
					$(this, ".js-d-change").text('');
					$(this, ".js-d-change").addClass('js-change');
					dflag=dtemp;
					dindex=$(".js-d-change").index(this);

					$(".js-d-tarif-title").text('Мобильную связь тариф «'+$(this, ".js-d-change").data('tarif')+'»');
					$(".js-d-tarif-price").text($(this, ".js-d-change").data('price')+' ₽');
					$(".js-d-tarif-sale").text('Скидка -'+$(this, ".js-d-change").data('sale')+'%');
					$(".js-d-tarif-summa").text('='+$(this, ".js-d-change").data('summa')+' ₽ в месяц');


					
					dprice=$(this, ".js-d-change").data('summa');
					if ((mprice && dprice) !=0) {
						$(".js-tarif-itogo").text('')
						$(".js-tarif-itogo").append('Итого =');
						$(".js-tarif-itogo").append(mprice+dprice);
						$(".js-tarif-itogo").append(' ₽ в месяц');
					}else{
						$(".js-tarif-itogo").text('');

					};

				};
			};

	});




});