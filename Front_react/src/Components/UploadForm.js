import React from 'react';
import '../Styles/UploadForm.css';
import logo from '../assets/logo.svg';

class UploadForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      file : '',
      title: '',
      comment: '',
      category_name: ''
    };
    this.handleUploadImage = this.handleUploadImage.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler = (e) =>{
    this.setState({[e.target.name]: e.target.value})
  }

  handleUploadImage(ev) {
    ev.preventDefault();
    console.log('le state de uploadForm ',this.state)
    fetch('http://localhost:5000/pictures', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    })
    // .then(res => {console.log('res fetch uplod : ', res)})
    .then(response => {
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }
      return response.json()
    })
  
  }


  render() {
    const { title, comment} = this.state
    return (

<div className="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div className="modal-dialog  modal-lg modal-dialog-centered">
  <div className="modal-content contenuModal">
    <div className="modal-header entete-modal">
    <div className="divLogo">
        <a href="/"><img className="imgLogo" src={logo} alt="loge National geographic"/></a>
        <a href="/"><div className="divTitreLogoModal">unicornshare</div></a>
    </div>
      <button type="button" className=" btn-close-modal " data-bs-dismiss="modal" aria-label="Close">X</button>
    </div>
    <div className="modal-body main-modal ">
    <h2 className='text-center my-4 pb-4 text-uppercase'>Télécharger une photographie</h2> 
    <form className='w-75 m-auto' onSubmit={this.handleUploadImage}>
      {/* <div className="d-flex mt-4"> */}
      <div className="pe-4">
        <label className="d-block pb-1">TITRE</label>
          <input ClassName="" type="text" name="title" onChange={this.changeHandler} value={title} />
        </div>
        {/* <div className="ps-4 ms-2">
        <label className="d-block pb-1">NOM</label>
          <input ClassName="" type="text" name="name" />
        </div>  */}
      {/* </div> */}
      <div className='mt-4'>
        <label className="d-block pb-1">DESCRIPTION</label>
        <textarea className="w-100" placeholder='Veuillez insérer votre description' 
        name='comment'  value={comment} onChange={this.changeHandler}></textarea>
      </div> 
      <div className='my-4'>
        <label className="d-block pb-1">CATEGORIE</label>
        <select className="p-2" onChange={(e) => this.setState({category_name: e.target.value})}>
          <option selected >Choisir une catégorie</option>
          <option value="Animaux">Animaux</option>
          <option value="Paysages">Paysages</option>
          <option  value="Nourriture">Nourriture</option>
        </select>
      </div> 
      <div className='mb-4'>
        <input type='file' onChange={(e) => this.setState({file: e.target.value})} />
      </div>
      <div className="modal-footer footer-modal">
      <button type="button" className="btn bg-danger text-white" data-bs-dismiss="modal">Fermer</button>
      {/* <button type="button" className="btn uploadForm" onClick={this.handleUploadImage}>Upload</button> */}
      <button type="submit" className="btn uploadForm" >Upload</button>

    </div>
    </form>
     </div>
  
    {/* <div className="modal-footer footer-modal">
      <button type="button" className="btn bg-danger text-white" data-bs-dismiss="modal">Fermer</button>
      {/* <button type="button" className="btn uploadForm" onClick={this.handleUploadImage}>Upload</button> */}
      {/* <button type="submit" className="btn uploadForm" >Upload</button>

    </div>  */}
    
  </div>
</div>


</div>






      )
  }
}

export default UploadForm;