export const index = 1;
let component_cache;
export const component = async () =>
  (component_cache ??= (
    await import("../entries/fallbacks/error.svelte.js")
  ).default);
export const imports = [
  "_app/immutable/nodes/1.Ee0itnoL.js",
  "_app/immutable/chunks/scheduler.DYjdgHML.js",
  "_app/immutable/chunks/index.CmMY3o3i.js",
  "_app/immutable/chunks/entry.C4s7c7OY.js",
  "_app/immutable/chunks/index.CXikPA9F.js"
];
export const stylesheets = [];
export const fonts = [];
