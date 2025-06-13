const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const phoneRegex = /^\+?(\d{1,3})?[-.\s]?(\(?\d{2,4}\)?)[-.\s]?\d{3,4}[-.\s]?\d{4}$/;

export const isEmail = (email: string) => emailRegex.test(email);

export const isPhoneNumber = (email: string) => phoneRegex.test(email);
