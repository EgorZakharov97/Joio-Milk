import React, { useState } from 'react';
import { PlasmicComponent } from '@plasmicapp/loader-nextjs';
import validateEmail from '../lib/validateEmail';

export default function EmailSubmission(props) {
  const [email, setEmail] = useState("");
  const [isEmailValid, setEmailValid] = useState(true);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const onSubmit = () => {
    alert('form has been submitted, ' + email);
    const isValid = validateEmail(email);
    if (isValid) setSuccess(true);
    else setEmailValid(false);
  }

  return (
    <PlasmicComponent
      component="EmailCollector"
      // Ask Plasmic to use the original, Plasmic-generated
      // EmailSubscribeForm component
      forceOriginal
      componentProps={{
        form: {
          props: {
            // add an onSubmit handler to the root form element
            onSubmit: onSubmit,
          }
        },
        input: {
          // Control the input element value with React state
          props: {
            value: email,
            onChange: (e: React.FormEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)
          }
        },

        // Activate a "isInvalid" variant based on whether the typed email is
        // valid or not
        emailinvalid: isEmailValid ? 1 : 0,
        submitted: success ? 1 : 0,
        error: failure ? 1 : 0
      }}
    />
  );
}