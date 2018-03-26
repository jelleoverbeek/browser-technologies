if( document.querySelector
    && document.addEventListener
    && ('classList' in document.body)
    && document.body.getBoundingClientRect()) {

    document.body.classList.add("js-supported");

    var timeline = {
        wrapper: document.querySelector(".timeline"),
        items: document.querySelectorAll(".timeline-item"),
        years: [2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011],
        calcPositions: function() {
            var yearElements = document.querySelectorAll(".timeline-path__year");

            for(var i = 0; i < yearElements.length; i++) {
                var top = yearElements[i].offsetTop;

                for(var x = 0; x < this.items.length; x++ ) {
                    if(this.items[x].dataset.yearEnd === yearElements[i].dataset.year) {
                        var rect = this.items[x].getBoundingClientRect();
                        this.items[x].style.top = top - (rect.height / 2) + "px";
                    }
                }
            }
        },
        addPath: function () {
            var list = '<div class="timeline-path__start">Now</div>';

            for (var i = 0; i < this.years.length; i++) {
                list += '<li class="timeline-path__year" data-year="'+ this.years[i] +'">'+ this.years[i] + '</li>';
            }

            this.wrapper.insertAdjacentHTML("beforeend", '<ul class="timeline-path">' + list + '</ul>');
        },
        init: function () {
            this.addPath();
            this.calcPositions();
        }
    };

    timeline.init();
}