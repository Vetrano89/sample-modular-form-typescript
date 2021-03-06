import { ReactElement } from 'react-transition-group/node_modules/@types/react';
import { Tip, constructInsightTip } from './tip-config';
import { FormikProps } from 'formik';
import BasicInfoForm from '../view/basic-info-form';
import CloudProviderForm from '../view/cloud-provider-form';

export enum DescriptionAndTitleSubSteps {
  DESCRIPTION_AND_TITLE = 0
}

// TODO: We could make these types really strict by defining each step and substep as a type individually
// with titles and substeps defined in those types

export interface MainStep {
  id: 'DESCRIPTION_AND_TITLE' | 'CURRENT_ENVIRONMENT' | 'CALENDAR_AND_AVAILABILITY' | 'PAYMENTS';
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
        renderFormContent: (formik, setHasErrors) => <BasicInfoForm formik={formik} setHasErrors={setHasErrors} />
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
        },
      },
      {
        title: 'Which cloud provider(s) do you currently use?',
        tip: constructInsightTip({
          number: 304,
          environmentType: 'Hybrid Cloud'
        }),
        renderFormContent: (formik, setHasErrors) => <CloudProviderForm formik={formik} setHasErrors={setHasErrors} />

      },
      {
        title: 'Is your environment running on any container or orchestration tools?'
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
  }
]

export const TOTAL_STEPS: number = mainSteps.reduce((acc, step) => { return acc + step.subSteps.length }, 0)