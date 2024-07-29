export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","post-images/terminal-setup.jpg","post-images/tmux-setup.jpg","post-images/vim-essentials-cheatsheet.jpg","post-images/yabai-setup.jpg","profile-image.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.BtA2nN2V.js","app":"_app/immutable/entry/app.Czc063Qh.js","imports":["_app/immutable/entry/start.BtA2nN2V.js","_app/immutable/chunks/entry.EW5QKJMm.js","_app/immutable/chunks/scheduler.BFxoHbvn.js","_app/immutable/chunks/index.oEBF3ZGC.js","_app/immutable/entry/app.Czc063Qh.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.BFxoHbvn.js","_app/immutable/chunks/index.CR3-KcgG.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
