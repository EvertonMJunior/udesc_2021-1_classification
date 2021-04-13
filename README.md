# UDESC 2021/1
## Classificação Extraoficial

Esse projeto visa tornar acessíveis as informações sobre as classificações dos candidatos do processo seletivo 2021/1 da UDESC.

No momento de sua produção, apenas havia sido divulgadas as listas com as notas dos participantes.
Com base nelas, agrupei os candidatos por:
1. Critério de Inscrição
2. Política de Ação Afirmativa

Para gerar a classificação, ordenei os participantes de acordo com suas notas. **As classificações dispostas no webapp e nesse repositório não garantem que a classificação final será essa.**

## Frontend/Backend

Para tornar mais simples a visualização dos dados, criei um simples webapp em Next.js com recurso de busca de cursos.

Utilizei API Routes para gerar as funções serverless que consultam o banco de dados (MongoDB) onde estão armazenadas as informações extraídas. Nelas, realizei consultas utilizando [mongoose](https://github.com/Automattic/mongoose), além de [lodash](https://github.com/lodash/lodash) para realizar agrupamentos e [fuzzy-search](https://github.com/wouter2203/fuzzy-search#readme) para realizar as buscas em dados.

Hospedei o webapp por meio da Vercel.

<div style="text-align:center">
<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--DWovAEyS--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/lr4rm1p2pcezmxqs5dqk.png" alt="drawing" width="300"/>
</div>


## Processamento de Dados (ETL)

Para realizar o processo de ETL (Extract, Transform, Load) nos dados, escolhi o Python, utilizando dos Jupyter Notebooks.

Os dados estavam separados em tabelas contidas em três arquivos PDF, um para cada Critério de Inscrição. Utilizei a library [pdfplumber](https://github.com/jsvine/pdfplumber) para realizar a extração de dados das tabelas nos PDFs, e [pandas](https://github.com/pandas-dev/pandas) para transformar os dados.

Por se tratar de uma extração sem necessidade de atualizações contínuas, optei por fazer o carregamento manual no banco de dados por meio dos arquivos JSON gerados.

<div style="text-align:center">
<img src="https://docs.microsoft.com/pt-br/azure/architecture/data-guide/images/etl.png" alt="drawing" width="512"/>
</div>

## Importante
Esse projeto nem seu criador possuem quaisquer vínculos com a UDESC. Todos os dados foram retirados de seu [site](https://www.udesc.br/vestibular/vestibulardeverao/20211) no dia 12/04/2021. Não há garantias de que os dados apresentados estão 100% corretos. O projeto tem fins estritamente informativos e não lucrativos.
