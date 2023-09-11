import { fireEvent, render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';
import userEvent from '@testing-library/user-event';

describe('AppComponent', () => {
  test('error modal is displayed if you click on "Confirm" without inputing a name 1', async () => {
    await render(AppComponent);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(document.getElementsByTagName('h1')[0]).toBeInTheDocument();
  });

  test('error modal is displayed if you click on "Confirm" without inputing a name 2', async () => {
    await render(AppComponent);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    const errorHeading = document.getElementsByTagName('h1')[0] as HTMLHeadingElement;

    expect(errorHeading).toHaveTextContent('Error');
  });

  test('error message is shown if you click "Cancel" in the confirmation modal after submitting a name', async () => {
    await render(AppComponent);

    const button = screen.getByRole('button');

    const input = screen.getByRole('textbox');

    await userEvent.type(input, 'William');

    await userEvent.click(button);

    const cancelButton = document.querySelectorAll('button')[1] as HTMLButtonElement;

    expect(cancelButton.textContent).toEqual('Cancel');

    await userEvent.click(cancelButton);

    const errorMessage = screen.queryByText('Name is invalid !!');

    expect(errorMessage).toBeInTheDocument();
  });

  test('confirm message is shown if you click "Confirm" in the confirmation modal after submitting a name', async () => {
    await render(AppComponent);

    const button = screen.getByRole('button');

    const input = screen.getByRole('textbox');

    await userEvent.type(input, 'William');

    await userEvent.click(button);

    const confirmButton = document.querySelectorAll('button')[2] as HTMLButtonElement;

    expect(confirmButton.textContent).toEqual('Confirmation');

    await userEvent.click(confirmButton);

    const message = screen.queryByText('Name has been submitted');

    expect(message).toBeInTheDocument();
  });
});
