import { mixClass, textColorConditions } from "helpers/P7mixClass";

interface Props {
  color?: string;
  className?: string;
}
export const Text4XL: React.FC<Props> = ({
  className = "",
  color = "primary",
  children,
}) => {
  return (
    <p
      className={mixClass({
        "text-4xl": true,
        [className]: true,
        ...textColorConditions(color),
      })}
    >
      {children}
    </p>
  );
};
