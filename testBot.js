var traverse = require("traverse");

function init(twimod){
  twimod.eventHandler.registerEvent("loggedOn", function(){
    twimod.bot.setPersonaState(twimod.steam.EPersonaState.Online);
    traverse(twimod.commands).nodes().forEach(function(v,k){
      if( k < 1 ) return;
      twimod.L.info("Testing command " + k);
      try {
        v(twimod.messageFactory(twimod.bot.steamID, "command"));
      }
      catch(e){
        L.error("Command " + k + " hit an error");
        L.error(e.stack.toString());
        errors++;
      }
    });
  });
}

module.exports=init;
