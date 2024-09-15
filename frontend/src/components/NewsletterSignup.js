import { useEffect } from 'react';
import classes from './NewsletterSignup.module.css';
import { useFetcher } from 'react-router-dom';

function NewsletterSignup() { //fetcher used for action/loader which do not lead to transition in page
    const fetcher = useFetcher(); //using just Form will redirect to /newsletter which i don't want
    const {data, state} = fetcher;

    useEffect(() => {
        if(state === 'idle' && data && data.message) {
            window.alert(data.message)
        }
    }, [data, state])
  return (
    <fetcher.Form method="post" action='/newsletter' className={classes.newsletter}>
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;