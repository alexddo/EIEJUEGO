
		//PLAYER VARIABLE
		var px; //position X
		var py;	//position Y
		var pws;  //player width size
		var phs;  //player width size
		var pd = true; // player direction false --> left true --> right
		var pv = 0.8; // player velocity
		var pc = "black";

		var moveKeysArray = new Array();
		var image = new Image();
		var animationStatus = false;
		var animationTime=0;
		var animationInterval;

		//FUNCTION PLAYER

		function CreatePlayer(px, py, pws, phs){ // PLataform Constructor
			this.px = px;
			this.py = py;
			this.pws = pws;
			this.phs = phs;
		}


		function drawPlayer(){
			if (pd && moveKeysArray.length == 0) { // image change with player direction
					//image.src = 'img/player/playerR.png';
			}else if (!pd && moveKeysArray.length == 0){
					//image.src = 'img/player/playerL.png';
			}else{

			}
			ctx.fillRect(px, py, pws, phs);
		}



		function refreshPlayer(){
			window.addEventListener("keydown", saveMoveKey, true);
			window.addEventListener("keyup", deleteMoveKey, true);
			keysPlayer(); //detect keys in refresh
		}

		function saveMoveKey(e){
			if (moveKeysArray.indexOf(e.keyCode) == -1) {
				moveKeysArray.push(e.keyCode);
			}
		}

		function deleteMoveKey(e){
			if (moveKeysArray.indexOf(e.keyCode) !== -1) {
				moveKeysArray.splice(moveKeysArray.indexOf(e.keyCode), 1);
			}
		}

		function keysPlayer(){
			if (moveKeysArray != null){
				if (moveKeysArray.indexOf(87) !== -1) {
					py = py - pv;
				}
				if (moveKeysArray.indexOf(83) !== -1) {
					py = py + pv;
				}
				if (moveKeysArray.indexOf(65) !== -1) {
					px = px - pv;
					pd = false; //change player Img
					if (animationStatus == false) {
						animatePlayer(65);
					}
				}
				if (moveKeysArray.indexOf(68) !== -1) {
					px = px + pv;
					pd = true;
					if (animationStatus == false) {
						animatePlayer(68);
					}
				}
			}
		}

		function animatePlayer(key){
			animationStatus = true;
			animationInterval = setInterval(function(){
				//image.src = 'img/player/walk/walk'+pd+animationTime+'.png';
				animationTime++;

				if (animationTime > 1) {
					animationTime = 0;
				}

				if (moveKeysArray.indexOf(key) == -1) {
					clearInterval(animationInterval);
					animationStatus = false;
				}
			}, 200);
		}
		//END FUNCTION PLAYER