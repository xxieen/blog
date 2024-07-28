export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","post-images/terminal-setup.jpg","post-images/tmux-setup.jpg","post-images/vim-essentials-cheatsheet.jpg","post-images/yabai-setup.jpg","profile-image.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.BWG2UZRN.js","app":"_app/immutable/entry/app.DY4tYgTH.js","imports":["_app/immutable/entry/start.BWG2UZRN.js","_app/immutable/chunks/entry.PGdvGMM0.js","_app/immutable/chunks/scheduler.DYjdgHML.js","_app/immutable/chunks/index.CXikPA9F.js","_app/immutable/entry/app.DY4tYgTH.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.DYjdgHML.js","_app/immutable/chunks/index.CmMY3o3i.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
