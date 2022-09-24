import { useRouter } from "next/router";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { HStack } from "../layout";

interface Props {
  className?: string;
  pages?: number;
  page?: number
}
export const Pagination: React.FC<Props> = ({ className = "", pages = 0, page=1 }) => {
  const router = useRouter();
  // @ts-ignore
  
  return (
    <HStack justify="left" spacing="sm">
      <div className="px-3 py-1.5 hover:bg-slate-100 hover:shadow cursor-pointer hover:text-blue-800 transition duration-150 ease-in-out">
        <FiChevronLeft />
      </div>
      {Array(pages)
        .fill(0)
        .map((el:any, i: number) => {
          return page != i + 1 ? (
            <div
              key={`inactive${i}`}
              onClick={(e) => {
                e.preventDefault();
                router.push(`/backoffice/notifications/${i + 1}`);
              }}
              className="px-3 py-1.5 hover:bg-white rounded cursor-pointer hover:text-blue-700 transition duration-150 ease-in-out"
            >
              {i + 1}{" "}
            </div>
          ) : (
            <div key={`active${i}`} className="px-3 py-1.5 shadow bg-white rounded">{i + 1}</div>
          );
        })}
      <div className="px-3 py-1.5 hover:bg-slate-100 hover:shadow cursor-pointer hover:text-blue-800 transition duration-150 ease-in-out">
        <FiChevronRight />
      </div>
    </HStack>
  );
};
