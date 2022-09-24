import {
  mixClass,
  gapConditions,
  justifyConditions,
  paddingConditions,
  paddingxConditions,
  widthConditions,
} from "helpers/P7mixClass";

interface Props {
  spacing?: string;
  justify?: string;
  className?: string;
  padding?: string;
  paddingx?: string;
  width?: string;
}
export const HStack: React.FC<Props> = ({
  className = "",
  spacing = "md",
  justify = "between",
  children,
  padding = "",
  paddingx = "",
  width = "full",
}) => {
  return (
    <div
      className={mixClass({
        "flex items-center": true,
        [className]: true,
        ...widthConditions(width),
        ...paddingxConditions(paddingx),
        ...justifyConditions(justify),
        ...gapConditions(spacing),
        ...paddingConditions(padding),
      })}
    >
      {children}
    </div>
  );
};
// export default HStack;
