import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
jest.mock('../../src/hooks/useFetchGifs')


describe('pruebas en componente <GifGrid />', () => {

    const category = 'One Punch';

    test('debe de mostrar el loading inicial', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />);
        // screen.debug();
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('debe mostrar items cuando se cargan las imágenes useFecthGifs', () => {
        const gifs = [
            {
                id: 'ABS',
                title: 'Saitama',
                url: 'https://localhost.saitama.png'
            },
            {
                id: 'aaa',
                title: 'Batman',
                url: 'https://localhost.batman.png'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });
        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2);
        // screen.debug()

    })

});