import { mixClass, widthConditions } from "helpers/P7mixClass";
import { TextMD, Text4XL, TextSM } from ".";

interface Props {
  title?: string;
  titleSize?: string;
  subTitle?: string;
  className?: string;
  width?: string;
}
export const TextCell: React.FC<Props> = ({
  title,
  subTitle,
  className = "",
  width = "",
  titleSize = "md",
}) => {
  return (
    <div
      className={mixClass({
        "flex flex-col": true,
        "gap-3": titleSize == "4xl",
        [className]: true,
        ...widthConditions(width),
      })}
    >
      {titleSize == "md" ? <TextMD>{title}</TextMD> : null}
      {titleSize == "4xl" ? <Text4XL>{title}</Text4XL> : null}
      <TextSM color="light">{subTitle}</TextSM>
    </div>
  );
};
