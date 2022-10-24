import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Test in GifItem', () => {
    const title = 'Saitama';
    const url = "https://one-pounch.com/saitama.jpg";

    test('It should be to do match with snapshop', () => {
        const { container } = render(<GifItem title={ title } url={ url } />);
        expect(container).toMatchSnapshot();
    })

    test('It should show title src & alt', () => {
        render(<GifItem title={ title } url={ url } />);
        
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    })

    test('It should show title', () => {
        render(<GifItem title={ title } url={ url } />);
        expect(screen.getByText(title)).toBeTruthy();
    })
})