import { AuthSection } from 'components/AuthSection/AuthSection';
import { Description } from 'components/Description/Description';
import Slider from 'components/Reviews/reviews';
import React from 'react';

const StartPage = () => {
  return (
    <>
      <AuthSection />
      <Description />
      <Slider />
    </>
  );
};
export default StartPage;
