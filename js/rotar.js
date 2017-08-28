$("#menu a").click(function(event){
	if($(this).next('')){
		$(this).children('').toggleClass('fa-angle-up fa-angle-down');
}
});

