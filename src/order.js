module.exports = function() {

    function sendOrderRequest(form) {
        return new Promise(function(resolve, reject) {
            let xhr = new XMLHttpRequest();

            function loadHandler() {
                // Если код ответа сервера не 200, то это ошибка
                if (xhr.status == 200) {
                    let data = xhr.response;

                    resolve(data);
                } else {
                    reject();
                }
            }

            let orderObj = {};

            for (let i = 0; i < form.elements.length; i++) {
                let name = form.elements[i].dataset.name;

                if (!name) continue;

                let elem = form.elements[i];

                if ((elem.type == 'radio') && (!elem.checked)) continue;
                if ((elem.type == 'checkbox') && (!elem.checked)) continue;
                orderObj[name] = elem.value;
            }

            xhr.addEventListener('load', loadHandler);
            xhr.responseType = 'json';
            xhr.open('POST', '/form-handler.php');
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify(orderObj));
        })
    }
    let btn = document.querySelector('#orderRequest'),
        form = document.forms['orderForm'];

    function showRequestStatus(data) {
        console.log(data);
        var popup = data.status ? '#success' : '#error';

        $.fancybox.open([
            { href: popup }
        ], {
            type: 'inline',
            maxWidth: 250,
            fitToView: false,
            padding: 0,
            closeBtn: false,
            helpers : {
                overlay : {
                    css : {
                        'background' : 'rgba(47, 50, 52, 0.92)'
                    }
                }
            }
        });
    }

    btn.addEventListener('click', e => {
        e.preventDefault();
        sendOrderRequest(form)
            .then(data => showRequestStatus(data))
            .catch(() => showRequestStatus({ status: false }));
    });

    var elems = document.querySelectorAll('.statusPopup__close');

    for (let elem of elems) {
        elem.addEventListener('click', e => {
            form.reset();
            e.preventDefault();
            $.fancybox.close();
        });
    }
}