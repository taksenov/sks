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
        },

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



