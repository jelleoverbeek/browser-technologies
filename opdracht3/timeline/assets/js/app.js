if( document.querySelector
    && document.addEventListener
    && ('classList' in document.body)
    && document.body.getBoundingClientRect()
    && window.innerWidth >= 900) {

    document.body.classList.add("js-supported");

    var timeline = {
        wrapper: document.querySelector(".timeline"),
        items: document.querySelectorAll(".timeline-item"),
        years: [2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011],
        yearElements: [],
        checkOverlap: function(item, scrollPos) {
            var rect = item.getBoundingClientRect();

            if(item.dataset.overlapStart && item.dataset.overlapEnd) {

                var overlapStart = this.getTop(item.dataset.overlapStart) + rect.height;
                var overlapEnd = this.getTop(item.dataset.overlapEnd) - rect.height;

                if(scrollPos > overlapEnd && scrollPos < overlapStart) {
                    item.classList.add("colliding");
                } else {
                    item.classList.remove("colliding");
                }
            }
        },
        getBeforeHeight: function (element) {
            var height = window.getComputedStyle(element, ':before').getPropertyValue('height');
            height = height.replace("px", "");
            return height - 0;
        },
        getTop: function (year) {
            var top;

            for(var i = 0; i < this.yearElements.length; i++) {
                var yearElement = this.yearElements[i];

                if(year === yearElement.dataset.year) {
                    top = yearElement.offsetTop + this.getBeforeHeight(yearElement);
                }
            }

            return top
        },
        checkPosition: function (ev) {
            for(var i = 0; i < this.items.length; i++ ) {
                var item = this.items[i];
                var startTop = this.getTop(item.dataset.yearStart);
                var endTop = this.getTop(item.dataset.yearEnd);
                var xCenter = window.innerHeight / 2;
                var scrollPos = window.pageYOffset - this.wrapper.offsetTop + xCenter;

                this.checkOverlap(item, scrollPos);

                if(scrollPos > endTop && scrollPos < startTop) {
                    item.style.position = "fixed";
                    item.style.top = xCenter + "px";
                    item.classList.add("sticky");
                } else {

                    item.style.position = "absolute";
                    item.classList.remove("sticky");

                    if(scrollPos > startTop) {
                        item.style.top = startTop + "px";
                    } else {
                        item.style.top = endTop + "px";
                    }
                }

            }
        },
        calcPositions: function() {
            this.yearElements = document.querySelectorAll(".timeline-path__year");

            for(var i = 0; i < this.yearElements.length; i++) {
                var top = this.getTop(this.yearElements[i].dataset.year);

                for(var x = 0; x < this.items.length; x++ ) {
                    if(this.items[x].dataset.yearEnd === this.yearElements[i].dataset.year) {
                        var rect = this.items[x].getBoundingClientRect();
                        this.items[x].style.top = top + "px";
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
            _this = this;

            window.addEventListener("scroll", function (ev) {
                _this.checkPosition(ev);
            });

            this.addPath();
            this.calcPositions();
        }
    };

    timeline.init();
}