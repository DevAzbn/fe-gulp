$('[data-toggle="tooltip"]').tooltip();
$(".arrow-slider").each(function(i){var e=$(this),t=e.find(".img-block .item"),r=(e.find(".text-content"),e.find(".title-block"),e.find(".arrow-block")),n=r.find(".point-line");t.each(function(i){$("<a/>",{"class":"item",html:'<span class="point" ></span>',href:"#image-"+i}).on("click.arrow-slider.point",function(i){console.log("click.arrow-slider.point");var e=$(this).index();n.find(".item").removeClass("active"),t.fadeOut("fast").removeClass("active"),$(this).addClass("active"),t.eq(e).fadeIn("fast").addClass("active")}).appendTo(n)}),r.on("click.arrow-slider.right",".btn-arrow.right",function(i){var e=n.find(".item"),t=e.filter(".active").eq(0).index(),r=e.eq(t).next(".item");r.size()?r.trigger("click"):e.eq(0).trigger("click")}),r.on("click.arrow-slider.left",".btn-arrow.left",function(i){var e=n.find(".item"),t=e.filter(".active").eq(0).index(),r=e.eq(t).prev(".item");r.size()?r.trigger("click"):e.eq(-1).trigger("click")}),e.hasClass("with-timer")&&e.data("fecss-timer",setInterval(function(){e.is(":hover")||r.find(".btn-arrow.right").trigger("click")},3e3)),n.find(".item.active").size()||n.find(".item").eq(0).trigger("click")});
$(function(){var e="noname-browser",r=navigator.userAgent.toLowerCase();-1!=r.indexOf("msie")&&(e="msie"),-1!=r.indexOf("konqueror")&&(e="konqueror"),-1!=r.indexOf("firefox")&&(e="firefox"),-1!=r.indexOf("safari")&&(e="safari"),-1!=r.indexOf("chrome")&&(e="chrome"),-1!=r.indexOf("chromium")&&(e="chromium"),-1!=r.indexOf("opera")&&(e="opera"),-1!=r.indexOf("yabrowser")&&(e="yabrowser"),$("html").eq(0).addClass(e)});
$(".fecss-jscacher").each(function(){var c=$(this),a=c.attr("data-jscacher-filter")||"default",e=parseInt(c.attr("data-jscacher-ttl"))||6e4;c.attr("data-jscacher-cached",!1);var t=new jsCacher({filter:a,ttl:e});c.on("cacher-clear",function(a){c.attr("data-jscacher-cached",!1),t.clear()}),c.on("cacher-cache",function(e){c.attr("data-jscacher-cached",!1),t.cache(c.html()),c.attr("data-jscacher-cached",!0),console.log('.fecss-jscacher[data-jscacher-filter="'+a+'"] cacher-cache')}),c.on("cacher-load",function(e){var r=t.load();c.html(r.content).attr("data-jscacher-cached",!0),console.log('.fecss-jscacher[data-jscacher-filter="'+a+'"] cacher-load')}),c.on("cacher-check",function(a){var e=t.load();e.need_update?c.trigger("cacher-cache"):c.trigger("cacher-load")}).trigger("cacher-check")});
$(".fecss-jscart").each(function(){var t=$(this),a=t.attr("data-jscart-filter")||"default",r=new jsCart({filter:a});t.on("rebuild",function(a){t.find(".jscart-item").each(function(a){var e=$(this),c=e.attr("data-jscart-product"),s=e.attr("data-jscart-taste"),n=r.getItem(c,s);e.find("input.jscart-item-amount").attr("value",parseInt(n.amount)),e.find("div.jscart-item-amount, span.jscart-item-amount, a.jscart-item-amount").html(parseInt(n.amount));var d=r.calculate();t.attr("data-jscart-sum",d.sum).find(".jscart-sum").html(d.sum),t.find(".jscart-product").html(d.product),t.find(".jscart-amount").html(d.amount)})}),t.trigger("rebuild"),t.on("clear",function(a){r.clear(),t.trigger("rebuild")}),t.on("create-order",function(a){r.saveCart(function(a,e){$.getJSON("/json/_fecss-jscart/create-order.json",function(a){var e=a;r.saveOrder(e),r.clear(),t.trigger("rebuild")})})}),t.find(".jscart-item .jscart-add-btn").on("click.jscart",function(a){a.preventDefault();var e=$(this),c=e.attr("data-jscart-product"),s=e.attr("data-jscart-taste"),n=e.attr("data-jscart-cost"),d=e.attr("data-jscart-amount");(""==c||"underfined"==typeof c||null==c)&&(c=e.closest(".jscart-item").attr("data-jscart-product")),(""==s||"underfined"==typeof s||null==s)&&(s=e.closest(".jscart-item").attr("data-jscart-taste")),(""==n||"underfined"==typeof n||null==n)&&(n=e.closest(".jscart-item").attr("data-jscart-cost")),(""==d||"underfined"==typeof d||null==d||0==d)&&(d=e.closest(".jscart-item").attr("data-jscart-amount")),r.add(c,s,n,parseInt(d)),console.log("product "+c+" added to cart"),t.trigger("rebuild")}),t.find(".jscart-item .jscart-remove-btn").on("click.jscart",function(a){a.preventDefault();var e=$(this),c=e.attr("data-jscart-product"),s=e.attr("data-jscart-taste"),n=e.attr("data-jscart-cost"),d=e.attr("data-jscart-amount");(""==c||"underfined"==typeof c||null==c)&&(c=e.closest(".jscart-item").attr("data-jscart-product")),(""==s||"underfined"==typeof s||null==s)&&(s=e.closest(".jscart-item").attr("data-jscart-taste")),(""==n||"underfined"==typeof n||null==n)&&(n=e.closest(".jscart-item").attr("data-jscart-cost")),(""==d||"underfined"==typeof d||null==d||0==d)&&(d=e.closest(".jscart-item").attr("data-jscart-amount")),r.remove(c,s,parseInt(d)),console.log("product "+c+" removed from cart"),t.trigger("rebuild")}),t.find(".jscart-clear-btn").on("click.jscart",function(a){a.preventDefault(),t.trigger("clear")}),t.find(".jscart-create-order").on("click.jscart",function(a){a.preventDefault(),t.trigger("create-order")})});
$(".fecss-jsviewed").each(function(){var e=$(this),i=e.attr("data-jsviewed-filter")||"default",t=e.html(),r=new jsViewed({filter:i});e.on("rebuild",function(i){e.empty();var n=r.getAll();if(null!=n)for(var a in n){var l=n[a],c=t;for(var d in l)c=c.replace(new RegExp("%"+d+"%","ig"),l[d]);var f=$("<div/>",{html:c});f.appendTo(e)}}),e.trigger("rebuild"),e.on("create-view",{},function(e,t){r.add(t),console.log('.fecss-jsviewed[data-jsviewed-filter="'+i+'"] create-view')}),e.on("clear",function(i){r.clear(),e.trigger("rebuild")}),e.find(".jsviewed-clear-btn").on("click.jsviewed",function(i){i.preventDefault(),e.trigger("clear")}),function(){e.trigger("create-view",[{id:(new Date).getTime(),title:"some test"}])}()});
$(".line-gallery").each(function(e){var i=$(this);i.on("click.line-gallery.right",".btn-arrow.right",function(e){var t=i.find(".img-block .item"),n=t.filter(":visible");n.size()>1?(n.eq(0).hide().insertAfter(t.eq(-1)),n.eq(-1).next(".item").fadeIn("fast")):(n.eq(0).hide().insertAfter(t.eq(-1)),i.find(".img-block .item").eq(0).fadeIn("fast"))}),i.on("click.line-gallery.left",".btn-arrow.left",function(e){var t=i.find(".img-block .item"),n=t.filter(":visible");n.size()>1?(n.eq(-1).hide(),t.eq(-1).insertBefore(n.eq(0)).fadeIn("fast")):(n.eq(0).hide(),i.find(".img-block .item").eq(-1).insertBefore(i.find(".img-block .item").eq(0)).fadeIn("fast"))}),i.hasClass("with-timer")&&i.data("fecss-timer",setInterval(function(){i.is(":hover")||i.find(".btn-arrow.right").trigger("click")},3e3))});
$(window).load(function(a){$(".page-loader").removeClass("active")});
$(".scroll-container").each(function(t){var r,o=$(this),a=$(o.attr("data-target")+" .scroll-element").eq(0),i=a.find(".scroll-overflow").eq(0),e=o.find(".scroll-line"),l=e.find(".scroll");r=$("<div/>",{"class":"scroll-ball"}),r.appendTo(l.empty());var n=0;o.on("init",function(t){t.preventDefault(),console.log(".scroll-container init"),o.hasClass("horizontal")?(n=0,l.width(e.width()*(a.outerWidth(!0)/i.outerWidth(!0))),o.attr("data-ratio-h",i.outerWidth(!0)/e.outerWidth(!0)),l.draggable({axis:"x",containment:"parent",scroll:!1,drag:function(t,r){a.scrollLeft(r.position.left*o.attr("data-ratio-h"))}}),a.trigger("scroll")):o.hasClass("vertical")&&(n=1,l.height(e.height()*(a.outerHeight(!0)/i.outerHeight(!0))),o.attr("data-ratio-v",i.outerHeight(!0)/e.outerHeight(!0)),l.draggable({axis:"y",containment:"parent",scroll:!1,drag:function(t,r){a.scrollTop(r.position.top*o.attr("data-ratio-v"))}}),a.trigger("scroll"))}).trigger("init"),a.on("scroll",function(t){var i=0,s=0;0==n?(i=a.scrollLeft()/o.attr("data-ratio-h"),s=100*i/(e.outerWidth(!0)-l.outerWidth(!0)),l.css({left:i}),r.css({left:s+"%"})):1==n&&(i=a.scrollTop()/o.attr("data-ratio-v"),s=100*i/(e.outerHeight(!0)-l.outerHeight(!0)),l.css({top:i}),r.css({top:s+"%"}))})});
