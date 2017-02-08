//var unlocked;
alto  = document.documentElement.clientHeight;
ancho = document.documentElement.clientWidth;


var nivel;
var bola;
var extremoUp;
var extremoDown;
var extremoLeft;
var extremoRight;

function Comienzo(){};
//juego.state.add('Juego', Juego);
var estados = { preload: preload, create: create, update: update };
var juego= new Phaser.Game(360, 615, Phaser.CANVAS, 'bloque_juego', estados);//Comienzo del juego

   function preload(){
  //juego.stage.scale.forceLandscape = false;
        juego.load.image('bola', 'img/bola.png' );
        juego.load.image('nivel', 'img/nivel1.png' );
        juego.load.image('extremo1', 'img/lateral.png');
        juego.load.image('extremos2', 'img/barra.png');
       juego.stage.backgroundColor = '#2d2d2d';

    }

    function create() {
    //  juego.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    //  juego.scale.setScreenSize(true);
    //   juego.scale.forceOrientation(false, true);
            juego.physics.startSystem(Phaser.Physics.ARCADE);
      //  Our sprite that will act as the drag bounds
    //   juego.physics.arcade.gravity.y =-200;
      nivel = juego.add.sprite(juego.world.centerX, juego.world.centerY, 'nivel');
      nivel.anchor.setTo(0.5, 0.5);
      //  And the sprite we'll drag
      bola = juego.add.sprite(180, 308, 'bola');
      bola.inputEnabled = true;
    //  bola.body.linearDamping = 1;
      bola.anchor.setTo(0.5, 0.5);
        bola.alpha =(0.5);
    // bola.input.enableDrag();
    // bola.input.boundsSprite = nivel;
      extremoUp = juego.add.sprite(180, 268, 'extremos2');
      extremoUp.anchor.setTo(0.5);

      extremoDown = juego.add.sprite(180, 347, 'extremos2');
      extremoDown.anchor.setTo(0.5);

      extremoLeft = juego.add.sprite(2, 308, 'extremo1');
      extremoLeft.anchor.setTo(0.5);
      extremoRight = juego.add.sprite(358, 308, 'extremo1');
      extremoRight.anchor.setTo(0.5);
      extremoRight.angle = 180;

     juego.physics.enable([ bola, extremoUp, extremoDown ], Phaser.Physics.ARCADE);
     bola.body.collideWorldBounds = true;
    // bola.body.bounce.set(1);
      extremoUp.body.immovable = true;
      extremoUp.body.allowGravity = false;
      extremoDown.body.immovable = true;
      extremoDown.body.allowGravity = false;
     window.addEventListener("deviceorientation", handleOrientation, true);
    }

function update() {
  juego.physics.arcade.collide(bola, extremoUp);
    juego.physics.arcade.collide(bola, extremoDown);
}

   function handleOrientation(e) {
   var x = e.gamma; // range [-90,90]
  var y = e.beta;  // range [-180,180]
    bola.body.velocity.x -= x;
  //alert(e);
   bola.body.velocity.y -= y;
};

if('addEventListener' in document) {
  document.addEventListener('deviceready', function(){
    Comienzo();
  },false);
}
