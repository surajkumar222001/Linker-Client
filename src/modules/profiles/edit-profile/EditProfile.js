import React, {useState, useEffect} from 'react';
import {Link, useHistory} from "react-router-dom";
import * as profileActions from '../../../redux/profiles/profile.actions';
import * as profileReducer from '../../../redux/profiles/profile.reducer';
import {useDispatch, useSelector} from "react-redux";
import Spinner from "../../../layout/misc/spinner/Spinner";


let EditProfile = () => {
    let dispatch = useDispatch();
    let history = useHistory();

    let [localProfile , setLocalProfile] = useState({
        company : '',
        website : '',
        location : '',
        designation : '',
        skills : '',
        bio : '',
        githubUserName : '',
        youtube : '',
        facebook : '',
        twitter : '',
        linkedin : '',
        instagram : ''
    });

    let profileInfo = useSelector((state) => {
        return state[profileReducer.profileFeatureKey];
    });

    let {loading , profile} = profileInfo;

    useEffect(() => {
        dispatch(profileActions.getProfile());
        setLocalProfile({
            company: profile.company ? profile.company : '',
            location: profile.location ? profile.location : '',
            designation: profile.designation ? profile.designation : '',
            website: profile.website ? profile.website : '',
            githubUserName: profile.githubUserName ? profile.githubUserName : '',
            skills: profile.skills ? profile.skills : '',
            bio: profile.bio ? profile.bio : '',
            youtube : profile && profile.social?.youtube ? profile.social.youtube : '',
            twitter : profile && profile.social?.twitter ? profile.social.twitter : '',
            facebook : profile && profile.social?.facebook ? profile.social.facebook : '',
            instagram : profile && profile.social?.instagram ? profile.social.instagram : '',
            linkedin : profile && profile.social?.linkedin ? profile.social.linkedin : '',
        });
    }, []);

    let updateInput = (event) => {
        setLocalProfile({
            ...localProfile,
            [event.target.name] : event.target.value
        });
    };

    let submitUpdateProfile = (event) => {
        event.preventDefault();
        dispatch(profileActions.updateProfile(localProfile , history));
    };

    return (
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-teal">
                                <i className="fa fa-user-circle"/>
                                Edit Profile
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque dignissimos distinctio dolor error expedita id incidunt, iusto laborum, molestiae mollitia optio placeat quod recusandae soluta unde, vel! Deserunt, quisquam!</p>
                        </div>
                    </div>
                </div>
            </section>
            {
                loading ? <Spinner/> :
                    <React.Fragment>
                       {/* <pre>{JSON.stringify(localProfile)}</pre>*/}
                        <section>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-8">
                                        <form onSubmit={submitUpdateProfile}>
                                            <div className="form-group">
                                                <input
                                                    required
                                                    name="company"
                                                    value={localProfile.company}
                                                    onChange={updateInput}
                                                    type="text" className="form-control" placeholder="Company"/>
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    required
                                                    name="website"
                                                    value={localProfile.website}
                                                    onChange={updateInput}
                                                    type="text" className="form-control" placeholder="Website"/>
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    required
                                                    name="location"
                                                    value={localProfile.location}
                                                    onChange={updateInput}
                                                    type="text" className="form-control" placeholder="Location"/>
                                            </div>
                                            <div className="form-group">
                                                <select
                                                    required
                                                    name="designation"
                                                    value={localProfile.designation}
                                                    onChange={updateInput}
                                                    className="form-control">
                                                    <option value="">Select Designation</option>
                                                    <option value="Junior Developer">Junior Developer</option>
                                                    <option value="Senior Developer">Senior Developer</option>
                                                    <option value="Tech Lead">Tech Lead</option>
                                                    <option value="Junior Manager">Junior Manager</option>
                                                    <option value="Senior Manager">Senior Manager</option>
                                                    <option value="Director">Director</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    required
                                                    name="skills"
                                                    value={localProfile.skills}
                                                    onChange={updateInput}
                                                    type="text" className="form-control" placeholder="Skills"/>
                                            </div>
                                            <div className="form-group">
                                                <textarea
                                                    required
                                                    name="bio"
                                                    value={localProfile.bio}
                                                    onChange={updateInput}
                                                    rows="3" className="form-control" placeholder="Job Description"/>
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    required
                                                    name="githubUserName"
                                                    value={localProfile.githubUserName}
                                                    onChange={updateInput}
                                                    type="text" className="form-control" placeholder="Github UserName"/>
                                            </div>
                                            <hr/>
                                            <small>Social Links</small>
                                            <div className="form-group">
                                                <input
                                                    required
                                                    name="youtube"
                                                    value={localProfile.youtube}
                                                    onChange={updateInput}
                                                    type="text" className="form-control" placeholder="YouTube"/>
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    required
                                                    name="twitter"
                                                    value={localProfile.twitter}
                                                    onChange={updateInput}
                                                    type="text" className="form-control" placeholder="Twitter"/>
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    required
                                                    name="facebook"
                                                    value={localProfile.facebook}
                                                    onChange={updateInput}
                                                    type="text" className="form-control" placeholder="Facebook"/>
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    required
                                                    name="linkedin"
                                                    value={localProfile.linkedin}
                                                    onChange={updateInput}
                                                    type="text" className="form-control" placeholder="LinkedIn"/>
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    required
                                                    name="instagram"
                                                    value={localProfile.instagram}
                                                    onChange={updateInput}
                                                    type="text" className="form-control" placeholder="Instagram"/>
                                            </div>
                                            <div>
                                                <input type="submit" className="btn btn-teal btn-sm" value="Update"/>
                                                <Link to="/profiles/dashboard" className="btn bg-light-grey btn-sm">Back</Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </React.Fragment>
            }
            <div style={{marginBottom : '150px'}}/>
        </React.Fragment>
    )
};
export default EditProfile;
