import { ReactElement } from 'react-transition-group/node_modules/@types/react';
import { Tip, constructInsightTip } from './tip-config';

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

interface MainSteps {
    DESCRIPTION_AND_TITLE: MainStep,
    CURRENT_ENVIRONMENT: MainStep,
    CALENDAR_AND_AVAILABILITY: MainStep,
    PAYMENTS: MainStep,
}

const mainSteps: MainSteps = {
    DESCRIPTION_AND_TITLE: {
        title: 'Description and title',
        subSteps: [
            {
                title: 'Let’s get started with the basics... ',
                tip: {
                    title: 'Cloud Architects are in high demand!',
                    body: 'Refer a cloud architect and earn 10% of what they earn in their first 12 months on sagetap!',
                }
            },
            {
                title: 'Would you like to go by a nickname?',
                customRender: () => <div>How your profile is displayed:</div>
            },
        ]
    },
    CURRENT_ENVIRONMENT: {
        title: 'Description and title',
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
    CALENDAR_AND_AVAILABILITY: {
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
    PAYMENTS: {
        title: 'Payments',
        subSteps: [
            {
                title: 'How much would you like to charge vendors?'
            }
        ]
    }
}

interface MainStep {
    title: string,
    subSteps: SubStep[]
}

interface SubStep {
    title: string,
    tip?: Tip,
    customRender?: () => ReactElement,
}