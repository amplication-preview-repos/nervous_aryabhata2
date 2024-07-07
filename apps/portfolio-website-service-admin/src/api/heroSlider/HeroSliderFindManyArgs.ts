import { HeroSliderWhereInput } from "./HeroSliderWhereInput";
import { HeroSliderOrderByInput } from "./HeroSliderOrderByInput";

export type HeroSliderFindManyArgs = {
  where?: HeroSliderWhereInput;
  orderBy?: Array<HeroSliderOrderByInput>;
  skip?: number;
  take?: number;
};
