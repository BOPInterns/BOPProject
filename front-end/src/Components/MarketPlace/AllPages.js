import { CampaignComp } from "./CampaignComp";
import { SolutionComp } from "./SolutionComp";
import { ServiceComp } from "./ServiceComp";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

export const AllPages = ({filteredCampaigns, filteredSolutions, filteredServices}) => {
  return (
    <div>
      <CampaignComp filteredCampaigns={filteredCampaigns} />
      <SolutionComp filteredSolutions={filteredSolutions} />
      <ServiceComp filteredServices={filteredServices} />
    </div>
  );
};
