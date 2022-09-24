import { mixClass } from "helpers/P7mixClass";

interface Props {
  className?: string;
}
export const Td: React.FC<Props> = ({ className = "", children }) => {
  return (
    <th
      className={mixClass({
        "p-4 text-left border-b font-normal": true,
        [className]: true,
      })}
    >
      {children}
    </th>
  );
};
// export default HStack;
