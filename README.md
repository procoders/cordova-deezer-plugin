# Deprecated

Actual plugin is avaiable at
https://github.com/procoders/cordova-plugin-deezer/




[![N|Solid](http://procoders.tech/art/powered.png)](http://procoders.tech/)

## Hooks
You must init the application, use this in your *index.js* after deviceready :
```javascript
deezerPlayer.init(callbackSaccess,callbackError,applicationId);
```
`applicationId` - ID in Deezer service

For user authentication:
```javascript
deezerPlayer.login(callbackSaccess,callbackError,[username]);
```

### Methods *(namespase `deezerPlayer`)*:
```javasript
playAlbum(callbackSaccess,callbackError,albumId);
playPlaylist(callbackSaccess, callbackError,playListId);
playRadio(callbackSaccess, callbackError,radioId);
pause(callbackSaccess, callbackError);
play(callbackSaccess, callbackError);
prev(callbackSaccess, callbackError);
next(callbackSaccess, callbackError);
playTrack(callbackSaccess, callbackError,trackId):
seek(player_position);//player_position - value between 0-100%
setVolume(val1,val2);//val1,val2 - the volume for the left and right channel (between 0-100%)
```

### Events *(namespace `deezerPlayer.Events`)*
```javascript
on_position : function(args){},//args[0] - position, args[1] - duration
on_buffering : function (args){},//(args[0] * 100) + " %";
on_current_track : function(arg){},//arg[1] - Title of track
on_player_play : function(){},
on_track_ended : function(){},
on_pause : function(){},
on_change_volume : function(args){}//args[0] - the volume for the left channel (between 0 and 100%), args[1] -  the volume for the right channel (between 0 and 100%)
```
Exemle for subscribe:
```javascript
deezerPlayer.Events.on_position = function(args){....}
```
