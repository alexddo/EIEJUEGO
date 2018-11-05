		//PLAYER VARIABLE
		var pd = true; // player direction false --> left true --> right
		var pc = "black";

		var moveKeysArray = new Array();
		var image = new Image();
		var animationStatus = false;
		var animationTime=0;
		var animationInterval;

		//FUNCTION PLAYER

		function Player(pId, px, py, pws, phs, pv){ // PLataform Constructor
			this.pId = pId;
			this.px = px;
			this.py = py;
			this.pws = pws;
			this.phs = phs;
			this.pv = pv;
		}
		

		Player.prototype.drawPlayer = function() {
			if (pd && moveKeysArray.length == 0) { // image change with player direction
					//image.src = 'img/player/playerR.png';
			}else if (!pd && moveKeysArray.length == 0){
					//image.src = 'img/player/playerL.png';
			}else{
				
			}
			ctx.fillRect(this.px, this.py, this.pws, this.phs);
		}



		Player.prototype.refreshPlayerKey = function() {
			window.addEventListener("keydown", this.saveMoveKey, true);
			window.addEventListener("keyup", this.deleteMoveKey, true);
			this.keysPlayer(); //detect keys in refresh
		}

		Player.prototype.saveMoveKey = function (e){
			if (moveKeysArray.indexOf(e.keyCode) == -1) {
				moveKeysArray.push(e.keyCode);
			}
		}

		Player.prototype.deleteMoveKey = function (e){
			if (moveKeysArray.indexOf(e.keyCode) !== -1) {
				moveKeysArray.splice(moveKeysArray.indexOf(e.keyCode), 1);
			}
		}

		Player.prototype.keysPlayer = function (){
			if (this.pId == 0) {
				if (moveKeysArray != null){
					if (moveKeysArray.indexOf(87) !== -1) {
						this.py = this.py - this.pv;
					}
					if (moveKeysArray.indexOf(83) !== -1) {
						this.py = this.py + this.pv;
					}
					if (moveKeysArray.indexOf(65) !== -1) {
						this.px = this.px - this.pv;
						this.pd = false; //change player Img
						if (animationStatus == false) {
							animatePlayer(65);
						}
					}
					if (moveKeysArray.indexOf(68) !== -1) {
									console.log(this.px);
						this.px = this.px + this.pv;
						this.pd = true;
						/*if (animationStatus == false) {
							this.animatePlayer(68);
						}*/
					}
				}
			}else if(this.pId == 1){
				console.log(moveKeysArray);
				if (moveKeysArray != null){
					if (moveKeysArray.indexOf(38) !== -1) {
						this.py = this.py - this.pv;
					}
					if (moveKeysArray.indexOf(40) !== -1) {
						this.py = this.py + this.pv;
					}
					if (moveKeysArray.indexOf(37) !== -1) {
						this.px = this.px - this.pv;
						this.pd = false; //change player Img
						if (animationStatus == false) {
							animatePlayer(65);
						}
					}
					if (moveKeysArray.indexOf(39) !== -1) {
									console.log(this.px);
						this.px = this.px + this.pv;
						this.pd = true;
						/*if (animationStatus == false) {
							this.animatePlayer(68);
						}*/
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