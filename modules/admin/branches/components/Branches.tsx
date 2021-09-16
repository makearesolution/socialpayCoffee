import React, { useState } from 'react';
import { DashboardContainer, AddBranch, CouponDetail, BranchItem } from '../../../styles/main';
import { Row, Input, Col, Form, Button, Modal, FormGroup, ControlLabel, FormControl, Uploader, Icon } from 'rsuite';
type Props = {};

function Branches(props: Props) {
  const [show, setShow] = useState(false);

  const toggleModal = () => setShow((value) => !value);

  const branchItem = () => {
    return (
      <Col xs={24} sm={12} md={8} lg={6}>
        <BranchItem>
          <div className="thumbnail" style={{ background: 'url(/static/logos/coffee.png)' }}>
            <Button onClick={toggleModal}>
              <i className="fas fa-edit" />
            </Button>
          </div>
          <div className="caption">
            <h5>Өргөө салбар</h5>
            <div className="details">
              <span>09:00 - 21:00</span>
            </div>
          </div>
        </BranchItem>
      </Col>
    );
  };

  return (
    <DashboardContainer>
      <Row gutter={30}>
        {branchItem()}
        {branchItem()}
      </Row>

      <Modal size="lg" show={show} onHide={toggleModal}>
        <Modal.Header>
          <Modal.Title>Салбар Засах</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CouponDetail>
            <Form>
              <Row gutter={20}>
                <Col xs={24} sm={12}>
                  <FormGroup>
                    <ControlLabel>Байгууллагын нэр</ControlLabel>
                    <FormControl name="name" />
                  </FormGroup>
                </Col>
                <Col xs={24} sm={12}>
                  <FormGroup>
                    <ControlLabel>Цагийн хуваарь</ControlLabel>
                    <FormControl name="name" />
                  </FormGroup>
                </Col>
                <Col xs={24} sm={12}>
                  <FormGroup>
                    <ControlLabel> Thumbnail Зураг оруулах</ControlLabel>
                    <Uploader multiple={true} listType="picture" action="//jsonplaceholder.typicode.com/posts/">
                      <button>
                        <Icon icon="camera-retro" size="lg" />
                      </button>
                    </Uploader>
                  </FormGroup>
                </Col>
                <Col xs={24} sm={12}>
                  <FormGroup>
                    <ControlLabel>Cover зураг оруулах</ControlLabel>
                    <Uploader multiple={true} listType="picture" action="//jsonplaceholder.typicode.com/posts/">
                      <button>
                        <Icon icon="camera-retro" size="lg" />
                      </button>
                    </Uploader>
                  </FormGroup>
                </Col>
                <Col xs={24} sm={12}>
                  <FormGroup>
                    <ControlLabel>Facebook холбоос оруулах</ControlLabel>
                    <FormControl name="name" />
                  </FormGroup>
                </Col>
                <Col xs={24} sm={12}>
                  <FormGroup>
                    <ControlLabel>Утасны дугаар оруулах</ControlLabel>
                    <FormControl name="name" />
                  </FormGroup>
                </Col>
                <Col xs={24} sm={12}>
                  <FormGroup>
                    <ControlLabel>Имэйл хаяг оруулах</ControlLabel>
                    <FormControl name="name" />
                  </FormGroup>
                </Col>
                <Col xs={24} sm={12}>
                  <FormGroup>
                    <ControlLabel>Цахим хаяг холбоос оруулах</ControlLabel>
                    <FormControl name="name" />
                  </FormGroup>
                </Col>
                <Col xs={24} sm={24}>
                  <FormGroup>
                    <ControlLabel>Нэмэлт мэдээлэл</ControlLabel>
                    <Input componentClass="textarea" rows={8} name="name" />
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </CouponDetail>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={toggleModal} appearance="primary">
            Хадгалах хүсэлт илгээх
          </Button>
          <Button onClick={toggleModal} appearance="subtle">
            Цуцлах
          </Button>
        </Modal.Footer>
      </Modal>
    </DashboardContainer>
  );
}

export default Branches;
