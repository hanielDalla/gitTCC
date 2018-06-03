import React, {Component} from 'react'
import firebase from 'firebase'

class FileUpload extends Component{
    constructor(){
        super()
        this.state = {
            uploadValue: 0,  
        }
        this.handleUpload = this.handleUpload.bind(this);
    }
    handleUpload (event) {
        const file = event.target.files[0];
        const storageRef = firebase.storage().ref(`/Produtos/${file.name}`);
        const task = storageRef.put(file);
    
        task.on('state_changed', snapshot => {
            let porcentagem = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            this.setState({
                uploadValue: porcentagem
            })
        }, error => { console.log(error.message)
        }, () =>{
            this.setState({
                uploadValue:100,
                picture: task.snapshot.downloadURL
            });
        });}
    render(){
        return(
            <div>
                <input type="file" className="form-control-file" onChange={this.handleUpload}/>
                <br/>
                <progress value={this.state.uploadValue} max="100" ></progress>
                <br/>
                <img height="100" src={this.state.picture} alt=""/>
            </div>
        )
    }
}

export default FileUpload;