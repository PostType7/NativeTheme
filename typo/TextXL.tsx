import { mixClass, textColorConditions } from "helpers/P7mixClass";

interface Props {
  color?: string;
  className?: string;
}
export const TextXL: React.FC<Props> = ({
  className = "",
  color = "primary",
  children,
}) => {
  return (
    <p
      className={mixClass({
        "text-xl": true,
        [className]: true,
        ...textColorConditions(color),
      })}
    >
      {children}
    </p>
  );
};
