import {
  mixClass,
  gapConditions,
  justifyConditions,
  itemsConditions,
} from "helpers/P7mixClass";

interface Props {
  spacing?: string;
  items?: string;
  justify?: string;
  columns?: number;
  className?: string;
}
export const Grid: React.FC<Props> = ({
  className = "",
  spacing = "md",
  justify = "between",
  columns = 0,
  items = "",
  children,
}) => {
  return (
    <div
      className={mixClass({
        grid: true,
        [className]: true,
        "md:grid-cols-2": columns == 2,
        "md:grid-cols-3": columns == 3,
        "md:grid-cols-4": columns == 4,
        ...justifyConditions(justify),
        ...itemsConditions(items),
        ...gapConditions(spacing),
      })}
    >
      {children}
    </div>
  );
};
