import React, { useState } from 'react';
import Modal from 'react-modal';
import './ReactModal.css'
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#App')
 
const ReactModal = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }
 
  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }
 
  const closeModal = () => {
    setIsOpen(false);
  }
 
    return (
      <div>
        <button onClick={openModal} className='open-btn'>Want to add your organization to our database?</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          // style={customStyles}
          className='modal-container'
        >
 
            <div className='modal-text'>
                <button className='close-btn' onClick={() => setIsOpen(false)}>
                  <div></div>
                </button>
                <div className='developer'>
                <h4>Github pull request</h4>
                <p>Make a pull request <a href='https://www.github.com/joannatomassoni/allprobono-search-tool' target='__blank'>here</a></p>
              </div>
              <div className='non-developer'>
                <h4>Email</h4>
                <p><a href='mailto:apb2020@gmail.com' target='__blank'>Email us</a></p>
              </div>
            </div>
        </Modal>
      </div>
    );
}

export default ReactModal

// https://www.npmjs.com/package/react-modal