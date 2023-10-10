import { atom, computed, type WritableAtom } from "nanostores";

export const sliderButtonKeys = [`oneLine`] as const;
export type SliderButtonKeys = (typeof sliderButtonKeys)[number];
export const sliderButtonStoreMap: ReadonlyMap<
  SliderButtonKeys,
  WritableAtom<boolean>
> = new Map([[`oneLine`, atom(false)]]);
