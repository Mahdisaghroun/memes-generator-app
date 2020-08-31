
import  React  from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import './About.css';
import { Link } from 'react-router-dom';


 function About(){
        return(
            <div className="container center">
                <h1>Memes Generator App V1.0</h1>
                <h3>Developed By :Mahdi Saghroun</h3>
                <h2>Developed with : ReactJS</h2>
                <div className="contact">
                    <div className="row">
                        <div className="col-md-3" >
                       <FacebookIcon  style={{fontSize:150}}></FacebookIcon>
                       <span className="span">fb.com/saghrounmahdi</span>
                        </div>
                        <div className="col-md-3">
                            <InstagramIcon style={{fontSize:150}}></InstagramIcon>
                            <span>@mahdi_zerobug</span>
                        </div>
                        <div className="col-md-3">
                            <GitHubIcon style={{fontSize:150}}></GitHubIcon>
                            <span>mahdisaghroun</span>
                        </div>
                    </div>
                </div>
                

            </div>
        )
}
export default About;