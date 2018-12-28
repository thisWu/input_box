;(function() {
	$.prototype.contentbox = function(e) {
		var that, defaults, dom;
		that = this;
		defaults = {
			del: ".icon-close",
			val: "",
			callback:false
		};
		dom = $.extend({}, defaults, e);
		del = $(dom.del);
		elm = $(dom.elm);
		that.focus = function() {
			$(dom.elm).focus();
		};
		that.blur = function() {
			elm.blur(function() {
				that.val = $(this).val()
			});
		};
		that.addTag = function() {
			that.val = that.val.replace(/(^\s*)|(\s*$)/g, "")
			if(that.val!=""){
				var html = '<li class="xm-select-label"><span fsw="xm-select"><font fsw="xm-select">' + that.val + '</font><i fsw="xm-select" class="xm-iconfont icon-close"></i></span></li>';
				elm.parent().before(html);
				elm.val("");
				dom.callback(that.val);
				$(function(){
					$('.icon-close').unbind('click').on('click', function(e) {
						var index = $('.icon-close').index(this);
						that.del(index);
					});
				})
			}
			
		};
		that.del = function(index) {
			that.find('li').eq(index).remove();
		};
		that.unbind('click').on('click', function(e) {
			that.focus()
		});
		elm.unbind('keydown').on('keydown', function(e) {
			if(e.which == "13") {
				that.val = $(this).val();
				that.addTag();
			}
		});
		
	}
}())