import {
  mixClass,
  gapMix,
  paddingyMix,
  paddingrMix,
  paddingxMix,
} from "helpers/P7mixClass";

interface Props {
  spacing?: string;
  className?: string;
  spacingY?: string;
  spacingX?: string;
  spacingR?: string;
}
export const VStack: React.FC<Props> = ({
  className = "",
  spacing = "md",
  spacingY="",
  spacingX="",
  spacingR="",
  children,
}) => {
  return (
    <div
      className={mixClass({
        "flex flex-col": true,
        [className]: true,
        ...gapMix(spacing),
        ...paddingyMix(spacingY),
        ...paddingxMix(spacingX),
        ...paddingrMix(spacingR),
      })}
    >
      {children}
    </div>
  );
};
