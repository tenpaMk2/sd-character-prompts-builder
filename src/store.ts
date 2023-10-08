import { map } from "nanostores";

// https://codyarose.com/blog/object-keys-from-array-in-typescript/
export const prompts = [
  `aqua eyes`,
  `black eyes`,
  `blue eyes`,
  `brown eyes`,
  `green eyes`,
  `grey eyes`,
  `orange eyes`,
  `purple eyes`,
  `pink eyes`,
  `red eyes`,
  `white eyes`,
  `yellow eyes`,
  `tsurime`,
  `tareme`,
  `thick eyebrows`,
  `eyelashes`,
  `long eyelashes`,
  `thick eyelashes`,
  `short hair`,
  `medium hair`,
  `long hair`,
  `very long hair`,
  `absurdly long hair`,
  `bob cut`,
  `inverted bob`,
  `pixie cut`,
  `undercut`,
  `flipped hair`,
  `dreadlocks`,
  `hime cut`,
  `curly hair`,
  `drill hair`,
  `twin drills`,
  `hair flaps`,
  `messy hair`,
  `pointy hair`,
  `ringlets`,
  `straight hair`,
  `wavy hair`,
  `bow-shaped hair`,
  // ...WIP
] as const;
export type PromptState = { [K in (typeof prompts)[number]]: boolean };

const init = prompts.reduce((accumulator, value) => {
  return { ...accumulator, [value]: false };
}, {}) as PromptState;

init[`red eyes`] = true;

export const promptState = map<PromptState>(init);
