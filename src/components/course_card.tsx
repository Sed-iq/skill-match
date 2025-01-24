import { CourseCardModel } from "../types/course_card";
import Buttons from "./buttons";

// Handles course card adapter
export default ({ description, icon, link, title }: CourseCardModel) => {
  return (
    <div className="rounded-xl w-[25em] border-2 space-y-4 border-gray-300 p-4">
      <div className="flex space-x-3 item-start">
        {icon}
        <p className="text-gray-700 lexend-bold">{title}</p>
      </div>
      <p className="text-sm text-gray-700">{description}</p>
      <div className="w-[50%]">
        <Buttons.custom_outline_button outline_color="border-gray-400 hover:bg-gray-100">
          <p className="text-gray-600 text-xs">Get Started</p>
        </Buttons.custom_outline_button>
      </div>
    </div>
  );
};
