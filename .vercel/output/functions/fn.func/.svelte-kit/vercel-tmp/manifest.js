export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","baby.jpg","favicon.png","post-images/.DS_Store","post-images/bear龙年新春.png","post-images/copy.png","post-images/forward.png","post-images/gcd.png","post-images/move.png","post-images/nQueue.webp","post-images/terminal-setup.jpg","post-images/tmux-setup.jpg","post-images/uref.png","post-images/value_cat.png","post-images/vim-essentials-cheatsheet.jpg","post-images/yabai-setup.jpg","profile-image.jpg"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.CIgtfsuB.js","app":"_app/immutable/entry/app.C2LByF26.js","imports":["_app/immutable/entry/start.CIgtfsuB.js","_app/immutable/chunks/entry.Cmpd7xjo.js","_app/immutable/chunks/scheduler.DKuV8lkR.js","_app/immutable/chunks/index.-TmmM991.js","_app/immutable/entry/app.C2LByF26.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.DKuV8lkR.js","_app/immutable/chunks/index.BWbrWu7K.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
