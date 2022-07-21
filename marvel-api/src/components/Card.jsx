import React from "react";
import Modal from "./Modal";

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  handleOpenModal() {
    this.setState({ open: true })
  }

  handleCloseModal() {
    this.setState({ open: false })
  }

  componentDidUpdate() {
    if (this.state.open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
  
  render() {
    const { character, img, text, series } = this.props;
    const comics = series.map(item => item.name);
    
    if(img.lastIndexOf("image_not_available") === -1) {
      return (
        <>
          <div onClick={() => this.handleOpenModal()}>
            <div className="card-wrapper">
              <div className="card__overlay">
                <img src={img + ("/portrait_fantastic.jpg")} className="img"/>
                <div>
                  {character}
                </div>
              </div>
            </div>
          </div>
          <Modal 
            show={this.state.open} 
            src={ img + ("/portrait_uncanny.jpg") } 
            alt={ character } 
            text={ text } 
            comics={ comics } 
            className="img__modal" 
            onClose={() => this.handleCloseModal()} 
          />
        </>
      )
    }
  }
}

export default Card;