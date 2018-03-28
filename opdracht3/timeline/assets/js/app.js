if( document.querySelector
    && document.addEventListener
    && ('classList' in document.body)
    && document.body.getBoundingClientRect()) {

    document.body.classList.add("js-supported");

    var timeline = {
        wrapper: document.querySelector(".timeline"),
        items: document.querySelectorAll(".timeline-item"),
        years: [2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011],
        yearElements: [],
        checkOverlaps: function () {
            var itemObjs = [];

            for(var i = 0; i < this.items.length; i++) {
                var item = this.items[i];

                itemObjs.push({
                    index: i,
                    item: item,
                    start: item.dataset.yearStart - 0,
                    end: item.dataset.yearEnd - 0,
                    type: item.dataset.type
                });
            }

            for(var i = 0; i < itemObjs.length; i++) {
                var itemObj = itemObjs[i];

                for(var x = 0; x < itemObjs.length; x++) {
                    var compareObj = itemObjs[x];

                    if(itemObj.type === compareObj.type && itemObj.index !== compareObj.index) {
                        var collide = itemObj.start > compareObj.end;

                        console.log(collide, compareObj);
                    }
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
                var scrollPos = window.scrollY - this.wrapper.offsetTop + xCenter;

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

            window.addEventListener("scroll", function(ev) {
                _this.checkPosition(ev);
                // _this.checkOverlaps();
            });

            this.addPath();
            this.calcPositions();
            this.checkOverlaps();
        }
    };

    timeline.init();
}