import { useState } from "react";
import DOMPurify from 'dompurify';
import './Preview.css';

const Preview = () => {

const [text, setText] = useState("");
const [name, setName] = useState("");
const [image, setImage] = useState("");
const [description, setDescription] = useState("");

const decode = (data) => {
    const buff = Buffer.from(data, 'base64');
    const decodedData = buff.toString('ascii');

    return decodedData;
}

const parseJson = async (jsonData) => {
    try {
        const data = jsonData.split(",")[1];
        const parsedData = decode(data);

        return parsedData;
    } catch (error) {
        console.error(error);
    }
}

const ParseData = async () => {
    try {
        const data = text.split(",")[1];
        const parsedData = decode(data);
        const decodedJsonObj = JSON.parse(parsedData);
        const decodedImage = await parseJson(decodedJsonObj.image);

        setImage(decodedImage);
        setName(decodedJsonObj.name);
        setDescription(decodedJsonObj.description);
    } catch (error) {
        console.error(error);
    }
}

    return(
        <div className='Preview'>
            <header className='Preview-Header'>Image</header>
            <div className='PreviewContainer'>
                <div className='Image'>
                    <div dangerouslySetInnerHTML={{__html: image}} />
                </div>
                <div className='Describing-Items'>
                    <div className='Title'>
                        <label>Name</label>
                        <p>{name}</p>
                    </div>
                    <div className='Description'>
                        <label>Description</label>
                        <p>{description}</p> 
                    </div>
                </div>
            </div>
            <div className='Input'>
                <textarea onChange={event => setText(DOMPurify.sanitize(event.target.value))} type="text" />
                <button onClick={ParseData}>Parse data!</button>
            </div>
        </div>
    );
}

export default Preview;