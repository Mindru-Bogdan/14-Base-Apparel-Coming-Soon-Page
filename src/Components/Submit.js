import Arrow from '../../src/icon-arrow.svg';

import classes from './Submit.module.css';

const Submit = () => {
  return (
    <form>
      <input type="text" placeholder="Email Address" />
      <img className={classes.arrow} src={Arrow} />
    </form>
  );
};

export default Submit;
