jQuery(document).ready(function($) {
	$(".btn").click(function(event) {
		if ( $(".tagname").val()!="" && $(".text").val()!="") {
			$(".block").html("<"+$(".tagname").val()+" class = 'newitem' >"+$(".text").val()+"</"+$(".tagname").val()+">")
			let bgcolor =  $(".bgcolor").val()
			let fcolor = $(".color").val()
			$(".newitem").css({
				backgroundColor: bgcolor,
				color: fcolor
			});
		} else {
			alert("Write Tag Name and Text")
		}
		

	});
});