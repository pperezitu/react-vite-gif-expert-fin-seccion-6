import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";


describe('Pruebas de <Giftitem />', () => {

    const title = 'Saitama es la cumbia';
    const url = 'https://one-puch.com/saitama.png';
    const giftItem = render(<GifItem title={title} url={url} />);

    test('debe hacer match con el snapshot', () => {
        const { container } = giftItem;
        expect(container).toMatchSnapshot();
    });

    test('debe mostrar el URL y el ALT indicado', () => {
        render(<GifItem title={title} url={url} />);
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    });

    test('debe mostrar el titulo del componente', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    });

});