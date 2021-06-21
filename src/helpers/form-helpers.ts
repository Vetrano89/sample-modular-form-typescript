import { FormikContextType } from 'formik';

export const hasErrors = (formik: FormikContextType<any>, fields: string[]) => {
  console.log('THIS RAN')
  console.log(formik.errors)
  return Object
    .keys(formik.errors)
    .some(errorFields => fields.indexOf(errorFields) > 0)
};