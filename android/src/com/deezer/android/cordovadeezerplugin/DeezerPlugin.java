		package com.deezer.android.cordovadeezerplugin;

		import org.apache.cordova.CallbackContext;
		import org.apache.cordova.CordovaInterface;
		import org.apache.cordova.CordovaPlugin;
		import org.apache.cordova.CordovaWebView;
		import org.json.JSONArray;
		import org.json.JSONException;
		import org.json.JSONObject;

		import com.deezer.sdk.model.Track;

		import android.util.Log;
		import android.widget.Toast;


/**
 *
 * @author aleksey
 *
 */
public class DeezerPlugin extends CordovaPlugin {

	private final static String METHOD_TAG_INIT = "init";
	private final static String METHOD_TAG_LOGIN = "login";
	private final static String METHOD_TAG_PLAYER_CMD = "doAction";
	private final static String METHOD_TAG_PLAYER_CONTROL = "playerControl";

	private final static String METHOD_NAME_PLAYTRACKS = "playTracks";
	private final static String METHOD_NAME_PLAYALBUM = "playAlbum";
	private final static String METHOD_NAME_PLAYPLAYLIST = "playPlaylist";
	private final static String METHOD_NAME_PLAYRADIO = "playRadio";
	private final static String METHOD_NAME_PLAYSMARTRADIO = "playSmartRadio";


	private final static String METHOD_SEND_TO_JS_OBJ = "deezerPlayer.Events";
	private final static String METHOD_SEND_TO_JS_POSITION_CHANGED = ".on_position";
	private final static String METHOD_SEND_TO_JS_BUFFER_CHANGED = ".on_buffering";
	private  final static String METHOD_CHANGE_POSITION = "changePosition";
	private  final static String METHOD_SET_VOLUME = "setVolume";

	private CordovaInterface mInterface;
	private CordovaWebView mWebView;

	private DeezerJSListener mListener;

	@Override
	public void initialize(final CordovaInterface cordova, final CordovaWebView webView) {
		super.initialize(cordova, webView);

		Log.i("DeezerPlugin", "initialize");
		mInterface = cordova;
		mWebView = webView;


		mListener = new DeezerSDKController(mInterface.getActivity(), this);
	}

	@Override
	public boolean execute(final String action, final JSONArray args,
						   final CallbackContext callbackContext)
			throws JSONException {
		Log.i("DeezerPlugin", "execute : " + action);

		// Method not found
		if (action == null) {
			return false;
		}

		Toast.makeText(mInterface.getActivity(), action, Toast.LENGTH_LONG)
				.show();

		if (action.equals(METHOD_TAG_INIT)) {
			String appId = args.getString(0);
			Log.d("DeezerPlugin",appId.toString());
			mListener.init(callbackContext, appId);

		} else if (action.equals(METHOD_TAG_LOGIN)) {
			mListener.login(callbackContext);

		} else if (action.equals(METHOD_TAG_PLAYER_CMD)) {

			JSONObject json = args.getJSONObject(0);
			String command = json.optString("command");
			if (command.equals("play")) {
				mListener.onPlay(callbackContext);
			} else if (command.equals("pause")) {
				mListener.onPause(callbackContext);
			} else if (command.equals("next")) {
				mListener.onNext(callbackContext);
			} else if (command.equals("prev")) {
				mListener.onPrev(callbackContext);
			}

		} else if (action.equalsIgnoreCase(METHOD_TAG_PLAYER_CONTROL)) {

			JSONObject json = args.getJSONObject(0);
			String method = args.getString(1);

			final int offset = json.optInt("offset", 0);
			final int index = json.optInt("index", 0);
			final boolean autoPlay = json.optBoolean("autoplay", true);
			final boolean addToQueue = json.optBoolean("queue", false);


			if (method.equals(METHOD_NAME_PLAYTRACKS)) {
				String ids = json.optString("trackList", null);
				if ((ids != null) && (mListener != null)) {
					mListener.onPlayTracks(callbackContext, ids, index, offset,
							autoPlay, addToQueue);
				}
			} else if (method.equals(METHOD_NAME_PLAYALBUM)) {
				String id = json.optString("album_id", null);
				Log.wtf("DeezerPlugin", "PlayerControl : " + method + " @" + id);
				if (id != null) {
					mListener.onPlayAlbum(callbackContext, id, index, offset,
							autoPlay, addToQueue);
				}
			} else if (method.equals(METHOD_NAME_PLAYPLAYLIST)) {
				String id = json.optString("playlist_id", null);
				Log.wtf("DeezerPlugin", "PlayerControl : " + method + " @" + id);
				if (id != null) {
					mListener.onPlayPlaylist(callbackContext, id, index,
							offset, autoPlay, addToQueue);
				}
			} else if (method.equals(METHOD_NAME_PLAYRADIO)) {
				String id = json.optString("radio_id", null);
				Log.wtf("DeezerPlugin", "PlayerControl : " + method + " @" + id);
				if (id != null) {
					mListener.onPlayRadio(callbackContext, id, index, offset,
							autoPlay, addToQueue);
				}
			} else if (method.equals(METHOD_NAME_PLAYSMARTRADIO)) {
				String id = json.optString("radio_id", null);
				Log.wtf("DeezerPlugin", "PlayerControl : " + method + " @" + id);
				if (id != null) {
					mListener.onPlayArtistRadio(callbackContext, id, index,
							offset, autoPlay, addToQueue);
				}
			} else if(method.equals(METHOD_CHANGE_POSITION)){
				final  long idxPos = json.optLong("changePosition",0);

				mListener.setChangePosition(idxPos);
			}else if(method.equals(METHOD_SET_VOLUME)){
				final  float val1 = (float)json.optDouble("setVolume1");
				final  float val2 =(float)json.optDouble("setVolume2");
				mListener.setVolume(val1,val2);
			}
		} else {
			// method not found !
			return false;
		}

		return true;
	}


	public void sendToJs_positionChanged(final float position, final float duration) {

		JSONArray array = new JSONArray();
		try {
			array.put(position);
			array.put(duration);
		}
		catch (JSONException e) {
			e.printStackTrace();
		}

		sendUpdate(METHOD_SEND_TO_JS_POSITION_CHANGED, new Object[] {
				array
		});
	}

	public void sendToJS_bufferPosition(final float position) {
		JSONArray args = new JSONArray();
		try {
			args.put(position);
		}
		catch (JSONException e) {
			e.printStackTrace();
		}

		sendUpdate(METHOD_SEND_TO_JS_BUFFER_CHANGED, new Object[] {
				args
		});
	}

	public void sentToJS_onCurrentTrack(final int index, final Track track) {
		JSONArray array = new JSONArray();
		array.put(index);

		try {
			array.put(track.getTitle() );//was .toJson()
			sendUpdate(".on_current_track", new Object[] {
					array
			});
		}
		catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void sendUpdate(final String action, final Object[] params) {
		String method = String.format("%s%s", METHOD_SEND_TO_JS_OBJ, action);
		final StringBuilder jsCommand = new StringBuilder();

		jsCommand.append("javascript:").append(method).append("(");
		int nbParams = params.length;
		for (int i = 0; i < nbParams;) {
			jsCommand.append(params[i++]);
			if (i != nbParams) {
				jsCommand.append(",");
			}
		}
		jsCommand.append(")");

		Log.d("DeezerPlugin", "sendUpdate jsCommand : " + jsCommand.toString());

		mWebView.getView().post(new Runnable(){
			public void run(){

					mWebView.loadUrl(jsCommand.toString());

			}
		});

	}
}
