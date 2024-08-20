import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('pruebas en <GifExpertApp />', () => {

    // let fixture: ComponentFixture<NoticeBoardComponent>;

    test('sould', () => {
        render(<GifExpertApp />);
        // screen.debug();

        const title = document.getElementsByTagName('h1');

        // title.textContent;
        console.log('este es el valor de title: ', title)
        expect(title).toBe(title);
    });
});