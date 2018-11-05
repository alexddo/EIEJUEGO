		var canvas = document.getElementById("canvas");
		var ctx = canvas.getContext("2d");
		ctx.imageSmoothingEnabled = false;
		ctx.imageSmoothingQuality = "high";
		var sceneV = 0;
		var state = false;
		var loopGame;
		var plataforms = [];
		var enemys = [];
		var music = new Audio();


		//Controll variable
		var pause = false;


		//PAUSE FUNCTION
		window.addEventListener('keydown', function (e) {
			var key = e.keyCode;
			if (key === 27 && pause == false){
			    pause = true;
			}else if(key === 27 && pause == true){
				pause = false;
			    frame();
			}
		});


		//Change level
		function changeScene(){
			switch(sceneV){
				case 0: scene0(); // Create object, decorate and plataforms (one time)
				break;
				case 1: //scene0();
				break;
				default: //scene0();
				break;
			}
		}

		//gameOver
		function gameOver(){
			changeScene();
		}

		//FUNCTION DE ESQUELETO
		function collision(){
			//collisionPlayer();
			//collisionPlayerPlataform();
		}

		function draw(){
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			//drawPlataform();
			drawPlayer();
		}

		function iA(){
		}

		function refresh(){
			refreshPlayer();//controll listener
		}

		function frame(){
			if (pause) return; //PAUSE GAME
			refresh();
			collision();
			iA();
			draw();
			//console.log(countFPS()); Call to fps counter
			loopGame = requestAnimationFrame(frame);
		}

		function startStop(){
			if(state == false){
				state = true;
				changeScene();
				frame(); // Refresh movement, colision, gravity (Loop)
			}
		}


		//FPS COUNTER
		window.countFPS = (function () {
  		var lastLoop = (new Date()).getMilliseconds();
  		var count = 1;
  		var fps = 0;

		  return function () {
		    var currentLoop = (new Date()).getMilliseconds();
		    if (lastLoop > currentLoop) {
		      fps = count;
		      count = 1;
		    } else {
		      count += 1;
		    }
		    lastLoop = currentLoop;
		    return fps;
		  };
		}());