import { FormikProps } from 'formik';

// TODO: Define all possible fields and allow an object with any of those fields (instead of any)
// eslint-disable-next-line
export const hasErrors = (formik: FormikProps<any>, fields: string[]): boolean => {
  return Object
    .keys(formik.errors)
    .some(errorFields => fields.includes(errorFields))
};