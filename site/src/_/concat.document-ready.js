$('[data-toggle="tooltip"]').tooltip();
$(".arrow-slider").each(function(e){var t=$(this),i=t.find(".img-block .item"),r=(t.find(".text-content"),t.find(".title-block"),t.find(".arrow-block")),n=r.find(".point-line");t.on("change-size",function(e){e.preventDefault();var i;screenJS.isXS()?i=parseInt(t.attr("data-block-height-xs")||210):screenJS.isSM()?i=parseInt(t.attr("data-block-height-sm")||360):screenJS.isMD()?i=parseInt(t.attr("data-block-height-md")||480):screenJS.isLG()&&(i=parseInt(t.attr("data-block-height-lg")||640)),t.css({height:i+"px"})}),t.on("init",function(e){e.preventDefault(),console.log(".arrow-slider init"),n.empty(),i.each(function(e){$("<a/>",{"class":"item",html:'<span class="point" ></span>',href:"#image-"+e}).attr("data-item-index",e).on("click.fecss.arrow-slider.point",function(e){e.preventDefault(),console.log("click.fecss.arrow-slider.point");var t=$(this).index();n.find(".item").removeClass("active"),i.fadeOut("fast").removeClass("active"),$(this).addClass("active"),i.eq(t).fadeIn("fast").addClass("active")}).appendTo(n)}),t.hasClass("with-timer")&&t.data("fecss-timer",setInterval(function(){t.is(":hover")||r.find(".btn-arrow.right").trigger("click")},3e3)),n.find(".item.active").length||n.find(".item").eq(0).trigger("click")}).trigger("init"),t.on("click.fecss.arrow-slider.btn-arrow",".btn-arrow.right",function(e){e.preventDefault();var t=n.find(".item"),i=t.filter(".active").eq(0).index(),r=t.eq(i).next(".item");r.length?r.trigger("click"):t.eq(0).trigger("click")}),t.on("click.fecss.arrow-slider.btn-arrow",".btn-arrow.left",function(e){e.preventDefault();var t=n.find(".item"),i=t.filter(".active").eq(0).index(),r=t.eq(i).prev(".item");r.length?r.trigger("click"):t.eq(-1).trigger("click")})});
$(document.body).on("click.fecss.can-close.close-btn",".can-close .close-btn",{},function(c){c.preventDefault(),console.log("body trigger:click.fecss.can-close.close-btn"),$(this).closest(".can-close").removeClass("active")});
$(function(){var e="noname-browser",o=navigator.userAgent.toLowerCase();o.indexOf("msie")!=-1&&(e="msie"),o.indexOf("trident")!=-1&&(e="msie"),o.indexOf("konqueror")!=-1&&(e="konqueror"),o.indexOf("firefox")!=-1&&(e="firefox"),o.indexOf("safari")!=-1&&(e="safari"),o.indexOf("chrome")!=-1&&(e="chrome"),o.indexOf("chromium")!=-1&&(e="chromium"),o.indexOf("opera")!=-1&&(e="opera"),o.indexOf("yabrowser")!=-1&&(e="yabrowser"),$("html").eq(0).addClass(e)}),$(function(){$(document.body).on("keydown",function(e){e.stopPropagation(),$(document.body).trigger("fecss.keydown",[{alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,meta:e.metaKey,key:e.which,liter:String.fromCharCode(e.which)}])})}),$(function(){moment.locale(window.navigator.userLanguage||window.navigator.language)});
$(document.body).on("click.fecss.fecss-collapse.collapser",".fecss-collapse .collapser",{},function(s){s.preventDefault(),console.log("body trigger:click.fecss.fecss-collapse.collapser");var c=$(this),e=c.closest(".fecss-collapse");e.toggleClass("active")});
$(document.body).on("click.fecss.imgresizer",".fecss-imgresizer",{},function(e){e.preventDefault(),console.log("body trigger:click.fecss.imgresizer");var t=$(this),i=parseInt(t.attr("data-max-width"))||1e3,a=parseInt(t.attr("data-max-height"))||1e3;t.jqfeDropImgOptimizer3({max_width:i,max_height:a,multiple:"multiple",callback:function(e){console.log(e.file),$(document.body).append('<img src="'+e.dataURL+'" title="'+e.file.name+'" />')}})});
$(".fecss-jscart").each(function(){var t=$(this),a=t.attr("data-jscart-filter")||"default",r=new jsCart({filter:a});t.on("rebuild",function(a){t.find(".jscart-item").each(function(a){var e=$(this),c=e.attr("data-jscart-product"),s=e.attr("data-jscart-taste"),n=r.getItem(c,s);e.find("input.jscart-item-amount").attr("value",parseInt(n.amount)),e.find("div.jscart-item-amount, span.jscart-item-amount, a.jscart-item-amount").html(parseInt(n.amount));var d=r.calculate();t.attr("data-jscart-sum",d.sum).find(".jscart-sum").html(d.sum),t.find(".jscart-product").html(d.product),t.find(".jscart-amount").html(d.amount)})}),t.trigger("rebuild"),t.on("clear",function(a){r.clear(),t.trigger("rebuild")}),t.on("create-order",function(a){r.saveCart(function(a,e){$.getJSON("/json/_fecss-jscart/create-order.json",function(a){var e=a;r.saveOrder(e),r.clear(),t.trigger("rebuild")})})}),t.find(".jscart-item .jscart-add-btn").on("click.jscart",function(a){a.preventDefault();var e=$(this),c=e.attr("data-jscart-product"),s=e.attr("data-jscart-taste"),n=e.attr("data-jscart-cost"),d=e.attr("data-jscart-amount");""!=c&&"underfined"!=typeof c&&null!=c||(c=e.closest(".jscart-item").attr("data-jscart-product")),""!=s&&"underfined"!=typeof s&&null!=s||(s=e.closest(".jscart-item").attr("data-jscart-taste")),""!=n&&"underfined"!=typeof n&&null!=n||(n=e.closest(".jscart-item").attr("data-jscart-cost")),""!=d&&"underfined"!=typeof d&&null!=d&&0!=d||(d=e.closest(".jscart-item").attr("data-jscart-amount")),r.add(c,s,n,parseInt(d)),console.log("product "+c+" added to cart"),t.trigger("rebuild")}),t.find(".jscart-item .jscart-remove-btn").on("click.jscart",function(a){a.preventDefault();var e=$(this),c=e.attr("data-jscart-product"),s=e.attr("data-jscart-taste"),n=e.attr("data-jscart-cost"),d=e.attr("data-jscart-amount");""!=c&&"underfined"!=typeof c&&null!=c||(c=e.closest(".jscart-item").attr("data-jscart-product")),""!=s&&"underfined"!=typeof s&&null!=s||(s=e.closest(".jscart-item").attr("data-jscart-taste")),""!=n&&"underfined"!=typeof n&&null!=n||(n=e.closest(".jscart-item").attr("data-jscart-cost")),""!=d&&"underfined"!=typeof d&&null!=d&&0!=d||(d=e.closest(".jscart-item").attr("data-jscart-amount")),r.remove(c,s,parseInt(d)),console.log("product "+c+" removed from cart"),t.trigger("rebuild")}),t.find(".jscart-clear-btn").on("click.jscart",function(a){a.preventDefault(),t.trigger("clear")}),t.find(".jscart-create-order").on("click.jscart",function(a){a.preventDefault(),t.trigger("create-order")})});
$(".fecss-jscacher").each(function(){var c=$(this),a=c.attr("data-jscacher-filter")||"default",e=parseInt(c.attr("data-jscacher-ttl"))||6e4;c.attr("data-jscacher-cached",!1);var t=new jsCacher({filter:a,ttl:e});c.on("cacher-clear",function(a){c.attr("data-jscacher-cached",!1),t.clear()}),c.on("cacher-cache",function(e){c.attr("data-jscacher-cached",!1),t.cache(c.html()),c.attr("data-jscacher-cached",!0),console.log('.fecss-jscacher[data-jscacher-filter="'+a+'"] cacher-cache')}),c.on("cacher-load",function(e){var r=t.load();c.html(r.content).attr("data-jscacher-cached",!0),console.log('.fecss-jscacher[data-jscacher-filter="'+a+'"] cacher-load')}),c.on("cacher-check",function(a){var e=t.load();e.need_update?c.trigger("cacher-cache"):c.trigger("cacher-load")}).trigger("cacher-check")});
$(".fecss-jsviewed").each(function(){var e=$(this),i=e.attr("data-jsviewed-filter")||"default",t=e.html(),r=new jsViewed({filter:i});e.on("rebuild",function(i){e.empty();var n=r.getAll();if(null!=n)for(var a in n){var l=n[a],c=t;for(var d in l)c=c.replace(new RegExp("%"+d+"%","ig"),l[d]);var f=$("<div/>",{html:c});f.appendTo(e)}}),e.trigger("rebuild"),e.on("create-view",{},function(e,t){r.add(t),console.log('.fecss-jsviewed[data-jsviewed-filter="'+i+'"] create-view')}),e.on("clear",function(i){r.clear(),e.trigger("rebuild")}),e.find(".jsviewed-clear-btn").on("click.jsviewed",function(i){i.preventDefault(),e.trigger("clear")}),function(){e.trigger("create-view",[{id:(new Date).getTime(),title:"some test"}])}()});
$(document.body).on("click.fecss.modal.show",".fecss-modal-btn",{},function(e){e.preventDefault(),console.log("body trigger:click.fecss.modal.show");var s=$(this),a=s.attr("href"),o=$(document.body).find(".fecss-modal "+a+".white-container"),t=o.closest(".fecss-modal");if(o.length){var c=$(document.body).find(".fecss-modal .white-container.active:not(.in-bg)").eq(0);c.length&&(c.addClass("in-bg"),c.closest(".fecss-modal").addClass("in-bg"),o.data("fecss-modal-prev",c.attr("id"))),t.addClass("active").removeClass("in-bg");var l=t.find(".black-container");l.css({top:$(document).scrollTop()+50+"px"}),o.addClass("active").removeClass("in-bg").trigger("fecss.active.set"),$(document.body).trigger("fecss.modal.show.after",[t,o])}}),$(document.body).on("click.fecss.modal.hide",".fecss-modal .white-container .hide-modal",{},function(e){e.preventDefault(),console.log("body trigger:click.fecss.modal.hide");var s=$(this),a=s.closest(".white-container"),o=s.closest(".fecss-modal");if(a.length){a.removeClass("active").removeClass("in-bg");var t=$("#"+a.data("fecss-modal-prev"));if(t.length){var c=t.closest(".fecss-modal");c.hasClass("active")?c.hasClass("in-bg")&&(o.removeClass("active").removeClass("in-bg"),c.removeClass("in-bg")):(o.removeClass("active"),c.addClass("active").removeClass("in-bg")),t.removeClass("in-bg")}else o.removeClass("active");a.data("fecss-modal-prev","").trigger("fecss.active.unset"),$(document.body).trigger("fecss.modal.hide.after",[o,a])}});
$(function(){var s=$(document.body),c=s.attr("data-fecss-jssearch")||"";""!=c&&s.trigger("fecss.jssearch",[c,function(s){console.log(s.msg)}])});
$(document.body).on("fecss.nedb.fecss.insert",null,{},function(e,n,t){e.preventDefault(),console.log("body trigger:fecss.nedb.fecss.insert"),t.uid=n,nedb.fecss.insert(t,function(e,n){})}),$(document.body).on("fecss.nedb.visit.insert",null,{},function(e,n){e.preventDefault(),console.log("body trigger:fecss.nedb.visit.insert"),n.__time=(new Date).getTime(),nedb.visit.insert(n,function(e,n){})}),$(document.body).on("fecss.nedb.visit.clear",null,{},function(e){e.preventDefault(),console.log("body trigger:fecss.nedb.visit.clear"),nedb.visit.remove({$where:function(){return this.__time>0}},{multi:!0},function(e,n){console.log("Deleted from visit: "+n)})});
$(document.body).on("click.fecss.go-to-top",".go-to-top",function(o){o.preventDefault(),$("html, body").animate({scrollTop:0},777)});
$(".line-gallery").each(function(e){var i=$(this);i.on("click.line-gallery.right",".btn-arrow.right",function(e){var t=i.find(".img-block .item"),n=t.filter(":visible");n.length>1?(n.eq(0).hide().insertAfter(t.eq(-1)),n.eq(-1).next(".item").fadeIn("fast")):(n.eq(0).hide().insertAfter(t.eq(-1)),i.find(".img-block .item").eq(0).fadeIn("fast"))}),i.on("click.line-gallery.left",".btn-arrow.left",function(e){var t=i.find(".img-block .item"),n=t.filter(":visible");n.length>1?(n.eq(-1).hide(),t.eq(-1).insertBefore(n.eq(0)).fadeIn("fast")):(n.eq(0).hide(),i.find(".img-block .item").eq(-1).insertBefore(i.find(".img-block .item").eq(0)).fadeIn("fast"))}),i.hasClass("with-timer")&&i.data("fecss-timer",setInterval(function(){i.is(":hover")||i.find(".btn-arrow.right").trigger("click")},3e3))});
$(window).on("load",function(e){$(".page-loader").removeClass("active")}),$(document.body).on("click.fecss.page-loader.close-loader",".page-loader .close-loader",{},function(e){e.preventDefault(),console.log("body trigger:click.fecss.page-loader.close-loader"),$(".page-loader").removeClass("active")});
$(function(){var t=Raphael("raphael-cont",700,700),f=t.circle(50,40,10);f.attr("fill","#f00"),f.attr("stroke","#fff"),f.hover(function(){this.animate({fill:"#00f"},300)},function(){this.animate({fill:"#f00"},300)})});
$(".scroll-container").each(function(t){var r,o=$(this),a=$(o.attr("data-target")+" .scroll-element").eq(0),i=a.find(".scroll-overflow").eq(0),e=o.find(".scroll-line"),l=e.find(".scroll");r=$("<div/>",{"class":"scroll-ball"}),r.appendTo(l.empty());var n=0;o.on("init",function(t){t.preventDefault(),console.log(".scroll-container init"),o.hasClass("horizontal")?(n=0,l.width(e.width()*(a.outerWidth(!0)/i.outerWidth(!0))),o.attr("data-ratio-h",i.outerWidth(!0)/e.outerWidth(!0)),l.draggable({axis:"x",containment:"parent",scroll:!1,drag:function(t,r){a.scrollLeft(r.position.left*o.attr("data-ratio-h"))}}),a.trigger("scroll")):o.hasClass("vertical")&&(n=1,l.height(e.height()*(a.outerHeight(!0)/i.outerHeight(!0))),o.attr("data-ratio-v",i.outerHeight(!0)/e.outerHeight(!0)),l.draggable({axis:"y",containment:"parent",scroll:!1,drag:function(t,r){a.scrollTop(r.position.top*o.attr("data-ratio-v"))}}),a.trigger("scroll"))}).trigger("init"),a.on("scroll",function(t){var i=0,s=0;0==n?(i=a.scrollLeft()/o.attr("data-ratio-h"),s=100*i/(e.outerWidth(!0)-l.outerWidth(!0)),l.css({left:i}),r.css({left:s+"%"})):1==n&&(i=a.scrollTop()/o.attr("data-ratio-v"),s=100*i/(e.outerHeight(!0)-l.outerHeight(!0)),l.css({top:i}),r.css({top:s+"%"}))})});
$(document.body).on("click.fecss.scrollto",".scrollto",{},function(t){t.preventDefault(),console.log("body trigger:click.fecss.scrollto");var o=$(this),l=$(o.attr("href")).eq(0),e=parseInt(o.attr("data-scrollto-diff"))||0,r=parseInt(o.attr("data-scrollto-speed"))||777;$("html, body").animate({scrollTop:l.offset().top+e},r)});

$(document.body).on("click.fecss.url-history",".url-history",{},function(t){t.preventDefault();var e=$(this),r=e.attr("href"),o=e.attr("data-target");o&&"undefined"!=typeof o&&"undefined"!=o||(o="title:title, body:body");var d=!0;$(document.body).trigger("fecss.url-history.get",[r,o,d])});
$(document.body).on("click.fecss.rolling-image-btn",".rolling-image-btn",{},function(i){i.preventDefault();var e=$(this),a=e.attr("data-img-id"),t=$(".rolling-image");t.find(".img-item").removeClass("on-top"),t.removeClass("active"),t.find(".img-item").filter(a).addClass("on-top"),t.addClass("active"),$(".rolling-image-btn").prop("disabled","disabled"),setTimeout(function(){t.removeClass("active"),$(".rolling-image-btn").prop("disabled",!1)},6e3)});