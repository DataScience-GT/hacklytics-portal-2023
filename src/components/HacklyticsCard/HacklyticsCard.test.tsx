import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HacklyticsCard from './HacklyticsCard';

describe('<HacklyticsCard />', () => {
  test('it should mount', () => {
    render(<HacklyticsCard />);
    
    const hacklyticsCard = screen.getByTestId('HacklyticsCard');

    expect(hacklyticsCard).toBeInTheDocument();
  });
});