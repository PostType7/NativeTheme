import { HStack } from "../layout";
import { TextXL } from ".";

interface Props {
  title?: string;
  actions?: any; // NODE
}
export const SectionHeader: React.FC<Props> = ({ title, actions }) => {
  return (
    <HStack className="py-6">
      <TextXL className="flex-1">{title}</TextXL>
      {actions ? actions : null}
    </HStack>
  );
};
