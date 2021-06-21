import { ReactElement } from 'react-transition-group/node_modules/@types/react';
import { Tip, constructInsightTip } from './tip-config';
import { FormikContextType } from 'formik';
import BasicInfoForm from '../components/basic-info-form';

export enum DescriptionAndTitleSubSteps {
  DESCRIPTION_AND_TITLE = 0
}

enum CurrentEnvironmentSubSteps {
  NICKNAME = 1,
  ENVIRONMENT_TYPE = 2,
  CLOUD_PROVIDERS = 3,
  CONTAINER_TOOLS = 4,
  ADD_PRODUCTS = 5,
  LAST_EVALUATION = 6,
  TECHNOLOGY_BIO = 7,
}

enum CalendarAndAvailabilitySubSteps {
  ACCURACY_PROMISE = 8,
  SET_AVAILABILITY = 9,
}

enum PaymentsSubSteps {
  PAYMENTS = 10
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
  renderFormContent?: (formik: FormikContextType<any>, setHasErrors: ((hasErrors: boolean) => void)) => ReactElement; // TODO: remove optional
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
        title: 'What was the last evaluation you participated in?'
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