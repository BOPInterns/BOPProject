import { HorizontalCampaignCard } from './HorizontalCampaignCard';


export const OrgCampaignOwner = ({campData}) => {
    return (
        <div>
        {campData.name == '' ? <body>No campaign data</body> : campData.map((camp, index) => (
            <HorizontalCampaignCard
                key={index}
                variant="secondary"
                className="mr-2 mb-2 bg-secondary"
                style={{marginRight: 2}}
                name={camp.name}
                phase={camp.phase}
                description={camp.description}
                tags={camp.tags}
            ></HorizontalCampaignCard>
        ))}
        </div>
    )
}