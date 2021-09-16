import React, { useState } from 'react'
import { Modal, Button } from 'rsuite'
import { welcomeSvg } from './Svg'
type Props = {
    content: string;
    title?: string;
    show: boolean;
    img?: string;
    win?: boolean;
}

const ModalComponent = (props: Props) => {
    const [toggle, setToggle] = useState(props.show);
    return(
        <Modal
          className="gift-modal"
          size="xs"
          show={toggle}
          onHide={() => setToggle(!toggle)}
        >
            {props.win && 
                <div className="pyro">
                    <div className="before" />
                    <div className="after" />
                </div>
            }
          <Modal.Header>
            {props.title && <Modal.Title>{props.title}</Modal.Title>}
          </Modal.Header>
          <Modal.Body>
            {props.img ? <img src={props.img} alt={props.title} /> : welcomeSvg}
            {props.content}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setToggle(!toggle)} appearance="subtle">
              Хаах
            </Button>
          </Modal.Footer>
        </Modal>
    )
}

export default ModalComponent;