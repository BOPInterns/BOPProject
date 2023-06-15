import { CampaignComp } from "./CampaignComp";
import { SolutionComp } from "./SolutionComp";
import { ServiceComp } from "./ServiceComp";

export const AllPages = () => {
  return (
    <div>
      <CampaignComp />
      <SolutionComp />
      <ServiceComp />
    </div>
  );
};
