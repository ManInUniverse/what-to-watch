import { FormEvent, useRef, useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { loginAction } from '../../store/api-actions';
import { getUserProcessingStatus } from '../../store/slices/user-process/selectors';

function SignInForm(): JSX.Element {
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const isUserProcessing = useAppSelector(getUserProcessingStatus);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [message, setMessage] = useState('');

  const onPasswordInputChange = () => {
    if (passwordInputRef.current) {
      const re = /^(?=.*\d)(?=.*[a-z]).{1,}$/;

      if (re.test(passwordInputRef.current.value)) {
        setIsPasswordValid(true);
        setMessage('');
      } else {
        setIsPasswordValid(false);
        setMessage('The password must contain one number and one letter.');
      }
    }
  };

  const onFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if ((emailInputRef.current && passwordInputRef.current) && isPasswordValid) {
      dispatch(loginAction({
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value
      }));
    }
  };

  return (
    <form onSubmit={ onFormSubmit } action="#" className="sign-in__form">
      <div className="sign-in__message">
        <p>{ message }</p>
      </div>
      <div className="sign-in__fields">
        <div className="sign-in__field">
          <input
            className="sign-in__input"
            type="email"
            placeholder="Email address"
            name="user-email"
            id="user-email"
            required
            ref={ emailInputRef }
          />
          <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
        </div>
        <div className="sign-in__field">
          <input
            onChange={ onPasswordInputChange }
            className="sign-in__input"
            type="password"
            placeholder="Password"
            name="user-password"
            id="user-password"
            required
            ref={ passwordInputRef }
          />
          <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button
          className="sign-in__btn"
          type="submit"
          disabled={ isUserProcessing }
        >{ isUserProcessing ? 'Authorization...' : 'Sign in' }
        </button>
      </div>
    </form>
  );
}

export default SignInForm;
