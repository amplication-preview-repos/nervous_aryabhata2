import { HeroSlider as THeroSlider } from "../api/heroSlider/HeroSlider";

export const HEROSLIDER_TITLE_FIELD = "heading";

export const HeroSliderTitle = (record: THeroSlider): string => {
  return record.heading?.toString() || String(record.id);
};
