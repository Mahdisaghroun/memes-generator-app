import React from "react";
import './MemesTemp.css';
import Button from "react-bootstrap/Button";
import Spinner from 'react-bootstrap/Spinner';

import HomePage from './HomePage';
import { NavLink, useHistory ,Redirect} from "react-router-dom";
import history from './history'



export default class  MemesTemp extends React.Component{
constructor(props){
    
super(props);
this.state={
    isLoading:false,
    memes :[],
    error: null

};
}
 
componentDidMount(){

   
    fetch('https://api.imgflip.com/get_memes').then(
        res=>res.json()).then(
            (result)=>{
                this.setState({
                    isLoading:true,
                    memes:result.data.memes
                })
                console.log(result);
            },
            (err)=>{
                this.setState({
                    isLoading:false,
                    error:true
                })
            }
        )
    
}
_push=(meme)=>{
    let str =meme.url;
                      let data=str.substring(str.lastIndexOf('/'),str.lastIndexOf('.'));
                     
                  history.push('/openTemp'+data)
}
render(){
    
    const {error , isLoading , memes} = this.state;
    if(error)
    return <div>Erreur </div>
    else if (!isLoading)
    return <div className="container spinner">
        <Spinner  size="lg" animation="border" variant="primary" />
                        <span>Loading...</span>
                        
                            </div>
    else
    return (
      
    <div className="container">
         
    <div className="row">
        {memes.map(meme => (
          <div className="col-sm-4" key={meme.id}>
           <img className="card-img" src={`${meme.url}`} onClick={()=>{
               this._push(meme)
           }}></img>
           <Button  className="but" onClick={()=>{
                this._push(meme)
           }}>Open Template in Editor</Button>
          </div>
        ))}
     </div>
      </div>
    )
}
}