export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","post-images/.DS_Store","post-images/bear龙年新春.png","post-images/gcd.png","post-images/nQueue.webp","post-images/terminal-setup.jpg","post-images/tmux-setup.jpg","post-images/vim-essentials-cheatsheet.jpg","post-images/yabai-setup.jpg","profile-image.jpg"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.BA3klmHu.js","app":"_app/immutable/entry/app.UPnPptmT.js","imports":["_app/immutable/entry/start.BA3klmHu.js","_app/immutable/chunks/entry.Cas5Aiuq.js","_app/immutable/chunks/scheduler.DKuV8lkR.js","_app/immutable/chunks/index.-TmmM991.js","_app/immutable/entry/app.UPnPptmT.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.DKuV8lkR.js","_app/immutable/chunks/index.BWbrWu7K.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
