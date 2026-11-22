const readingTopics = [
  { id: "concorrencia", title: "Concorrência e mercados" },
  { id: "dinheiro", title: "Dinheiro e juros" },
  { id: "valor", title: "Valor e produção" },
  { id: "crescimento", title: "Crescimento e equilíbrio" },
  { id: "marx", title: "Exploração e valor" }
];

const readings = [
  {
    id: "sraffa-1922",
    topic: "concorrencia",
    author: "Piero Sraffa · 1922",
    title: "A crise bancária italiana",
    original: "The Bank Crisis in Italy",
    lead: "O controle do crédito ajuda a explicar a expansão industrial e a crise da Banca Italiana di Sconto.",
    summary: [
      "Sraffa usa a trajetória da Banca Italiana di Sconto para mostrar como bancos e grandes indústrias italianas se tornaram dependentes uns dos outros. O financiamento da expansão de guerra da Ansaldo concentrou recursos e risco no mesmo grupo industrial. A disputa pelo controle da Banca Commerciale Italiana e as medidas adotadas após o colapso revelam como o crédito se ligava a participações acionárias, pressões políticas e interesses privados.",
      "O caso expõe um problema de poder econômico. Um grupo industrial pode tentar controlar um banco para garantir financiamento, enquanto o banco imobiliza recursos em operações de longo prazo e continua sujeito a passivos de curto prazo. A crise ajuda a entender a fragilidade dessa estrutura e as vantagens que os controladores podem obter à custa das empresas que dominam."
    ],
    points: [
      "A Ansaldo tomou crédito da Banca di Sconto em grande escala. A concentração reduziu a margem do banco para financiar outros clientes e absorver perdas.",
      "Participações cruzadas e diretores em comum ligavam bancos e indústrias. O grupo da Ilva e a Banca Commerciale entram na disputa analisada.",
      "A intervenção pública no colapso e na liquidação mostra como a estrutura bancária também dependia de decisões institucionais."
    ],
    connections: [
      { id: "sraffa-1926", text: "A Aula 3 liga essa investigação sobre grandes grupos à crítica da firma atomística. Em 1926, a atenção passa para a clientela própria e o poder de mercado das firmas." },
      { id: "zolea", text: "Zolea volta ao poder dos bancos para discutir como barreiras à entrada podem alterar a relação entre juros e lucro." }
    ],
    source: "sraffa1922.pdf · análise da Banca Italiana di Sconto e conclusão. MatPol Aula 3 o artigo de 26.pptx."
  },
  {
    id: "sraffa-1925",
    topic: "concorrencia",
    author: "Piero Sraffa · 1925",
    title: "Custos e quantidade produzida",
    original: "On the Relations Between Cost and Quantity Produced",
    lead: "Sraffa examina em que condições é possível traçar uma curva de oferta de uma indústria isolada.",
    summary: [
      "A crítica parte de uma exigência do equilíbrio parcial. Para atribuir a mudança de custo ao volume produzido de uma mercadoria, é preciso manter constantes as condições das outras atividades. Se o fator fixo é usado em diversos ramos, a expansão de um deles interfere nas condições dos demais. Se os custos caem com o crescimento de uma única firma, a expansão dessa firma põe em questão o quadro de concorrência atomística.",
      "Sraffa também reexamina a relação entre terra, margem e rendimentos. Diferenças físicas entre terras existem, e a ordem econômica do cultivo exige comparar técnicas e custos. Ao restringir a análise aos casos coerentes com o isolamento competitivo da indústria, custos aproximadamente constantes passam a ter papel central."
    ],
    points: [
      "Rendimentos decrescentes ligados a um fator compartilhado criam efeitos entre indústrias e dificultam o isolamento exigido pelo equilíbrio parcial.",
      "A diluição das despesas gerais pode reduzir o custo por unidade à medida que a firma cresce. Esse mecanismo é distinto da aplicação de doses sucessivas sobre um fator fixo.",
      "A escolha da terra marginal depende dos custos comparados nas condições de produção. As aulas distinguem a margem usada para descrever a escolha da margem usada para fundamentar uma lei geral.",
      "O resultado sobre custos constantes é condicionado pelo recorte do problema. A questão seguinte é explicar os mercados em que essas condições falham."
    ],
    connections: [
      { id: "sraffa-1926", text: "O artigo de 1926 retoma as dificuldades do equilíbrio parcial e desenvolve a análise de firmas com mercados próprios." },
      { id: "curso-sraffa", text: "As Aulas 2A e 2B e o Questionário 2 ligam custo, fator fixo e escolha de terras à abordagem de proporções dadas no livro de 1960." },
      { id: "producao-conjunta", text: "Na Lista 3, o princípio de escolha reaparece ao comparar o cultivo em terras diferentes e técnicas que se tornam econômicas em faixas distintas da taxa de lucro." }
    ],
    source: "sraffa1925.pdf · seções sobre rendimentos decrescentes, custos decrescentes, custos constantes e conclusão. Sraffa Aula 2 Empty Box.pptx e Sraffa Aula 2b Empty Box.pptx."
  },
  {
    id: "sraffa-1926",
    topic: "concorrencia",
    author: "Piero Sraffa · 1926",
    title: "Rendimentos e concorrência",
    original: "The Laws of Returns under Competitive Conditions",
    lead: "As três classes de economias de escala ajudam a explicar os limites da curva de oferta marshalliana.",
    summary: [
      "O artigo pergunta em quais condições os custos de uma mercadoria podem variar com sua quantidade produzida sem invalidar a análise de um mercado isolado. Sraffa distingue economias que vêm do ambiente industrial geral, ganhos internos a uma firma e economias compartilhadas pelas firmas de uma única indústria. A terceira classe é a que melhor se ajustaria ao equilíbrio parcial, mas é rara, porque muitos benefícios se propagam por ramos relacionados.",
      "Na parte final, o artigo muda o foco para a firma e seu mercado próprio. A clientela pode ter preferências ligadas à localização, ao crédito, à qualidade ou ao conhecimento do produto. Com isso, a firma pode enfrentar uma demanda própria e encontrar um limite para vender mais ao preço corrente, mesmo quando ainda consegue reduzir o custo de produção por unidade."
    ],
    points: [
      "Economias externas a uma indústria, como aço mais barato reduzindo também o custo ferroviário, mudam as condições de outros mercados.",
      "Economias internas à firma tornam sua expansão relevante para o custo. O caso põe em questão a concorrência entre pequenas firmas que tomam o preço como dado.",
      "Economias externas à firma e internas à indústria seriam compatíveis com o recorte de um mercado isolado. O alcance a indústrias correlatas explica por que esse caso é restrito.",
      "A existência de clientela própria permite investigar graus de poder de mercado e despesas para ampliar as vendas."
    ],
    connections: [
      { id: "sraffa-1925", text: "Em 1925, o foco é a coerência das hipóteses da oferta competitiva. Em 1926, a análise avança para a demanda que a firma enfrenta em seu próprio mercado." },
      { id: "sraffa-1922", text: "A Aula 3 usa Ansaldo e Ilva para discutir a distância entre a descrição de grandes grupos industriais e a imagem de firmas independentes, pequenas e atomizadas." },
      { text: "Na questão 3 da 1ª avaliação, identifique cada classe de economia e explique qual condição da análise marshalliana é afetada. A lição Marshall e Hayek cobre esse raciocínio." }
    ],
    source: "sraffa1926 ingles.pdf · pp. 539 a 545. Sraffa 1926 portugues.pdf é a tradução do mesmo artigo."
  },
  {
    id: "sraffa-1932-resenha",
    topic: "dinheiro",
    author: "Piero Sraffa · 1932",
    title: "A crítica a Hayek sobre moeda e capital",
    original: "Dr. Hayek on Money and Capital",
    lead: "A taxa própria depende da mercadoria em que a dívida é expressa.",
    summary: [
      "Na resenha de Prices and Production, Sraffa examina a tentativa de usar uma economia sem moeda como referência para avaliar os efeitos do dinheiro. Ele mostra que o argumento de Hayek representa a moeda essencialmente como meio de troca e abstrai de dívidas e contratos monetários. Também questiona a hipótese de que o crédito aos produtores gere uma acumulação que necessariamente se desfaça quando a expansão monetária termina.",
      "A crítica à taxa natural usa o exemplo do algodão. Um agente toma um empréstimo em dinheiro, compra algodão à vista e fecha uma venda futura. A diferença entre os preços à vista e futuro afeta o custo do empréstimo quando expresso em algodão. No equilíbrio descrito, as taxas próprias coincidem. Durante um ajuste, elas podem divergir entre mercadorias e dificultar a escolha de uma taxa única para a política monetária."
    ],
    points: [
      "Taxa própria é o juro expresso na mercadoria tomada como referência. O preço à vista e o preço futuro entram nessa conta.",
      "Durante mudanças de demanda e de preços relativos, as taxas sobre bens de produção e de consumo podem seguir direções diferentes.",
      "A poupança forçada envolve redistribuição. A permanência do capital acumulado depende das decisões de quem recebeu e investiu a renda.",
      "Poupança e investimento precisam se ajustar à composição da produção. Bens de consumo já produzidos podem sobrar, perder valor ou ser consumidos por outros."
    ],
    connections: [
      { id: "sraffa-1932-replica", text: "Na tréplica, Sraffa concentra a discussão na permanência do capital acumulado e no problema de igualar a taxa monetária a taxas próprias divergentes." },
      { id: "sraffa-1951", text: "A multiplicidade das taxas próprias levanta um problema monetário. A mercadoria-padrão, estudada na Aula 5, é uma unidade de conta para tornar explícita a divisão do excedente." },
      { id: "zolea", text: "Zolea retoma a pergunta sobre o que determina os juros e acrescenta hipóteses sobre bancos, concorrência e distribuição." }
    ],
    source: "sraffa 1932a.pdf · pp. 42 a 53. MatPol Aula 4 o artigo de 1932.pptx."
  },
  {
    id: "sraffa-1932-replica",
    topic: "dinheiro",
    author: "Piero Sraffa · 1932",
    title: "A tréplica sobre capital e juros",
    original: "Money and Capital: A Rejoinder",
    lead: "Sraffa responde a Hayek em dois pontos: poupança forçada e multiplicidade das taxas naturais.",
    summary: [
      "A tréplica esclarece os dois desacordos que Sraffa considera decisivos. No primeiro, ele questiona a passagem entre o fim da expansão monetária e a suposta dissipação do capital acumulado. A expansão pode ter transferido renda para quem investiu, e a permanência do capital depende de quem controla esse investimento e de como a renda volta a circular. Sraffa também explora a possibilidade, admitida em nota por Hayek, de os estágios adicionais de produção absorverem parte do dinheiro em saldos de caixa.",
      "No segundo ponto, Sraffa observa que Hayek admite a multiplicidade das taxas próprias. Surge então um problema de consistência para a regra de política monetária. Uma única taxa bancária pode igualar um conjunto de taxas próprias apenas quando elas coincidem. Uma média ligada a um índice estabilizado é uma saída discutida em relação a Wicksell, e Hayek rejeita esse recurso."
    ],
    points: [
      "O fim da expansão monetária, por si só, deixa em aberto o destino do capital já instalado.",
      "Os saldos de caixa para financiar estágios adicionais de produção afetam a passagem de crédito novo para rendas monetárias.",
      "O problema da taxa natural única vale mesmo que se conheça cada taxa própria. Taxas divergentes implicam referências diferentes para a regra."
    ],
    connections: [
      { id: "sraffa-1932-resenha", text: "O argumento do algodão explica de onde vêm as taxas próprias que a tréplica usa para testar a regra proposta por Hayek." },
      { id: "curso-sraffa", text: "O Questionário 2 aproxima a controvérsia de 1932 do livro de 1960. Separe o problema de fixar uma taxa bancária do cálculo de uma taxa máxima de lucro dada a técnica." }
    ],
    source: "sraffa1932b.pdf · texto de Sraffa, pp. 249 a 251, após o trecho final da resposta de Hayek."
  },
  {
    id: "zolea",
    topic: "dinheiro",
    author: "Riccardo Zolea · 2022",
    title: "Juros, lucro e poder dos bancos",
    original: "A History of the Relationship Between Interest Rate and Profit Rate in Heterodox Approaches",
    lead: "O artigo reconstrói as hipóteses que levam do lucro aos juros ou dos juros ao lucro.",
    summary: [
      "Zolea organiza uma controvérsia sobre a direção da causalidade entre juros e lucro. Na leitura que apresenta de Smith e Ricardo, o lucro da produção condiciona a taxa de juros. Em Marx, o juro é uma parcela do lucro bruto, e a divisão entre credores e empresários depende também de instituições e do conflito entre grupos de capitalistas. Pivetti e Panico exploram a direção inversa, em que a taxa de juros entra como dado e influencia os lucros e a distribuição.",
      "No modelo de Shaikh, a concorrência tende a aproximar a rentabilidade bancária da taxa geral de lucro. A taxa de juros pode então ser entendida como preço do serviço bancário. Zolea examina como a análise muda com barreiras à entrada e poder de mercado, que permitem aos bancos cobrar juros compatíveis com uma taxa de lucro própria acima da normal."
    ],
    points: [
      "Smith e Ricardo partem da rentabilidade da produção na explicação dos juros.",
      "Para Marx, a distribuição entre juro e ganho empresarial envolve poder de barganha, convenções e instituições.",
      "Pivetti e Panico dão à taxa de juros um papel causal na determinação do lucro e dos preços.",
      "Shaikh liga o juro à concorrência bancária. Na extensão apresentada por Zolea, a estrutura do mercado e o banco central podem influenciar o resultado."
    ],
    connections: [
      { id: "sraffa-1922", text: "A crise italiana oferece um caso histórico de interdependência e conflitos entre bancos e indústria. Zolea oferece modelos para pensar a formação da taxa de juros nesse tipo de relação." },
      { id: "sraffa-1932-resenha", text: "A pergunta de Sraffa é sobre a referência monetária única. A classificação de Zolea pergunta qual variável é tomada como dada em cada teoria da distribuição." },
      { id: "von-neumann", text: "No modelo de von Neumann, a igualdade entre juro e expansão é um resultado de equilíbrio sob hipóteses precisas. Zolea discute a causalidade entre juros bancários e lucro em outros modelos." }
    ],
    source: "zolea 2022.pdf · pp. 121 a 136, sobretudo tabelas 1 e 2 e discussão final."
  },
  {
    id: "sraffa-1951",
    topic: "valor",
    author: "Piero Sraffa · 1951",
    title: "Ricardo, distribuição e medida do valor",
    original: "Introduction to Ricardo’s Principles",
    lead: "O problema de medir o valor surge ao investigar como salários, lucros e renda repartem o produto.",
    summary: [
      "Sraffa reconstrói a elaboração dos Princípios de Ricardo e acompanha as mudanças na teoria do valor entre as edições. Na interpretação de Sraffa para o Ensaio sobre os lucros, a agricultura oferece um caso especial. O cereal pode aparecer como produto e como adiantamento, permitindo pensar a taxa de lucro como uma relação física. Nos Princípios, a questão passa a envolver diferentes bens e capitais, e sua avaliação exige uma teoria dos preços relativos.",
      "A medida invariável interessava a Ricardo porque uma mudança no salário altera os preços relativos quando os capitais têm composições, durações ou tempos de rotação distintos. Se a unidade também muda com a distribuição, fica difícil identificar quanto do movimento observado vem da partilha do excedente. A Aula 5 conecta essa dificuldade à mercadoria-padrão construída por Sraffa em 1960."
    ],
    points: [
      "O problema central é acompanhar a divisão do produto entre renda da terra, salários e lucros.",
      "A hipótese da razão física do cereal é uma reconstrução de Sraffa para o argumento inicial de Ricardo. Nos Princípios, a produtividade na terra sem renda conserva seu papel na explicação do lucro.",
      "Diferenças na composição do capital, na duração e no tempo de produção ajudam a explicar por que preços relativos respondem a mudanças distributivas.",
      "No sistema padrão de Sraffa, com a normalização adotada no curso, w = 1 − r/R explicita a partilha entre salários e lucros. Os demais preços relativos podem variar."
    ],
    connections: [
      { id: "matrizes-sraffa", text: "O bloco de bens básicos generaliza o papel do cereal na determinação física de R. É o elo com as Listas 1 e 2 e a lição Preços, salário e lucro." },
      { id: "producao-conjunta", text: "O capital de diferentes durações reaparece como máquinas de diferentes idades em processos conjuntos. A renda diferencial volta no exemplo da terra marginal da Lista 3." },
      { text: "A Aula 1A apresenta Pasinetti como quem formaliza o sistema ricardiano em um modelo de dois setores. A Aula 5 trata da solução de Sraffa para o problema distributivo." }
    ],
    source: "Sraffa1951.pdf · seções IV, V e VII da Introdução. MatPol Aula 5 A Volta a Ricardo.pptx."
  },
  {
    id: "curso-sraffa",
    topic: "valor",
    author: "Texto para discussão · material da disciplina",
    title: "De Marshall e Hayek ao retorno a Ricardo",
    original: "Sraffa versus Marshall e Hayek e o retorno a Ricardo",
    lead: "O capítulo reúne as críticas anteriores a 1960 e mostra como desembocam na teoria dos preços de produção.",
    summary: [
      "O texto interpreta Produção de Mercadorias por Meio de Mercadorias como resultado de um percurso. Os artigos de 1925 e 1926 questionam a construção marshalliana da oferta de uma indústria isolada. O debate de 1932 problematiza a moeda neutra e a taxa natural de Hayek. A Introdução de 1951 recupera a dificuldade ricardiana de analisar o excedente quando os preços variam com a distribuição.",
      "A resposta de 1960 parte da produção circular. Os bens usados como meios de produção também saem de outros processos. As equações procuram os preços de produção compatíveis com esses métodos e com uma condição distributiva. Nessa construção, a taxa máxima de lucro é obtida das condições de reprodução, e a mercadoria-padrão dá uma unidade para explicitar a relação entre salários e lucros."
    ],
    points: [
      "Proporções técnicas dadas são o ponto de partida no livro de 1960. O debate sobre a forma de uma curva de oferta está no recorte dos artigos anteriores.",
      "As taxas próprias do debate com Hayek, a taxa máxima R e a taxa efetiva r respondem a perguntas diferentes. R vem das condições técnicas do sistema padrão, e a escolha distributiva afeta r e os preços.",
      "A inversão no movimento de preços relativos com técnica fixa é uma crítica a uma medida de capital independente da distribuição. O retorno de uma técnica em faixas separadas de r é um resultado distinto sobre escolha técnica.",
      "A margem de cultivo pode descrever uma escolha econômica. A Lista 3 usa esse raciocínio ao analisar a renda residual na terra superior."
    ],
    connections: [
      { id: "sraffa-1925", text: "Use os artigos de 1925 e 1926 para explicar por que as economias de escala complicam a análise parcial da oferta." },
      { id: "sraffa-1932-resenha", text: "Use a resenha de Hayek para explicar quando a taxa própria varia com o bem em que é medida." },
      { id: "sraffa-1951", text: "Use a Introdução a Ricardo para explicar por que a unidade de conta interessa à análise distributiva." },
      { text: "No Questionário 2, retome os itens sobre custos constantes, margem, taxa natural, mercadoria-padrão e retorno de técnica. As questões pedem a relação entre as teses e as hipóteses que as sustentam." }
    ],
    source: "Texto para discussão.pdf · seções 2 a 6. Questionário 2.pdf e MatPol Aula 9 Conclusão II.pptx."
  },
  {
    id: "matrizes-sraffa",
    topic: "valor",
    author: "Notas da disciplina",
    title: "Matrizes irredutíveis e mercadorias básicas",
    original: "O Significado Econômico das Matrizes Irredutíveis e Redutíveis",
    lead: "A estrutura da matriz técnica indica quais mercadorias sustentam a reprodução das demais.",
    summary: [
      "Na produção simples, o coeficiente técnico mostra quanto de um insumo entra por unidade do produto. Uma entrada positiva gera uma ligação direta entre insumo e produto. Caminhos com várias ligações identificam usos indiretos. Uma mercadoria básica alcança todos os produtos por esses caminhos. Se todas forem básicas, a matriz de produção é irredutível.",
      "Quando há bens não básicos, a reordenação das mercadorias pode isolar o bloco básico. É a raiz de Frobenius desse bloco que entra no cálculo de R = 1/λ − 1 na formulação apresentada. O bloco ligado a bens não básicos pode conter outra raiz da matriz completa, e a positividade dos preços de todo o sistema requer verificar as condições do exercício."
    ],
    points: [
      "Na convenção da nota, quando Sᵢⱼ é positivo, j é insumo de i. Leia a ligação do insumo para o produto.",
      "Irredutibilidade significa que todos os bens se alcançam no grafo. Um zero isolado ou uma diagonal nula podem ocorrer em uma matriz irredutível.",
      "Para achar R, identifique os bens básicos, extraia o bloco e calcule sua raiz de Frobenius.",
      "Escolhida a raiz, o autovetor à esquerda e a normalização pelo trabalho são usados para obter os multiplicadores do sistema padrão."
    ],
    connections: [
      { id: "sraffa-1951", text: "Os bens básicos cumprem o papel que a leitura de Ricardo atribui ao cereal. A relação física do sistema passa a ser calculada para um conjunto de mercadorias." },
      { id: "producao-conjunta", text: "Em produção conjunta a definição muda. A Lista 3 testa a dependência linear nas colunas de insumos e produtos, usando o posto." },
      { text: "A Lista 2 e as questões 1 e 2 da 1ª avaliação treinam a passagem entre equações, grafo, bloco básico, autovalor e taxa máxima de lucro." }
    ],
    source: "O Significado Econômico das Matrizes Irredutíveis e Redutíveis.pdf · pp. 1 a 6. Mat Pol Lista 2 2026.pdf."
  },
  {
    id: "producao-conjunta",
    topic: "valor",
    author: "Jorge Paulo de Araújo · capítulo 4",
    title: "Produção conjunta, máquinas, renda e técnicas",
    original: "Sraffa: modelo de produção conjunta de mercadorias",
    lead: "Quando um processo entrega vários bens, insumos e produtos precisam ser analisados em conjunto.",
    summary: [
      "O capítulo acompanha a passagem da produção simples para a conjunta em Sraffa. Uma mesma linha pode registrar, por exemplo, a saída de cereal e de palha. Para classificar mercadorias, o capítulo examina as colunas de insumos e produtos de um grupo e a dependência entre as linhas. A leitura de Manara ajuda a explicitar esse teste e as condições para construir um sistema padrão.",
      "As aplicações mostram por que isso importa. No capital fixo, uma máquina usada entra no processo e reaparece, mais velha, junto com o bem produzido. A depreciação é calculada a partir dos preços correntes das idades. Na renda diferencial, o processo na terra sem renda determina o preço do cereal no exemplo. As terras superiores recebem o excedente do valor da produção sobre os custos já remunerados. Na escolha de técnicas, os custos comparados variam com a distribuição e a mesma técnica pode voltar a ser escolhida."
    ],
    points: [
      "Para um grupo de n mercadorias, reúna suas n colunas de A e n colunas de B. No critério do §60 trabalhado na Lista 3, examine se o posto é no máximo n.",
      "Em exemplos do capítulo, operações de linha isolam o bloco relevante. A análise dos autovalores e da cesta padrão em produção conjunta exige condições próprias.",
      "Máquinas em idades diferentes são mercadorias distintas no sistema. O preço de descarte do exemplo é zero e a perda de valor depende dos preços correntes.",
      "Na terra sem renda, a equação do cereal fecha sem parcela fundiária. Na outra terra, a renda é o resíduo, dividido pela área quando se pede renda unitária.",
      "Reswitching é o retorno da mesma técnica em faixas separadas da taxa de lucro. Para encontrá-lo, use uma base comum de comparação e verifique os intervalos entre os cruzamentos."
    ],
    connections: [
      { id: "matrizes-sraffa", text: "Na produção simples, o grafo de insumos identifica o bloco básico. A produção conjunta requer testar insumos e produtos ao mesmo tempo." },
      { id: "kurz-salvadori-2001", text: "O tratamento de máquinas envelhecidas como produtos conjuntos é uma das afinidades documentadas entre Sraffa e von Neumann." },
      { text: "Na Lista 3, pratique posto e operações de linha, preço da máquina por idade e renda residual. No Questionário 2, relacione escolha de técnicas, fertilidade econômica e crítica à medida de capital." }
    ],
    source: "06_Cap 4 - Sraffa_Jorge_para Revisão.pdf · seções sobre Manara, capital fixo, renda da terra e mudança de técnica. MatPol Lista 3.pdf."
  },
  {
    id: "von-neumann",
    topic: "crescimento",
    author: "John von Neumann · 1937 / 1945–46",
    title: "Equilíbrio e expansão em von Neumann",
    original: "A Model of General Economic Equilibrium",
    lead: "O mesmo sistema relaciona intensidades dos processos, preços, crescimento e juros.",
    summary: [
      "Von Neumann parte de processos que usam bens para produzir outros bens, inclusive em circuitos. Pode haver mais processos disponíveis do que mercadorias. Assim, parte do problema é escolher quais atividades terão intensidade positiva, além de determinar os preços e o fator comum de expansão. O lado físico verifica se os produtos de um período cobrem os insumos necessários no seguinte. O lado monetário verifica se cada processo consegue cobrir o custo dos insumos acrescido de juros.",
      "Em equilíbrio, um bem em excesso tem preço zero, e um processo com receita abaixo do custo remunerado fica inativo. A expansão máxima compatível com a reprodução e o fator de remuneração se igualam sob as hipóteses do artigo. A prova de existência usa um ponto de sela, ligado a uma generalização do teorema do ponto fixo de Brouwer. A taxa comum fica determinada, e pode haver mais de um vetor de preços ou intensidades."
    ],
    points: [
      "A registra os insumos. B registra os produtos. As intensidades indicam quanto de cada processo é utilizado.",
      "Na convenção da Lista 2A, com processos nas linhas e preços em coluna, use C = B − σA, xᵀC ≥ 0 e Cp ≤ 0, para um fator comum σ.",
      "Complementaridade significa que a folga física implica preço zero e que a folga de rentabilidade implica intensidade zero. Juntas, as condições dão xᵀCp = 0.",
      "Entre as hipóteses do modelo original estão retornos constantes de escala, bens de subsistência incorporados aos insumos e possibilidade de expandir fatores naturais, inclusive o trabalho."
    ],
    connections: [
      { id: "licao-von-neumann", text: "A Lição 7 traduz a demonstração em condições verificáveis. A Lista 2A manda multiplicar as matrizes e conferir os dois sinais e a complementaridade." },
      { id: "champernowne", text: "Champernowne explica por que a expansão uniforme cabe no equilíbrio e o que essa hipótese deixa de fora." },
      { id: "morishima-1974", text: "Morishima adota matrizes de insumos e produtos e intensidades para formular a capacidade de crescimento do sistema capitalista." }
    ],
    source: "neumann_A Model of Economic Equilibrium.pdf · §§ 1 a 7. Original alemão de 1937 e tradução inglesa publicada em 1945–46."
  },
  {
    id: "champernowne",
    topic: "crescimento",
    author: "David Champernowne · 1945–46",
    title: "O que o modelo de von Neumann explica",
    original: "A Note on J. v. Neumann’s Article on A Model of Economic Equilibrium",
    lead: "A nota explica o estado quase estacionário e os limites da abstração do modelo.",
    summary: [
      "Champernowne chama o equilíbrio de estado quase estacionário. Preços e proporções entre as atividades permanecem estáveis, enquanto as quantidades podem crescer a um ritmo comum. Isso permite analisar reprodução, preços e juros no mesmo quadro. A simplificação tem um custo. Com técnicas e proporções fixadas desse modo, o modelo oferece pouca explicação direta para mudanças estruturais, progresso técnico ou elevação do padrão de vida.",
      "Champernowne defende a ideia de uma primeira aproximação autocontida à formação dos preços. As condições de produção permitem obter os preços de equilíbrio. Casos em que a escolha dos consumidores e mudanças de demanda alteram a composição da produção ficam para uma segunda aproximação. A nota também mostra que um bem difícil de expandir pode limitar o crescimento do conjunto quando as possibilidades de substituição são restritas."
    ],
    points: [
      "Quase estacionário descreve expansão uniforme com proporções e preços estáveis.",
      "Retornos constantes, recursos naturais expansíveis e poupança integral da renda da propriedade são hipóteses fortes do cenário discutido.",
      "A primeira aproximação destaca as condições de produção. Efeitos da escolha dos consumidores e da substituição ficam para uma etapa posterior.",
      "A taxa de juros de equilíbrio é única nas condições do original, embora os vetores de preços e quantidades possam variar entre equilíbrios."
    ],
    connections: [
      { id: "von-neumann", text: "A desigualdade física explica por que o bem cuja oferta cresce menos pode travar a expansão. A nota dá a interpretação econômica desse limite." },
      { id: "kurz-salvadori-2001", text: "As anotações de Sraffa sobre o comentário de Champernowne ajudam a documentar o contato entre os programas de pesquisa." },
      { text: "O exercício 3 da Lista 4 pede três coisas: uma hipótese simplificadora, o sentido de primeira aproximação e um limite do estado quase estacionário." }
    ],
    source: "champer_neumann.pdf · pp. 10 a 18. MatPol Lista 4.pdf, exercício 3."
  },
  {
    id: "kurz-salvadori-1993",
    topic: "crescimento",
    author: "Heinz D. Kurz e Neri Salvadori · 1993",
    title: "Von Neumann e a tradição clássica",
    original: "Von Neumann’s Growth Model and the ‘Classical’ Tradition",
    lead: "Os autores aproximam o modelo da teoria clássica do excedente pelo modo como ele trata salário e lucro.",
    summary: [
      "Kurz e Salvadori revisam a interpretação que liga o modelo de crescimento à tradição de Walras e Cassel. Seu critério é a lógica da distribuição. A cesta de subsistência dos trabalhadores é dada e integra os insumos. A taxa de juros ou de retorno é obtida a partir da tecnologia e das condições de reprodução do sistema. Essa assimetria se aproxima da teoria clássica, em que um dado distributivo permite determinar o retorno associado ao excedente.",
      "O artigo propõe também um caminho histórico passando por Robert Remak. Seus sistemas de preços superpostos partem de dados físicos de reprodução para calcular preços. Os autores discutem semelhanças entre Remak e von Neumann sobre preços, técnicas e eficiência. A influência direta de Remak é apresentada como uma hipótese apoiada em indícios e na leitura dos textos."
    ],
    points: [
      "Tratamento assimétrico significa que salário real e taxa de retorno ocupam posições diferentes no modelo. A cesta salarial é dada e o retorno é determinado.",
      "A leitura clássica começa pela reprodução e pelo excedente. A leitura Walras–Cassel discutida no artigo explica a distribuição pela oferta e demanda dos fatores.",
      "O crescimento uniforme, a dualidade entre preços e quantidades e o uso de desigualdades na escolha de técnicas têm precedentes no pensamento clássico examinados pelos autores.",
      "Em Remak, as quantidades físicas de meios de produção e de consumo sustentam a construção de preços superpostos. Von Neumann incorpora também a escolha entre processos e a expansão."
    ],
    connections: [
      { id: "sraffa-1951", text: "A leitura de Ricardo ajuda a entender o papel do excedente que sobra depois da reposição dos insumos e da subsistência." },
      { id: "kurz-salvadori-2001", text: "Em 1993, o problema é a filiação teórica do modelo. Em 2001, os autores acrescentam manuscritos e correspondência para estudar as afinidades com Sraffa." },
      { text: "O exercício 1 da Lista 4 pede a tese contra a leitura Walras–Cassel, a assimetria distributiva e o papel de Remak." }
    ],
    source: "kurzsalvadorvon Neumanns growth (2).pdf · seções sobre distribuição, Remak e conclusão. MatPol Lista 4.pdf, exercício 1."
  },
  {
    id: "kurz-salvadori-2001",
    topic: "crescimento",
    author: "Heinz D. Kurz e Neri Salvadori · 2001",
    title: "Sraffa e von Neumann nos manuscritos",
    original: "Sraffa and von Neumann",
    lead: "Os manuscritos esclarecem afinidades, diferenças de método e a cronologia do contato de Sraffa com o modelo.",
    summary: [
      "Kurz e Salvadori argumentam que os dois autores compartilham uma perspectiva clássica da produção e da distribuição. As mercadorias servem de meios para produzir mercadorias. A reposição dos insumos e o salário real dados deixam um excedente que permite a remuneração do capital. O artigo leva em conta as diferenças de construção. Sraffa usa equações e compara técnicas separadamente, enquanto von Neumann usa desigualdades e trata a escolha dentro do sistema de processos disponíveis.",
      "A contribuição documental é mostrar que Sraffa já havia trabalhado aspectos importantes da produção simples, da produção conjunta e do capital fixo quando conheceu o trabalho de von Neumann em meados da década de 1940. A carta de Hicks, em 1960, sugere uma identidade formal entre o sistema padrão e o equilíbrio de von Neumann em resposta a perguntas diferentes. No rascunho de resposta, Sraffa atribui a analogia a raízes clássicas comuns e aponta peculiaridades do modelo de von Neumann, como o ponto de sela e os bens livres."
    ],
    points: [
      "As afinidades centrais são produção circular, distribuição assimétrica e tratamento do capital fixo como produto conjunto.",
      "O salário de subsistência é dado em von Neumann. Sraffa, em seu desenvolvimento, admite que os trabalhadores recebam parte do excedente e trata uma variável distributiva como dada.",
      "Os manuscritos e as notas no comentário de Champernowne mostram a cronologia e o contato intelectual. Elementos centrais do programa de Sraffa precedem a leitura do modelo.",
      "Hicks destaca a semelhança formal e discute produção conjunta e custos. Sraffa destaca a origem clássica e as diferenças. Os autores reproduzem um rascunho cuja expedição a Hicks ficou sem confirmação."
    ],
    connections: [
      { id: "kurz-salvadori-1993", text: "A assimetria já era central em 1993. As fontes de arquivo de 2001 ajudam a separar parentesco teórico de influência histórica." },
      { id: "aula-12-11", text: "O exemplo matricial da aula de 12/11 mostra uma conexão algébrica concreta sob condições especificadas no exemplo." },
      { text: "No exercício 2 da Lista 4, organize a resposta em três partes: abordagem clássica, carta de Hicks e rascunho de Sraffa, e descoberta documental." }
    ],
    source: "Kurz, Salvadori - Sraffa and von Neumann.pdf · seções 2 a 6, com a correspondência na seção 5.2. MatPol Lista 4.pdf, exercício 2."
  },
  {
    id: "licao-von-neumann",
    topic: "crescimento",
    author: "Notas da disciplina · Lição 7",
    title: "Como verificar o modelo de von Neumann",
    original: "Morishima e o Modelo de Crescimento de von Neumann",
    lead: "A lição explica por que uma desigualdade física e outra em preços precisam valer ao mesmo tempo.",
    summary: [
      "A lição introduz os níveis de atividade. As quantidades produzidas passam para o período seguinte como insumos disponíveis. Um vetor de intensidades descreve a escala de cada processo. O fator de expansão indica de quanto essas escalas mudam entre períodos no crescimento equilibrado. A desigualdade física exige produção suficiente de cada bem. A desigualdade em valor verifica a cobertura do custo remunerado de cada processo.",
      "Os vetores de equilíbrio são não negativos e não nulos. Podem ser normalizados por uma escala conveniente, como soma igual a um. O texto explica a interpretação do ponto de sela e o papel que a generalização do ponto fixo de Brouwer tem na prova de existência. A Lista 2A pratica a mesma lógica com matrizes numéricas, jogos e programação linear."
    ],
    points: [
      "Com processos nas linhas e fator comum σ, calcule C = B − σA. Avalie o vetor físico xᵀC e o vetor em preços Cp separadamente.",
      "Produto sobrando implica preço zero. Processo que rende estritamente menos que o custo remunerado implica intensidade zero.",
      "A complementaridade pode ser conferida pela igualdade escalar xᵀCp = 0 depois de conferir os sinais dos dois vetores.",
      "Confira a orientação das matrizes na fonte. A lição escrita e alguns artigos usam processos nas colunas. A Lista 2A apresenta a conta com processos nas linhas."
    ],
    connections: [
      { id: "von-neumann", text: "A notação da lição reescreve as condições do artigo original e destaca o significado econômico de cada desigualdade." },
      { id: "aula-12-11", text: "As notas de 12/11 aplicam essas verificações e conectam o caso de salário zero à taxa máxima de lucro de Sraffa." },
      { id: "morishima-1974", text: "Na aplicação a Marx, Morishima acrescenta a cesta salarial aos insumos materiais e formula as condições de crescimento e rentabilidade." }
    ],
    source: "Mat Pol lição 7 Modelo de von Neumann.doc · modelo e hipóteses. Mat Pol lista 2a 26.pdf · exercícios 2 a 4."
  },
  {
    id: "aula-12-11",
    topic: "crescimento",
    author: "Aula de 12/11 · exemplo resolvido",
    title: "Da solução de von Neumann ao sistema padrão",
    original: "Von Neumann e Sraffa",
    lead: "O exemplo da aula passa de um fator de expansão a autovalores, multiplicadores e uma relação salário-lucro.",
    summary: [
      "A aula usa duas matrizes e testa σ = 3 em B − σA. Os vetores candidatos são positivos e, no exemplo, os produtos do vetor de intensidades pela matriz e da matriz pelo vetor de preços dão zero. A igualdade dos dois lados permite escrever o problema como um sistema de autovalores, usando a inversa de B quando ela existe. A raiz relevante é λ = 1/3.",
      "Na construção sraffiana da aula, 1 + R = 1/λ, então R = 2. O vetor de intensidades é reescalado para que o trabalho ponderado some um. Em seguida, o produto líquido padrão é calculado com B − A e usado como unidade de conta. Nessa unidade, a relação distributiva do exemplo é w = 1 − r/2."
    ],
    points: [
      "Comece conferindo as multiplicações de B − 3A pelos vetores candidatos. Os sinais e as igualdades aparecem antes da identificação do autovalor.",
      "A relação λ = 1/σ dá R = σ − 1 no caso da aula. Para σ = 3, a taxa máxima é 2, ou 200%.",
      "A normalização do trabalho fixa a escala dos multiplicadores. O valor unitário da cesta padrão fixa a escala dos preços.",
      "Os símbolos usados para intensidades e preços mudam nas notas. Identifique o vetor pelo lado em que multiplica a matriz e por sua função econômica."
    ],
    connections: [
      { id: "von-neumann", text: "As duas condições de equilíbrio são o ponto de partida da conta. O exemplo usa uma solução positiva em que ambas estão em igualdade." },
      { id: "matrizes-sraffa", text: "Assim como na Lista 2, o autovalor leva a R e o vetor normalizado leva ao sistema padrão. A Lista 2A explicita a conexão no caso de salário zero." }
    ],
    source: "neumann sraffa aula 12 11 26.pdf · pp. 1 a 9. Mat Pol lista 2a 26.pdf · exercícios 1 e 4."
  },
  {
    id: "morishima-1974",
    topic: "marx",
    author: "Michio Morishima · 1974",
    title: "Exploração e transformação em Marx",
    original: "Marx in the Light of Modern Economic Theory",
    lead: "Morishima usa programação linear para estudar a exploração e uma iteração matricial para estudar preços de produção.",
    summary: [
      "O artigo desenvolve dois problemas de Marx. O primeiro pergunta em que condições a exploração do trabalho está ligada a lucro positivo e capacidade de expansão. Morishima mede o trabalho necessário pelo mínimo de horas requerido para produzir a cesta dos trabalhadores, dadas as técnicas disponíveis. O problema dual da programação linear fornece valores ótimos, em unidades de trabalho. Diferentes vetores de valores ótimos podem avaliar a cesta salarial pelo mesmo total de trabalho necessário.",
      "O segundo problema é a transformação de valores em preços de produção. Em um caso de produção simples, Morishima parte de valores em trabalho, incorpora a taxa uniforme de lucro e examina uma sequência de preços obtida por iteração matricial. As condições de convergência e as igualdades entre valores e preços agregados precisam ser avaliadas no caso em estudo."
    ],
    points: [
      "Se T é a jornada e T* é o trabalho necessário, o excedente é T − T* e a taxa de exploração é e = (T − T*)/T*.",
      "Minimize o trabalho usado para produzir os insumos de reposição e a cesta salarial. Os preços-sombra do dual são chamados de valores ótimos.",
      "Nas hipóteses do teorema generalizado, e > 0, rentabilidade positiva e capacidade positiva de crescimento são condições equivalentes. A demonstração usa hipóteses explícitas sobre trabalho, cesta e processos.",
      "Na transformação, a iteração aproxima os preços de produção com lucro uniforme. O vetor inicial de valores e o vetor de preços de equilíbrio são etapas da análise."
    ],
    connections: [
      { id: "von-neumann", text: "As matrizes A e B e as escalas dos processos vêm do modelo de reprodução. Morishima inclui a cesta salarial e pergunta o que permite gerar excedente, lucro e expansão." },
      { id: "oliveira-2024", text: "O trabalho de Oliveira detalha a programação linear, a passagem do trabalho necessário para a taxa de exploração e a sequência de transformação." },
      { id: "matrizes-sraffa", text: "No caso quadrado de produção simples, a raiz de Frobenius e as condições de Hawkins–Simon aparecem novamente para verificar a produtividade do sistema." }
    ],
    source: "morishima1974.pdf · pp. 611 a 632, principalmente §§ 2 e 3."
  },
  {
    id: "oliveira-2024",
    topic: "marx",
    author: "Rodrigo Pacheco de Oliveira · 2024",
    title: "O passo a passo de valor, exploração e lucro",
    original: "Exploração e o problema da transformação em Morishima",
    lead: "O trabalho reconstrói as ferramentas matemáticas antes de explicar os resultados de Morishima.",
    summary: [
      "Oliveira começa pela dualidade da programação linear, pelo crescimento de von Neumann e pelo teorema de Frobenius. Depois aplica essas ferramentas à interpretação de Morishima. O problema primal calcula o mínimo de trabalho necessário para reproduzir a cesta salarial. O dual atribui valores ótimos aos bens. Isso permite distinguir o tempo necessário à reprodução da força de trabalho do tempo excedente na jornada, mesmo com técnicas alternativas.",
      "A segunda parte acompanha a passagem da conta em trabalho para a conta em preços. O trabalho explica como o vetor de crescimento balanceado se liga à taxa de lucro e como o procedimento iterativo passa dos valores iniciais aos preços de produção. A exposição separa a condição para a existência de lucro positivo do cálculo de um vetor de preços compatível com lucro uniforme."
    ],
    points: [
      "O valor ótimo é obtido pela dualidade. Ele mede a exigência de trabalho nas condições do problema formulado.",
      "A taxa de exploração divide o trabalho excedente pelo necessário. A taxa de lucro relaciona o excedente avaliado ao capital adiantado.",
      "A positividade da exploração, da rentabilidade e da capacidade de crescimento está ligada pelo teorema de Morishima em suas hipóteses.",
      "Na transformação, as técnicas interdependentes fazem com que os preços dos insumos sejam recalculados junto com os dos produtos."
    ],
    connections: [
      { id: "morishima-1974", text: "Use o artigo para localizar a proposição e o trabalho de Oliveira para seguir a demonstração e distinguir as duas partes da argumentação." },
      { id: "licao-von-neumann", text: "Emparelhe intensidade e crescimento no problema físico com preços e remuneração no problema em valor. Essa leitura ajuda a acompanhar o modelo Marx–von Neumann." },
      { text: "Na lição Morishima, exploração e valor, calcule primeiro o trabalho excedente. Na discursiva do simulado, justifique depois por que o teorema e a transformação respondem a perguntas distintas." }
    ],
    source: "Rodrigo Pacheco de Oliveira - Versão Final.pdf · capítulos 2 a 7."
  }
];
