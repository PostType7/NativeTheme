import {
  mixClass,
  bgColorConditions,
  textColorConditions,
} from "helpers/P7mixClass";

interface Props {
  bgColor?: string;
  color?: string;
}
export const Color: React.FC<Props> = ({
  color = "primary",
  bgColor = "",
  children,
}) => {
  return (
    <div
      className={mixClass({
        ...bgColorConditions(bgColor),
        ...textColorConditions(color),
      })}
    >
      {children}
    </div>
  );
};
