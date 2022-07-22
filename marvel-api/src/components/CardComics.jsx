import React from "react";
import ModalComics from "./ModalComics";

class CardComics extends React.Component {
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
    const { comics, img, description } = this.props;
    
    if(img.lastIndexOf("image_not_available") === -1) {
      return (
        <>
          <div onClick={() => this.handleOpenModal()}>
            <div className="card-wrapper">
              <div className="card__overlay">
                <img src={img + ("/portrait_fantastic.jpg")} className="img"/>
                <div>
                  {comics}
                </div>
              </div>
            </div>
          </div>
          <ModalComics 
            show={this.state.open} 
            src={ img + ("/portrait_uncanny.jpg") } 
            alt={ comics } 
            text={ description } 
            className="img__modal" 
            onClose={() => this.handleCloseModal()} 
          />
        </>
      )
    }
  }
}

export default CardComics;