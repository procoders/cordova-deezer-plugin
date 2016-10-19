/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

console.log("Loading deezer-cordova.js");

var exec = require('cordova/exec');



/**
 * Provides access to the vibration mechanism on the device.
 */

module.exports = {

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
            on_position : function(args){ 
                //args[0] - position, args[1] - duration
                },
            on_buffering : function (args){ },
            on_current_track : function(arg){
                      //arg[1] - track title
            },
            on_player_play : function(){ },
            on_track_ended : function(){ },
            on_pause : function(){}
        },
};
