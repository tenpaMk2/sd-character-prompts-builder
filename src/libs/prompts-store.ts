import { map } from "nanostores";

export const promptDefines = [
  {
    prompt: `aqua eyes`,
    categories: [`eyes-color`],
    isEnableByDefault: false,
    colorCategory: `common-color`,
    color: `aqua`,
    suggests: null,
    parent: null,
  },
  {
    prompt: `red eyes`,
    categories: [`eyes-color`],
    isEnableByDefault: true,
    colorCategory: `common-color`,
    color: `red`,
    suggests: null,
    parent: null,
  },
  {
    prompt: `black eyes`,
    categories: [`eyes-color`],
    isEnableByDefault: false,
    colorCategory: `common-color`,
    color: `black`,
    suggests: null,
    parent: null,
  },
  {
    prompt: `thick eyebrows`,
    categories: [`eyebrows-shape`],
    isEnableByDefault: false,
    colorCategory: null,
    color: null,
    suggests: null,
    parent: null,
  },
  {
    prompt: `ponytail`,
    categories: [`tied-hair`],
    isEnableByDefault: false,
    colorCategory: null,
    color: null,
    suggests: null,
    parent: null,
  },
  {
    prompt: `high ponytail`,
    categories: [`tied-hair`],
    isEnableByDefault: false,
    colorCategory: null,
    color: null,
    suggests: null,
    parent: `ponytail`,
  },
  {
    prompt: `hairpin`,
    categories: [`hair-ornament`],
    isEnableByDefault: false,
    colorCategory: null,
    color: null,
    suggests: null,
    parent: null,
  },
  {
    prompt: `hairclip`,
    categories: [`hair-ornament`],
    isEnableByDefault: false,
    colorCategory: null,
    color: null,
    suggests: null,
    parent: null,
  },
  {
    prompt: `hair ornament`,
    categories: [`hair-ornament`],
    isEnableByDefault: false,
    colorCategory: null,
    color: null,
    suggests: null,
    parent: null,
  },
  {
    prompt: `cross hair ornament`,
    categories: [`hair-ornament`],
    isEnableByDefault: false,
    colorCategory: null,
    color: null,
    suggests: [`hairpin`],
    parent: `hair ornament`,
  },
  {
    prompt: `x hair ornament`,
    categories: [`hair-ornament`],
    isEnableByDefault: false,
    colorCategory: null,
    color: null,
    suggests: [`hairpin`],
    parent: `hair ornament`,
  },
  {
    prompt: `snowflake hair ornament`,
    categories: [`hair-ornament`],
    isEnableByDefault: false,
    colorCategory: null,
    color: null,
    suggests: null,
    parent: `hair ornament`,
  },
  {
    prompt: `bat hair ornament`,
    categories: [`hair-ornament`],
    isEnableByDefault: false,
    colorCategory: null,
    color: null,
    suggests: null,
    parent: `hair ornament`,
  },
  {
    prompt: `anchor hair ornament`,
    categories: [`hair-ornament`],
    isEnableByDefault: false,
    colorCategory: null,
    color: null,
    suggests: null,
    parent: `hair ornament`,
  },
  {
    prompt: `bone hair ornament`,
    categories: [`hair-ornament`],
    isEnableByDefault: false,
    colorCategory: null,
    color: null,
    suggests: null,
    parent: `hair ornament`,
  },
] as const;

const prompts = promptDefines.map(({ prompt }) => prompt);
const promptSetMutable = new Set(prompts);
export type Prompt = (typeof prompts)[number];
export const promptSet = promptSetMutable as ReadonlySet<Prompt>;

const categories = promptDefines.map(({ categories }) => categories).flat();
export type Category = (typeof categories)[number];
export const categorySet = new Set(categories) as ReadonlySet<Category>;

const colorCategories = promptDefines.map(({ colorCategory }) => colorCategory);
export type ColorCategory = Exclude<(typeof colorCategories)[number], null>;
const colorCategoryNullableSet = new Set(colorCategories);
colorCategoryNullableSet.delete(null);
export const colorCategorySet =
  colorCategoryNullableSet as ReadonlySet<ColorCategory>;

const parents = promptDefines.map(({ parent }) => parent);
export type Parent = Exclude<(typeof parents)[number], null>;
const parentNullableSet = new Set(parents);
parentNullableSet.delete(null);
export const parentSet = parentNullableSet as ReadonlySet<Parent>;

type PromptEnableInfo = { [K in Prompt]: boolean };
const defaultInfo = promptDefines.reduce(
  (a, { prompt, isEnableByDefault }) => ({ ...a, [prompt]: isEnableByDefault }),
  {},
) as PromptEnableInfo;

export const promptEnableInfoStore = map<PromptEnableInfo>(defaultInfo);

export const getDefine = (p: Prompt) =>
  promptDefines.filter(({ prompt }) => prompt === p)[0];

export const getDefinesByCategory = (c: Category) =>
  promptDefines.filter(({ categories }) =>
    (categories as readonly Category[]).includes(c),
  );

export const getDefinesByColorCategory = (c: ColorCategory) =>
  promptDefines.filter(({ colorCategory }) => colorCategory === c);

export const getDefinesHaveChildren = () =>
  promptDefines.filter(({ prompt }) => (parentSet as Set<unknown>).has(prompt));

export const getDefinesHaveParent = () =>
  promptDefines.filter(({ parent }) => parent);

export const getChildDefines = (parent: Prompt) =>
  promptDefines.filter(({ parent: p }) => p === parent);

export const getParentDefine = (child: Prompt) => {
  const childDefine = getDefine(child);
  if (!childDefine.parent) return null;
  return getDefine(childDefine.parent);
};
