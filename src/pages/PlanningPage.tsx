import { ActionButton } from "~/components/actionButton/ActionButton";
import { Sidebar } from "~/components/sidebar/Sidebar";
import AllTermsView from "~/assets/allTermsView.svg?react";
import YearView from "~/assets/yearView.svg?react";
import TermView from "~/assets/termView.svg?react";
import { ShareIcon } from "@heroicons/react/24/solid";

export const PlanningPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="px-4 py-2 w-11/12">
        <h1 className="text-3xl">My Plan</h1>
        <div className="flex justify-between my-2">
          <ul className="space-x-4">
            <ActionButton
              className="inline-block"
              text="All Terms"
              icon={<AllTermsView />}
            />
            <ActionButton
              className="inline-block"
              text="Year"
              icon={<YearView />}
            />
            <ActionButton
              className="inline-block"
              text="Term"
              icon={<TermView />}
            />
          </ul>

          <div>
            <ActionButton text="Share" icon={<ShareIcon />} />
          </div>
        </div>
        <table>
          
        </table>
        <hr />
      </div>
    </div>
  );
};
