import {
  mixClass,
  textAlignConditions,
  textColorConditions,
  widthConditions,
} from "helpers/P7mixClass";

interface Props {
  color?: string;
  width?: string;
  align?: string;
  className?: string;
}
export const TextMD: React.FC<Props> = ({
  className = "",
  color = "primary",
  width = "",
  align = "",
  children,
}) => {
  return (
    <p
      className={mixClass({
        "text-base": true,
        [className]: true,
        ...textColorConditions(color),
        ...textAlignConditions(align),
        ...widthConditions(width),
      })}
    >
      {children}
    </p>
  );
};
