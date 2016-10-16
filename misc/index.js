var deezerPlayer={
         myInit:function(callbackSaccess,callbackError, appId){
         cordova.exec(callbackSaccess, callbackError, "Deezer", "init", [appId])
         },
        myPlayAlbum : function(callbackSaccess,callbackError,albumId){
                cordova.exec(callbackSaccess, callbackError, "Deezer", "playerControl", [{"offset" : 0, "index" : 0, "autoplay" : true , "addToQueue" : false, "album_id" : albumId}, "playAlbum"])
         },
        myPlayPlaylist : function(callbackSaccess, callbackError,playListId){
            cordova.exec(callbackSaccess, callbackError,"Deezer", "playerControl",[{"offset" : 0, "index" : 0, "autoplay" : true, "addToQueue" : false, "playlist_id" : playListId}, "playPlaylist"]);
        },
        myPlayRadio : function(callbackSaccess, callbackError,radioId){
            cordova.exec(callbackSaccess, callbackError,"Deezer", "playerControl",
            [{"offset" : 0, "index" : 0, "autoplay" : true, "addToQueue" : false, "radio_id" : "28"}, "playRadio"]);
        },
        myPause : function(callbackSaccess, callbackError){
             cordova.exec(callbackSaccess, callbackError, "Deezer", "doAction", [{"command" : "pause"}]);
        },
        myPlay : function(callbackSaccess, callbackError){
            cordova.exec(callbackSaccess, callbackError, "Deezer", "doAction", [{"command" : "play"}]);
        },
        myPrev : function(callbackSaccess, callbackError){
            cordova.exec(callbackSaccess, callbackError, "Deezer", "doAction", [{"command" : "prev"}]);
        },
        myNext : function(callbackSaccess, callbackError){
            cordova.exec(callbackSaccess, callbackError, "Deezer", "doAction", [{"command" : "next"}]);
        },
        myPlayTracks :function(callbackSaccess, callbackError,tracksId){
            cordova.exec(callbackSaccess, callbackError, "Deezer","playerControl", [{"offset" : 0, "index" : 0, "autoplay" : true , "addToQueue" : false, "trackList" : tracksId}, "playTracks"])
        },
        onPosition : function(player_position){
            cordova.exec(null,null,"Deezer","playerControl",[{"offset" : player_position,"index" : 0, "autoplay" : true , "addToQueue" : false, "chengPosition" : player_position}, "chengPosition"])
        },

};