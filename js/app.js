$(document).ready(function(){

	$links = $(".links")
	$form = $("form")
	$grid = $(".grid")
	$body = $("body")
// ===============================
// MUURI  -  Grid Library //
// If current page has a grid, activate muuri
if ($grid.length > 0) {
	// Configure muuri
	var grid = new Muuri('.grid', {
		dragEnabled: false,
		layout: {
			fillGaps: true,
		}
	});

	// Event bindings
	window.addEventListener('load', fadeInImages);
	grid.on('layoutEnd', centerContent);

	function fadeInImages() {
		grid.refreshItems().layout();
		document.body.classList.add('images-loaded');
	}

	function centerContent(items) {
		$grid.css("margin-left", 0)
		max = getMaxRight(items)
		delta = $body.innerWidth() - max
		$grid.css("margin-left", delta/2)
	}

	function getMaxRight(items){
		max = 0
		for(var i in items){
			if(getRight(items[i]) > max){
				max = getRight(items[i])
			}
		}
		return max
	}

	function getRight(item) {
		return item._element.getBoundingClientRect().right
	}
}

$(".menu-link").on("click", toggleMobileMenu)

function toggleMobileMenu(){
	
	if ($links.css("display") == "flex"){
		$links.css("display", "none")
	} else {
		$links.css("display", "flex")
	}
}

$("#submit").on('click', submitForm)

function submitForm(){
	$form.submit()
}


})