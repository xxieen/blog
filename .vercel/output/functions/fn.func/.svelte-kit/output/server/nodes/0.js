import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.eGMfy2vz.js","_app/immutable/chunks/scheduler.BFxoHbvn.js","_app/immutable/chunks/index.CR3-KcgG.js","_app/immutable/chunks/index.oEBF3ZGC.js","_app/immutable/chunks/index.D49HsqxP.js"];
export const stylesheets = ["_app/immutable/assets/0.CIRqcaYC.css"];
export const fonts = [];
