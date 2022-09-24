import {
  mixClass,
  gapConditions,
  justifyConditions,
  itemsConditions,
  widthConditions,
} from "helpers/P7mixClass";

interface Props {
  spacing?: string;
  items?: string;
  justify?: string;
  className?: string;
  width?: string;
}
export const VStack: React.FC<Props> = ({
  className = "",
  spacing = "md",
  justify = "between",
  items = "",
  width = "full",
  children,
}) => {
  return (
    <div
      className={mixClass({
        "flex flex-col": true,
        [className]: true,
        ...widthConditions(width),
        ...justifyConditions(justify),
        ...itemsConditions(items),
        ...gapConditions(spacing),
      })}
    >
      {children}
    </div>
  );
};
