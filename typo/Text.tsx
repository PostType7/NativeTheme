import { mixClass, textColorMix, textSizeMix } from "helpers/P7mixClass";

interface Props {
  size?: string;
  color?: string;
  className?: string;
}
export const Text: React.FC<Props> = ({
  className = "",
  size = "",
  color = "",
  children,
}) => {
  return (
    <p
      className={mixClass({
        [className]: true,
        ...textColorMix(color),
        ...textSizeMix(size),
      })}
    >
      {children}
    </p>
  );
};
