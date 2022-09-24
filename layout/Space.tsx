import { mixClass, widthConditions } from "helpers/P7mixClass";

interface Props {
  className?: string;
  width?: string;
}
export const Space: React.FC<Props> = ({ className = "", width = "" }) => {
  return (
    <div
      className={mixClass({
        [className]: true,
        ...widthConditions(width),
      })}
    ></div>
  );
};
