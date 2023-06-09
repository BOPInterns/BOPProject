import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import { useEffect, useState, } from 'react';

export const Step1OptionalFields = () => {
    // if (localStorage.getItem('videoLink') === null)
    // localStorage.setItem('videoLink', '');

    const [videoLink, setVideoLink] = useState(localStorage.getItem('videoLink'));

    useEffect(() => {
        localStorage.setItem('videoLink', videoLink);
        if ((localStorage.getItem('campaignName').length < 4) || (localStorage.getItem('campaignName').length > 100) || 
            (JSON.parse(localStorage.getItem('campaignTags')).length < 3) || (JSON.parse(localStorage.getItem('campaignTags')).length > 5) ||
            (!validateYouTubeUrl(videoLink)))
            return localStorage.setItem('step1', false);
        localStorage.setItem('step1', true);



    }, [videoLink]);

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

    return(
        <Card>
            <Card.Title className="mx-3 mt-3">
                Optional Fields
                <hr></hr>
            </Card.Title>
            <Card.Body>
                <Card.Text>
                    <strong>
                        Fields below are not necessary to fill, but they surely improve your campaign's recognition on the platform.
                    </strong>
                        </Card.Text>
                <Card.Text>
                    <Form>
                        <FormGroup>
                            <Form.Label>Upload promotional video</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Video link" 
                                value={videoLink}
                                onChange={(e) => {setVideoLink(e.target.value)}}
                            />
                            <Form.Text className="text-muted">
                                You can upload a YouTube video link to promote your campaign
                            </Form.Text>
                        </FormGroup>
                    </Form>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}