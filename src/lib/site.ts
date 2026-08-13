const OFFICE_PHONE_DIGITS = "7855884244";

export const OFFICE_PHONE = {
  display: `(${OFFICE_PHONE_DIGITS.slice(0, 3)}) ${OFFICE_PHONE_DIGITS.slice(3, 6)}-${OFFICE_PHONE_DIGITS.slice(6)}`,
  href: `tel:1${OFFICE_PHONE_DIGITS}`,
} as const;
