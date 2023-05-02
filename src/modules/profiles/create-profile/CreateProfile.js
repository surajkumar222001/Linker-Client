import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import * as profileActions from '../../../redux/profiles/profile.actions';

let CreateProfile = () => {
    let dispatch = useDispatch();
    let history = useHistory();

    let [profile , setProfile] = useState({
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

    let updateInput = (e) => {
        setProfile({
            ...profile,
            [e.target.name] : e.target.value
        });
    };

    let submitCreateProfile = (e) => {
        e.preventDefault();
        dispatch(profileActions.createProfile(profile , history));
    };

    return (
        <React.Fragment>
           {/* <pre>{JSON.stringify(profile)}</pre>*/}
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-teal">
                                <i className="fa fa-user-circle"/>
                                {' '} Create a Profile
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque dignissimos distinctio dolor error expedita id incidunt, iusto laborum, molestiae mollitia optio placeat quod recusandae soluta unde, vel! Deserunt, quisquam!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <form onSubmit={submitCreateProfile}>
                                <div className="form-group">
                                    <input
                                        required
                                        name="company"
                                        value={profile.company}
                                        onChange={updateInput}
                                        type="text" className="form-control" placeholder="Company"/>
                                </div>
                                <div className="form-group">
                                    <input
                                        required
                                        name="website"
                                        value={profile.website}
                                        onChange={updateInput}
                                        type="text" className="form-control" placeholder="Website"/>
                                </div>
                                <div className="form-group">
                                    <input
                                        required
                                        name="location"
                                        value={profile.location}
                                        onChange={updateInput}
                                        type="text" className="form-control" placeholder="Location"/>
                                </div>
                                <div className="form-group">
                                    <select
                                        required
                                        name="designation"
                                        value={profile.designation}
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
                                        value={profile.skills}
                                        onChange={updateInput}
                                        type="text" className="form-control" placeholder="Skills"/>
                                </div>
                                <div className="form-group">
                                                <textarea
                                                    required
                                                    name="bio"
                                                    value={profile.bio}
                                                    onChange={updateInput}
                                                    rows="3" className="form-control" placeholder="Job Description"/>
                                </div>
                                <div className="form-group">
                                    <input
                                        required
                                        name="githubUserName"
                                        value={profile.githubUserName}
                                        onChange={updateInput}
                                        type="text" className="form-control" placeholder="Github UserName"/>
                                </div>
                                <hr/>
                                <small>Social Links</small>
                                <div className="form-group">
                                    <input
                                        required
                                        name="youtube"
                                        value={profile.youtube}
                                        onChange={updateInput}
                                        type="text" className="form-control" placeholder="YouTube"/>
                                </div>
                                <div className="form-group">
                                    <input
                                        required
                                        name="twitter"
                                        value={profile.twitter}
                                        onChange={updateInput}
                                        type="text" className="form-control" placeholder="Twitter"/>
                                </div>
                                <div className="form-group">
                                    <input
                                        required
                                        name="facebook"
                                        value={profile.facebook}
                                        onChange={updateInput}
                                        type="text" className="form-control" placeholder="Facebook"/>
                                </div>
                                <div className="form-group">
                                    <input
                                        required
                                        name="linkedin"
                                        value={profile.linkedin}
                                        onChange={updateInput}
                                        type="text" className="form-control" placeholder="LinkedIn"/>
                                </div>
                                <div className="form-group">
                                    <input
                                        required
                                        name="instagram"
                                        value={profile.instagram}
                                        onChange={updateInput}
                                        type="text" className="form-control" placeholder="Instagram"/>
                                </div>
                                <div>
                                    <input type="submit" className="btn btn-teal btn-sm" value="Create Profile"/>
                                    <Link to="/profiles/dashboard" className="btn bg-light-grey btn-sm">Back</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};
export default CreateProfile;
