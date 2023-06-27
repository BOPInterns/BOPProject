import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import { useState, useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap';


const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

export const Step4MandatoryFields = () => {
    const [files, setFiles] = useState([])
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const fileInputRef = useRef(null);


    if (localStorage.getItem('files') === null) 
        localStorage.setItem('files', '');
    if (localStorage.getItem('step4') === null)
        localStorage.setItem('step4', false);
    
    useEffect(() => {
        localStorage.setItem('files', files);
        localStorage.setItem('step4', true);
    }, [files]);


    const handleFileChange = (event) => {
        const files = event.target.files;
        const filesArray = Array.from(files);

        const filesExceedSizeLimit = filesArray.some((file) => file.size > MAX_FILE_SIZE);
        if (filesExceedSizeLimit) {
            setErrorMessage('One or more files exceed the allowed size limit.');
            setSelectedFiles([]);
        } else {
            setErrorMessage('');
            setSelectedFiles(filesArray);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedFiles.length > 0) {
          // Perform file upload logic here
          console.log('Uploading files:', selectedFiles);
          setFiles(current => [...current, selectedFiles]);
          setSelectedFiles([]);
        }
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
      };

      const removeFile = (index) => {
        console.log(files)
        var temp = files;
        if(index > -1){
            temp.splice(index, 1);
        }
        setFiles(temp);
        setSelectedFiles([]);
      }

      return (
        <div>
            <Card className="">
                <Card.Title className="mx-3 mt-3">
                    Add attachments
                    <hr></hr>
                </Card.Title>
                <Card.Body>
                    <Card.Text>
                        <strong>
                        Share with future stakeholders materials and attachments you find important or useful to broaden the knowledge about the create campaign. You can decide whether particular elements should be visible for all or after joining the campaign's team
                        </strong>
                    </Card.Text>
                    <br></br>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                        {files.length == 0 ? <Card.Text>None Selected</Card.Text> :
                        files.map((file, index) => (
                            <Card.Text key={index}>{file[0].name}   <Button className='rounded-circle' onClick={() =>removeFile(index)}>X</Button></Card.Text>
                        ))}
                        <Form.Control type="file" multiple onChange={handleFileChange} ref={fileInputRef}/>
                        {errorMessage && <Form.Text className="text-danger">{errorMessage}</Form.Text>}
                        </Form.Group>
                        <Form.Group>
                        <Form.Control style={{marginTop: '15px'}}type="submit" value="Submit" disabled={selectedFiles.length === 0 || errorMessage} />
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

// export const Step4MandatoryFields = () => {
    
//     // if (localStorage.getItem('files') === null) 
//     //     localStorage.setItem('files', '');
//     // if (localStorage.getItem('step4') === null)
//     //     localStorage.setItem('step4', false);

//     const [files, setFiles] = useState(); 
    
//     useEffect(() => {
//         localStorage.setItem('files', files);
//         localStorage.setItem('step4', true);
//     }, [files]);

//     const convertBase64 = (e) => {
//         var reader = new FileReader();
//         try{
//             reader.readAsDataURL(e.target.files[0]);
//             reader.onload = () => {
//                 setFiles(reader.result);
//             };
//             reader.onerror = () => {
//                 console.log("Error: ", error);
//             };
//         } catch(error){
//             console.log(error);
//         }
//     }
    
    
// }