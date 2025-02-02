import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('pruebas en el hook useFetchGifs ', () => {
    test('debe devolver el estado inicial', () => {
        const { result } = renderHook(() => useFetchGifs('one pucnh'));
        // console.log(result);
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('debe devolver el un arreglo de imagenes y isLoading en false', async () => {
        const { result } = renderHook(() => useFetchGifs('one pucnh'));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    })
})