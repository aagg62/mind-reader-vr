 window.currentMove= "";
 window.moves = [];
//setglobal Nunjuncls env
var env = new nunjucks.Environment();

var random = Math.random();

 	var videos = ["v1","v2",'v3','v4','v5'];  
    var played = [false,false,false,false,false];
    var youtubeLaps = 0;
    var lapCount = 0 ;
    function checkOpenYoutube(){
      
      if (lapCount > youtubeLaps){
         var d = document.getElementById('second-wrapper');
         d.style.visibility='visible';
         d.style.display='block';
      }
      else {
        lapCount++;
      }
     
    }
  function start(element) {
    element.parentNode.removeChild(element);
    for (var i = 0; i < videos.length; i++) {
      var id = videos[i];
        var v = document.getElementById(id);
        v.play();
        v.pause();
        v.onended = function(e) {};
      };
  	window.game.init();
  };
  
   
	
//Load info from datasets.
window.metadata = {
	datasets:[],
	categories:[],
};
//Group Datasets
var categories =[];
var colores = [];


var cacheImg = [];


cacheImg.map(function(m){
	var img=new Image();
	img.src='images/360-detail/' + m;
});
d3.selectAll('a-assets img')._groups[0].forEach(function(e){ 

	var img=new Image();
	img.src=d3.select(e).attr('src');
});

window.game = {
	init:function(){
		if (window.metadata.datasets.length ==0){
			categories = [];
			
			categories.push({key:2+ ""});
			categories.push({key:3 + ""});
			
			window.game.loadData(categories, function(){});	
		}else {
			window.game.renderLobby();
		}


		var v1 = document.getElementById('v1');
		v1.addEventListener('ended', myHandler, false);
		v1.play();

		var v4 = document.getElementById('v4');
		v4.addEventListener('ended',function(){
        location.href = 'http://www.blogcreacultura.com/cuando-copiar-es-bueno/';
    });

		var v5 = document.getElementById('v5');
		v5.addEventListener('ended',function(){
        location.href = 'http://www.blogcreacultura.com/cuando-copiar-es-bueno/';
    });

		var playLoop = false;
		v1.addEventListener('timeupdate', (e) => {
		    var z = v1.duration - 5
		   	if (v1.currentTime > z && !playLoop){
		   		playLoop = true;
		    	window.game.renderLobby();
		   	}
		});
		function myHandler(e) {
		    v1 = document.getElementById('v1');
		    v1.currentTime = v1.currentTime -5 ; 
		    v1.play();
		}
	},
	loadData:function(categories, cb){
		
		     

		    categories.map(function(d){
		    	d.color = "black";
		    	console.log(d.color, d.key);
		    	d.rows = 0;
		    	d.title = d.key.toUpperCase();
	    		d.destacados = 0;
	    		d.src = "v" + d.key;
		    	
		    });
	   		 env.addGlobal('categories',categories);
	  		 nunjucks.categories = categories;
	  	
		
	    	cb();

	},
	renderLobby : function(){

	  	
		var lobbyEl = document.getElementById('lobby-circle');
		lobbyEl.innerHTML = "";
		var entityEl = document.createElement('a-entity');
		entityEl.setAttribute('do-circle-once-loaded', '');
		entityEl.setAttribute('id', 'lobby-inner');

		lobbyEl.appendChild(entityEl);
		


	},
	reRenderLobby:function(){
		document.getElementById('category-circle').innerHTML = "";
		if (document.getElementById('trip-detail')){
			document.getElementById('trip-detail').innerHTML = "";	
		}
		if (document.getElementById('detail-circle')){
			document.getElementById('detail-circle').innerHTML = "";	
		}
		document.getElementById('detail-circle').innerHTML = "";
		document.getElementById('lobby-inner').setAttribute('visible',true);
		document.getElementById('circle-floor').setAttribute('material', 'src', '');
	},

};


AFRAME.registerComponent('do-rectangle-once-loaded', {
		  init: function () {
		  	this.el.setAttribute('template',{
		  		src:'#rectangle-menu'
		  	});

  			setTimeout(function(){
  				d3.selectAll('a-entity.item').dispatch('category-start');
  			},1000);

  		
		  	
		  }
		});
//Get Detail.
//Setup Lobby
	  	AFRAME.registerComponent('do-circle-once-loaded', {
		  init: function () {

		  	this.el.setAttribute('template',{
		  		src:'#circle-menu'
		  	});
		  	document.getElementById('circle-floor').setAttribute('material', 'src', '');
		  }
		});
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}