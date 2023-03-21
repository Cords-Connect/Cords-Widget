# WIDGET FOR SIMILAR CORDS SEARCH

Widget placeable on any site. Collects the user's keywords and description to display services that would be useful.

### HOW TO USE

### Method 1: Custom keywords and description

Place this line of code in your HTML. Then enter custom keywords and description.

```html
<div
	id="widget"
	data-keywords="[Write your sites keywords]"
	data-description="[Write a description]"
></div>
<script src="https://billyhawkes.github.io/widget/dist/widget.js"></script>
```

### Method 2: Site Metadata

Without the keywords and description tags the widget will fall back to the site meta tags for keywords and description.

```html
<div id="widget"></div>
<script src="https://billyhawkes.github.io/widget/dist/widget.js"></script>
```

### Method 3: Wordpress Plugin

Follow instructions in plugin documentation at https://github.com/billyhawkes/cords-wp-plugin
