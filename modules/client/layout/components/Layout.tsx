import React, { useState, useRef, useEffect } from 'react';
import Footer from '../containers/Footer';
import { ClientLayout, WelcomeSlider, WelcomePage, Logo } from '../../../styles/client';
import Slider from 'react-slick';
import { Button } from 'rsuite';
import Link from 'next/link';
import ModalComponent from '../../../common/ModalComponent';
import { IUser } from '../../../types';
import { useRouter } from 'next/router';
import { Animation1, Animation2, Animation3, Animation4 } from '../../../common/ScreenAnimation';
import { step1, step2, step3, step4, step5, t, spay, loves, hippo, marchaakhai, lovesHeader, memoWords, tomyo, model as modelImg } from '../../../client/constants';

type Props = {
  children: any;
  currentCustomer: IUser;
};

function Layout({ children }: Props) {
  const [welcome, setWelcome] = useState(false);
  const [welcomePage, setWelcomePage] = useState(false);
  const [welcomePageAnimation, setWelcomePageAnimation] = useState(true);
  const [logoAnimation, setLogoAnimation] = useState(true);
  const [model, setModel] = useState(false);
  const [modelOut, setModelOut] = useState(false);

  const sliderRef = useRef();

  const router = useRouter();
  const { token } = router.query;

  const settings = {
    arrow: false,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const gotoNext = () => {
    // @ts-ignore
    sliderRef.current.slickNext();
  };

  const gotoClient = () => {
    setWelcome(false);
    localStorage.setItem('notFirstTime', 'true');
  };

  window.onunload = () => {
    if (localStorage.getItem('activeUser') === 'true') {
      localStorage.removeItem('activeUser');
    }
  };

  useEffect(() => {
    if (!localStorage.getItem('notFirstTime')) {
      setWelcome(true);

      window.setTimeout(() => {
        setWelcomePage(false);
      }, 6000);
      window.setTimeout(() => {
        setWelcomePageAnimation(false);
      }, 5000);
      window.setTimeout(() => {
        setModelOut(true);
      }, 4000);
      window.setTimeout(() => {
        setModel(true);
      }, 1000);
      window.setTimeout(() => {
        setLogoAnimation(false);
      }, 2000);
    } else {
      setWelcome(false);
    }
    if (!localStorage.getItem('activeUser')) {
      setWelcomePage(true);
      window.setTimeout(() => {
        setWelcomePage(false);
        window.localStorage.setItem('activeUser', 'true');
      }, 5000);
      window.setTimeout(() => {
        setWelcomePageAnimation(false);
      }, 4500);
      window.setTimeout(() => {
        setModelOut(true);
      }, 4000);
      window.setTimeout(() => {
        setModel(true);
      }, 1000);
      window.setTimeout(() => {
        setLogoAnimation(false);
      }, 2000);
    }
  });

  const renderLogo = (value) => {
    if (value === 'stay') {
      return (
        <Logo className={`logo animate__animated ${modelOut || 'animate__flipInY'}`}>
          <div className="flex">
            <img src={t} alt="loves coffee" className={` tugrug animate__animated `} />
            <img src={spay} alt="loves coffee" className={` spay animate__animated `} />
          </div>
          <img src={lovesHeader} alt="loves coffee" className={` loves animate__animated`} />
        </Logo>
      );
    }
    return (
      <Logo className={`animate__animated ${logoAnimation ? '' : 'animate__zoomOutLeft'}`}>
        <div className="flex">
          <img src={t} alt="loves coffee" className={` tugrug animate__animated ${logoAnimation && 'animate__flip'}`} />
          <img src={spay} alt="loves coffee" className={` spay animate__animated ${logoAnimation && 'animate__flipInY'}`} />
        </div>
        <img src={lovesHeader} alt="loves coffee" className={` loves animate__animated ${logoAnimation && 'animate__flipInY'}`} />
      </Logo>
    );
  };

  if (welcomePage) {
    return (
      <WelcomePage className={`animate__animated ${welcomePageAnimation || 'animate__fadeOut'}`}>
        {renderLogo('stay')}
        {/* {model && (
          <img src={modelImg} alt="loves " className={` amc animate__animated ${model ? 'animate__bounceInUp' : modelOut && 'animate__flipOutY'}`} />
        )} */}
      </WelcomePage>
    );
  }

  if (welcome) {
    return (
      <WelcomeSlider>
        {welcomePage && (
          <WelcomePage className={`animate__animated ${welcomePageAnimation || 'animate__fadeOut'}`}>
            {renderLogo('stay')}
            {/* {model && (
              <img
                src={modelImg}
                alt="loves "
                className={` amc animate__animated ${model ? 'animate__bounceInUp' : modelOut && 'animate__flipOutY'}`}
              />
            )} */}
          </WelcomePage>
        )}
        <div>
          {renderLogo('stay')}
          <Slider ref={sliderRef} {...settings} className="welcome-slider">
            <div className="welcome-item">
              <div className="description">
                {/* <Animation1 /> */}
                <img
                  src={loves}
                  alt="loves "
                />
                <p>{step1}</p>
                <Button color="violet" onClick={gotoNext}>
                  Үргэлжлүүлэх
                  <i className="fas fa-chevron-right" />
                </Button>
              </div>
            </div>
            <div className="welcome-item">
              <div className="description">
                {/* <Animation2 /> */}
                <img
                  src={hippo}
                  alt="hippo"
                />
                <p>{step2}</p>
                <Button color="violet" onClick={gotoNext}>
                  Үргэлжлүүлэх
                  <i className="fas fa-chevron-right" />
                </Button>
              </div>
            </div>
            <div className="welcome-item">
              <div className="description">
                {/* <Animation3 /> */}
                <img
                  src={tomyo}
                  alt="tomyo"
                />
                <p>{step3}</p>
                <Button color="violet" onClick={gotoNext}>
                  Үргэлжлүүлэх
                  <i className="fas fa-chevron-right" />
                </Button>
              </div>
            </div>
            <div className="welcome-item">
              <div className="description">
                {/* <Animation4 /> */}
                <img
                  src={memoWords}
                  alt="memoWords"
                />
                <p>{step4}</p>
                <Link href={`/client?token=${token}`}>
                  <Button color="violet" onClick={gotoClient}>
                    Эхлэх
                    <i className="fas fa-chevron-right" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="welcome-item">
              <div className="description">
                {/* <Animation4 /> */}
                <img
                  src={marchaakhai}
                  alt="marchaakhai"
                />
                <p>{step5}</p>
                <Link href={`/client?token=${token}`}>
                  <Button color="violet" onClick={gotoClient}>
                    Эхлэх
                    <i className="fas fa-chevron-right" />
                  </Button>
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </WelcomeSlider>
    );
  }
  return (
    <ClientLayout>
      <ModalComponent
        content="Та манай кофе шопоор SocialPay
        үйлчилгээг ашиглан хямдралтай 
        урамшуулал болон үйлчилгээг 
        авах боломжтой"
        show={false}
      />
      {children({})}
      <Footer />
    </ClientLayout>
  );
}

export default Layout;
