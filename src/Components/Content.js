import Submit from './Submit';

import Background from '../../src/bg-pattern-desktop.svg';
import Logo from '../../src/logo.svg';

import classes from './Content.module.css';

const Content = () => {
  return (
    <div className={classes.card}>
      <img src={Background} className={classes.background} />
      <img src={Logo} className={classes.logo} />
      <h1>WE'RE</h1>
      <h2>COMING SOON</h2>
      <p className={classes.description}>
        Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with
        announcements and our launch deals.
      </p>
      <Submit />
    </div>
  );
};

export default Content;
