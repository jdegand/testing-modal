# Testing Modal

[Angular Challenges](https://github.com/tomalaforge/angular-challenges) #20 Modal Testing

## Built With

- [Angular](https://angular.io)
- [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.
- [Testing Library Angular](https://testing-library.com/docs/angular-testing-library/intro)
- [Jest](https://jestjs.io)
- [Cypress](https://www.cypress.io)

## Directions

The goal of this challenge is to test dialogs inside your application. Within this program, you will get an error modal if the user doesn't input a name, while a confirmation modal will appear in all other cases. In the confirmation modal, if you click the "confirm" button, a message confirming the submission of the form will appear. Otherwise, if the user clicks on "Cancel", an error message will be displayed.

## Thoughts

- I didn't include Angular Material animations.  The mat-input apparently has an animation so I had to ignore uncaught exceptions for the Cypress tests to work.   
- My first thought on how to test a modal was to just use `document.querySelector` to grab the elements of the modal after a click on the button that brings up the modal.
- Using `document.querySelector is kind of cheating`; you are not using testing library query selectors.  
- The HTML doesn't provide much that is specific to each element that would make selecting each element easier.  
- I added data-cy attributes to the buttons because I had difficulty getting the click on the right part of the button.  The buttons have multiple layers and targeting the inner layer prevents clicks from registering.   

## How to Use

```bash 

git clone https://github.com/jdegand/testing-modal.git

# cd into the directory
npm install

# Jest 

npm test

# Jest with Coverage

npm run test:coverage

# Cypress

npm run cypress:open
```

## Useful Resources

- [Testing Library](https://testing-library.com/docs/example-react-modal/) - example react modal
- [Stack Overflow](https://stackoverflow.com/questions/70784317/angular-unit-test-for-modal-popup) - angular unit test for modal popup
- [Medium](https://lalit-kushwah.medium.com/how-to-write-unit-test-cases-for-the-modal-component-part-3-3-e62a395a97a) - write unit test cases for modal component
- [YouTube](https://www.youtube.com/watch?v=m3BY6333CKc) - Unit Testing Angular Component With Material Dialog | MatDialog | Jasmine | Karma | With Source Code
- [Stack Overflow](https://stackoverflow.com/questions/53845493/cypress-uncaught-assertion-error-despite-cy-onuncaughtexception) - cypress uncaught assertion error despite cy on uncaught exception