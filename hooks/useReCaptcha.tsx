import { useState, useRef, useCallback } from 'react';

const useRecaptcha = () => {
  const [captchaToken, setCaptchaToken] = useState<string>('');
  const recaptchaRef = useRef(null);

  /* v8 ignore next 3 */
  const handleRecaptcha = useCallback((token: string | null) => {
    setCaptchaToken(token || '');
  }, []);

  return { captchaToken, setCaptchaToken, recaptchaRef, handleRecaptcha };
};

export default useRecaptcha;
