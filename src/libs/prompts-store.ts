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
    category: `eyesColors` as const,
    prompt: `heterochromia` as const,
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
    prompt: `hime cut` as const, // suggest: `blunt ends` , `blunt bangs`
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
  {
    category: `hairStyles` as const,
    prompt: `hair over shoulder` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `bow-shaped hair` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `braid` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `braided bangs` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `front braid` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `side braid` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `frentch braid` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `crown braid` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `single braid` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `multiple braids` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `twin braids` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `low twin braids` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `tri braids` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `flower-shaped hair` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `hair bun` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `braided bun` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `single hair bun` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `double bun` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `cone hair bun` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `doughnut hair bun` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `heart hair bun` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `triple bun` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `hair rings` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `single hair ring` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `half updo` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `one side up` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `two side up` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `low-braided long hair` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `low-tied long hair` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `mizura` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `multi-tied hair` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `multi-tied hair` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `ponytail` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `folded ponytail` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `high ponytail` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `short ponytail` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `side ponytail` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `split ponytail` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `topknot` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `twintails` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `low twintails` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `short twintails` as const,
    isEnable: false,
  },
  {
    category: `tiedHair` as const,
    prompt: `tri tails` as const,
    isEnable: false,
  },
  {
    category: `frontHair` as const,
    prompt: `arched bangs` as const,
    isEnable: false,
  },
  {
    category: `frontHair` as const,
    prompt: `asymmetrical bangs` as const,
    isEnable: false,
  },
  {
    category: `frontHair` as const,
    prompt: `bangs pinned back` as const,
    isEnable: false,
  },
  {
    category: `frontHair` as const,
    prompt: `blunt bangs` as const,
    isEnable: false,
  },
  {
    category: `frontHair` as const,
    prompt: `crossed bangs` as const,
    isEnable: false,
  },
  {
    category: `frontHair` as const,
    prompt: `diagonal bangs` as const,
    isEnable: false,
  },
  {
    category: `frontHair` as const,
    prompt: `blunt bangs` as const,
    isEnable: false,
  },
  {
    category: `frontHair` as const,
    prompt: `dyed bangs` as const,
    isEnable: false,
  },
  {
    category: `frontHair` as const,
    prompt: `blunt bangs` as const,
    isEnable: false,
  },
  {
    category: `frontHair` as const,
    prompt: `hair over eyes` as const,
    isEnable: false,
  },
  {
    category: `frontHair` as const,
    prompt: `hair over one eye` as const,
    isEnable: false,
  },
  {
    category: `frontHair` as const,
    prompt: `long bangs` as const,
    isEnable: false,
  },
  {
    category: `frontHair` as const,
    prompt: `parted bangs` as const,
    isEnable: false,
  },
  {
    category: `frontHair` as const,
    prompt: `curtained bangs` as const,
    isEnable: false,
  },
  {
    category: `frontHair` as const,
    prompt: `hair between eyes` as const,
    isEnable: false,
  },
  {
    category: `frontHair` as const,
    prompt: `hair intakes` as const,
    isEnable: false,
  },
  {
    category: `frontHair` as const,
    prompt: `single hair intake` as const,
    isEnable: false,
  },
  {
    category: `frontHair` as const,
    prompt: `blunt ends` as const, // suggest: `blunt bangs` ,
    isEnable: false,
  },
  {
    category: `sidelocks` as const,
    prompt: `sidelocks` as const,
    isEnable: false,
  },
  {
    category: `sidelocks` as const,
    prompt: `asymmetrical sidelocks` as const,
    isEnable: false,
  },
  {
    category: `sidelocks` as const,
    prompt: `drill sidelocks` as const,
    isEnable: false,
  },
  {
    category: `sidelocks` as const,
    prompt: `low tied sidelocks` as const,
    isEnable: false,
  },
  {
    category: `sidelocks` as const,
    prompt: `single sidelock` as const, // suggest: `asymmetrical sidelocks` , `asymmetrical hair`
    isEnable: false,
  },
  {
    category: `topOfTheHead` as const,
    prompt: `ahoge` as const,
    isEnable: false,
  },
  {
    category: `topOfTheHead` as const,
    prompt: `heart ahoge` as const,
    isEnable: false,
  },
  {
    category: `topOfTheHead` as const,
    prompt: `huge ahoge` as const,
    isEnable: false,
  },
  {
    category: `topOfTheHead` as const,
    prompt: `antenna hair` as const,
    isEnable: false,
  },
  {
    category: `topOfTheHead` as const,
    prompt: `heart antenna hair` as const,
    isEnable: false,
  },
  {
    category: `topOfTheHead` as const,
    prompt: `hair pulled back` as const,
    isEnable: false,
  },
  {
    category: `topOfTheHead` as const,
    prompt: `hair slicked back` as const,
    isEnable: false,
  },
  {
    category: `hairMisc` as const,
    prompt: `alternate hairstyle` as const,
    isEnable: false,
  },
  {
    category: `hairMisc` as const,
    prompt: `hair down` as const,
    isEnable: false,
  },
  {
    category: `hairMisc` as const,
    prompt: `hair up` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `hair ornament` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `hairpin` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `hairclip` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `cross hair ornament` as const, // suggest: `hairpin`
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `x hair ornament` as const, // suggest: `hairpin`
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `snowflake hair ornament` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `bat hair ornament` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `anchor hair ornament` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `bone hair ornament` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `butterfly hair ornament` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `cat hair ornament` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `character hair ornament` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `clover hair ornament` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `coin hair ornament` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `crescent hair ornament` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `cube hair ornament` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `d-pad hair ornament` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `feather hair ornament` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `fish hair ornament` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `food-themed hair ornament` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `frog hair ornament` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `hair beads` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `hair bell` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `hair bobbles` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `hair flower` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `hair scrunchie` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `hair stick` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `heart hair ornament` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `kanzashi` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `leaf hair ornament` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `monocle hair ornament` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `musical note hair ornament` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `pom pom hair ornament` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `rabbit hair ornament` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `shark hair ornament` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `skull hair ornament` as const, // suggest : `bone hair ornament`
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `snake hair ornament` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `star hair ornament` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `tassel hair ornament` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `crown` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `tiara` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `headdress` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `maid headdress` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `veil` as const,
    isEnable: false,
  },
  {
    category: `hairOrnament` as const,
    prompt: `headband` as const,
    isEnable: false,
  },
  {
    category: `hairBow` as const,
    prompt: `hair bow` as const,
    isEnable: false,
  },
  {
    category: `hairBow` as const,
    prompt: `red bow` as const,
    isEnable: false,
  },
  {
    category: `hairBow` as const,
    prompt: `pink bow` as const,
    isEnable: false,
  },
  {
    category: `hairBow` as const,
    prompt: `orange bow` as const,
    isEnable: false,
  },
  {
    category: `hairBow` as const,
    prompt: `brown bow` as const,
    isEnable: false,
  },
  {
    category: `hairBow` as const,
    prompt: `yellow bow` as const,
    isEnable: false,
  },
  {
    category: `hairBow` as const,
    prompt: `green bow` as const,
    isEnable: false,
  },
  {
    category: `hairBow` as const,
    prompt: `aqua bow` as const,
    isEnable: false,
  },
  {
    category: `hairBow` as const,
    prompt: `blue bow` as const,
    isEnable: false,
  },
  {
    category: `hairBow` as const,
    prompt: `purple bow` as const,
    isEnable: false,
  },
  {
    category: `hairBow` as const,
    prompt: `black bow` as const,
    isEnable: false,
  },
  {
    category: `hairBow` as const,
    prompt: `grey bow` as const,
    isEnable: false,
  },
  {
    category: `hairBow` as const,
    prompt: `white bow` as const,
    isEnable: false,
  },

  {
    category: `hairRibbon` as const,
    prompt: `hair ribbon` as const,
    isEnable: false,
  },

  {
    category: `hairRibbon` as const,
    prompt: `red ribbon` as const,
    isEnable: false,
  },
  {
    category: `hairRibbon` as const,
    prompt: `pink ribbon` as const,
    isEnable: false,
  },
  {
    category: `hairRibbon` as const,
    prompt: `orange ribbon` as const,
    isEnable: false,
  },
  {
    category: `hairRibbon` as const,
    prompt: `brown ribbon` as const,
    isEnable: false,
  },
  {
    category: `hairRibbon` as const,
    prompt: `yellow ribbon` as const,
    isEnable: false,
  },
  {
    category: `hairRibbon` as const,
    prompt: `green ribbon` as const,
    isEnable: false,
  },
  {
    category: `hairRibbon` as const,
    prompt: `aqua ribbon` as const,
    isEnable: false,
  },
  {
    category: `hairRibbon` as const,
    prompt: `blue ribbon` as const,
    isEnable: false,
  },
  {
    category: `hairRibbon` as const,
    prompt: `purple ribbon` as const,
    isEnable: false,
  },
  {
    category: `hairRibbon` as const,
    prompt: `black ribbon` as const,
    isEnable: false,
  },
  {
    category: `hairRibbon` as const,
    prompt: `grey ribbon` as const,
    isEnable: false,
  },
  {
    category: `hairRibbon` as const,
    prompt: `white ribbon` as const,
    isEnable: false,
  },

  {
    category: `hairband` as const,
    prompt: `hairband` as const,
    isEnable: false,
  },
  {
    category: `hairband` as const,
    prompt: `red hairband` as const,
    isEnable: false,
  },
  {
    category: `hairband` as const,
    prompt: `pink hairband` as const,
    isEnable: false,
  },
  {
    category: `hairband` as const,
    prompt: `orange hairband` as const,
    isEnable: false,
  },
  {
    category: `hairband` as const,
    prompt: `brown hairband` as const,
    isEnable: false,
  },
  {
    category: `hairband` as const,
    prompt: `yellow hairband` as const,
    isEnable: false,
  },
  {
    category: `hairband` as const,
    prompt: `green hairband` as const,
    isEnable: false,
  },
  {
    category: `hairband` as const,
    prompt: `aqua hairband` as const,
    isEnable: false,
  },
  {
    category: `hairband` as const,
    prompt: `blue hairband` as const,
    isEnable: false,
  },
  {
    category: `hairband` as const,
    prompt: `purple hairband` as const,
    isEnable: false,
  },
  {
    category: `hairband` as const,
    prompt: `black hairband` as const,
    isEnable: false,
  },
  {
    category: `hairband` as const,
    prompt: `grey hairband` as const,
    isEnable: false,
  },
  {
    category: `hairband` as const,
    prompt: `white hairband` as const,
    isEnable: false,
  },
  {
    category: `hairband` as const,
    prompt: `bow hairband` as const,
    isEnable: false,
  },
  {
    category: `hairband` as const,
    prompt: `frilled hairband` as const,
    isEnable: false,
  },
  {
    category: `hairband` as const,
    prompt: `lace-trimmed hairband` as const,
    isEnable: false,
  },
  {
    category: `hairband` as const,
    prompt: `lolita hairband` as const, // suggest : frilled hairband
    isEnable: false,
  },
  {
    category: `hairband` as const,
    prompt: `striped hairband` as const,
    isEnable: false,
  },
  {
    category: `hairband` as const,
    prompt: `two-tone hairband` as const,
    isEnable: false,
  },
  {
    category: `misc` as const,
    prompt: `pointy ears` as const,
    isEnable: false,
  },
  {
    category: `misc` as const,
    prompt: `elf` as const,
    isEnable: false,
  },
  {
    category: `misc` as const,
    prompt: `gyaru` as const,
    isEnable: false,
  },
  {
    category: `misc` as const,
    prompt: `dark skin` as const,
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
