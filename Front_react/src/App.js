import React from 'react'
import './Styles/Footer.css';
import Display from './Components/Display';
import Homepage from './Components/HomePage';
// import HomePageFiltre from './Components/HomePageFiltre';
import Footer from './Components/Footer.js'
import Header from './Components/Header'
import { BrowserRouter as Router, Route } from "react-router-dom";
// import UploadForm from './Components/UploadForm';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({ photos: [], pictureURL: '', displayData: '' })

  }

  componentDidMount() {
    this.getAllPhotos()
    // this.getPicture('1-macarons.jpg')
    // this.getDisplayData('1')
  }

  componentDidUpdate() {
    //console.log('message:', this.state.message)
  }

  getAllPhotos = () => {
    fetch('http://localhost:5000/')
      .then(response => {
        // ici mes instructions sur l'objet response fetché)
        if (!response.ok) {
          throw new Error(`erreur HTTP! statut: ${response.status}`);
        }
        else {
          console.log("I am the response from getData", response) // on logge la promesse 'response'
          console.log("je suis le response.json: ", response.json)
          return response.json()
        }
      })
      .then(data => {
        // ici mes instructions sur le json extrait de la response
        console.log('data from getData: ', data) // on logge la valeur data
        this.setState({ photos: data }) // on modifie le state
        console.log("mes photos après le setState: ", this.state.photos)
      })
      .catch(error => console.log(error.message))
  }

  render() {

    return (
      <>
        <Router>
          <Header />
          <Route path="/" exact>
            <Homepage dataPictures={this.state.photos} />
          </Route>
          <Route path="/:id" component={Display} />
          {/* <Route path="/form" component={UploadForm}/> */}
        </Router>
        <Footer />
      </>
    )
  };
}
export default App;
