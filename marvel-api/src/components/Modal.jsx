const Modal = ({ src, alt, text, comics, show, onClose, i }) => {
  return (
    show && <div className="popup">
      <div className="popup__overlay">
        <div className="popup__content">
          <button onClick={onClose} className="popup__btn-close">
            <i class="fa-solid fa-xmark"></i>
          </button>
          <div className="popup__descr">
            <img className="popup__content-img" src={ src } alt={ alt } />
            <div className="popup__text">
              <h2 className="popup__title">{ alt }</h2>
              <p className="popup__story">{ text }</p>
              <p className="popup__series">Comics:</p>
              <ul className="popup__list">
                <div className="popup__li">{ comics[i++] }</div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;