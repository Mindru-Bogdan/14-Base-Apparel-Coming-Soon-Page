import ImageDesktop from '../../src/hero-desktop.jpg';
import ImageMobile from '../../src/hero-mobile.jpg';

import classes from './Img.module.css';

const Img = () => {
  return (
    <div>
      <img className={classes.imageDesktop} src={ImageDesktop} />
      <img className={classes.imageMobile} src={ImageMobile} />
    </div>
  );
};

export default Img;
