!function(){function n(n){return n&&n.__esModule?n.default:n}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},t=e.parcelRequired532;null==t&&((t=function(n){if(n in i)return i[n].exports;if(n in o){var e=o[n];delete o[n];var t={id:n,exports:{}};return i[n]=t,e.call(t.exports,t,t.exports),t.exports}var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(n,e){o[n]=e},e.parcelRequired532=t),t("iE7OH").register(JSON.parse('{"EVgbq":"index.01e6b037.js","4I7J6":"default-movie-img@2x.632a332c.png","i4IEG":"default-movie-img@2x.7db60484.png","8HIIH":"default-movie-img@2x.2bd481c5.png","5UbS1":"catalog.bc6dabe6.css","hBuIx":"library.138aefb6.js"}')),t("9au91"),t("4fcMe"),t("7mS1x"),t("aFQOF");var a,r=t("bpxeT"),c=t("2TvXO"),s=t("7rQOT"),d=t("1ILcr"),l=t("kOiWC"),u=t("7bc64"),v=function(n){return(window.innerWidth<768?(0,l.randomIndex)():(0,l.randomIndex)(3)).map((function(e){return(0,u.movieListMarkup)(n[e])})).join("")},p=t("8quDb"),g=t("4Nugj"),_=(a=n(r)(n(c).mark((function e(){var i;return n(c).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,s.Loading.standard("Loading...",{className:"hero-loading",backgroundColor:"rgba(0,0,0,0.8)",svgColor:"rgb(248, 119, 25)"}),n.next=4,(0,d.fetchTrendingMoviesByWeek)();case 4:i=n.sent.results,g.refs.movieList.innerHTML=v(i),g.refs.movieList.addEventListener("click",m),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log("Error in renderTrendingMoviesByWeek: ".concat(n.t0));case 12:return n.prev=12,s.Loading.remove(),n.finish(12);case 15:case"end":return n.stop()}}),e,null,[[0,9,12,15]])}))),function(){return a.apply(this,arguments)});function m(n){var e=n.target.closest("[data-movie-id]");if(e){var i=e.dataset.movieId;(0,p.openMovieInfoModal)(i)}}_();r=t("bpxeT"),c=t("2TvXO"),s=t("7rQOT"),d=t("1ILcr");var f,b=t("87daI");f=t("aNJCr").getBundleURL("EVgbq")+t("iE7OH").resolve("4I7J6");var h;h=t("aNJCr").getBundleURL("EVgbq")+t("iE7OH").resolve("i4IEG");var w;w=t("aNJCr").getBundleURL("EVgbq")+t("iE7OH").resolve("8HIIH");var x=t("cGvxV"),H=(l=t("kOiWC"),g=t("4Nugj"),function(){var e=n(r)(n(c).mark((function e(){var i,o,t;return n(c).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=(0,l.randomIndex)()[0],n.prev=1,s.Loading.standard("Loading...",{backgroundColor:"rgba(0,0,0,0.8)",svgColor:"rgb(248, 119, 25)"}),n.next=5,(0,d.fetchUpcomingMovies)();case 5:o=n.sent.results,g.refs.upcomingContainer.innerHTML=(e=o[i],a=void 0,r=void 0,c=void 0,u=void 0,v=void 0,p=void 0,_=void 0,m=void 0,H=void 0,L=void 0,E=void 0,y=void 0,I=void 0,r=e.id,c=e.title,u=e.original_title,v=e.vote_average,p=e.vote_count,_=e.popularity,m=e.overview,H=e.genre_ids,L=e.poster_path,E=e.backdrop_path,y=e.release_date,I=(0,b.getGenreNames)(H).join(", "),a=window.innerWidth<768?"https://image.tmdb.org/t/p/w500/".concat(L):"https://image.tmdb.org/t/p/original/".concat(E),L&&E||(window.innerWidth<768&&(a=new URL(f)),window.innerWidth>=768&&window.innerWidth<1280&&(a=new URL(h)),window.innerWidth>=1280&&(a=new URL(w))),'\n    <div class="upcoming__thumb">\n      <img class ="upcoming__image" src="'.concat(a,'" alt="').concat(c||u,'" />\n    </div>\n\n    <div class="upcoming__meta">\n      <h3 class="upcoming__caption">').concat(c||u,'</h3>\n      \n      \n      <div class="upcoming__ctx">\n        <ul class="upcoming__list">\n          <li class="upcoming__item">\n            <div class="upcoming__desc">Release date</div>\n            <div class="upcoming__date">').concat(y.slice(0,4),'</div>\n          </li>\n          <li class="upcoming__item">\n            <div class="upcoming__desc">Vote / Votes</div>\n            <div class="upcoming__value">\n              <span class="tag">\n                ').concat(v.toFixed(1),'\n              </span>\n              &nbsp;/&nbsp;\n              <span class="tag">\n                ').concat(p,'\n              </span>\n            </div>\n          </li>\n        </ul>\n        <ul class="upcoming__list">\n          <li class="upcoming__item">\n            <div class="upcoming__desc">Popularity</div>\n            <div class="upcoming__value">').concat(_.toFixed(1),'</div>\n          </li>\n          <li class="upcoming__item">\n            <div class="upcoming__desc">Genre</div>\n            <div class="upcoming__value">').concat(I,'</div>\n          </li>\n        </ul>\n      </div>\n\n      <div class="upcoming__about">\n        <h3 class="upcoming__subtitle">About</h3>\n        <p class="upcoming__text">').concat(m,'</p>\n      </div>\n\n      <button class="btn btn--primary" data-movie-id="').concat(r,'" data-lable="upcoming" type="button">\n        Add to my library\n      </button>\n    </div>')),t=document.querySelector(".upcoming .btn"),(0,x.initAddToLibraryBtn)(t),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),console.log("upcomingError: ".concat(n.t0));case 14:return n.prev=14,s.Loading.remove(),n.finish(14);case 17:case"end":return n.stop()}var e,a,r,c,u,v,p,_,m,H,L,E,y,I}),e,null,[[1,11,14,17]])})));return function(){return e.apply(this,arguments)}}());H()}();
//# sourceMappingURL=index.01e6b037.js.map