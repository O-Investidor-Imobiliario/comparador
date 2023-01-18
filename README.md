# Comparador de investimentos do Investidor Imobiliário
Este projeto tem como objetivo comparar a evolução de um patrimônio investido em alguns investimentos com a evolução desse mesmo patrimônio quando investido em imóveis do litoral catarinense.
Os comparadores disponíveis são:

- Poupança fonte: BCB-Demab, Abecip e BCB-Depec
- CDI fonte: BCB-Demab
- IPCA fonte: IBGE
- IBOVESPA fonte: investing.com

Com exceção do Ibovespa, todos os dados foram extraídos de arquivos CSV baixados do Sistema Gerenciador de Séries Temporais do BCB (https://www3.bcb.gov.br/sgspub/localizarseries/localizarSeries.do?method=prepararTelaLocalizarSeries)

## Rodando o projeto local

Para rodar o projeto local utilize o comando `yarn dev`

## Embedando o comparador em outros sites

Para embedar o comparador de investimentos em outros sites inclua o seguinte código HTML:

```
<style>
    #iframe-comparador {
        height: 720px;
        width: 100%;
    }

    @media (max-width: 768px) {
        #iframe-comparador {
            height: 840px;
            width: 100%;
        }
    }
</style>

<iframe src="https://comparador-investidor-imobiliario.netlify.app/" id="iframe-comparador"></iframe>
```


