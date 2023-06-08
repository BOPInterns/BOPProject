import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import TagInput from '../TagInput';
import { useState } from 'react';
import { useEffect } from 'react';

export const Step1MandatoryFields = () => {
    if (localStorage.getItem('campaignName') === null) 
        localStorage.setItem('campaignName', '');
    if (localStorage.getItem('campaignTags') === null)
        localStorage.setItem('campaignTags', '[]');
    if (localStorage.getItem('videoLink') === null)
        localStorage.setItem('videoLink', '');
    if (localStorage.getItem('step1') === null)
        localStorage.setItem('step1', false);

    const [campaignName, setCampaignName] = useState(localStorage.getItem('campaignName'));
    const [campaignTags, setCampaignTags] = useState(JSON.parse(localStorage.getItem('campaignTags')));
    //const [videoLink, setVideoLink] = useState(localStorage.getItem('videoLink'));

    useEffect(() => {
        localStorage.setItem('campaignName', campaignName);
    }, [campaignName]);

    useEffect(() => {
        localStorage.setItem('campaignTags', JSON.stringify(campaignTags));
    }, [campaignTags]);

    // validation
    useEffect(() => {
        if ((campaignName.length < 4) || (campaignName.length > 100) || 
            (campaignTags.length < 3) || (campaignTags.length > 5) || 
            !validateYouTubeUrl(localStorage.getItem('videoLink')))
            return localStorage.setItem('step1', false);
        localStorage.setItem('step1', true);
    }, [campaignName, campaignTags]);

    const displayTags = () => {
        var list = "Tags: ";
        for (let i = 0; i < campaignTags.length; i++) {
            list += campaignTags[i];
            if (i != campaignTags.length - 1) {
                list += ", ";
            }
        }
        return list;
    }

    function validateYouTubeUrl(url){
        if (url != '') {
            var regExp = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
            if (url.match(regExp)) {
                return true;
            }
            else return false;
        }
        return true;
    }

    return (
        <div>
            <Card className="">
                        <Card.Title className="mx-3 mt-3">
                            Mandatory fields
                            <hr></hr>
                        </Card.Title>
                        <Card.Body>
                            <Card.Text className="mb-4">
                                <strong>Please provide a campaign name and tags you would like associated with your campaign</strong>
                            </Card.Text>
                            <Form>
                                <FormGroup className="mb-2">
                                    <Form.Label>Campaign name</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Campaign name" 
                                        value={campaignName}
                                        onChange={(e) => setCampaignName(e.target.value)}
                                    /><Form.Text className="text-muted">Explainer text about the role of the campaign name. Do's and Dont's</Form.Text>
                                </FormGroup>
                                
                                <TagInput 
                                    header="Enter Campaign Tags:"
                                    placeholder="Enter a Tag"
                                    data="Tag"
                                    value={campaignTags}
                                    func={setCampaignTags}
                                />

                            </Form>
                    </Card.Body>
            </Card>
        </div>    
    )
}