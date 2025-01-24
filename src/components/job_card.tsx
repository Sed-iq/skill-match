import { Toast } from "../utils/toast_utils";
import Buttons from "./buttons";

export default ({ message, description, link, price }: JobCardModel) => {
  return (
    <div className="rounded-xl hover:scale-105 duration-100 text-gray-700 w-[25em] border-2 space-y-3 border-gray-300 p-7">
      <p className="lexend-bold text-gray-700">{message}</p>
      <p className="text-sm">{description}</p>
      <p className="text-xs font-bold">${price}</p>
      <div className="flex items-center justify-between space-x-5">
        <div className="w-[50%]">
          <Buttons.primary_button
            onClick={(e: any) => {
              const a = document.createElement("a");
              a.setAttribute("href", link);
              a.setAttribute("target", "_blank");
              a.click(); // simulate click :)
            }}
          >
            <p className="lexend-bold text-white text-xs">Apply</p>
          </Buttons.primary_button>
        </div>
        <div className="w-[50%]">
          <Buttons.custom_outline_button
            onClick={() => {
              Toast.success("Job link copied");
            }}
          >
            <p className="lexend-bold text-sm text-[var(--primary-color)]">
              Share
            </p>
          </Buttons.custom_outline_button>
        </div>
      </div>
    </div>
  );
};
