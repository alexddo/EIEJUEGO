function scene0(){
			//loadImage();
			//clearScene();//Clear New Scene
			//create Player
			player0 = new Player(0, 0, 30, 30, 30, 0.8);
			player1 = new Player(1, 200, 30, 30, 30, 0.8);


			//create plataforms
			/*var plataform0 = new CreatePlataform(canvas.width/10, canvas.height/1.1, canvas.width/20, canvas.width/40);
			var plataform1 = new CreatePlataform(canvas.width/6, canvas.height/1.1, canvas.width/20, canvas.width/60);
			var plataform2 = new CreatePlataform(canvas.width/4, canvas.height/1.1, canvas.width/20, canvas.width/60);
			var plataform3 = new CreatePlataform(0, canvas.height-canvas.height/60, canvas.width, canvas.height/60);
			plataforms.push(plataform0, plataform1, plataform2, plataform3);*/

			//Scene Music
			/*music = new Audio("sound/scene/scene.mp3");
			music.play();*/

		}

		//loadImages
  		function loadImage(){
      		var newImagen = new Image();
        	var images = ["img/player/playerR.png", "img/player/playerL.png", 
        	"img/effect/teleportEnabled.png", "img/effect/teleport.png",
        	"img/player/walk/walkfalse0.png", "img/player/walk/walkfalse1.png", "img/player/walk/walkfalse2.png",
        	"img/player/walk/walktrue0.png", "img/player/walk/walktrue1.png", "img/player/walk/walktrue2.png"];
			images.forEach(function(url) {
		  		newImagen = loadedImagen(url);
			});
	    }

      	function loadedImagen(url){
	        var imagenes = new Image();
	        imagenes.src = url;
	        return imagenes;
      	}

		function clearScene(){
			cancelAnimationFrame(loopJump);
			clearAbility(); //Clear the last Player ability in scene 
			plataforms = new Array();
			enemys = new Array();
			music.pause();
		}
