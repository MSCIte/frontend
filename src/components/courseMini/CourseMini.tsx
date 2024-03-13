import { Pane } from "../pane/Pane";

interface CourseMiniSchema {
  courseCode: string;
  orderNumber: number;
  onClick?: () => void;
}

export const CourseMini = (props: CourseMiniSchema) => {
  return (
    <Pane
      className="group relative mb-4 h-24 w-24 cursor-pointer transition duration-200 hover:scale-105 2xl:h-28 2xl:w-32"
      onClick={props.onClick}
    >
      <div className="flex flex-col justify-between">
        <div className="flex flex-row justify-between ">
          <div className="text-lg 2xl:text-xl">{props.courseCode}</div>
          <button
            className="transform text-gray-300 transition duration-200 hover:scale-105 hover:text-gray-400 "
            onClick={(e) => {
              e.stopPropagation();
            }}
          ></button>
          <div>
            <div className="line-clamp-3 text-xs text-gray-400">
              {props.orderNumber}
            </div>
          </div>
        </div>
      </div>
      <button className="absolute bottom-0 right-0 mb-4 mr-4 flex items-center rounded-lg bg-white p-1 transition-transform hover:scale-105">
        <div className="bg-none text-4xl">+</div>
      </button>
    </Pane>
  );
};
