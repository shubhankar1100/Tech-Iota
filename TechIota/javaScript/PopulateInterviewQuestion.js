/*$.getJSON("../json/JavaInterviewQues.json", function(json) {
    console.log(json); // this will show the info it in firebug console
});*/

function data(languageClass){
	
	
	var json = JSON.parse(JavaInterviewQues);
		/*var json = {"items": [
		                 	 {
		                 	   "title": "sample 1",
		                 	   "author": "author 1"
		                 	 },
		                 	 {
		                 	  "title": "sdample 2",
		                 	  "author": "author 2"
		                 	 }
		                 	]};*/
		
		var news = document.getElementsByClassName(languageClass)[0];
		   console.log( "hiiii" +	news);
		var items = data.items;
		for(var i = 0; i < items.length; i++) {
		    var h5 = document.createElement("h5");
		    
		    h5.innerHTML = items[i].title;
		 
		    news.appendChild(h5);
		    var p = document.createElement("p");
		    p.innerHTML = items[i].author;
		    news.appendChild(p);
	}
		
		
	}