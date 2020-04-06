import React, { useState } from 'react';
import Modal from 'react-modal';
import './ReactModal.css'
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')
 
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
          className='modal-container'
        >
 
            <div className='modal'>
                <button className='close-btn' onClick={() => setIsOpen(false)}>
                  <div></div>
                </button>
                <div className='modal-text'>
                  <p>
                    To contribute to our ongoing list of resources, you can <a href='https://www.github.com/joannatomassoni/allprobono-search-tool' el='nofollow noreferrer' target='__blank' title='Head to our Github repo'>make a pull request</a> in our Github repo. 
                    <br/><br/> 
                    Or just <a href='mailto:apb2020@gmail.com?subject=Request to add to database' rel='nofollow noreferrer' target='__blank' title='Email us'>email us</a> with the <em>name</em>, <em>website</em>, a <em>description</em> of your organization, and anything else you'd like us to know.
                    </p>
              </div>
            </div>
        </Modal>
      </div>
    );
}

export default ReactModal

// https://www.npmjs.com/package/react-modal