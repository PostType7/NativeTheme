import {
  mixClass,
  paddingrMix,
  paddingxMix,
  paddingyMix,
  textColorMix,
  textHoverColorMix,
} from "helpers/P7mixClass";
import Link from "next/link";

interface Props {
  className?: string;
  href?: string;
  onClick?: any;
  color?: string;
  line?: string;
  spacing?: string;
  spacingX?: string;
  spacingY?: string;
}
export const NavItem: React.FC<Props> = ({
  className = "",
  href,
  onClick,
  children,
  color = "link-primary",
  spacing = "",
  spacingX = "",
  spacingY = "",
}) => {
  return (
    <Link href={href ? href : "#"}>
      <a
        className={mixClass({
          "cursor-pointer transition duration-150 ease-in-out": true,
          ...textHoverColorMix(color),
          ...textColorMix(color),
          ...paddingyMix(spacingY ? spacingY : spacing),
          ...paddingxMix(spacingX ? spacingX : spacing),
          [className]: true,
        })}
        onClick={onClick}
      >
        {children}
      </a>
    </Link>
  );
};
export default NavItem