import React from 'react';
import { Empty } from '../styles/client';
import { AnimationError } from './ScreenAnimation';
type Props = {
  title: any;
  type?: string;
};

const EmptyState = (props: Props) => {
  if (props.type === 'error') {
    return (
      <Empty>
        <div>
          <AnimationError />
          <h4>{props.title}</h4>
        </div>
      </Empty>
    );
  }
  return (
    <Empty>
      <div>
        <AnimationError />
        <h4>{props.title}</h4>
      </div>
    </Empty>
  );
};

export default EmptyState;
