// Security utilities for input validation and sanitization

export const sanitizeInput = (input: string): string => {
  // Remove potentially dangerous characters and limit length
  return input
    .replace(/[<>'"&]/g, '') // Remove HTML/JS injection chars
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/data:/gi, '') // Remove data: protocol
    .trim()
    .substring(0, 1000); // Limit to 1000 characters
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\-\(\)\+\.]{10,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

export const validateName = (name: string): boolean => {
  return name.length >= 2 && name.length <= 100 && /^[a-zA-Z\s\-'\.]+$/.test(name);
};

export const createSecureMailtoLink = (
  to: string,
  subject: string,
  body: string
): string => {
  // Validate and sanitize all inputs
  const sanitizedSubject = sanitizeInput(subject);
  const sanitizedBody = sanitizeInput(body);
  
  // Encode for URL safety
  const encodedSubject = encodeURIComponent(sanitizedSubject);
  const encodedBody = encodeURIComponent(sanitizedBody);
  
  return `mailto:${to}?subject=${encodedSubject}&body=${encodedBody}`;
};