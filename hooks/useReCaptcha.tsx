import { useState, useRef, useCallback } from 'react';

const useRecaptcha = () => {
  const [capchaToken, setCapchaToken] = useState<string>('');
  const recaptchaRef = useRef(null);

  const handleRecaptcha = useCallback((token: string | null) => {
    setCapchaToken(token || '');
  }, []);

  return { capchaToken, setCapchaToken, recaptchaRef, handleRecaptcha };
};

export default useRecaptcha;
