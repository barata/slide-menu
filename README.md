Slide Mobile Menu
=================

The aim of this project was to study and practice some features provided by the jQuery technology. Since it is my first piece of software in jQuery, you shouldn't expect too much from my code. Don't ask me why, but I decided to implement a navigation menu for mobile devices. It is a sliding menu very similar to the one used in http://m.g1.globo.com ;-) Feel free to use it and provide feedback.

Please refer to [this link](http://htmlpreview.github.com/?http://github.com/barata/slide-menu/blob/master/index.html) for a preview.

Usage
-----

This menu transforms an unordered list (`<ul>`) into a sliding menu. Therefore, the html page must have some code like this:

```
<ul id="ID">
	<li>One<ul>
		<li>Some</li>
		<li>Thing</li>
	</ul></li>
	<li>Two<ul>
		<li>Enjoy</li>
		<li>Your</li>
		<li>Menu</li>
	</ul></li>
</ul>
```

There can be as many subitems as desired. Due to layout issues, the unordered list must be enclosed by a `<div>`.

```
<div id="CONTAINER">
	<ul id="ID">
	...
	</ul>
</div>
```

In order to configure and use this menu, it is necessary to include jQuery and SlideMenu libraries. This can be achieved, for example, with the following code:

```
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
<script type="text/javascript" src="slidemenu-1.0.js"></script>
```

After that, the sliding menu must be instantiated as follows:

```
<script type="text/javascript">
$(function() {
	new menu.SlideMenu(ID, PARAMS);
});
</script>
```

The `PARAMS` parameter is a dictionary containing the following items:

- `container`: The ID of the surrounding the unordered list.
- `clickAndHide`: Links with this class force menu to get hidden after a click.
- `floating`: If `true`, the menu appears on top of page content, instead of sliding it down.
- `trigger`: Determines which page links show the menu. Links with this class trigger the menu.

The sliding menu may be instantiated as follows:

```
new menu.SlideMenu('#ID', {
	container : '#CONTAINER',
	clickAndHide : '.hideonclick',
	floating: false,
	trigger : '.menu'
});
```

A complete functional example may be downloaded from this repository. Please give the creator the right to be credited for the work.

Similar projects
----------------

- http://github.com/aldomatic/FB-Style-Page-Slide-Menu
- http://github.com/tegansnyder/JQuery-Mobile-Slide-Menu