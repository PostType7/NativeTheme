import { mixClass, bgColorMix, textColorMix } from "helpers/P7mixClass";

interface Props {
  bg?: string;
  text?: string;
  className?: string;
}
export const Color: React.FC<Props> = ({
  bg = "primary",
  text = "",
  className = "",
  children,
}) => {
  return (
    <div
      className={mixClass({
        [className]: className,
        ...bgColorMix(bg),
        ...textColorMix(text),
      })}
    >
      {children}
    </div>
  );
};
