import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.BMc9WXMc.js","_app/immutable/chunks/scheduler.DKuV8lkR.js","_app/immutable/chunks/index.BWbrWu7K.js","_app/immutable/chunks/index.-TmmM991.js"];
export const stylesheets = ["_app/immutable/assets/0.DKyA2uc9.css"];
export const fonts = [];
