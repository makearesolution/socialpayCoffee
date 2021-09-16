import React, { useState } from 'react';
import { GiftContainer, GiftItem, LimitText } from '../../../styles/client';
import { Row, Col, Modal, Button, InputPicker, Tooltip } from 'rsuite';
import gifts from '../gifts';
import { useRouter } from 'next/router';
import { usedYourLottery, noPromotionOnTheBranch, noTransactionToday, noAccessToLottery, noWinLottery, winLottery } from '../../constants';
type Props = {
  createCoupon: (dataId: string) => void;
  promotionData?: any;
  dataId: String;
  giftData: any;
};

function Gift({ createCoupon, promotionData, giftData }, props: Props) {
  const [toggle, setToggle] = useState(false);
  const [pick, setPick] = useState(false);
  const [showList, setShowList] = useState(false);
  const [pickedItem, setPickedItem] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');

  const gift = giftData && giftData.data.couponsAdd;
  const todayCompanies = promotionData.map((promotion) => ({ label: promotion.companyName, value: promotion._id }));
  const router = useRouter();
  const { token } = router.query;

  const data = promotionData && promotionData.length ? promotionData[0] : '';
  console.log(promotionData);
  const handleClick = (e) => {
    if (data.responseMessage == 'One lottery on day, day limit warning') {
      setToggle(true);
    } else {
      if (selectedBranch) {
        setTimeout(() => {
          setToggle(true);
        }, 2500);

        setPick(true);
        setPickedItem(e.target.id);

        createCoupon(data._id);
      } else {
        // setSelectedBranch("disabled")
      }
    }
  };

  const item = (i, gift) => {
    return (
      <Col xs={8} key={i}>
        <GiftItem
          pickedItem={pickedItem}
          isPicked={data.responseMessage == 'One lottery on day, day limit warning' ? true : pick}
          id={`gift${i}`}
          onClick={handleClick}
          className={`animate__shakeX animate__animated animate__fadeInUp`}
        >
          <div className="cap">
            <img id={`gift${i}`} src={gift.capUrl} alt="coffee" />
          </div>
          {/* <div className="cup">
            <img id={`gift${i}`} src={gift.cupUrl} alt="coffee" />
          </div> */}
        </GiftItem>
      </Col>
    );
  };

  const handleOrgSelect = (val: any) => {
    setSelectedBranch(val);
  };

  const handleWinnerClose = () => {
    setToggle(!toggle);
    window.location.href = '/client/coupon?token=' + token;
  };

  const handleLoserClose = () => {
    setToggle(!toggle);
    window.location.href = '/client/gift?token=' + token;
  };

  return (
    <>
      {data.responseMessage == 'One lottery on day, day limit warning' && (
        <LimitText className="animate__fadeInUp animate__animated">
          <p dangerouslySetInnerHTML={{ __html: usedYourLottery }} />
        </LimitText>
      )}
      {data.promotionCorCount === 0 && (
        <LimitText className="animate__fadeInUp animate__animated">
          <p>{noPromotionOnTheBranch}</p>
        </LimitText>
      )}
      {!promotionData.length && (
        <LimitText className="animate__fadeInUp animate__animated">
          <p>{noTransactionToday}</p>
        </LimitText>
      )}
      <GiftContainer selectedBranch={selectedBranch}>
        <InputPicker
          onEnter={() => setShowList(true)}
          onExit={() => setShowList(false)}
          placeholder="Байгууллагаа сонгоно уу"
          data={todayCompanies}
          value={selectedBranch}
          onChange={handleOrgSelect}
        />
        {selectedBranch ? null : showList ? null : <Tooltip visible={true}>Та өнөөдөр үйлчлүүлсэн байгууллагаа сонгоно уу.</Tooltip>}
        <Row gutter={32}>{gifts.map((gift, i) => item(i, gift))}</Row>

        {data.responseMessage == 'One lottery on day, day limit warning' ? (
          <Modal className="gift-modal" size="xs" show={toggle} onHide={() => setToggle(!toggle)}>
            <Modal.Header>
              <Modal.Title>Уучлаарай</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{noAccessToLottery}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setToggle(!toggle)} appearance="subtle">
                Хаах
              </Button>
            </Modal.Footer>
          </Modal>
        ) : giftData && giftData.data.couponsAdd.responseMessage === null ? (
          <Modal className="gift-modal" size="xs" show={toggle} onHide={handleWinnerClose}>
            <div className="pyro">
              <div className="before" />
              <div className="after" />
            </div>
            <Modal.Header>
              <Modal.Title>Танд баяр хүргэе!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={giftData && gift.promotionCor.promotion.imageDir ? gift.promotionCor.promotion.imageDir : '/default.jpeg'} alt="" />
              <p
                dangerouslySetInnerHTML={{
                  __html: winLottery(giftData && gift.promotionCor.companies[0].primaryName, giftData && gift.promotionCor.promotion.title),
                }}
              />

              <p>Таны купон код:</p>
              <span>{giftData && gift.couponCode}</span>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleWinnerClose} appearance="subtle">
                Хаах
              </Button>
            </Modal.Footer>
          </Modal>
        ) : (
          <Modal className="gift-modal" size="xs" show={toggle} onHide={handleLoserClose}>
            <Modal.Body>
              <img src={'/loss.jpeg'} alt="" />
              <p>{noWinLottery}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleLoserClose} appearance="subtle">
                Хаах
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </GiftContainer>
    </>
  );
}

export default Gift;
