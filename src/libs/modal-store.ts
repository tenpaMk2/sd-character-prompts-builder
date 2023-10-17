import { map } from "nanostores";
import { type ColorCategory } from "./prompts-store";

const defaultEnable: { readonly [K in ColorCategory]: boolean } = {
  "eyes-color": false,
  "hair-color": false,
};
export const modalEnableStore = map(defaultEnable);
