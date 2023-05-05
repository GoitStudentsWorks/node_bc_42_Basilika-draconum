import * as Yup from 'yup';

// Validation schema
export const profileSchema = Yup.object({
  name: Yup.string().max(16, 'Must be 16 characters or less').required(),
  phone: Yup.string().matches(
    /(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4,5}$)/,
    'invalid phone number format'
  ),
  birthday: Yup.date().default(() => new Date()),
  email: Yup.string().email('Invalid email address').required('Required'),
  skype: Yup.string()
    .min(6, 'Must be 6 characters or more')
    .max(16, 'Must be 16 characters or less'),
});
