$(".arrow-slider").each(function(i){event.preventDefault();var e=$(this),t=e.find(".img-block .item"),r=(e.find(".text-content"),e.find(".title-block"),e.find(".arrow-block")),n=r.find(".point-line");t.each(function(i){$("<a/>",{"class":"item",html:'<span class="point" ></span>',href:"#image-"+i}).on("click.arrow-slider.point",function(i){console.log("click.arrow-slider.point");var e=$(this).index();n.find(".item").removeClass("active"),t.fadeOut("fast").removeClass("active"),$(this).addClass("active"),t.eq(e).fadeIn("fast").addClass("active")}).appendTo(n)}),r.on("click.arrow-slider.right",".btn-arrow.right",function(i){var e=n.find(".item"),t=e.filter(".active").eq(0).index(),r=e.eq(t).next(".item");r.size()?r.trigger("click"):e.eq(0).trigger("click")}),r.on("click.arrow-slider.left",".btn-arrow.left",function(i){var e=n.find(".item"),t=e.filter(".active").eq(0).index(),r=e.eq(t).prev(".item");r.size()?r.trigger("click"):e.eq(-1).trigger("click")}),e.hasClass("with-timer")&&e.data("fecss-timer",setInterval(function(){e.is(":hover")||r.find(".btn-arrow.right").trigger("click")},3e3)),n.find(".item.active").size()||n.find(".item").eq(0).trigger("click")});
$(document.body).on("click",".can-close .close-btn",function(c){c.preventDefault(),$(this).closest(".can-close").removeClass("active")});
$(function(){var e="noname-browser",r=navigator.userAgent.toLowerCase();-1!=r.indexOf("msie")&&(e="msie"),-1!=r.indexOf("konqueror")&&(e="konqueror"),-1!=r.indexOf("firefox")&&(e="firefox"),-1!=r.indexOf("safari")&&(e="safari"),-1!=r.indexOf("chrome")&&(e="chrome"),-1!=r.indexOf("chromium")&&(e="chromium"),-1!=r.indexOf("opera")&&(e="opera"),-1!=r.indexOf("yabrowser")&&(e="yabrowser"),$("body.fecss").eq(0).addClass(e)});
$(".fecss-jscart").each(function(){var t=$(this),a=new jsCart;t.on("rebuild",function(r){t.find(".jscart-item").each(function(r){var e=$(this),c=e.attr("data-jscart-product"),s=e.attr("data-jscart-taste"),n=a.getItem(c,s);e.find("input.jscart-item-amount").attr("value",parseInt(n.amount)),e.find("div.jscart-item-amount, span.jscart-item-amount, a.jscart-item-amount").html(parseInt(n.amount));var o=a.calculate();t.attr("data-jscart-sum",o.sum).find(".jscart-sum").html(o.sum),t.find(".jscart-product").html(o.product),t.find(".jscart-amount").html(o.amount)})}),t.trigger("rebuild"),t.on("clear",function(r){a.clear(),t.trigger("rebuild")}),t.on("create-order",function(r){a.saveCart(function(r,e){$.getJSON("/json/_fecss-jscart/create-order.json",function(r){var e=r;a.saveOrder(e),a.clear(),t.trigger("rebuild")})})}),t.find(".jscart-item .jscart-add-btn").on("click.jscart",function(r){r.preventDefault();var e=$(this),c=e.attr("data-jscart-product"),s=e.attr("data-jscart-taste"),n=e.attr("data-jscart-cost"),o=e.attr("data-jscart-amount");(""==c||"underfined"==typeof c||null==c)&&(c=e.closest(".jscart-item").attr("data-jscart-product")),(""==s||"underfined"==typeof s||null==s)&&(s=e.closest(".jscart-item").attr("data-jscart-taste")),(""==n||"underfined"==typeof n||null==n)&&(n=e.closest(".jscart-item").attr("data-jscart-cost")),(""==o||"underfined"==typeof o||null==o||0==o)&&(o=e.closest(".jscart-item").attr("data-jscart-amount")),a.add(c,s,n,parseInt(o)),console.log("product "+c+" added to cart"),t.trigger("rebuild")}),t.find(".jscart-item .jscart-remove-btn").on("click.jscart",function(r){r.preventDefault();var e=$(this),c=e.attr("data-jscart-product"),s=e.attr("data-jscart-taste"),n=e.attr("data-jscart-cost"),o=e.attr("data-jscart-amount");(""==c||"underfined"==typeof c||null==c)&&(c=e.closest(".jscart-item").attr("data-jscart-product")),(""==s||"underfined"==typeof s||null==s)&&(s=e.closest(".jscart-item").attr("data-jscart-taste")),(""==n||"underfined"==typeof n||null==n)&&(n=e.closest(".jscart-item").attr("data-jscart-cost")),(""==o||"underfined"==typeof o||null==o||0==o)&&(o=e.closest(".jscart-item").attr("data-jscart-amount")),a.remove(c,s,parseInt(o)),console.log("product "+c+" removed from cart"),t.trigger("rebuild")}),t.find(".jscart-clear-btn").on("click.jscart",function(a){a.preventDefault(),t.trigger("clear")}),t.find(".jscart-create-order").on("click.jscart",function(a){a.preventDefault(),t.trigger("create-order")})});
$(document.ready).on("click",".go-to-top",function(o){o.preventDefault(),$("body").jqfeScrollTo({diff:0,speed:777})});
$(".line-gallery").each(function(e){event.preventDefault();var i=$(this);i.on("click.line-gallery.right",".btn-arrow.right",function(e){var t=i.find(".img-block .item"),n=t.filter(":visible");n.size()>1?(n.eq(0).hide().insertAfter(t.eq(-1)),n.eq(-1).next(".item").fadeIn("fast")):(n.eq(0).hide().insertAfter(t.eq(-1)),i.find(".img-block .item").eq(0).fadeIn("fast"))}),i.on("click.line-gallery.left",".btn-arrow.left",function(e){var t=i.find(".img-block .item"),n=t.filter(":visible");n.size()>1?(n.eq(-1).hide(),t.eq(-1).insertBefore(n.eq(0)).fadeIn("fast")):(n.eq(0).hide(),i.find(".img-block .item").eq(-1).insertBefore(i.find(".img-block .item").eq(0)).fadeIn("fast"))}),i.hasClass("with-timer")&&i.data("fecss-timer",setInterval(function(){i.is(":hover")||i.find(".btn-arrow.right").trigger("click")},3e3))});
$(".page-loader .close-loader").on("click",function(e){e.preventDefault(),$(".page-loader").removeClass("active")}),$(window).load(function(e){$(".page-loader").removeClass("active")});
$(".scrollto").on("click",function(e){e.preventDefault(),$($(this).attr("href")).eq(0).jqfeScrollTo({diff:0,speed:777})});