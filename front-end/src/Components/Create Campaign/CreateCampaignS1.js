import { NavigationBar } from '../NavigationBar';
import { CreateCampaignNavbar  } from './CreateCampaignNavbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Button, FormLabel } from 'react-bootstrap';
import { useState } from 'react';
import AutoSuggest, { ItemAdapter }from 'react-bootstrap-autosuggest';

export const CreateCampaignS1 = () => {
    const [campaignName, setCampaignName] = useState('');
    const [campaignTags, setCampaignTags] = useState([]); // figure out how to do this
    const [videoLink, setVideoLink] = useState(''); //decide if doing file or link

    const predefinedTags = [
        { value: 'Toilets' },
        { value: 'Labor' },
        { value: 'Immigration' },
        { value: 'Electricity' }
    ];

    class TagAdapter extends ItemAdapter {
        newFromValue(value) {
          return { value }
        }
        renderSelected(item) {
          return <div className="tag">
            {item.value} {item.img && <img src={item.img}/>}
          </div>
        }
        renderSuggested(item) {
          return <div className="tag-item">
            {item.img && <img src={item.img}/>} {item.value}
          </div>
        }
    }
    TagAdapter.instance = new TagAdapter();

    function render({tags, bsSize, onChange, onClear }) {
      return <FormGroup id="tagInput" controlId="tagInput" bsSize={bsSize}>
        <FormLabel>Campaign Tags</FormLabel>
        <AutoSuggest
          bsSize={bsSize}
          datalist={predefinedTags}
          multiple
          placeholder="Pick some tags..."
          value={tags}
          itemAdapter={TagAdapter.instance}
          buttonAfter={ <Button onClick={onClear}>&times;</Button>}
          onChange={onChange} />
      </FormGroup>
    }

    return (
        <div>
            <NavigationBar />
            <CreateCampaignNavbar />
            <Container>
                <Row className="mt-5">
                    <h2>Step 1: Provide basic information about the campaign</h2>
                </Row>
                <Row>
                    <Card className="mt-3">
                        <Card.Title className="mt-3">
                            Mandatory fields
                            <hr></hr>
                        </Card.Title>
                        <Card.Body>
                            <Form>
                                <FormGroup className="mb-3">
                                    <Form.Label>Campaign name</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Campaign name" 
                                        value={campaignName}
                                        onChange={(e) => setCampaignName(e.target.value)}
                                    /><Form.Text className="text-muted">Explainer text about the role of the campaign name. Do's and Dont's</Form.Text>
                                </FormGroup>
                                
                                <FormGroup className="mb-3">
                                    
                                    <Form.Label>Campaign tags</Form.Label>
                                    <Form.Control type="text" placeholder="tags" />
                                    <Form.Text className="text-muted">Add tags down here that you can click to select</Form.Text>
                                </FormGroup>

                                {render({predefinedTags: predefinedTags, bsSize:'medium', })}

                            </Form>
                    </Card.Body>
                    </Card>
                </Row>
                <Row className="mt-5">
                    <Card>
                        <Card.Title className="mt-3">
                            Optional Fields
                            <hr></hr>
                        </Card.Title>
                        <Card.Body>
                            <Card.Text>Fields below are not necessary to fill, but they surely improve your campaigns recognition on the platform</Card.Text>
                            <Card.Text>
                                <Form>
                                    <FormGroup>
                                        <Form.Label>Upload promotional video</Form.Label>
                                        <Form.Control type="file" />
                                        <Form.Text className="text-muted">
                                            You can upload a video to promote your campaign
                                        </Form.Text>
                                    </FormGroup>
                                </Form>
                            </Card.Text>
                        </Card.Body>
                        
                    </Card>
                </Row>
            </Container>
        </div>
    )
}