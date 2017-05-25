module.exports = function() {
    var
        sections = document.querySelectorAll('.section'),
        display = document.querySelector('.maincontent'),
        screen = 0,
        inscroll = false;

    sections[0].classList.add('active');


    function scrollToSection(sectionEq) {
        var position = 0;

        if (!inscroll) {
            inscroll = true;
            screen = sectionEq;

            position = (sectionEq * -100) + '%';
            for (let elem of sections) {
                elem.classList.remove('active');
            };

            sections[sectionEq].classList.add('active');
            display.style.transform = `translate3d(0, ${position}, 0)`;

            setTimeout(() => {
                inscroll = false;
                let elems = document.querySelectorAll('.fixedMenu__item');
                for (let elem of elems) {
                    elem.classList.remove('active');
                };
                elems[sectionEq].classList.add('active');
            }, 1300)
        }
    }

    document.querySelector('.wrapper')
        .addEventListener('wheel', e => {

           var activeSection = 0;
            for (var i = 0; i < sections.length; i++) {
                if (sections[i].classList.contains('active')) {
                    activeSection = i;
                    break;
                }
            }

            if (!inscroll) {

                if (e.deltaY > 0) { //скроллим вниз
                    if (activeSection + 1 < sections.length) {
                        screen = activeSection + 1;
                    }
                }

                if (e.deltaY < 0) { //спроллим вверх
                    if (activeSection > 0) {
                        screen = activeSection - 1;
                    }
                }

                scrollToSection(screen);
            }
        });

    document.querySelector('.downArrow')
        .addEventListener('click', e => {
            e.preventDefault();
            scrollToSection(1);
        });

    var elems = document.querySelectorAll('.nav__link, .fixedMenu__link, .burgersSlider__buy, .orderLink');
    for (let elem of elems) {
        elem.addEventListener('click', e => {
            e.preventDefault();
            scrollToSection(parseInt(e.currentTarget.getAttribute('href')));
        });
    }
}
