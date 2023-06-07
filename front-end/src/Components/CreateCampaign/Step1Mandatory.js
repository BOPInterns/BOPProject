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
    const [videoLink, setVideoLink] = useState(localStorage.getItem('videoLink'));

    useEffect(() => {
        localStorage.setItem('campaignName', campaignName);
    }, [campaignName]);

    useEffect(() => {
        localStorage.setItem('campaignTags', JSON.stringify(campaignTags));
    }, [campaignTags]);

    useEffect(() => {
        localStorage.setItem('videoLink', videoLink);
    }, [videoLink]);

    useEffect(() => {
        if ((campaignName.length == 0) || (campaignTags.length == 0))
            return localStorage.setItem('step1', false);
        localStorage.setItem('step1', true);
    }, [campaignName, campaignTags]);

    return (
        <div>
            <Card className="">
                        <Card.Title className="mx-3 mt-3">
                            Mandatory fields
                            <hr></hr>
                        </Card.Title>
                        <Card.Body>
                            <Form>
                                <FormGroup className="mb-2">
                                    <Form.Label>Campaign name</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Campaign name" 
                                        autoFocus="autofocus"
                                        value={campaignName}
                                        onChange={(e) => setCampaignName(e.target.value)}
                                    /><Form.Text className="text-muted">Explainer text about the role of the campaign name. Do's and Dont's</Form.Text>
                                </FormGroup>
                                
                                <TagInput 
                                    header="Enter Campaign Tags:"
                                    placeholder="Enter a Tag"
                                    data="Tag"
                                    func={setCampaignTags}
                                />

                            </Form>
                    </Card.Body>
            </Card>
        </div>    
    )
}