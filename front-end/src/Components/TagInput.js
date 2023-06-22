import React, { useState, useEffect } from 'react';
import { Form, Button, Badge } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './Account.css';

const TagInput = (props) => {
    const [tags, setTags] = useState([]);
    const [currentTag, setCurrentTag] = useState('');

    

    useEffect(() => {
        setTags(props.value)
    }, [])

    useEffect(() => {
        props.func(tags);
    }, [tags]);

    const handleTagInput = (event) => {
        setCurrentTag(event.target.value);
    };

    const addTag = () => {
        if (currentTag.trim() !== '') {
            setTags((prevTags) => [...prevTags, currentTag.trim()]);
            setCurrentTag('');
        }
    };

    const deleteTag = (index) => {
        setTags((prevTags) => {
            const newTags = [...prevTags];
            newTags.splice(index, 1);
            return newTags;
        });
    };

    const deleteAllTags = () => {
        setTags([]);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            addTag();
        }
    };

    return (
        <div>
        <Form.Group controlId="tagInput">
            <Form.Label>{props.header}</Form.Label>
            <Form.Control
            type="text"
            placeholder={props.placeholder}
            value={currentTag}
            onChange={handleTagInput}
            onKeyPress={handleKeyPress}
            />
        </Form.Group>

        {tags.length == 0 ? <strong>No tags</strong>:(
            <div>
                <strong>Entered {props.data}s: (Click on a {props.data} to delete it)</strong>
                <div>
                    {tags.map((tag, index) => (
                    <Badge
                        key={index}
                        variant="secondary"
                        className="mr-2 mb-2 bg-secondary"
                        style={{marginRight: 2}}
                        onClick={() => deleteTag(index)}
                    >{tag}</Badge>
                    ))}
                </div>
                <Button 
                className="btn-custom-class"
                variant="outline-secondary"onClick={deleteAllTags}>Remove All {props.data}s</Button>
            </div>
        )}
        </div>
    );
};

export default TagInput;