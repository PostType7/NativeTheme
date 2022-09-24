import { IconText } from "components/themes/PureBaldrTheme/partials";
import { memo } from "react";
import { NavItem } from ".";
import { HStack, VStack } from "../layout";

interface Props {
  blocks: any;
  parentId?: number | string;
  expand?: string[];
}

export const Tree: React.FC<Props> = memo(
  ({ blocks, parentId = 0, expand = [] }: Props) => {
    // @ts-ignore
    const items = blocks.filter((item) => item.parentId === parentId);
    if (!items.length) return null;

    return (
      <>
        {items.map((item: any) => {
          return (
            <VStack key={item.id}>
              <NavItem color="light" href={item.id}>
                <HStack width="max">
                  {item?.indentation && <div className=""></div>}
                  <IconText
                    icon={item?.icon ? item.icon : null}
                    text={item.name}
                  />
                </HStack>
              </NavItem>
              {
                // @ts-ignore
                expand.includes(item.id) ? (
                  <Tree blocks={blocks} parentId={item.id} expand={expand} />
                ) : (
                  <></>
                )
              }
            </VStack>
          );
        })}
      </>
    );
  }
);
