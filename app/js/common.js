
(function() {

    var app = {

        // инициализация, "точка входа"
        initialize : function () {
            app.setUpListeners();
        },

        // подключает прослушку событий
        setUpListeners: function () {
              $('.doit').on('click', app.showModal);                         // клик на "Оформить заказ"
              $('#modalSubmit').on('click', app.checkUserData);              //проверить введенны ли данные пользователя в модальном окне
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



