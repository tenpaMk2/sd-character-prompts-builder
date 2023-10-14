import { map } from "nanostores";

// const record = {
//   key: `hair red ribbon`, // 重複しないキー(プロンプトをキーにしてしまうと、別カテゴリで同じプロンプトを使う場合に破綻する)
//   category: `hair-ornament`, // カテゴリキー(class名兼用なのでスペースなし)
//   prompt: `red ribbon`, // プロンプト
//   isEnableByDefault: true, // 初期値
//   colorCategory: `eyes-color`, // カラー系のプロンプト用
//   colorClass: `aqua`, // カラー系のプロンプト用(class名兼用)
//   suggestKeys: [`blue eyes`, `green eyes`], // 一緒に有効にしたほうが良いプロンプトのサジェスト
//   parentKey: `ponytail`, // 親プロンプト(これが指定される場合は、親カテゴリごとにUIをグルーピングする)
// };

export const promptDefines = [
  {
    key: `aqua eyes`,
    category: `eyes-color`,
    prompt: `aqua eyes`,
    isEnableByDefault: false,
    colorCategory: `eyes-color`,
    color: `aqua`,
  },
  {
    key: `red eyes`,
    category: `eyes-color`,
    prompt: `red eyes`,
    isEnableByDefault: true,
    colorCategory: `eyes-color`,
    color: `red`,
  },
  {
    key: `black eyes`,
    category: `eyes-color`,
    prompt: `black eyes`,
    isEnableByDefault: false,
    colorCategory: `eyes-color`,
    color: `black`,
  },
  {
    key: `thick eyebrows`,
    category: `eyebrows-shape`,
    prompt: `thick eyebrows`,
    isEnableByDefault: false,
  },
  {
    key: `ponytail`,
    category: `tied-hair`,
    prompt: `ponytail`,
    isEnableByDefault: false,
  },
  {
    key: `high ponytail`,
    category: `tied-hair`,
    prompt: `high ponytail`,
    isEnableByDefault: false,
    parentKey: `ponytail`,
  },
] as const;

// TODO: keyが重複してたらはじく。
// TODO: categoryにスペースが入ってたらはじく。
// TODO: いっそJSON(or JS)に隔離したほうが良いかも。

// const rec = inputs.map(({ category, prompt }) => `${category}=>${prompt}`);

// const promptRecordsStoreH = atom(hoge);
// type PromptRecordsH = typeof hoge;

// const allCategoriesH = [...new Set(hoge.map(({ category }) => category))];
// type CategoryH = (typeof allCategoriesH)[number];

// const allPromptsH = [...new Set(hoge.map(({ prompt }) => prompt))];
// type PromptH = (typeof allPromptsH)[number];

export const allCategories = [
  ...new Set(promptDefines.map(({ category }) => category)),
];
export type Category = (typeof allCategories)[number];

const allPrompts = [...new Set(promptDefines.map(({ prompt }) => prompt))];
export type Prompt = (typeof allPrompts)[number];

type PromptEnableInfo = {
  [K in (typeof allPrompts)[number]]: boolean;
};

const defaultInfo = promptDefines.reduce(
  (a, { key, isEnableByDefault }) => ({ ...a, [key]: isEnableByDefault }),
  {},
) as PromptEnableInfo;

export const promptEnableInfoStore = map<PromptEnableInfo>(defaultInfo);

export const getPromptsByCategory = (c: Category) =>
  promptDefines
    .filter(({ category }) => category === c)
    .map(({ prompt }) => prompt);
