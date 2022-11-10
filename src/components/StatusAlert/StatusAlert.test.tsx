import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StatusAlert from './StatusAlert';

describe('<StatusAlert />', () => {
  test('it should mount', () => {
    render(<StatusAlert />);
    
    const statusAlert = screen.getByTestId('StatusAlert');

    expect(statusAlert).toBeInTheDocument();
  });
});