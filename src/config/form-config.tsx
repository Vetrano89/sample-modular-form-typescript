import { FormikProps } from 'formik';

export interface FormProps {
    // TODO: Define all possible fields and allow an object with any of those fields (instead of any)
    // eslint-disable-next-line
    formik: FormikProps<any>,
    setHasErrors: (hasErrors: boolean) => void
}