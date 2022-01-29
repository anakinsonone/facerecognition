import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p>This will detect faces!</p>
            <div className="center">
                <div className="form center br3 shadow-5 pa4">
                    <input className="w-70 f4 pa2 center" type={'text'} onChange={onInputChange} />
                    <button className="w-30 f4 grow link ph3 pv2 dib white bg-blue" onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;