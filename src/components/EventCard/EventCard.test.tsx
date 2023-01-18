import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EventCard from './EventCard';

describe('<EventCard />', () => {
  test('it should mount', () => {
    render(<EventCard />);
    
    const eventCard = screen.getByTestId('EventCard');

    expect(eventCard).toBeInTheDocument();
  });
});