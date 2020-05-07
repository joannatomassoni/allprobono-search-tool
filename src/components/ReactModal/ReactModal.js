import React, { useState } from 'react';
import Modal from 'react-modal';
import './ReactModal.css'
import { FaPlusCircle } from 'react-icons/fa'

Modal.setAppElement('#root')
 
const ReactModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }
 
  const closeModal = () => {
    setIsOpen(false);
  }
 
    return (
      <div className='container'>
        <button onClick={openModal} className='open-btn'>
          <div className='open-btn-text'>
            <FaPlusCircle className='plus'/>
            <p>Want to add your organization to our database?</p>
          </div>
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className='modal-container'
        >
 
            <div className='modal'>
                <button className='close-btn' onClick={() => setIsOpen(false)}>
                  <div></div>
                </button>
                <div className='modal-text'>
                  <p>
                    <b>DEVELOPERS</b>: <a href='https://www.github.com/joannatomassoni/allprobono-search-tool' el='nofollow noreferrer' target='__blank' title='Head to our Github repo'>make a pull request</a> in our Github repo. 
                    <br/><br/> 
                    <b>EVERYONE ELSE</b>: <a href='mailto:apb2020@gmail.com?subject=Request to add to database' rel='nofollow noreferrer' target='__blank' title='Email us'>email us</a> with the <em>name</em>, <em>website</em>, a <em>description</em> of your organization, and anything else you'd like us to know.
                    </p>
              </div>
            </div>
        </Modal>
      </div>
    );
}

export default ReactModal

// https://www.npmjs.com/package/react-modal