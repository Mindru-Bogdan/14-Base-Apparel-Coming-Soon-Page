import { useState } from 'react';

import Arrow from '../../src/icon-arrow.svg';
import Error from '../../src/icon-error.svg';

import classes from './Submit.module.css';

const Submit = () => {
  const [email, setEmail] = useState('');
  const [validity, setValidity] = useState(true);

  const emailSet = (event) => {
    setEmail(event.target.value);
  };

  const isEmailValid = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const ValidityHandler = (event) => {
    if (!isEmailValid(email)) {
      setValidity(false);
    } else {
      setValidity(true);
    }
  };

  return (
    <form>
      <input type="text" placeholder="Email Address" onChange={emailSet} />
      <img className={classes.arrow} src={Arrow} onClick={ValidityHandler} />
      <img className={validity ? classes.hidden : classes.error} src={Error} />
      <p className={validity ? classes.hidden : classes.errorText}>Please provide a valid email</p>
    </form>
  );
};

export default Submit;
