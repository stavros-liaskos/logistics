export const validateName = (name: string): boolean => {
  return /^[A-Za-zα-ωΑ-Ω\s]{1,}$/.test(name);
};

export const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validateMessage = (message: string): boolean => {
  return message.length >= 20;
};
