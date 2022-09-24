import {
  mixClass,
  textAlignConditions,
  textColorConditions,
  widthConditions,
} from "helpers/P7mixClass";

interface Props {
  color?: string;
  align?: string;
  width?: string;
  className?: string;
}
export const TextSM: React.FC<Props> = ({
  className = "",
  color = "primary",
  width = "",
  align = "",
  children,
}) => {
  return (
    <p
      className={mixClass({
        "text-sm": true,
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
