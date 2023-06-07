import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import { useEffect, useState, } from 'react';

export const Step1OptionalFields = () => {
    if (localStorage.getItem('videoLink') === null)
    localStorage.setItem('videoLink', '');

    const [videoLink, setVideoLink] = useState(localStorage.getItem('videoLink'));

    useEffect(() => {
        localStorage.setItem('videoLink', videoLink);
    }, [videoLink]);

    function validateYouTubeUrl(link) {
        if (link != '') {
            var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
            var match = link.match(regExp);
            if (!match || match[2].length != 11) {
                return false;
                // if need to change the url to embed url then use below line
                // $('#ytplayerSide').attr('src', 'https://www.youtube.com/embed/' + match[2] + '?autoplay=0');
            }
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
                <Card.Text>Fields below are not necessary to fill, but they surely improve your campaign's recognition on the platform.</Card.Text>
                <Card.Text>
                    <Form>
                        <FormGroup>
                            <Form.Label>Upload promotional video</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Video link" 
                                value={videoLink}
                                onChange={(e) => {
                                    setVideoLink(e.target.value);
                                    if (!validateYouTubeUrl(videoLink)) {
                                        console.log("Please enter a valid YouTube URL.");
                                        localStorage.setItem('step1', false);
                                    }
                                }}
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