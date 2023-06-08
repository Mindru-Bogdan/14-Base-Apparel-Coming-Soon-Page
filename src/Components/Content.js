import Submit from './Submit';

import classes from './Content.module.css';

const Content = () => {
  return (
    <div>
      <h1>
        We're <h2>coming soon</h2>
      </h1>
      <p>
        Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with
        announcements and our launch deals.
      </p>
      <Submit />
    </div>
  );
};

export default Content;
