import { ReactElement } from 'react-transition-group/node_modules/@types/react';
import { Tip, constructInsightTip } from './tip-config';
import { FormikProps } from 'formik';
import BasicInfoForm from '../components/basic-info-form';

export enum DescriptionAndTitleSubSteps {
  DESCRIPTION_AND_TITLE = 0
}

// TODO: We could make these types really strict by defining each step and substep as a type individually
// with titles and substeps defined in those types

export interface MainStep {
  id: 'DESCRIPTION_AND_TITLE' | 'CURRENT_ENVIRONMENT' | 'CALENDAR_AND_AVAILABILITY' | 'PAYMENTS' | 'FINALIZE';
  title: string;
  stepNumber: number; // Avoids needing to loop through the array to findIndex when moving between steps
  subSteps: SubStep[];
}

export interface SubStep {
  title: string;
  tip?: Tip;
  // TODO: Define all possible fields and allow an object with any of those fields (instead of any)
  // eslint-disable-next-line
  renderFormContent?: (formik: FormikProps<any>, setHasErrors: ((hasErrors: boolean) => void)) => ReactElement; // TODO: remove optional
  renderSecondaryContent?: () => ReactElement;
}

export const mainSteps: MainStep[] = [
  {
    id: 'DESCRIPTION_AND_TITLE',
    stepNumber: 0,
    title: 'Description and title',
    subSteps: [
      {
        title: 'Let’s get started with the basics... ',
        tip: {
          title: 'Cloud Architects are in high demand!',
          body: 'Refer a cloud architect and earn 10% of what they earn in their first 12 months on sagetap!',
        },
        renderFormContent: (formik, setHasErrors) => <div />
      },
      {
        title: 'Would you like to go by a nickname?',
        renderSecondaryContent: () => <div>How your profile is displayed:</div>
      },
    ]
  },
  {
    id: 'CURRENT_ENVIRONMENT',
    stepNumber: 1,
    title: 'Current Environment',
    subSteps: [
      {
        title: 'What type of environment do you work in?',
        tip: {
          title: 'Add Cloud Environment',
          body: '@95%@ of vendors want to speak with experts operating in cloud-enabled enviroments. If that’s you, make sure let them know on your profile!',
        }
      },
      {
        title: 'Which cloud provider(s) do you currently use?',
        tip: constructInsightTip({
          number: 304,
          environmentType: 'Hybrid Cloud'
        })
      },
      {
        title: 'Is your environment runnning on any container or orchestration tools?'
      },
      {
        title: 'Add products'
      },
      {
        title: 'What was the last evaluation you participated in?',
        tip: {
          title: 'Current Usage Should Equal 100%',
          body: 'To continue, be share to add percetage usage across cloud providers to give vendors an accurate represntation of your current environment.',
        }
      },
      {
        title: 'Create your technology bio'
      },
    ]
  },
  {
    id: 'CALENDAR_AND_AVAILABILITY',
    stepNumber: 2,
    title: 'Calendar and availability',
    subSteps: [
      {
        title: 'Successful consultations start with an accurate calendar'
      },
      {
        title: 'Set your availability'
      },
    ]
  },
  {
    id: 'PAYMENTS',
    stepNumber: 3,
    title: 'Payments',
    subSteps: [
      {
        title: 'How much would you like to charge vendors?'
      }
    ]
  },
  {
    id: 'FINALIZE',
    stepNumber: 4, // Set to 4 as the previous step was 3.
    title: 'Finalize Signup', // This title appears in the toolbar to designate "main steps"
    subSteps: [{
      title: 'Read and agree to our terms to finish signup!', // This title appears at the top of the subpage to instruct users
      tip: { //dynamically render a generic tip component
        title: 'Signup is free!',
        body: '@100%@ of all successful experts agree to our terms.',
      },
      renderFormContent: (formik, setHasErrors) => <div>This your form content</div> // This is a placeholder to show where the form will appear.
    },
    ]
  }
]

export const TOTAL_STEPS: number = mainSteps.reduce((acc, step) => { return acc + step.subSteps.length }, 0)