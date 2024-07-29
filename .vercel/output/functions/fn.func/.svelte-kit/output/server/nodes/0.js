import * as universal from "../entries/pages/_layout.ts.js";

export const index = 0;
let component_cache;
export const component = async () =>
  (component_cache ??= (
    await import("../entries/pages/_layout.svelte.js")
  ).default);
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = [
  "_app/immutable/nodes/0.XmtWUdEN.js",
  "_app/immutable/chunks/scheduler.DYjdgHML.js",
  "_app/immutable/chunks/index.CmMY3o3i.js",
  "_app/immutable/chunks/index.CXikPA9F.js"
];
export const stylesheets = [
  "_app/immutable/assets/0.vkGXfpK0.css"
];
export const fonts = [];
