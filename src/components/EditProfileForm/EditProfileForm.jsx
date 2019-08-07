import React from 'react';
import { Card, Form, Image } from 'react-bootstrap';


export default class EditProfileForm extends React.Component {
    constructor(props){
        super(props);
        this.state = { imagePreviewUrl: require('../../static/images/user_profile.jpg' ), imageCoverPreviewUrl: `http://blog.froont.com/content/images/2015/05/user-interviews-cover-1.gif` };
    }
    handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let eleId = e.target.id;
        reader.onloadend = () => {
            (eleId === 'profileInputImg') ? this.setState({imagePreviewUrl: reader.result}) : this.setState({imageCoverPreviewUrl: reader.result})
        }
        reader.readAsDataURL(e.target.files[0])
    }
    render() {
        return(
            <div className="edit-profile-form-holder mt-4">
                <div className="sub-title">Edit Profile</div>
                <Card>
                    <Form>
                        <Form.Group controlId="profileImgUpload">
                            <Form.Label>Profile Picture</Form.Label>
                            <div className="sub-sm-text">Your profile picture that will appear in messages, lists and search</div>
                            <Form.Label className="image-upload-section" for="profileInputImg">
                                <input id="profileInputImg" className="fileInput d-none"  type="file" onChange={(e)=>this.handleImageChange(e)} />
                                <div className="imgPreview-div fileInput"  type="file">
                                    <i className="icon-upload-file"></i>
                                    <Image src={this.state.imagePreviewUrl} />
                                </div>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group controlId="CoverImgUpload">
                            <Form.Label>Cover Image</Form.Label>
                            <div className="sub-sm-text">The banner image that will appear on your creator page</div>
                            <Form.Label className="image-upload-section" for="coverInputImg">
                                <input id="coverInputImg" className="fileInput d-none"  type="file" onChange={(e)=>this.handleImageChange(e)} />
                                <div className="imgPreview-div cover-img-upload">
                                    <i className="icon-upload-file"></i>
                                    <Image src={this.state.imageCoverPreviewUrl} />
                                </div>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group controlId="profileName">
                            <Form.Label>Profile Name</Form.Label>
                            <Form.Control className="mt-2" type="text" placeholder="Enter your name" />
                        </Form.Group>
                        <Form.Group controlId="profileBio">
                            <Form.Label>Bio</Form.Label>
                            <div className="sub-sm-text">Use this field to tell audiences about yourself and describe what it is you create! You will have the chance to welcome audiences to your page and encourage them to subscribe when you create your subscriptions tiers.</div>
                            <Form.Control className="mt-3" as="textarea" rows="3" placeholder="Enter your bio" />
                        </Form.Group>
                    </Form>
                </Card>
            </div>
        )
    }
}