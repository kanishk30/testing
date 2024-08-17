/**
 * 3 step process on hgh level
 * - render the component
 * - select the part that i wnat to checl
 * - compare
 */

import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../Components/Counter';

describe('Counter test cases', () => {
    test('Checking initial state render', () => {
        // rendering the component
        render(<Counter />);
        // selection.
        const minusText = screen.getByText('-')
        const plusText = screen.getByText('+')
        const countText = screen.getByText('Count is 0')

        // verifying stage...
        expect(minusText).toBeInTheDocument()
        expect(plusText).toBeInTheDocument()
        expect(countText).toBeInTheDocument()
    })

    // increment by 1.
    // mock the click event. fire event by code only.

    test('increment by 1', () => {
        render(<Counter />);
        const plusText = screen.getByText('+');
        fireEvent.click(plusText);

        const isOnePresent = screen.getByText('Count is 1');
        expect(isOnePresent).toBeInTheDocument()
    })

    test('decrement by 5', () => {
        render(<Counter />);
        const minusText = screen.getByText('-');
        fireEvent.click(minusText);
        fireEvent.click(minusText);
        fireEvent.click(minusText);
        fireEvent.click(minusText);
        fireEvent.click(minusText);
        const isOnePresent = screen.getByText('Count is -5');
        expect(isOnePresent).toBeInTheDocument()
    })

    test('Snapshot for counter', () => {
        const { asFragment } = render(<Counter />)
        expect(asFragment()).toMatchSnapshot(); //
    })
})

