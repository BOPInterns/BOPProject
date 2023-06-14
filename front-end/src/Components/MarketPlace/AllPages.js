import { CampaignComp } from './CampaignComp';
import { SolutionComp } from './SolutionComp';
import { ServiceComp } from './ServicesComp';


export const AllPages = () => {
    return (
        <div>
            <CampaignComp/>
            <SolutionComp/>
            <ServiceComp/>
        </div>
    )
}