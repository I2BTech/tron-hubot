// Description:
//   Devuelve el saludo de hola o buen dia
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   @tron hola como estas
//   @tron buen día
//
// Author:
//   jorgeepunan

var holas = [
  "Hola hola %", 
  "Hey %, hola!", 
  "Qué tal %", 
  "Como vas %"
];
var buendia = [
  "Buen día %", 
  "Buen dia para ti también %", 
  "¡ Buenos días % !", 
  "¡Buenos días a todos!"
];
var gifs = [
  "http://media1.giphy.com/media/13E3GEE2zxlhhm/giphy.gif",
  "http://media3.giphy.com/media/frc5xfWMX0Vig/giphy.gif",
  "http://media.giphy.com/media/gBxL0G0DqZd84/giphy.gif",
  "http://media.giphy.com/media/XiMbUa46o1VXq/giphy.gif",
  "http://media.giphy.com/media/dilBP4FslWpm8/giphy.gif",
  "http://media1.giphy.com/media/HHxRwRSrlSBBS/200.gif",
  "http://media.giphy.com/media/XCVm7xxtEolwc/giphy.gif",
  "http://media.giphy.com/media/11rwQLkZilbRxS/giphy.gif",
  "http://media.giphy.com/media/3OYyAv41yxMnS/giphy.gif",
  "http://media.giphy.com/media/RqWlJJUuNCkBq/giphy.gif",
  "http://media.giphy.com/media/5fBH6zvK9bUXN1HKfbW/giphy.gif",
  "http://media.giphy.com/media/NLfI3zZLBp56g/giphy.gif",
  "http://www.blogcdn.com/www.pawnation.com/media/2013/07/good-morning---imgur-1.gif",
  "http://s3-ec.buzzfed.com/static/2013-10/enhanced/webdr06/1/12/anigif_enhanced-buzz-18471-1380645591-3.gif",
  "https://31.media.tumblr.com/4161798ce80b3606a15aab8fc6860115/tumblr_inline_nxu8lxu1d91qzxfm4_500.gif",
  "https://40.media.tumblr.com/12baee8ef8f8c868902d10f041558ce9/tumblr_inline_ns3zlhXI7N1rkr342_540.jpg",
  "http://i.imgur.com/qQ6w4jZ.gif"
]

module.exports = function(robot) {

  robot.respond(/(hola?)/i, function(msg) {

    var hola = msg.random( holas );
    msg.send(hola.replace( "%", msg.message.user.name) );

  });

  robot.respond(/(buen|buenos) (d(i|í)a|d(i|í)as)/i, function(msg) {

    var manana = msg.random( buendia );
    var gifcito = msg.random( gifs );
    msg.send( manana.replace("%", msg.message.user.name) );
    msg.send( gifcito );

  });

};