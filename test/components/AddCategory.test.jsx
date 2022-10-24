import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Test in <Addcategory />', () => {
    test("Should change textbox text", () => {
        render(<AddCategory onNewCategory={ () => {} } />);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'Saitama' } })

        expect( input.value ).toBe('Saitama');
    })

    test("Should call onNewCategory if input has value", () => {
        const inputValue = "Saitama";

        render(<AddCategory onNewValue={ () => {} } />)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');
    })
})