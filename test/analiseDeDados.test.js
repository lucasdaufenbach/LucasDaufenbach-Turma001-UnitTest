const AnaliseDeDados = require("../src/analiseDeDados");

describe('AnaliseDeDados', () => {
    let analise;

    beforeEach(() => {
        analise = new AnaliseDeDados([1, 2, 2, 3, 4, 5, 5, 5, 6, 7]);
    });

    test('adicionarDados deve adicionar novos números ao conjunto', () => {
        analise.adicionarDados([8, 9]);
        expect(analise.dados).toContain(8);
        expect(analise.dados).toContain(9);
    });

    test('limparDados deve remover todos os números do conjunto', () => {
        analise.limparDados();
        expect(analise.dados).toEqual([]);
    });

    test('ordenarDados deve retornar o conjunto ordenado', () => {
        expect(analise.ordenarDados()).toEqual([1, 2, 2, 3, 4, 5, 5, 5, 6, 7]);
    });

    test('calcularMedia deve retornar a média dos valores', () => {
        expect(analise.calcularMedia()).toBe(4);
    });

    test('calcularMediana deve retornar a mediana correta', () => {
        expect(analise.calcularMediana()).toBe(4.5);
    });

    test('calcularModa deve retornar a moda correta', () => {
        expect(analise.calcularModa()).toEqual([5]);
    });

    test('calcularVariancia deve retornar a variância correta', () => {
        expect(analise.calcularVariancia()).toBeCloseTo(3.4);
    });

    test('calcularDesvioPadrao deve retornar o desvio padrão correto', () => {
        expect(analise.calcularDesvioPadrao()).toBeCloseTo(Math.sqrt(3.4));
    });

    test('encontrarMinimo deve retornar o menor valor', () => {
        expect(analise.encontrarMinimo()).toBe(1);
    });

    test('encontrarMaximo deve retornar o maior valor', () => {
        expect(analise.encontrarMaximo()).toBe(7);
    });

    test('normalizarDados deve retornar os dados normalizados entre 0 e 1', () => {
        const expected = [0, 0.16666666666666666, 0.16666666666666666, 0.3333333333333333, 
                          0.5, 0.6666666666666666, 0.6666666666666666, 
                          0.6666666666666666, 0.8333333333333334, 1];
        expect(analise.normalizarDados()).toEqual(expected);
    });

    test('calcularPercentil deve retornar o percentil correto', () => {
        expect(analise.calcularPercentil(50)).toBe(4.5);
    });

    test('calcularSoma deve retornar a soma de todos os elementos', () => {
        expect(analise.calcularSoma()).toBe(40);
    });

    test('calcularProduto deve retornar o produto de todos os elementos', () => {
        expect(analise.calcularProduto()).toBe(252000);
    });

    test('calcularAmplitude deve retornar a diferença entre o maior e o menor valor', () => {
        expect(analise.calcularAmplitude()).toBe(6);
    });

    test('calcularCoeficienteVariacao deve retornar o coeficiente de variação', () => {
        const cv = (Math.sqrt(3.4) / 4) * 100;
        expect(analise.calcularCoeficienteVariacao()).toBeCloseTo(cv);
    });

    test('removerOutliers deve remover valores fora do intervalo interquartil', () => {
        analise.removerOutliers();
        expect(analise.dados).toEqual([1, 2, 2, 3, 4, 5, 5, 5, 6, 7]);
    });

    test('calcularCorrelacao deve retornar o coeficiente de correlação entre dois conjuntos', () => {
        expect(analise.calcularCorrelacao([2, 3, 3, 4, 5, 6, 6, 6, 7, 8])).toBeCloseTo(1);
    });
});