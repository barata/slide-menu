/*
	This code was written by Flávio Roberto Santos (flavio.barata@gmail.com)
	Use and modify according to your needs, but please keep this credits on it.
*/

var menu = menu || {};

$(function() {
	var ns = menu;

	ns.SlideMenu = function(rootElement, params) {
		if (!params) {
			params = {};
		}

		var m = this;
		if (params.floating) $(params.container).css('position', 'absolute');
		m.width = $(params.container).width();
		m.$root = $(rootElement);
		m.$listItems = m.$root.find('li');
		m.$listItems.has('ul').prepend('<span class="rarrow">&rsaquo;</span>');
		$('<li class="back"></li>').prependTo(m.$root.find('ul'));
		m.$back = m.$root.find("li.back");
		m.$trigger = $(params.trigger);
		m.$trigger.on('click', params, function(e) {
			$(e.data.container).slideToggle('slow');
			e.preventDefault();
		});
		m.$back.click(function(e) {
			m.back(e);
		});
		m.$listItems.click(function(e) {
			m.next(e);
		});
		m.$root.find('a').filter(params.clickAndHide).click(function() {
			$(params.container).slideUp('fast');
		});
		m.$root.find('ul').hide();
	};

	ns.SlideMenu.prototype = {
		back : function(event) {
			var m = this;
			m.$root.animate({left:'+='+m.width+'px'}, 'slow');
			event.stopPropagation();
		},
		next : function(event) {
			var m = this;
			var $tgt = $(event.currentTarget);
			if ($tgt.has('ul').is('li')) {
				var backText = $tgt.clone().children().remove().end().text();
				$tgt.children('ul:first').children('li:first').html('<span class="larrow">&lsaquo;</span>' + backText);

				$tgt.siblings().children('ul').hide();
				$tgt.children('ul:first').show();

				m.$root.animate({left:'-='+m.width+'px'}, 'slow');
			}
			event.stopPropagation();
		}
	};
});
