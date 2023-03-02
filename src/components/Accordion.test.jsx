import Accordion from './Accordion';
import { fireEvent, render, screen, cleanup  } from '@testing-library/react'
import {describe, test, expect, beforeEach, afterEach} from 'vitest'

describe('Accordion', () =>{

    beforeEach( () => {
        render( 
            <Accordion title = 'Hello'>
                <h3>My content</h3>
                <p>Some content is integrated</p>
            </Accordion>
        );
    });

    afterEach(() =>{cleanup})

    test('show title all time', () =>{
        // expect(1 + 1).toBe(2);
        expect(screen.getByText('Hello')).toBeDefined()
    });

    test('shouldnt show content at the beginning', () => {
        expect(screen.queryByText(/content/i)).toBeNull()
    })

    test('should show content when button is clicked', () => {
        const btn = screen.getAllByText(/open/i)[0]
        fireEvent.click(btn);
        expect(screen.queryAllByText(/content/i)[0]).toBeDefined();
    })

     test('should hide content when button is double clicked', () => {
         const btn = screen.getAllByText(/close/i)[0]
         fireEvent.click(btn);
        //  fireEvent.click(btn);
         expect(screen.queryAllByText(/content/i))[1].toBeNull()
     })

});