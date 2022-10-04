import {
  mixClass,
  gapMix,
  paddingxMix,
  paddingyMix,
  paddinglMix,
  paddingrMix,
} from "helpers/P7mixClass";
import { HStackType } from "../types";

export const HStack: React.FC<HStackType> = ({
  className = "",
  spacing = "md",
  children,
  spacingX = "",
  spacingY = "",
  spacingL = "",
  spacingR = "",
}) => {
  return (
    <div
      className={mixClass({
        "flex": true,
        [className]: true,
        ...paddingxMix(spacingX),
        ...paddingyMix(spacingY),
        ...paddinglMix(spacingL),
        ...paddingrMix(spacingR),
        ...gapMix(spacing),
      })}
    >
      {children}
    </div>
  );
};
export default HStack;
