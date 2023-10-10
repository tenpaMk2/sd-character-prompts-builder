import { atom } from "nanostores";

const promptRecords = [
  {
    category: `eyesColors` as const,
    prompt: `aqua eyes` as const,
    isEnable: true,
  },
  {
    category: `eyesColors` as const,
    prompt: `black eyes` as const,
    isEnable: false,
  },
  {
    category: `eyesColors` as const,
    prompt: `blue eyes` as const,
    isEnable: false,
  },
  {
    category: `eyesColors` as const,
    prompt: `brown eyes` as const,
    isEnable: false,
  },
  {
    category: `eyesColors` as const,
    prompt: `green eyes` as const,
    isEnable: false,
  },
  {
    category: `eyesColors` as const,
    prompt: `grey eyes` as const,
    isEnable: false,
  },
  {
    category: `eyesColors` as const,
    prompt: `orange eyes` as const,
    isEnable: false,
  },
  {
    category: `eyesColors` as const,
    prompt: `purple eyes` as const,
    isEnable: false,
  },
  {
    category: `eyesColors` as const,
    prompt: `pink eyes` as const,
    isEnable: false,
  },
  {
    category: `eyesColors` as const,
    prompt: `red eyes` as const,
    isEnable: false,
  },
  {
    category: `eyesColors` as const,
    prompt: `white eyes` as const,
    isEnable: false,
  },
  {
    category: `eyesColors` as const,
    prompt: `yellow eyes` as const,
    isEnable: false,
  },
  {
    category: `eyesShapes` as const,
    prompt: `tsurime` as const,
    isEnable: false,
  },
  {
    category: `eyesShapes` as const,
    prompt: `tareme` as const,
    isEnable: false,
  },
  {
    category: `eyebrows` as const,
    prompt: `thick eyebrows` as const,
    isEnable: false,
  },
  {
    category: `eyelashes` as const,
    prompt: `eyelashes` as const,
    isEnable: false,
  },
  {
    category: `eyelashes` as const,
    prompt: `long eyelashes` as const,
    isEnable: false,
  },
  {
    category: `eyelashes` as const,
    prompt: `thick eyelashes` as const,
    isEnable: false,
  },
  {
    category: `hairLengths` as const,
    prompt: `short hair` as const,
    isEnable: false,
  },
  {
    category: `hairLengths` as const,
    prompt: `medium hair` as const,
    isEnable: false,
  },
  {
    category: `hairLengths` as const,
    prompt: `long hair` as const,
    isEnable: false,
  },
  {
    category: `hairLengths` as const,
    prompt: `very long hair` as const,
    isEnable: false,
  },
  {
    category: `hairLengths` as const,
    prompt: `absurdly long hair` as const,
    isEnable: false,
  },
  {
    category: `hairStyles` as const,
    prompt: `bob cut` as const,
    isEnable: false,
  },
  {
    category: `hairStyles` as const,
    prompt: `inverted bob` as const,
    isEnable: false,
  },
  {
    category: `hairStyles` as const,
    prompt: `pixie cut` as const,
    isEnable: false,
  },
  {
    category: `hairStyles` as const,
    prompt: `undercut` as const,
    isEnable: false,
  },
  {
    category: `hairStyles` as const,
    prompt: `flipped hair` as const,
    isEnable: false,
  },
  {
    category: `hairStyles` as const,
    prompt: `dreadlocks` as const,
    isEnable: false,
  },
  {
    category: `hairStyles` as const,
    prompt: `hime cut` as const,
    isEnable: false,
  },
  {
    category: `hairStyles` as const,
    prompt: `curly hair` as const,
    isEnable: false,
  },
  {
    category: `hairStyles` as const,
    prompt: `drill hair` as const,
    isEnable: false,
  },
  {
    category: `hairStyles` as const,
    prompt: `twin drills` as const,
    isEnable: false,
  },
  {
    category: `hairStyles` as const,
    prompt: `hair flaps` as const,
    isEnable: false,
  },
  {
    category: `hairStyles` as const,
    prompt: `messy hair` as const,
    isEnable: false,
  },
  {
    category: `hairStyles` as const,
    prompt: `pointy hair` as const,
    isEnable: false,
  },
  {
    category: `hairStyles` as const,
    prompt: `ringlets` as const,
    isEnable: false,
  },
  {
    category: `hairStyles` as const,
    prompt: `straight hair` as const,
    isEnable: false,
  },
  {
    category: `hairStyles` as const,
    prompt: `wavy hair` as const,
    isEnable: false,
  },
];

export const promptRecordsStore = atom(promptRecords);
export type PromptRecords = typeof promptRecords;

export const allCategories = [
  ...new Set(promptRecords.map(({ category }) => category)),
];
export type Category = (typeof allCategories)[number];

export const allPrompts = [
  ...new Set(promptRecords.map(({ prompt }) => prompt)),
];
export type Prompt = (typeof allPrompts)[number];
