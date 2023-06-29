import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import TagInput from '../TagInput';
import { useState } from 'react';
import { useEffect } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { Configuration, OpenAIApi } from "openai";
import './createCampaignCards.css';


export const Step1MandatoryFields = () => {
    const configuration = new Configuration({
        apiKey: "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",
      });
      const openai = new OpenAIApi(configuration);
    // if (localStorage.getItem('campaignName') === null) 
    // localStorage.setItem('campaignName', '');
    // if (localStorage.getItem('campaignTags') === null)
    // localStorage.setItem('campaignTags', '[]');
    // if (localStorage.getItem('videoLink') === null)
    // localStorage.setItem('videoLink', '');
    // if (localStorage.getItem('step1') === null)
    // localStorage.setItem('step1', false);

    const [campaignName, setCampaignName] = useState(localStorage.getItem('campaignName'));
    const [campaignTags, setCampaignTags] = useState(JSON.parse(localStorage.getItem('campaignTags')));
    //const [videoLink, setVideoLink] = useState(localStorage.getItem('videoLink'));
    const [ result, setResult ] = useState('');
    const [ show, setShow ] = useState(false);
    useEffect(() => {
        localStorage.setItem('campaignName', campaignName);
        const delaySuggestFn = setTimeout(() =>{
            if(campaignName.length > 0) {
                setShow(true);
                cgptSuggest(campaignName);
            }
        }, 480);
        return () => {
            clearTimeout(delaySuggestFn);
        };
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

    // const displayTags = () => {
    //     var list = "Tags: ";
    //     for (let i = 0; i < campaignTags.length; i++) {
    //         list += campaignTags[i];
    //         if (i != campaignTags.length - 1) {
    //             list += ", ";
    //         }
    //     }
    //     return list;
    // }

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
    
    function generatePrompt(prompt) {
        const capitalizePrompt =
        prompt[0].toUpperCase() + prompt.slice(1).toLowerCase();
      return `Introduce yourself as chatGPT and tell me a little about ${capitalizePrompt} as a social entrepenuer offering help with ${capitalizePrompt}. Finish it off with some resources the user can checkout for more information.`;
    }
    
    const cgptSuggest = async (e) => {
        if(campaignName !== undefined) {
            const completion = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: generatePrompt(campaignName),
                temperature: 0.4,
                max_tokens: 3000,
              });
              setResult(completion.data.choices[0].text);
        }
    }
    

    return (
        <div>
            {campaignName ? 
            <ToastContainer
                position="top-end"
                style={{
                    paddingTop: "250px",
                    paddingRight: "40px",
                }}
            >
            <Toast
                style={{
                    zIndex: 9999,
                }}
                show={show}
                onClose={() => setShow(false)}
            >
                <Toast.Header>We see that you're interested in:<strong>{campaignName}</strong></Toast.Header>
                <Toast.Body>
                    <strong>Here are our some suggestions from ChatGPT!</strong>
                    <br/>
                    {result}
                </Toast.Body>
            </Toast> 
            </ToastContainer>
            : <></>}
            <Card className="create-campaign-card">
                        <Card.Title className="create-campaign-card-title">
                            Mandatory fields
                        </Card.Title>
                        <Card.Body
                            className="create-campaign-card-body"
                        >
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