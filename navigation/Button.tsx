import { mixClass, transition, widthConditions } from "helpers/P7mixClass";
import { HStack } from "../layout";

interface Props {
  bgColor?: string;
  width?: string;
  icon?: any;
  className?: string;
  href?: string;
  onClick?: any;
}
export const Button: React.FC<Props> = ({
  className = "",
  width = "",
  bgColor = "primary",
  icon,
  children,
}) => (
  <button
    title="Button"
    aria-label="Button"
    className={mixClass({
      ["rounded shadow-md inline-block px-6 py-3.5 font-medium text-xs hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"]: true,
      [className]: true,
      "bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800 text-white": bgColor == "primary",
      "bg-slate-500 hover:bg-slate-600 focus:bg-slate-600 active:bg-slate-700 text-white": bgColor == "secondary",
      "bg-slate-50 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-200 text-gray-600": bgColor == "light",
      ...widthConditions(width),
      ...transition(),
    })}
  >
    <HStack justify="left" spacing="sm">
      {icon ? icon : null} <div className="flex-1">{children}</div>
    </HStack>
  </button>
);
