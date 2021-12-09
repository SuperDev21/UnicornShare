import React from 'react';
// import Header from '../header/header';
import '../Styles/homePage.css'
import {
    BrowserRouter as Router,
    // Switch,
    // Route,
    Link
  } from "react-router-dom";

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
        console.log('bonjour', cat)
        const copyData = [...this.state.copyPhotos]
        if (cat === "tous"){
          console.log('bonjour je suis dans All', copyData)
          this.setState({photos: copyData})
        }
        if (cat === "paysages"){
          console.log('bonjour je suis dans paysages') 
          this.setState({photos: copyData.filter(elem => elem.category_id === 1)})
        }
        if (cat === "nourritures"){
          this.setState({photos: copyData.filter(elem => elem.category_id === 2)})
        }
        if (cat === "animaux"){
            this.setState({photos: copyData.filter(elem => elem.category_id === 3)})
        }

        //   switch (cat) {
        //     case cat === 'tous':
        //         this.setState({data: this.copyData});
        //         console.log("swich cat", cat)
        //       break;
        //     case cat === 'paysages':
        //         this.setState({data: this.copyData.filter(elem => elem.category_id === 1)})
        //       break;
        //     case cat === "nourritures":
        //         this.setState({data: this.copyData.filter(elem => elem.category_id === 2)})
        //     break;
        //     case cat === "animaux":
        //         this.setState({data: this.copyData.filter(elem => elem.category_id === 3)})
        //     break;
        //     default:
        //         this.setState({data: this.copyData});
        //   }
      }

    render(){
        return (
            <main>
                <nav>
                    <ul className="listCategory">
                        <li title="tous"><Link to='/' onClick={() => this.clickToFilter("tous")}>tous</Link></li>
                        <li title="paysages"><Link to='/' onClick={() => this.clickToFilter("paysages")}>paysages</Link></li>
                        <li title="nourritures"><Link to='/' onClick={() => this.clickToFilter("nourritures")}>nourritures</Link></li>
                        <li title="animaux"><Link to='/' onClick={() => this.clickToFilter("animaux")}>animaux</Link></li> 
                    </ul>
                </nav>
                <div className='container'>
                    {this.state.photos.map((item, index) => {
                    // {this.props.dataPictures.map((item, index) => {
                        return (
                            // <Router>
                                /* <Link to={`/${item.id}`} key={item.id}> */
                                /* <Link to='/'> */
                                    <img  className='img_homepage' key={index} alt='des images' width='300' height='300' src={`http://localhost:5000/public/uploads/${item.id}-${item.path}`}/>
                                /* </Link> */
                            // </Router>
                    )})}
                </div> 
            </main>
        )
    }
}

export default Homepage