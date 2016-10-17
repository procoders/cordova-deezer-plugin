
[![N|Solid](http://procoders.tech/art/powered.png)](http://procoders.tech/)

## For use it plugin: 
1. Copy the contents from `misc/index.js` file to your `index.js` file

2. Then when the device is ready you have to initialize your application copypaste this code
```sh
deezerPlayer.myInit(callbackSaccess,callbackError, appId);
```
 
*string* `appId` - your Application ID 

3. And then you can use functions to control the player.
*Exemple on native javascript:*
```sh
document.getElementById('btnPlayAlbum').addEventListener('click',function(){deezerPlayer.myPlayAlbum(callbackSaccess,callbackError,albumId)});
document.getElementById('slider_seek').addEventListener('click',function(){deezerPlayer.onPosition(valX); });
```
* *string*  `albumId` - ID album, *exemple "6575789"*;
* *int* `valX` - persent of track duration

