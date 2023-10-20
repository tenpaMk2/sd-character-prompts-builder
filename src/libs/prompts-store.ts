import { map } from "nanostores";
import { isDuplicated, isValidCSSName } from "./util";

export const allPrompts = [
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
  `heterocromia`,
  `tsurime`,
  `tareme`,
  `thick eyebrows`,
  `eyelashes`,
  `long eyelashes`,
  `thick eyelashes`,
  `aqua hair`,
  `black hair`,
  `blonde hair`,
  `blue hair`,
  `light blue hair`,
  `dark blue hair`,
  `brown hair`,
  `light brown hair`,
  `green hair`,
  `dark green hair`,
  `light green hair`,
  `grey hair`,
  `orange hair`,
  `pink hair`,
  `purple hair`,
  `light purple hair`,
  `red hair`,
  `white hair`,
  `gradient hair`,
  `colored inner hair`,
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
  `hair over shoulder`,
  `short hair with long locks`,
  `bow-shaped hair`,
  `braid`,
  `braided bangs`,
  `front braid`,
  `side braid`,
  `frentch braid`,
  `crown braid`,
  `single braid`,
  `multiple braids`,
  `twin braids`,
  `low twin braids`,
  `tri braids`,
  `flower-shaped hair`,
  `hair bun`,
  `braided bun`,
  `single hair bun`,
  `double bun`,
  `cone hair bun`,
  `doughnut hair bun`,
  `heart hair bun`,
  `triple bun`,
  `hair rings`,
  `single hair ring`,
  `half updo`,
  `one side up`,
  `two side up`,
  `low-braided long hair`,
  `low-tied long hair`,
  `mizura`,
  `multi-tied-hair`,
  `ponytail`,
  `folded ponytail`,
  `high ponytail`,
  `short ponytail`,
  `side ponytail`,
  `split ponytail`,
  `topknot`,
  `twintails`,
  `low twintails`,
  `short twintails`,
  `tri tails`,
  `arched bangs`,
  `asymmetrical bangs`,
  `bangs pinned back`,
  `blunt bangs`,
  `crossed bangs`,
  `diagonal bangs`,
  `dyed bangs`,
  `hair over eyes`,
  `hair over one eye`,
  `long bangs`,
  `parted bangs`,
  `curtained bangs`,
  `hair between eyes`,
  `hair intakes`,
  `single hair intake`,
  `blunt ends`,
  `swept bangs`,
  `sidelocks`,
  `asymmetrical sidelocks`,
  `drill sidelocks`,
  `low tied sidelocks`,
  `single sidelock`,
  `ahoge`,
  `heart ahoge`,
  `huge ahoge`,
  `antenna hair`,
  `heart antenna hair`,
  `hair pulled back`,
  `hair slicked back`,
  `alternate hairstyle`,
  `hair down`,
  `hair up`,
  `hair ornament`,
  `hairpin`,
  `hairclip`,
  `cross hair ornament`,
  `x hair ornament`,
  `snowflake hair ornament`,
  `bat hair ornament`,
  `anchor hair ornament`,
  `bone hair ornament`,
  `butterfly hair ornament`,
  `cat hair ornament`,
  `character hair ornament`,
  `clover hair ornament`,
  `coin hair ornament`,
  `crescent hair ornament`,
  `cube hair ornament`,
  `d-pad hair ornament`,
  `feather hair ornament`,
  `fish hair ornament`,
  `food-themed hair ornament`,
  `frog hair ornament`,
  `hair beads`,
  `hair bell`,
  `hair bobbles`,
  `hair flower`,
  `hair scrunchie`,
  `hair stick`,
  `heart hair ornament`,
  `kanzashi`,
  `leaf hair ornament`,
  `monocle hair ornament`,
  `musical note hair ornament`,
  `pom pom hair ornament`,
  `rabbit hair ornament`,
  `shark hair ornament`,
  `skull hair ornament`,
  `snake hair ornament`,
  `star hair ornament`,
  `tassel hair ornament`,
  `crown`,
  `tiara`,
  `diadem`,
  `headdress`,
  `maid headdress`,
  `veil`,
  `headband`,
  `hair bow`,
  `red bow`,
  `pink bow`,
  `orange bow`,
  `brown bow`,
  `yellow bow`,
  `green bow`,
  `aqua bow`,
  `blue bow`,
  `purple bow`,
  `black bow`,
  `grey bow`,
  `white bow`,
  `hair ribbon`,
  `red ribbon`,
  `pink ribbon`,
  `orange ribbon`,
  `brown ribbon`,
  `yellow ribbon`,
  `green ribbon`,
  `aqua ribbon`,
  `blue ribbon`,
  `purple ribbon`,
  `black ribbon`,
  `grey ribbon`,
  `white ribbon`,
  `hairband`,
  `red hairband`,
  `pink hairband`,
  `orange hairband`,
  `brown hairband`,
  `yellow hairband`,
  `green hairband`,
  `aqua hairband`,
  `blue hairband`,
  `purple hairband`,
  `black hairband`,
  `grey hairband`,
  `white hairband`,
  `bow hairband`,
  `frilled hairband`,
  `lace-trimmed hairband`,
  `lolita hairband`,
  `striped hairband`,
  `two-tone hairband`,
  `pointy ears`,
  `elf`,
  `dark elf`,
  `gyaru`,
  `dark skin`,
  `single horn`,
  `mature female`,
  `curvy`,
  `loli`,
  `fang`,
  `facial mark`,
  `animal ears`,
  `cat girl`,
  `cat ears`,
  `cat tail`,
  `fox girl`,
  `fox ears`,
  `fox tail`,
  `animal ear fluff`,
  `flat chest`,
  `small breasts`,
  `medium breasts`,
  `large breasts`,
  `huge breasts`,
] as const;
export type Prompt = (typeof allPrompts)[number];

export const allCategories = [
  `eyes-color`,
  `eyes-shape`,
  `eyebrows-shape`,
  `eyelashes`,
  `hair-color`,
  `hair-length`,
  `hair-style`,
  `tied-hair`,
  `front-hair`,
  `sidelocks`,
  `top-of-the-head`,
  `hair-misc`,
  `hair-ornament`,
  `hair-bow`,
  `hair-ribbon`,
  `hairband`,
  `misc`,
  `breasts`,
] as const;
export type Category = (typeof allCategories)[number];

export const allColorCategories = [
  `eyes-color`,
  `hair-color`,
  `bow-color`,
  `ribbon-color`,
  `hairband-color`,
] as const;
export type ColorCategory = (typeof allColorCategories)[number];

export const allColorNames = [
  `none`,
  `aqua`,
  `black`,
  `blue`,
  `brown`,
  `green`,
  `grey`,
  `orange`,
  `purple`,
  `pink`,
  `red`,
  `white`,
  `yellow`,
  `blonde`,
  `light-blue`,
  `dark-blue`,
  `light-brown`,
  `dark-green`,
  `light-green`,
  `light-purple`,
] as const;
export type ColorName = (typeof allColorNames)[number];

export type ColorInfo = {
  readonly prompt: Prompt;
  readonly colorName: ColorName;
};
export const colorCategoryTree: {
  readonly [K in ColorCategory]: readonly ColorInfo[];
} = {
  "eyes-color": [
    { prompt: `aqua eyes`, colorName: `aqua` },
    { prompt: `black eyes`, colorName: `black` },
    { prompt: `blue eyes`, colorName: `blue` },
    { prompt: `brown eyes`, colorName: `brown` },
    { prompt: `green eyes`, colorName: `green` },
    { prompt: `grey eyes`, colorName: `grey` },
    { prompt: `orange eyes`, colorName: `orange` },
    { prompt: `purple eyes`, colorName: `purple` },
    { prompt: `pink eyes`, colorName: `pink` },
    { prompt: `red eyes`, colorName: `red` },
    { prompt: `white eyes`, colorName: `white` },
    { prompt: `yellow eyes`, colorName: `yellow` },
  ],
  "hair-color": [
    { prompt: `aqua hair`, colorName: `aqua` },
    { prompt: `black hair`, colorName: `black` },
    { prompt: `blonde hair`, colorName: `blonde` },
    { prompt: `blue hair`, colorName: `blue` },
    { prompt: `light blue hair`, colorName: `light-blue` },
    { prompt: `dark blue hair`, colorName: `dark-blue` },
    { prompt: `brown hair`, colorName: `brown` },
    { prompt: `light brown hair`, colorName: `light-brown` },
    { prompt: `green hair`, colorName: `green` },
    { prompt: `dark green hair`, colorName: `dark-green` },
    { prompt: `light green hair`, colorName: `light-green` },
    { prompt: `grey hair`, colorName: `grey` },
    { prompt: `orange hair`, colorName: `orange` },
    { prompt: `pink hair`, colorName: `pink` },
    { prompt: `purple hair`, colorName: `purple` },
    { prompt: `light purple hair`, colorName: `light-purple` },
    { prompt: `red hair`, colorName: `red` },
    { prompt: `white hair`, colorName: `white` },
  ],
  "bow-color": [
    { prompt: `red bow`, colorName: `red` },
    { prompt: `pink bow`, colorName: `pink` },
    { prompt: `orange bow`, colorName: `orange` },
    { prompt: `brown bow`, colorName: `brown` },
    { prompt: `yellow bow`, colorName: `yellow` },
    { prompt: `green bow`, colorName: `green` },
    { prompt: `aqua bow`, colorName: `aqua` },
    { prompt: `blue bow`, colorName: `blue` },
    { prompt: `purple bow`, colorName: `purple` },
    { prompt: `black bow`, colorName: `black` },
    { prompt: `grey bow`, colorName: `grey` },
    { prompt: `white bow`, colorName: `white` },
  ],
  "ribbon-color": [
    { prompt: `red ribbon`, colorName: `red` },
    { prompt: `pink ribbon`, colorName: `pink` },
    { prompt: `orange ribbon`, colorName: `orange` },
    { prompt: `brown ribbon`, colorName: `brown` },
    { prompt: `yellow ribbon`, colorName: `yellow` },
    { prompt: `green ribbon`, colorName: `green` },
    { prompt: `aqua ribbon`, colorName: `aqua` },
    { prompt: `blue ribbon`, colorName: `blue` },
    { prompt: `purple ribbon`, colorName: `purple` },
    { prompt: `black ribbon`, colorName: `black` },
    { prompt: `grey ribbon`, colorName: `grey` },
    { prompt: `white ribbon`, colorName: `white` },
  ],
  "hairband-color": [
    { prompt: `red hairband`, colorName: `red` },
    { prompt: `pink hairband`, colorName: `pink` },
    { prompt: `orange hairband`, colorName: `orange` },
    { prompt: `brown hairband`, colorName: `brown` },
    { prompt: `yellow hairband`, colorName: `yellow` },
    { prompt: `green hairband`, colorName: `green` },
    { prompt: `aqua hairband`, colorName: `aqua` },
    { prompt: `blue hairband`, colorName: `blue` },
    { prompt: `purple hairband`, colorName: `purple` },
    { prompt: `black hairband`, colorName: `black` },
    { prompt: `grey hairband`, colorName: `grey` },
    { prompt: `white hairband`, colorName: `white` },
  ],
} as const;

type ChildPrompt = {
  readonly type: `child-prompt`;
  readonly prompt: Prompt;
  readonly suggests?: Prompt[];
};

type ColorParent = {
  readonly type: `color-parent`;
  readonly colorCategory: ColorCategory;
};

type ParentPrompt = {
  readonly type: `parent-prompt`;
  readonly prompt: Prompt;
  readonly children: UILeaf[];
  readonly suggests?: Prompt[];
};

export type UILeaf = ParentPrompt | ChildPrompt | ColorParent;

export const uITree: { [K in Category]: UILeaf[] } = {
  "eyes-color": [
    { type: `color-parent`, colorCategory: `eyes-color` },
    { type: `child-prompt`, prompt: `heterocromia` },
  ],
  "eyes-shape": [
    { type: `child-prompt`, prompt: `tsurime` },
    { type: `child-prompt`, prompt: `tareme` },
  ],
  "eyebrows-shape": [{ type: `child-prompt`, prompt: `thick eyebrows` }],
  eyelashes: [
    {
      type: `parent-prompt`,
      prompt: `eyelashes`,
      children: [
        { type: `child-prompt`, prompt: `long eyelashes` },
        { type: `child-prompt`, prompt: `thick eyelashes` },
      ],
    },
  ],
  "hair-color": [
    { type: `color-parent`, colorCategory: `hair-color` },
    { type: `child-prompt`, prompt: `gradient hair` },
    { type: `child-prompt`, prompt: `colored inner hair` },
  ],
  "hair-length": [
    { type: `child-prompt`, prompt: `short hair` },
    { type: `child-prompt`, prompt: `medium hair` },
    { type: `child-prompt`, prompt: `long hair` },
    { type: `child-prompt`, prompt: `very long hair` },
    { type: `child-prompt`, prompt: `absurdly long hair` },
  ],
  "hair-style": [
    { type: `child-prompt`, prompt: `bob cut` },
    { type: `child-prompt`, prompt: `inverted bob` },
    { type: `child-prompt`, prompt: `pixie cut` },
    { type: `child-prompt`, prompt: `undercut` },
    { type: `child-prompt`, prompt: `flipped hair` },
    { type: `child-prompt`, prompt: `dreadlocks` },
    { type: `child-prompt`, prompt: `hime cut` },
    { type: `child-prompt`, prompt: `curly hair` },
    {
      type: `parent-prompt`,
      prompt: `drill hair`,
      children: [{ type: `child-prompt`, prompt: `twin drills` }],
    },
    { type: `child-prompt`, prompt: `hair flaps` },
    { type: `child-prompt`, prompt: `messy hair` },
    { type: `child-prompt`, prompt: `pointy hair` },
    { type: `child-prompt`, prompt: `ringlets` },
    { type: `child-prompt`, prompt: `straight hair` },
    { type: `child-prompt`, prompt: `wavy hair` },
    { type: `child-prompt`, prompt: `hair over shoulder` },
    { type: `child-prompt`, prompt: `short hair with long locks` },
  ],
  "tied-hair": [
    { type: `child-prompt`, prompt: `bow-shaped hair` },
    {
      type: `parent-prompt`,
      prompt: `braid`,
      children: [
        { type: `child-prompt`, prompt: `braided bangs` }, // TODO: front hair??}
        { type: `child-prompt`, prompt: `front braid` },
        { type: `child-prompt`, prompt: `side braid` },
        { type: `child-prompt`, prompt: `frentch braid` },
        { type: `child-prompt`, prompt: `crown braid` },
        { type: `child-prompt`, prompt: `single braid` },
        { type: `child-prompt`, prompt: `multiple braids` },
        { type: `child-prompt`, prompt: `twin braids` },
        { type: `child-prompt`, prompt: `low twin braids` },
        { type: `child-prompt`, prompt: `tri braids` },
      ],
    },
    { type: `child-prompt`, prompt: `flower-shaped hair` },
    {
      type: `parent-prompt`,
      prompt: `hair bun`,
      children: [
        { type: `child-prompt`, prompt: `braided bun` },
        { type: `child-prompt`, prompt: `single hair bun` },
        { type: `child-prompt`, prompt: `double bun` },
        { type: `child-prompt`, prompt: `cone hair bun` },
        { type: `child-prompt`, prompt: `doughnut hair bun` },
        { type: `child-prompt`, prompt: `heart hair bun` },
        { type: `child-prompt`, prompt: `triple bun` },
      ],
    },
    {
      type: `parent-prompt`,
      prompt: `hair rings`,
      children: [{ type: `child-prompt`, prompt: `single hair ring` }],
    },
    { type: `child-prompt`, prompt: `half updo` },
    { type: `child-prompt`, prompt: `one side up` },
    { type: `child-prompt`, prompt: `two side up` },
    { type: `child-prompt`, prompt: `low-braided long hair` },
    { type: `child-prompt`, prompt: `low-tied long hair` },
    { type: `child-prompt`, prompt: `mizura` },
    { type: `child-prompt`, prompt: `multi-tied-hair` },
    {
      type: `parent-prompt`,
      prompt: `ponytail`,
      children: [
        { type: `child-prompt`, prompt: `folded ponytail` },
        { type: `child-prompt`, prompt: `high ponytail` },
        { type: `child-prompt`, prompt: `short ponytail` },
        { type: `child-prompt`, prompt: `side ponytail` },
        { type: `child-prompt`, prompt: `split ponytail` },
      ],
    },
    { type: `child-prompt`, prompt: `topknot` },
    {
      type: `parent-prompt`,
      prompt: `twintails`,
      children: [
        { type: `child-prompt`, prompt: `low twintails` },
        { type: `child-prompt`, prompt: `short twintails` },
        { type: `child-prompt`, prompt: `tri tails` },
      ],
    },
  ],
  "front-hair": [
    { type: `child-prompt`, prompt: `arched bangs` },
    { type: `child-prompt`, prompt: `asymmetrical bangs` },
    { type: `child-prompt`, prompt: `bangs pinned back` },
    { type: `child-prompt`, prompt: `blunt bangs` },
    { type: `child-prompt`, prompt: `crossed bangs` },
    { type: `child-prompt`, prompt: `diagonal bangs` },
    { type: `child-prompt`, prompt: `blunt bangs` },
    { type: `child-prompt`, prompt: `dyed bangs` },
    { type: `child-prompt`, prompt: `blunt bangs` },
    { type: `child-prompt`, prompt: `hair over eyes` },
    { type: `child-prompt`, prompt: `hair over one eye` },
    { type: `child-prompt`, prompt: `long bangs` },
    { type: `child-prompt`, prompt: `parted bangs` },
    { type: `child-prompt`, prompt: `curtained bangs` },
    { type: `child-prompt`, prompt: `hair between eyes` },
    {
      type: `parent-prompt`,
      prompt: `hair intakes`,
      children: [{ type: `child-prompt`, prompt: `single hair intake` }],
    },
    { type: `child-prompt`, prompt: `blunt ends` },
    { type: `child-prompt`, prompt: `swept bangs` },
  ],
  sidelocks: [
    {
      type: `parent-prompt`,
      prompt: `sidelocks`,
      children: [
        { type: `child-prompt`, prompt: `asymmetrical sidelocks` },
        { type: `child-prompt`, prompt: `drill sidelocks` },
        { type: `child-prompt`, prompt: `low tied sidelocks` },
        { type: `child-prompt`, prompt: `single sidelock` },
      ],
    },
  ],
  "top-of-the-head": [
    {
      type: `parent-prompt`,
      prompt: `ahoge`,
      children: [
        { type: `child-prompt`, prompt: `heart ahoge` },
        { type: `child-prompt`, prompt: `huge ahoge` },
      ],
    },
    {
      type: `parent-prompt`,
      prompt: `antenna hair`,
      children: [{ type: `child-prompt`, prompt: `heart antenna hair` }],
    },
    { type: `child-prompt`, prompt: `hair pulled back` },
    { type: `child-prompt`, prompt: `hair slicked back` },
  ],
  "hair-misc": [
    { type: `child-prompt`, prompt: `alternate hairstyle` },
    { type: `child-prompt`, prompt: `hair down` },
    { type: `child-prompt`, prompt: `hair up` },
  ],
  "hair-ornament": [
    {
      type: `parent-prompt`,
      prompt: `hair ornament`,
      children: [
        { type: `child-prompt`, prompt: `hairpin` },
        { type: `child-prompt`, prompt: `hairclip` },
        { type: `child-prompt`, prompt: `cross hair ornament` },
        { type: `child-prompt`, prompt: `x hair ornament` },
        { type: `child-prompt`, prompt: `snowflake hair ornament` },
        { type: `child-prompt`, prompt: `bat hair ornament` },
        { type: `child-prompt`, prompt: `anchor hair ornament` },
        { type: `child-prompt`, prompt: `bone hair ornament` },
        { type: `child-prompt`, prompt: `butterfly hair ornament` },
        { type: `child-prompt`, prompt: `cat hair ornament` },
        { type: `child-prompt`, prompt: `character hair ornament` },
        { type: `child-prompt`, prompt: `clover hair ornament` },
        { type: `child-prompt`, prompt: `coin hair ornament` },
        { type: `child-prompt`, prompt: `crescent hair ornament` },
        { type: `child-prompt`, prompt: `cube hair ornament` },
        { type: `child-prompt`, prompt: `d-pad hair ornament` },
        { type: `child-prompt`, prompt: `feather hair ornament` },
        { type: `child-prompt`, prompt: `fish hair ornament` },
        { type: `child-prompt`, prompt: `food-themed hair ornament` },
        { type: `child-prompt`, prompt: `frog hair ornament` },
        { type: `child-prompt`, prompt: `hair beads` },
        { type: `child-prompt`, prompt: `hair bell` },
        { type: `child-prompt`, prompt: `hair bobbles` },
        { type: `child-prompt`, prompt: `hair flower` },
        { type: `child-prompt`, prompt: `hair scrunchie` },
        { type: `child-prompt`, prompt: `hair stick` },
        { type: `child-prompt`, prompt: `heart hair ornament` },
        { type: `child-prompt`, prompt: `kanzashi` },
        { type: `child-prompt`, prompt: `leaf hair ornament` },
        { type: `child-prompt`, prompt: `monocle hair ornament` },
        { type: `child-prompt`, prompt: `musical note hair ornament` },
        { type: `child-prompt`, prompt: `pom pom hair ornament` },
        { type: `child-prompt`, prompt: `rabbit hair ornament` },
        { type: `child-prompt`, prompt: `shark hair ornament` },
        { type: `child-prompt`, prompt: `skull hair ornament` },
        { type: `child-prompt`, prompt: `snake hair ornament` },
        { type: `child-prompt`, prompt: `star hair ornament` },
        { type: `child-prompt`, prompt: `tassel hair ornament` },
      ],
    },
    { type: `child-prompt`, prompt: `crown` },
    { type: `child-prompt`, prompt: `tiara` },
    { type: `child-prompt`, prompt: `diadem` },
    {
      type: `parent-prompt`,
      prompt: `headdress`,
      children: [{ type: `child-prompt`, prompt: `maid headdress` }],
    },
    { type: `child-prompt`, prompt: `veil` },
    { type: `child-prompt`, prompt: `headband` },
  ],
  "hair-bow": [
    {
      type: `parent-prompt`,
      prompt: `hair bow`,
      children: [{ type: `color-parent`, colorCategory: `bow-color` }],
    },
  ],
  "hair-ribbon": [
    {
      type: `parent-prompt`,
      prompt: `hair ribbon`,
      children: [{ type: `color-parent`, colorCategory: `ribbon-color` }],
    },
  ],
  hairband: [
    {
      type: `parent-prompt`,
      prompt: `hairband`,
      children: [{ type: `color-parent`, colorCategory: `hairband-color` }],
    },
    { type: `child-prompt`, prompt: `bow hairband` },
    { type: `child-prompt`, prompt: `frilled hairband` },
    { type: `child-prompt`, prompt: `lace-trimmed hairband` },
    { type: `child-prompt`, prompt: `lolita hairband` },
    { type: `child-prompt`, prompt: `striped hairband` },
    { type: `child-prompt`, prompt: `two-tone hairband` },
  ],
  misc: [
    { type: `child-prompt`, prompt: `pointy ears` },
    { type: `child-prompt`, prompt: `elf` },
    { type: `child-prompt`, prompt: `dark elf` },
    { type: `child-prompt`, prompt: `gyaru` },
    { type: `child-prompt`, prompt: `dark skin` },
    { type: `child-prompt`, prompt: `single horn` },
    { type: `child-prompt`, prompt: `mature female` },
    { type: `child-prompt`, prompt: `curvy` },
    { type: `child-prompt`, prompt: `loli` },
    { type: `child-prompt`, prompt: `fang` },
    { type: `child-prompt`, prompt: `facial mark` },
    {
      type: `parent-prompt`,
      prompt: `animal ears`,
      children: [
        { type: `child-prompt`, prompt: `cat ears` },
        { type: `child-prompt`, prompt: `cat tail` },
        { type: `child-prompt`, prompt: `fox ears` },
        { type: `child-prompt`, prompt: `fox tail` },
        { type: `child-prompt`, prompt: `animal ear fluff` },
      ],
    },
  ],
  breasts: [
    { type: `child-prompt`, prompt: `flat chest` },
    { type: `child-prompt`, prompt: `small breasts` },
    { type: `child-prompt`, prompt: `medium breasts` },
    { type: `child-prompt`, prompt: `large breasts` },
    { type: `child-prompt`, prompt: `huge breasts` },
  ],
};

type PromptEnableInfo = { [K in Prompt]: boolean };
const defaultInfo = allPrompts.reduce(
  (previous, prompt) => ({ ...previous, [prompt]: false }),
  {},
) as PromptEnableInfo;
export const promptEnableInfoStore = map<PromptEnableInfo>(defaultInfo);

export const queryAllPromptsByCategory = (category: Category): Prompt[] => {
  const recursiveReducer = (previous: Prompt[], current: UILeaf): Prompt[] => {
    switch (current.type) {
      case `parent-prompt`:
        return [
          ...previous,
          current.prompt,
          ...current.children.reduce(recursiveReducer, []),
        ];
      case `child-prompt`:
        return [...previous, current.prompt];
      case `color-parent`:
        return [
          ...previous,
          ...colorCategoryTree[current.colorCategory].map(
            ({ prompt }) => prompt,
          ),
        ];
    }
  };

  const leafs = uITree[category];
  return leafs.reduce(recursiveReducer, []);
};

export const queryChildren = (
  category: Category,
  parentPrompt: Prompt,
): UILeaf[] => {
  const recursiveSearch = (previous: UILeaf[], current: UILeaf): UILeaf[] => {
    if (current.type === `parent-prompt`) {
      if (current.prompt === parentPrompt) {
        return [...previous, ...current.children];
      }

      return [...previous, ...current.children.reduce(recursiveSearch, [])];
    }

    return previous;
  };

  const leafs = uITree[category];
  return leafs.reduce(recursiveSearch, []);
};

// Runtime validations

if (isDuplicated(allPrompts)) {
  for (const prompt of allPrompts) {
    if (2 <= allPrompts.filter((p) => prompt === p).length) {
      throw new Error(`\`${prompt}\` in \`allPrompts\` is duplicated!!`);
    }
  }

  throw new Error("`allPrompts` is duplicated!!");
}

if (isDuplicated(allCategories)) {
  throw new Error("`allCategories` is duplicated!!");
}

if (isDuplicated(allColorCategories)) {
  throw new Error("`allColorCategories` is duplicated!!");
}

if (isDuplicated(allColorNames)) {
  for (const colorName of allColorNames) {
    if (2 <= allColorNames.filter((c) => colorName === c).length) {
      throw new Error(`\`${colorName}\` in \`allColorName\` is duplicated!!`);
    }
  }

  throw new Error("`allColorName` is duplicated!!");
}

for (const category of allCategories) {
  if (!isValidCSSName(category))
    throw new Error(
      `\`${category}\` in \`allCategories\` is invalid CSS name.`,
    );
}

for (const colorCateogry of allColorCategories) {
  if (!isValidCSSName(colorCateogry))
    throw new Error(
      `\`${colorCateogry}\` in \`allColorCategories\` is invalid CSS name.`,
    );
}

for (const colorName of allColorNames) {
  if (!isValidCSSName(colorName))
    throw new Error(
      `\`${colorName}\` in \`allColorNames\` is invalid CSS name.`,
    );
}
