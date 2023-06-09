import Content from './Content.js';
import Img from './Img.js';

import classes from './Card.module.css';

const Card = () => {
  return (
    <div className={classes.body}>
      <Content />
      <Img />
    </div>
  );
};

export default Card;
