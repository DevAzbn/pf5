$(document.body).on("click.fecss.can-close.close-btn",".can-close .close-btn",{},function(c){c.preventDefault(),console.log("body trigger:click.fecss.can-close.close-btn"),$(this).closest(".can-close").removeClass("active")});
$(document.body).on("fecss.default",null,{},function(o){console.log("body trigger:fecss.default")}),$(document.body).on("fecss.init",null,{},function(o){console.log("body trigger:fecss.init")}),$(document.body).on("fecss.window.unload",null,{},function(o,n){console.log("body trigger:fecss.window.unload: "+JSON.stringify(n))}),$(document.body).on("fecss.ajax.success",null,{},function(o){console.log("body trigger:fecss.ajax.success")}),$(document.body).on("fecss.keydown",null,{},function(o,n){console.log("body trigger:fecss.keydown: "+JSON.stringify(n))});
$(document.body).on("fecss.modal.show.after",null,{},function(e,s,o){e.preventDefault(),console.log("body trigger:fecss.modal.show.after")}),$(document.body).on("fecss.modal.hide.after",null,{},function(e,s,o){e.preventDefault(),console.log("body trigger:fecss.modal.hide.after")}),$(document.body).on("fecss.active.set",".fecss-modal .white-container",{},function(e,s,o){e.preventDefault(),console.log(".white-container trigger:fecss.active.set")}),$(document.body).on("fecss.active.unset",".fecss-modal .white-container",{},function(e,s,o){e.preventDefault(),console.log(".white-container trigger:fecss.active.unset")}),$(document.body).on("click.fecss.modal.show",".fecss-modal-btn",{},function(e){e.preventDefault(),console.log("body trigger:click.fecss.modal.show");var s=$(this),o=s.attr("href"),a=$(document.body).find(".fecss-modal "+o+".white-container"),t=a.closest(".fecss-modal");if(a.size()){var c=$(document.body).find(".fecss-modal .white-container.active:not(.in-bg)").eq(0);c.size()&&(c.addClass("in-bg"),c.closest(".fecss-modal").addClass("in-bg"),a.data("fecss-modal-prev",c.attr("id"))),t.addClass("active").removeClass("in-bg");var i=t.find(".black-container");i.css({top:$(document).scrollTop()+50+"px"}),a.addClass("active").removeClass("in-bg").trigger("fecss.active.set"),$(document.body).trigger("fecss.modal.show.after",[t,a])}}),$(document.body).on("click.fecss.modal.hide",".fecss-modal .white-container .hide-modal",{},function(e){e.preventDefault(),console.log("body trigger:click.fecss.modal.hide");var s=$(this),o=s.closest(".white-container"),a=s.closest(".fecss-modal");if(o.size()){o.removeClass("active").removeClass("in-bg");var t=$("#"+o.data("fecss-modal-prev"));if(t.size()){var c=t.closest(".fecss-modal");c.hasClass("active")?c.hasClass("in-bg")&&(a.removeClass("active").removeClass("in-bg"),c.removeClass("in-bg")):(a.removeClass("active"),c.addClass("active").removeClass("in-bg")),t.removeClass("in-bg")}else a.removeClass("active");o.data("fecss-modal-prev","").trigger("fecss.active.unset"),$(document.body).trigger("fecss.modal.hide.after",[a,o])}});
$(document.body).on("click.fecss.page-loader.close-loader",".page-loader .close-loader",{},function(e){e.preventDefault(),console.log("body trigger:click.fecss.page-loader.close-loader"),$(".page-loader").removeClass("active")});
$(document.body).on("click.fecss.scrollto",".scrollto",{},function(t){t.preventDefault(),console.log("body trigger:click.fecss.scrollto");var o=$(this),l=$(o.attr("href")).eq(0),e=parseInt(o.attr("data-scrollto-diff"))||0,r=parseInt(o.attr("data-scrollto-speed"))||777;$("html, body").animate({scrollTop:l.offset().top+e},r)});
$(document.body).on("fecss.url-history.get",null,{},function(t,e,n,o){t.preventDefault(),$.get(e,{},function(t){$(n).html($(t).find(n).html()),1==o&&window.history.pushState({target:n},null,e)})}),window.addEventListener("popstate",function(t){$(document.body).trigger("fecss.url-history.get",[window.location.pathname,t.state.target,!1])},!1);
$(document.body).on("fecss.menu-list.item.click",null,{},function(e,t){var i=t,s=i.attr("href"),a=i.attr("data-target");i.hasClass("url-history")&&(s="undefined"!=typeof a&&"undefined"!=a?a:$(".item-block.active").attr("id")),i.closest(".menu-list").find(".item.active").removeClass("active"),i.closest(".item").addClass("active");var c=$(s+".item-block");c.size()&&(c.hasClass("active")||($(".item-block").removeClass("active"),c.addClass("active")))}),$(document.body).on("click.fecss.menu-list.item.a",".menu-list .item a",{},function(e){e.preventDefault(),$(document.body).trigger("fecss.menu-list.item.click",[$(this)]),$(document.body).trigger("fecss.menu-container.hide")});
$(document.body).on("fecss.menu-container.show",null,{},function(n){$(".window-width-xs .menu-container, .window-width-sm .menu-container").addClass("active")}),$(document.body).on("fecss.menu-container.hide",null,{},function(n){$(".window-width-xs .menu-container, .window-width-sm .menu-container").removeClass("active")}),$(document.body).on("click.fecss.menu-container-show",".menu-container-show",{},function(n){n.preventDefault(),$(document.body).trigger("fecss.menu-container.show")}),$(document.body).on("click.fecss.menu-container-hide",".menu-container-hide",{},function(n){n.preventDefault(),$(document.body).trigger("fecss.menu-container.hide")});