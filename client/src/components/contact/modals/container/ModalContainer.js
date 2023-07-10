import { useState } from 'react'
import Purchase from '../purchase/Purchase'
import Sales from '../sales/Sales'
import Consult from '../consult/Consult'
import './modal.css'
import { AiOutlineClose } from 'react-icons/ai';
import Spinner from 'components/spinner/Spinner'

const ModalContainer = ({ setConsultModal, setSalesModal, setPurchaseModal, english, setSuccessCard  }) => {
    const [loading, setLoading] = useState(false);
    const closeToggle = () => {
        if (setConsultModal) {
          setConsultModal(false);
        } else if (setSalesModal) {
          setSalesModal(false);
        } else if (setPurchaseModal) {
          setPurchaseModal(false);
        }
      };

  return (

    <div className='modal-wrapp'>
        <div className='modal-container'>
            <div className='modal-header'>
                <p className='modal-title'>{english ? "Let's talk" : "¡Conversemos" }!</p> 
                <AiOutlineClose className="modal-close-btn" onClick={() => closeToggle()}/>
            </div>
            <div className='modal-input-group'>
                { setPurchaseModal && <Purchase english={english} setSuccessCard={setSuccessCard} setLoading={setLoading} /> }
                { setSalesModal && <Sales english={english} setSuccessCard={setSuccessCard} setLoading={setLoading} /> }
                { setConsultModal && <Consult english={english} setSuccessCard={setSuccessCard} setLoading={setLoading} /> }

                { loading && <Spinner /> }
            </div>
        
        </div>
    </div>
  )
}

export default ModalContainer