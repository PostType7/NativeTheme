import {
  mixClass,
  gapMix,
  paddingyMix,
  paddingxMix,
} from "helpers/P7mixClass";

interface Props {
  spacing?: string;
  className?: string;
  spacingY?: string;
  spacingX?: string;
}
export const Grid: React.FC<Props> = ({
  className = "",
  spacing = "md",
  spacingY = "",
  spacingX = "",
  children,
}) => {
  return (
    <div
      className={mixClass({
        grid: true,
        [className]: true,
        ...gapMix(spacing),
        ...paddingyMix(spacingY),
        ...paddingxMix(spacingX),
      })}
    >
      {children}
    </div>
  );
};
