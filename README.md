For use it plugin:
1. Copy the contents from misc/index.js file to your index.js file


2. Then when the device is ready you have to initialize your application
 deezerPlayer.myInit(callbackSaccess,callbackError, appId); // copypaste this code (appId - your Application ID)

 And then you can use functions to control the player.
 Exemple on native javascript:
        document.getElementById('btnPlayAlbum').addEventListener('click',function(){ deezerPlayer.myPlayAlbum(callbackSaccess,callbackError,albumId)});
        document.getElementById('btnPlay').addEventListener('click',function(){deezerPlayer.myNext(callbackSaccess,callbackError)});
        document.getElementById('btnPause').addEventListener('click',function(){deezerPlayer.myPause(callbackSaccess,callbackError)});
        document.getElementById('btnPrev').addEventListener('click',function(){deezerPlayer.myPrev(callbackSaccess,callbackError)});
        document.getElementById('btnNext').addEventListener('click',function(){deezerPlayer.myNext(callbackSaccess,callbackError)});
        document.getElementById('btnRadio').addEventListener('click',function(){deezerPlayer.myPlayRadio(callbackSaccess,callbackError,RadioId)});
        document.getElementById('btnPlayList').addEventListener('click',function(){deezerPlayer.myPlayPlaylist(callbackSaccess,callbackError,PlayListId)});
        document.getElementById('btnPlayTracks').addEventListener('click',function(){deezerPlayer.myPlayTracks(callbackSaccess,callbackError,trackId)});
        document.getElementById('slider_seek').addEventListener('click',function(e){var valX = (e.offsetX)*100/220; deezerPlayer.onPosition(valX); })//valX - persent of track duration