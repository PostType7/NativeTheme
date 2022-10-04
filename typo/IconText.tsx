import { HStack } from "components/themes/NativeTheme/layout";
import { Text } from "components/themes/NativeTheme/typo";
import {
  mixClass,
  textColorMix,
} from "helpers/P7mixClass";
interface Props {
  icon?: any;
  text?: string;
  color?: string;
  size?:string;
  tablet?:boolean;

}
export const IconText: React.FC<Props> = ({
  icon,
  text,
  color = "",
  size="",
  tablet=false

}) => {
  return (
    <HStack spacing="sm" className="">
      <div
        
        className={mixClass({
          'pt-0.5': size="sm",
          ...textColorMix(color),
        })}
      >
        {icon ? icon : null}
      </div>
      <Text className={tablet ? "hidden lg:block" : ""} size={size} color={color}>{text}</Text>
    </HStack>
  );
};
export default IconText
