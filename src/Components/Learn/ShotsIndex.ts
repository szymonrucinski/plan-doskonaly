import { PL } from "../../Locales/pl";
import { SHOT_TYPES } from "../../Logic/MovieFrame";

interface Dictionary<T> {
  [Key: string]: T;
}

const ShotsIndex: Dictionary<string> = {
  intro: PL.LEARNHELLO,
  [SHOT_TYPES.EXTREMELONGSHOT]: PL.EXTREMELONGSHOT,
  [SHOT_TYPES.LONGSHOT]: PL.LONGSHOT,
  [SHOT_TYPES.FULLSHOT]: PL.FULLSHOT,
  [SHOT_TYPES.MEDIUMSHOT]: PL.MEDIUMSHOT,
  [SHOT_TYPES.CLOSEUP]: PL.CLOSEUP,
  [SHOT_TYPES.MACRODETAIL]: PL.MACRODETAIL,
};

export default ShotsIndex;
