# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Trello board
https://trello.com/b/s37XOtQK/sagetap-sample-project

## App Setup

- Suggested Node version `14.17.0`
- Suggested NPM version `6.14.13`

1. Run `npm install` to install dependencies
2. Run `npm start` to start the app
3. Go to `http://localhost:3000/`

## Modular forms

It's easy to create a new form steps.  Go to https://github.com/Vetrano89/sample-modular-form-typescript/blob/main/src/config/step-config.tsx#L107 and below PAYMENTS, add a new entry:

```
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
```

Add `FINALIZE` (or your chosen id) to the step type https://github.com/Vetrano89/sample-modular-form-typescript/blob/bce5d190627b171ba6625f1e7fce7a9e8304e67b/src/config/step-config.tsx#L14
