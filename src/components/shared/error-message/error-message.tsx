import './error-message.css';

type TErrorMessageProps = {
  errorText: string;
}

function ErrorMessage({errorText}: TErrorMessageProps) {
  return (
    <div className='error-message'>
      <p className='error-message__text'>{errorText}</p>
    </div>
  )
}

export default ErrorMessage;
