import React from 'react';
import '../Styles/homePage.css'

import {Link} from "react-router-dom";

class Homepage extends React.Component{
    constructor(props) {
        super(props)
        this.state = { photos:[], copyPhotos:[]}

    
      }

    getAllPhotos = ()=> {
    fetch('http://localhost:5000')
    .then( response => {
        // ici mes instructions sur l'objet response fetché)
        if (!response.ok) {
            // console.log('ici je suis la response', response)
            throw new Error(`erreur HTTP! statut: ${response.status}`);
        }
        else {
            // console.log("I am the response from getAllPhotos",response) // on logge la promesse 'response'
            return response.json()
        }
        })
    .then( data => {
        // ici mes instructions sur le json extrait de la response
        // console.log('data from getAllPhotos: ', data) // on logge la valeur data
        this.setState({ photos: data, copyPhotos: data}) // on modifie le state
        })
    .catch( error => console.log(error.message))
    }

    componentDidMount() {
    this.getAllPhotos()
    
    }

    clickToFilter = (cat) =>{
        
        const copyData = [...this.state.copyPhotos]
        if (cat === "tous"){
          console.log('bonjour je suis dans All', copyData)
          this.setState({photos: copyData})
        }
        if (cat === "Paysages"){
          console.log('bonjour je suis dans paysages') 
          this.setState({photos: copyData.filter(elem => elem.category_id === 1)})
        }
        if (cat === "Nourriture"){
          this.setState({photos: copyData.filter(elem => elem.category_id === 3)})
        }
        if (cat === "Animaux"){
            this.setState({photos: copyData.filter(elem => elem.category_id === 2)})
        }
    }

    render() {
        return (
            <main id="mainHomePage">
                <nav className='pt-4'>
                    <ul className="listCategory">
                        <li title="Tous"><Link to='/' onClick={() => this.clickToFilter("tous")}>tous</Link></li>
                        <li title="Paysages"><Link to='/' onClick={() => this.clickToFilter("Paysages")}>paysages</Link></li>
                        <li title="Nourriture"><Link to='/' onClick={() => this.clickToFilter("Nourriture")}>nourritures</Link></li>
                        <li title="Animaux"><Link to='/' onClick={() => this.clickToFilter("Animaux")}>animaux</Link></li> 
                    </ul>
                </nav>
                
                <div className="container m-auto">
                
                    {this.state.photos.map((item, index) => {                        
                        return (
                            <Link className='picture_affichage' to={`/${item.id}`} key={item.id}>
                                <img key={index} alt="" width="300" height="200" className="img_marges" src={`http://localhost:5000/public/uploads/${item.id}-${item.path}`}/>
                            </Link>
                        )             
                    })}
                </div>
               
            </main>
        )
    }
}


export default Homepage