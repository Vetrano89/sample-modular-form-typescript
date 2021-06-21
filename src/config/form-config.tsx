import { FormikContextType } from 'formik';

export interface FormProps {
    formik: FormikContextType<any>,
    setHasErrors: (hasErrors: boolean) => void
}