import { mixClass } from "helpers/P7mixClass";

interface Props {
  className?: string;
  vertical?: boolean;
}
export const Hr: React.FC<Props> = ({ vertical = false, className = "" }) => {
  return (
    <div
      className={mixClass({
        "border-t": !vertical,
        "border-r w-px h-full self-normal": vertical,
        [className]: true,
      })}
    ></div>
  );
};
// export default HStack;
