;(function(TE, undef){
	TE.add("button",["Button","#"],function(opts,defaults){
		var name= opts[0] || defaults[0]
		,	href= opts[1] || defaults[1];
		return "<a class='btn' href='"+href+"'>"+name+"</a>";
	});
	TE.add("title",["Example"],function(opts,defaults){
		var title= opts[0] || defaults[0];
		return "<h2>"+title+"</h2>";
	});
})(textExpander);
