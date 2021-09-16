import React from 'react';
import animationData from '../../public/coffee-cup.json';
import animationData2 from '../../public/beans.json';
import animationData3 from '../../public/gift2.json';
import animationData4 from '../../public/coffee.json';
import animationError from '../../public/coffee-spilled.json';
import Lottie from 'react-lottie';

const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: animationData2,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const defaultOptions3 = {
  loop: true,
  autoplay: true,
  animationData: animationData3,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const defaultOptions4 = {
  loop: true,
  autoplay: true,
  animationData: animationData4,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const defaultOptionsError = {
  loop: true,
  autoplay: true,
  animationData: animationError,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export const Animation1 = () => {
  return <Lottie options={defaultOptions1} width={240} height={240} />;
};

export const Animation2 = () => {
  return <Lottie options={defaultOptions2} width={180} height={180} />;
};

export const Animation3 = () => {
  return <Lottie options={defaultOptions3} width={240} height={240} />;
};

export const Animation4 = () => {
  return <Lottie options={defaultOptions4} width={160} height={160} />;
};

export const AnimationError = () => {
  return <Lottie options={defaultOptionsError} width={160} height={160} />;
};
