import React, { Component, PropTypes } from 'react';
import Autosuggest from 'react-autosuggest';

import classNames from "classnames";

export default class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;

    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    }

    const bottomBarClassname = classNames({
      "image-upload__bottom": true,
      "image-upload__bottom--uploaded": imagePreviewUrl,
    });

    return (
      <div className="image-upload">
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          <div className="imgPreview">
            {$imagePreview}
          </div>
          <input className="fileInput" type="file" onChange={(e)=>this._handleImageChange(e)} />
          <div className={bottomBarClassname}>
            <i className="iconcss icon-camera"></i>
            <p>Upload an image</p>
          </div>
          {/*<button className="submitButton" type="submit" onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>*/}
        </form>
      </div>
    )
  }
}