const ModalComics = ({ src, alt, text, show, onClose, i }) => {
  return (
    show && <div className="popup">
      <div className="popup__overlay">
        <div className="popup__content">
          <button onClick={onClose} className="popup__btn-close">
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="popup__descr">
            <img className="popup__content-img" src={ src } alt={ alt } />
            <div className="popup__text">
              <h2 className="popup__title">{ alt }</h2>
              <p className="popup__story">{ text }</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalComics;