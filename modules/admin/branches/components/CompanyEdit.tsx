import React, { useState } from 'react';
import { CouponDetail } from '../../../styles/main';
import { IUser } from '../../../types';
import { withRouter } from 'next/router';
import { Input, Row, Col, Button, Modal, Form, FormGroup, ControlLabel, FormControl, Uploader, Icon } from 'rsuite';

type Props = {
  currentUser: IUser;
  router: any;
  companyDetail: any;
  editCompany: (timeTable: string, address: string, description: string, phone: string, email: string, web: string, facebook: string) => void;
};

function CompanyEdit({ editCompany, companyDetail }: Props) {
  const [show, setShow] = useState(false);

  const company = companyDetail && companyDetail.length ? companyDetail[0] : '';

  const [formValue, setFormValue] = useState({
    timeTable: company.timeTable,
    address: company.address,
    phone: company.phones,
    email: company.primaryEmail,
    web: company.website,
    facebook: company.facebook,
  });

  const [desc, setDesc] = useState('descr');

  const toggleModal = () => setShow((value) => !value);

  const handleSubmit = () => {
    editCompany(formValue.timeTable, formValue.address, desc, formValue.phone, formValue.email, formValue.web, formValue.facebook);
    setShow(false);
  };

  const handleChange = (formValue: any) => {
    setFormValue({ timeTable: formValue.timeTable, address: formValue.address, phone: formValue.phone, email: formValue.email, web: formValue.web, facebook: formValue.facebook });
  };

  return (
    <>
      <Button onClick={() => setShow(true)}>
        <span className="rs-hidden-xs">Байгууллагийн мэдээлэл засах &nbsp;&nbsp;</span>
        <i className="fas fa-edit" />
      </Button>
      <Modal size="lg" show={show} onHide={toggleModal}>
        <Modal.Header>
          <Modal.Title>Салбар Засах</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CouponDetail>
            <Form onChange={handleChange} onSubmit={handleSubmit} formValue={formValue}>
              <Row gutter={20}>
                <Col xs={24} sm={12}>
                  <FormGroup>
                    <ControlLabel>Хаяг</ControlLabel>
                    <FormControl name="address" />
                  </FormGroup>
                </Col>
                <Col xs={24} sm={12}>
                  <FormGroup>
                    <ControlLabel>Цагийн хуваарь</ControlLabel>
                    <FormControl defaultValue="12:00" name="timeTable" />
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
                    <FormControl name="facebook" />
                  </FormGroup>
                </Col>
                <Col xs={24} sm={12}>
                  <FormGroup>
                    <ControlLabel>Утасны дугаар оруулах</ControlLabel>
                    <FormControl name="phone" />
                  </FormGroup>
                </Col>
                <Col xs={24} sm={12}>
                  <FormGroup>
                    <ControlLabel>Имэйл хаяг оруулах</ControlLabel>
                    <FormControl name="email" />
                  </FormGroup>
                </Col>
                <Col xs={24} sm={12}>
                  <FormGroup>
                    <ControlLabel>Цахим хаяг холбоос оруулах</ControlLabel>
                    <FormControl name="web" />
                  </FormGroup>
                </Col>
                <Col xs={24} sm={24}>
                  <FormGroup>
                    <ControlLabel>Нэмэлт мэдээлэл</ControlLabel>
                    <Input onChange={(value) => setDesc(value)} defaultValue={company.description} componentClass="textarea" rows={8} name="description" />
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </CouponDetail>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit} appearance="primary">
            Хадгалах хүсэлт илгээх
          </Button>
          <Button onClick={toggleModal} appearance="subtle">
            Цуцлах
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default withRouter(CompanyEdit);
