(function() {

    var app = {

        // инициализация, "точка входа"
        initialize : function () {
            app.setUpListeners();
        },

        // Переменные, заданные как свойства app
        countDownclock : $('.time-block__digits'),    //часы обратного отсчета
        //-------------------------------------

        // подключает прослушку событий
        setUpListeners: function () {
            var _this = this;

            $('.doit').on('click', app.showModal);                         // клик на "Оформить заказ"
            $('#modalSubmit').on('click', app.checkUserData);              //проверить введенны ли данные пользователя в модальном окне
            /* Для того чтоб при загрузке страницы в FireFox
            часы обратного отсчета нормально отображались */
            $(document).ready($.proxy(_this.loadPageInFirefox, _this));
            // -- слайдер к блоку с контактами
            $('.scrollToContacts').on('click', app.scrollToContacts);

            // -- ввод только цифр в поле телефона
            $('#recipient-phone').on('keypress', app.onlyDigitsValidate);
            $('#recipient-phone').on('paste', app.onlyValidatePaste);
            // -- ввод только цифр в поле телефона

            // -- ввод только букв в поле ФИО
            $('#recipient-name').on('keypress', app.onlySymbolsValidate);
            $('#recipient-name').on('paste', app.onlyValidatePaste);
            // -- ввод только букв в поле ФИО

            // -- удалить ошибку при вводе данных в инпуты
            $('form').on('keydown', 'input', app.removeError);

            // скролл окна (показываем/прячем блочок с корзиной)
            $(window).on('scroll', app.scroll);

        },

        // показывает/прячет блок с навигацией
        scroll: function () {
            var top = $(window).scrollTop(),
                cart = $(".nav-block");
            if (top > 160) {
                cart.addClass("cart_fixed");
            } else {
                cart.removeClass("cart_fixed");
            }
        },
        /* ------------------------------------------------ */


        // -- удаление тултипа и красной обводки с инпута при вводе в него данных
        removeError: function () {
            $(this).tooltip('destroy').parents('.form-group').removeClass('has-error');
        },
        // -- удаление тултипа и красной обводки с инпута при вводе в него данных

        // -- ввод только букв в поле ФИО
        onlySymbolsValidate: function (e) {
            var chr = e.charCode,
                doc_w = $(document).width(),
                tooltipPlacement = '';

            if (doc_w < 768) {
                tooltipPlacement = 'bottom';
            } else {
                tooltipPlacement = 'bottom';
            }


            if (e.ctrlKey || e.altKey || e.metaKey) return;
            if (
                (chr < 97 || chr > 122)
                &&
                (chr < 65 || chr > 90)
                &&
                (chr != 45)
                &&
                (chr < 1040 || chr > 1105)
                &&
                (chr != 1025)
                &&
                (chr != 32)
            ) {
                $(this).tooltip({
                        trigger: 'manual',
                        placement: tooltipPlacement,
                        title: 'Разрешено вводить только буквы'
                    }).tooltip('show');
                return false;
            }
        },
        // -- ввод только букв в поле ФИО

        // -- только ручной ввод в поле
        onlyValidatePaste: function () {
            var doc_w = $(document).width(),
                tooltipPlacement = '';

            if (doc_w < 768) {
                tooltipPlacement = 'bottom';
            } else {
                tooltipPlacement = 'bottom';
            }

            $(this).tooltip({
                trigger: 'manual',
                placement: tooltipPlacement,
                title: 'Вводите символы с клавиатуры вручную'
            }).tooltip('show');
            return false;
        },
        // -- только ручной ввод в поле

        // -- проверка на ввод только цифр
        onlyDigitsValidate: function (e) {
            var chr = e.charCode,
                doc_w = $(document).width(),
                tooltipPlacement = '';

            if (doc_w < 768) {
                tooltipPlacement = 'top';
            } else {
                tooltipPlacement = 'top';
            }

            if (e.ctrlKey || e.altKey || e.metaKey || chr === 43) return;
            if (chr < 48 || chr > 57)  {
                $(this).tooltip({
                        trigger: 'manual',
                        placement: tooltipPlacement,
                        title: 'Разрешено вводить только цифры'
                    }).tooltip('show');
                return false;
            }
        },
        // -- проверка на ввод только цифр

        // -- функция скролла к контактам
        scrollToContacts: function (e) {
            e.preventDefault();

            var offset = $('.footer-block').offset().top;

            $('html, body').animate({scrollTop: (offset -0)},800);

        },
        // -- функция скролла к контактам


        //загрузка страницы в броузере firefox
        loadPageInFirefox: function () {
            var _this = this;

            /* Для того чтоб часы обратного отсчета нормально
            отображались в FireFox */
            ua = navigator.userAgent;
            if ( (ua.search(/Firefox/) > -1)) {
                _this.countDownclock.css({
                    'top' : 10
            });
            }
            /* -------------------------------- */
        },

        // показывает корзину
        showModal: function () {
            var modalWindow = $('#orderModal');
            modalWindow.modal('show');
        },
        /* ------------------------------------------------ */

        checkUserData: function () {
            var modalUserName = $('#recipient-name').val(),
                modalUserPhone = $('#recipient-phone').val(),
                modalWindow = $('#orderModal');

            if(
                !(modalUserName.replace(/\s+/g, '').length)
                ||
                !(modalUserPhone.replace(/\s+/g, '').length))
            {
                var result = "<div class=\"alert alert-danger alert-danger__custom\" role=\"alert\">ВВЕДИТЕ ФИО И ТЕЛЕФОН</div>"
                $('#valid').html(result);
	        } else {
	            alert('Данные введены верно теперь их нужно передать на сервер!');

                //сюда нужно воткнуть аякс постинг на сервер


                $('#valid').html('');           // очищаем блок сообщений с сервера и поля
                modalUserName.val('');
                modalUserPhone.val('');
                modalWindow.modal('hide');
	        }
            return false;
        }

    };

    app.initialize();

}());



