// Feature detect queryselector, classlist and eventlistener
if(document.querySelector && document.addEventListener && ('classList' in document.body)) {

    var timeline = {
        wrapper: document.querySelector(".timeline"),
        items: document.querySelectorAll(".timeline-item"),
        years: [2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011],
        addPath: function () {
            var list = '<div class="timeline-path__start">Now</div>';

            for (var i = 0; i < this.years.length; i++) {
                list += '<li class="timeline-path__year" data-year="'+ this.years[i] +'">'+ this.years[i] + '</li>';
                console.log();
            }

            this.wrapper.insertAdjacentHTML("beforeend", '<ul class="timeline-path">' + list + '</ul>');
        },
        init: function () {
            document.body.classList.add("js-supported");
            this.addPath();
        }
    };

    timeline.init();
}