function tabExample(a,b){
	var k = a;
	var b = b;
	k.each(function(o) {
		$(this).click(function(){
			b.hide();
			k.removeClass("pitch");
			$(this).addClass("pitch"); 
			b.each(function(p) {
				if( o==p){
					 $(this).slideDown();
				}
			
			})
		});
	});
}


$(document).ready(function(){
	$("#example-1").slideDown();
	tabExample($(".example li"),$(".example-list"));
})

