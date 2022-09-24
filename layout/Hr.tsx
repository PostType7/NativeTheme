import { mixClass } from "helpers/P7mixClass";

interface Props {
  className?: string;
  orientation?: string;
}
export const Hr: React.FC<Props> = ({ orientation, className = "" }) => {
  return (
    <div
      className={mixClass({
        "border-t": !orientation,
        "border-r w-px h-full self-normal": orientation,
        [className]: true,
      })}
    ></div>
  );
};
// export default HStack;
