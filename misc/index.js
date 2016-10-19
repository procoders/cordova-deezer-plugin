var deezerPlayer={
            init:function(callbackSaccess,callbackError, appId){
         cordova.exec(callbackSaccess, callbackError, "Deezer", "init", [appId])
         },
        playAlbum : function(callbackSaccess,callbackError,albumId){
                cordova.exec(callbackSaccess, callbackError, "Deezer", "playerControl", [{"offset" : 0, "index" : 0, "autoplay" : true , "addToQueue" : false, "album_id" : albumId}, "playAlbum"])
         },
        playPlaylist : function(callbackSaccess, callbackError,playListId){
            cordova.exec(callbackSaccess, callbackError,"Deezer", "playerControl",[{"offset" : 0, "index" : 0, "autoplay" : true, "addToQueue" : false, "playlist_id" : playListId}, "playPlaylist"]);
        },
        playRadio : function(callbackSaccess, callbackError,radioId){
            cordova.exec(callbackSaccess, callbackError,"Deezer", "playerControl",
            [{"offset" : 0, "index" : 0, "autoplay" : true, "addToQueue" : false, "radio_id" : "28"}, "playRadio"]);
        },
       pause : function(callbackSaccess, callbackError){
             cordova.exec(callbackSaccess, callbackError, "Deezer", "doAction", [{"command" : "pause"}]);
        },
        play : function(callbackSaccess, callbackError){
            cordova.exec(callbackSaccess, callbackError, "Deezer", "doAction", [{"command" : "play"}]);
        },
        prev : function(callbackSaccess, callbackError){
            cordova.exec(callbackSaccess, callbackError, "Deezer", "doAction", [{"command" : "prev"}]);
        },
        next : function(callbackSaccess, callbackError){
            cordova.exec(callbackSaccess, callbackError, "Deezer", "doAction", [{"command" : "next"}]);
        },
        playTracks :function(callbackSaccess, callbackError,tracksId){
            cordova.exec(callbackSaccess, callbackError, "Deezer","playerControl", [{"offset" : 0, "index" : 0, "autoplay" : true , "addToQueue" : false, "trackList" : tracksId}, "playTracks"])
        },
        seek : function(player_position){
            cordova.exec(null,null,"Deezer","playerControl",[{"offset" : player_position,"index" : 0, "autoplay" : true , "addToQueue" : false, "changePosition" : player_position}, "changePosition"])
        },
        EVENTS : {
            on_position : function(args){console.log("on position changed : "+ args);
                                        document.querySelector("#media_time").innerHTML = Math.floor(args[0]) + " sec";
                                        document.querySelector("#duration").innerHTML = Math.floor(args[1]) + " sec"; },
            on_buffering : function (args){console.log("on_buffering changed : "+ args);
                                                               document.querySelector("#buffering_time").innerHTML = Math.floor(args[0] * 100) + " %";},
            on_current_track : function(arg){
                                          document.querySelector('#cur_track').innerHTML ="current track" + arg[1];
            },
            on_player_play : function(){
                           document.querySelector('#action').innerHTML ="Player play" ;
            },
            on_track_ended : function(){
                            document.querySelector('#action').innerHTML = "Track ended";
            },
            on_pause : function(){
                            document.querySelector('#action').innerHTML = "Player paused";
            }
        },

};