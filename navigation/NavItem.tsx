import {
  gapConditions,
  mixClass,
  textColorConditions,
  textHoverColorConditions,
  widthConditions,
} from "helpers/P7mixClass";
import { HStack, VStack } from "../layout";
import Link from "next/link";

interface Props {
  className?: string;
  href?: string;
  onClick?: any;
  color?:string;
}
export const NavItem: React.FC<Props> = ({
  className = "",
  href,
  onClick,
  children,
  color = "link-primary"
}) => {
  return (
    <Link href={href ? href : "#"}>
      <a
        className={mixClass({
          "cursor-pointer transition duration-150 ease-in-out": true,
          ...textHoverColorConditions(color),
          ...textColorConditions(color),
          [className]: true,
        })}
        onClick={onClick}
      >
        {children}
      </a>
    </Link>
  );
};
