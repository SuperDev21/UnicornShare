import "../Styles/Display.css"
import React from "react"

// Composant Display: qui va afficher une seule image (cliquée)
class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = { picture: [] };
  }

  getPicture = () => {
    fetch(
      "http://localhost:5000/pictures/"+ this.props.match.params.id
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("I am the data from getPicture", data);
        console.log(this.props.match);
        this.setState({ picture: data });
        console.log("I am the picture",this.state.picture)
        
      })
      .catch((error) => console.log(error.message));
  };

  componentDidMount = () => {
    this.getPicture();
  };

  render() {
    return (
      <>
           
        {this.state.picture.pictures && this.state.picture.pictures.map((item) =>{
                    return  (
                        <div>
                          <div className='containerDisplay'>
                            <div className="cat_name">{item.cat_name}</div>
                            <div className="title">{item.title}</div>
                            <div className="date_publication">Publication {Date()}</div>     
                            
                          </div>
                            {/* <div>{parseInt(item.value)}⭐</div> */}
                            <img className="the_picture" src={`http://localhost:5000/public/uploads/${this.props.match.params.id}-${item.path}`} alt={item.title}/>
                            <div className="description">
                              <div>{item.comment}</div>
                              <div className="date_publication">photographie de pexels</div>
                            </div>
                            <div className="comments_holder">
                                <form>
                                  <input className="zone_comment" placeholder="Ajouter un commentaire..."></input>
                                  <button className="buttonComment" value="Commenter" type="submit">Commenter</button>
                                </form>
                            </div>
                                <div>
                                {this.state.picture.comments&& this.state.picture.comments.map((item) =>{
                                  return (
                                    <div className="old_comments">
                                    <div>{item.content}</div>
                                    <div className="date_publication">Posté par {item.author} le {item.created_at}</div>

                                    </div>
                                    )
                                }
                                )
                              }
                           
                    
                       
                                </div>

                        </div>
                    )
                })}   
      </>
    );
  }
}
export default Display
