For use it plugin:
1. Copy the contents from misc/index.js file to your index.js file


2. Then when the device is ready you have to initialize your application
 deezerPlayer.myInit(callbackSaccess,callbackError, appId); // copypaste this code (appId - your Application ID)

 And then you can use functions to control the player.
 Exemple on native javascript:
        document.getElementById('btnPlayAlbum').addEventListener('click',function(){ deezerPlayer.myPlayAlbum(callbackSaccess,callbackError,albumId)});
        document.getElementById('slider_seek').addEventListener('click',function(){deezerPlayer.onPosition(valX); })//valX - persent of track duration