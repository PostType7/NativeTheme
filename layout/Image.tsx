import {
  mixClass,
  roundedConditions,
  sizeConditions,
} from "helpers/P7mixClass";

interface Props {
  size?: string;
  rounded?: string;
  className?: string;
  url?: string | URL;
}
export const Image: React.FC<Props> = ({
  className = "",
  size = "md",
  rounded = "full",
  url = "",
}) => {

  return (
    <div
      className={mixClass({
        "bg-red-200 flex items-center justify-center overflow-hidden": true,
        ...roundedConditions(rounded),
        ...sizeConditions(size),
        [className]: true,
      })}
    >
      {url ? (
        // Type 'string | URL' is not assignable to type 'string | undefined'.
        // @ts-ignore
        <img width="64" height="64" src={url} />

       
      ) : (
        <span>IMG</span>
      )}
    </div>
  );
};
