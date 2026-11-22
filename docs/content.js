const tracks = [
  { id: "algebra", title: "Álgebra", icon: "grid", summary: "Matrizes, equações de preços e modelos de produção.", color: "violet" },
  { id: "economia", title: "Pensamento econômico", icon: "book", summary: "Sraffa, von Neumann, tradição clássica e Marx.", color: "mint" }
];

const units = [
  { id: "matrizes", track: "algebra", name: "Matrizes e mercadorias básicas", icon: "grid", source: "Listas 1 e 2 e O Significado Econômico das Matrizes Irredutíveis e Redutíveis", lesson: [
    "Na produção simples, a linha i identifica o produto e a coluna j identifica o insumo. Divida cada entrada da linha i pela produção bruta do bem i para obter o coeficiente técnico.",
    "Se Sᵢⱼ > 0, trace j → i. Um bem básico entra direta ou indiretamente na produção de todos os bens. Se todos são básicos, a matriz é irredutível.",
    "Calcule det(λI − S) e encontre as raízes. Para a taxa máxima de lucro na produção simples, use λ do bloco básico. Com λ > 0, R = 1/λ − 1."
  ] },
  { id: "precos", track: "algebra", name: "Preços, salário e lucro", icon: "chart", source: "Lista 2, Exercícios 1, 4 e 5, e 1ª avaliação, questão 1", lesson: [
    "Na produção simples, p = (1+r)Sp + wℓ. Fixe a unidade de conta para fechar o sistema de preços relativos.",
    "No sistema padrão, o excedente e os meios de produção são proporcionais. Com o produto líquido padrão como unidade e o trabalho total normalizado, w = 1 − r/R.",
    "Se ρ((1+r)S) < 1, a expansão de (I − (1+r)S)⁻¹ em potências de (1+r)S permite ler os preços como custos de trabalho datado. A condição se refere à matriz completa que se quer inverter."
  ] },
  { id: "conjunta", track: "algebra", name: "Matrizes na produção conjunta", icon: "layers", source: "Lista 3, Exercício 2, e capítulo de Jorge Araújo sobre produção conjunta", lesson: [
    "Aqui usamos linhas para processos e colunas para bens. A registra insumos e B, produtos. As equações de preços são (1+r)Ap + wL = Bp.",
    "Para testar um grupo de n bens não básicos no critério do §60, reúna as 2n colunas de insumos e produtos. Verifique se há no máximo n linhas independentes.",
    "Elimine o bloco não básico por operações de linha. No bloco básico quadrado, procure valores que tornam B − σA singular, observando as condições econômicas e as hipóteses do exercício."
  ] },
  { id: "von", track: "algebra", name: "Equilíbrio de von Neumann", icon: "loop", source: "Lista 2A, Lição 7 e aula de 12/11 sobre von Neumann e Sraffa", lesson: [
    "Para esta lição, A e B têm processos nas linhas. Use xᵀ para intensidades e p para preços. Com C = B − σA, a viabilidade física é xᵀC ≥ 0 e a condição de preços é Cp ≤ 0.",
    "Se um bem sobra, seu preço é zero. Se um processo gera receita estritamente inferior ao custo acrescido da remuneração, sua intensidade é zero.",
    "Uma solução de equilíbrio verifica os sinais componente por componente e xᵀCp = 0. No caso do sistema sraffiano com w = 0 estudado na Lista 2A, use σ = 1 + R."
  ] },
  { id: "escolha", track: "algebra", name: "Técnicas, máquinas e renda", icon: "chart", source: "Lista 3, pp. 4–6, e capítulo de Jorge Araújo, capital fixo, renda e técnicas", lesson: [
    "A equação de um processo com máquina inclui o preço da máquina usada à entrada e o da máquina envelhecida à saída. O último processo pode terminar com descarte.",
    "Na terra sem renda, a equação de preço do cereal tem apenas custos e lucro. Na terra com renda, a receita residual, dividida pela área, dá a renda por unidade de terra.",
    "Para identificar troca e retorno de técnica, encontre os cruzamentos das curvas salário-lucro e teste os intervalos. Com a mesma unidade de conta, compare o salário suportado por cada técnica à mesma taxa de lucro."
  ] },
  { id: "distribuicao", track: "economia", name: "Sraffa, Ricardo e a distribuição", icon: "book", source: "Aula 5, Introdução de 1951 a Ricardo e Questionário 2", lesson: [
    "No enfoque clássico discutido no curso, as condições de produção e uma variável distributiva dada permitem investigar preços e a distribuição do excedente.",
    "Ricardo buscava uma medida que permitisse separar os movimentos do valor de uma mercadoria daqueles do padrão de medida. A mercadoria-padrão é uma construção do sistema de produção.",
    "Os preços relativos podem variar quando a distribuição muda, mesmo com os mesmos métodos produtivos. Essa variação está no centro da crítica à medida de capital independente dos preços."
  ] },
  { id: "criticas", track: "economia", name: "Marshall e Hayek", icon: "split", source: "Sraffa (1925, 1926 e 1932), Aulas 2 a 4 e 1ª avaliação, questão 3", lesson: [
    "A análise marshalliana do equilíbrio parcial isola uma indústria. Economias que se propagam por indústrias correlatas dificultam manter constantes as condições do restante da economia.",
    "Economias internas à firma podem reduzir seus custos com o volume produzido. Isso põe em questão a compatibilidade com a concorrência atomística postulada no exercício.",
    "Na crítica a Hayek, empréstimos denominados em diferentes bens podem implicar taxas próprias distintas quando seus preços relativos mudam. Isso questiona a referência a uma única taxa natural."
  ] },
  { id: "capital", track: "economia", name: "Capital fixo, terra e retorno de técnica", icon: "layers", source: "Lista 3, Exercício 1, Questionário 2 e capítulo de Jorge Araújo", lesson: [
    "Uma máquina usada entra em um processo e a máquina de idade seguinte sai junto com a mercadoria vendável. A depreciação econômica surge dos preços das máquinas em idades sucessivas.",
    "Na renda diferencial do exercício, o preço é determinado com a terra sem renda. A renda da terra superior aparece como resíduo diante desse preço.",
    "O retorno de técnica ocorre quando a mesma técnica é escolhida em faixas separadas da taxa de lucro. Isso põe em questão a ordenação monotônica de técnicas pela intensidade de capital."
  ] },
  { id: "classicos", track: "economia", name: "Von Neumann e a tradição clássica", icon: "loop", source: "Lista 4, Kurz e Salvadori (1993 e 2001), Champernowne (1945–46)", lesson: [
    "Kurz e Salvadori destacam a afinidade com a teoria clássica do excedente. No modelo de von Neumann, a cesta real de subsistência entra nos insumos e a taxa de retorno é determinada pelo sistema.",
    "O estado quase estacionário de Champernowne admite expansão uniforme com proporções estáveis. A crítica aponta o que essa abstração deixa de fora, como mudanças no padrão de vida.",
    "As notas preparatórias de Sraffa documentam seu interesse no artigo e no comentário de Champernowne. A troca com Hicks registra a divergência sobre o papel da demanda e da distribuição."
  ] },
  { id: "morishima", track: "economia", name: "Morishima, exploração e valor", icon: "spark", source: "Morishima (1974), seção 2, e Rodrigo Pacheco de Oliveira, capítulos 4–6", lesson: [
    "O trabalho necessário pode ser associado ao trabalho incorporado na cesta salarial. O trabalho excedente é a parte da jornada acima desse montante.",
    "Nas hipóteses do Teorema Marxista Fundamental discutido no curso, uma taxa positiva de lucro está ligada à exploração positiva do trabalho.",
    "A transformação de valores em preços de produção trata da formação de preços com remuneração uniforme do capital. A formalização de Morishima examina a relação entre exploração, preços, lucro e crescimento."
  ] }
];

const questionGroups = {};
function bank(unit, items) {
  questionGroups[unit] = items.map(([type, prompt, data, steps, source], index) => ({
    id: `${unit}-${index + 1}`, unit, type, prompt, steps, source,
    ...(type === "choice" ? { answer: data[0], options: data } :
      type === "fill" ? { answer: data } : { pairs: data })
  }));
}

bank("matrizes", [
  ["choice", "Um processo usa 2 unidades de a para produzir 7 unidades de a. Quanto de a entra por unidade produzida?", ["2/7", "7/2", "5/7", "2"], ["Separe insumo e produto bruto. O insumo é 2 e o produto bruto é 7.", "Divida o consumo pelo produto bruto. O coeficiente técnico é 2/7."], "1ª avaliação, questão 1"],
  ["fill", "Uma matriz triangular tem diagonal 1/4 e 1/2. Calcule seu determinante.", ["1/8"], ["Em uma matriz triangular, o determinante é o produto dos elementos da diagonal.", "Multiplique (1/4) × (1/2) = 1/8."]],
  ["match", "Associe cada situação à sua interpretação.", [["Sᵢⱼ > 0", "j entra diretamente na produção de i"], ["Caminho j → k → i", "j entra indiretamente na produção de i"], ["Todos os bens são básicos", "A matriz técnica é irredutível"]], ["Leia cada entrada positiva como uma ligação do insumo para o produto.", "A composição de duas ligações indica dependência indireta. Se todos os vértices alcançam os demais, a matriz é irredutível."]],
  ["fill", "Todas as mercadorias são básicas. Dado det(λI − S) proporcional a (λ − 1)(6λ² − 5λ + 1), qual raiz deve ser usada?", ["1"], ["Fatore o termo quadrático como (3λ − 1)(2λ − 1).", "Ordene as raízes 1/3, 1/2 e 1. Para o bloco básico inteiro, use sua raiz de Perron, 1."], "1ª avaliação, questão 2"],
  ["choice", "Uma economia redutível tem bloco básico com raiz 1/4 e bloco não básico com raiz 1/2. Que raiz entra no cálculo de R do bloco básico?", ["1/4", "1/2", "3/4", "1"], ["Identifique primeiro quais bens reproduzem o núcleo da economia.", "Use o raio espectral do bloco básico, aqui 1/4. A maior raiz da matriz inteira é 1/2, mas pertence ao outro bloco.", "A viabilidade dos preços de todos os bens é uma questão adicional." ]],
  ["choice", "Se a, b e c formam o ciclo a → b → c → a, quais são básicos?", ["a, b e c", "Somente a", "Somente a e c", "Nenhum"], ["A partir de a, alcance b e depois c. A partir de b, alcance c e depois a.", "Repita a partir de c. Todo bem entra, direta ou indiretamente, na produção dos demais."]],
  ["choice", "Para S não negativa, o que os menores principais positivos de I − S indicam no teste de Hawkins–Simon?", ["O sistema é produtivo e a inversa de I − S é não negativa", "Todo bem é necessariamente básico", "Todo autovalor de S é negativo", "A produção precisa ser conjunta"], ["O teste verifica I − S, que representa produção líquida por unidade de produção bruta.", "Sob a hipótese S ≥ 0, a positividade dos menores principais garante uma solução de produção não negativa para demanda final não negativa."], "Plano de Ensino, item ii, e Significado Econômico das Matrizes Irredutíveis e Redutíveis"]
]);

bank("precos", [
  ["fill", "Se a raiz do bloco básico é 2/7, determine R como fração ou percentual.", ["5/2", "250%"], ["Fixe w = 0. A equação do bloco básico exige (1+R)λ = 1.", "Inverta 2/7 e subtraia 1. R = 7/2 − 1 = 5/2, ou 250%."], "1ª avaliação, questão 1"],
  ["fill", "Com produto líquido padrão como unidade, R = 5/3 e r = 1/3. Qual é w?", ["4/5"], ["Escreva w = 1 − r/R.", "Calcule (1/3)/(5/3) = 1/5 e subtraia de 1. O salário é 4/5."]],
  ["match", "Associe cada condição à consequência no sistema padrão.", [["r = 0", "w = 1"], ["r = R", "w = 0"], ["r = R/2", "w = 1/2"]], ["Use w = 1 − r/R para os três casos.", "Nos extremos, o produto líquido padrão vai integralmente a salários ou lucros. No ponto intermediário, w vale 1/2."]],
  ["choice", "Por que se impõe yᵀp = 1 ao determinar preços em unidades do produto líquido padrão?", ["Para fixar a unidade de conta", "Para fixar r em zero", "Para tornar todos os preços iguais", "Para tornar cada insumo básico"], ["As equações tratam de preços relativos e exigem uma escala nominal.", "A condição atribui valor 1 à cesta padrão y."]],
  ["choice", "Que termo da expansão do vetor de preços representa o trabalho direto, com salário pago ao final?", ["wℓ", "w(1+r)Sℓ", "w(1+r)²S²ℓ", "(1+r)Sp"], ["Passe (1+r)Sp para a esquerda e expanda a inversa, quando a série converge.", "O termo sem potências de S é wℓ. As demais potências caminham para rodadas anteriores de insumos."], "Plano de Ensino, item ii, e aula sobre matrizes de produção simples"],
  ["choice", "Qual equação permite obter os preços quando r, w, S e ℓ são conhecidos e a matriz é invertível?", ["[I − (1+r)S]p = wℓ", "[I + (1+r)S]p = wℓ", "Sp = wℓ", "p = (1+r)Sℓ"], ["Parta de p = (1+r)Sp + wℓ.", "Traga o termo de insumos para a esquerda e coloque p em evidência."]]
]);

bank("conjunta", [
  ["choice", "Um processo entrega trigo e palha. Onde aparecem essas quantidades nas matrizes com processos nas linhas?", ["Na mesma linha de B, em duas colunas", "Na mesma coluna de A", "Na diagonal de A", "Em duas linhas obrigatoriamente"], ["Uma linha descreve um processo inteiro.", "B registra os produtos. Trigo e palha são dois bens produzidos pelo mesmo processo."]],
  ["fill", "Para testar um grupo de 2 mercadorias pelo critério do §60, quantas colunas de insumos e produtos são reunidas?", ["4"], ["Separe as colunas das duas mercadorias em A e em B.", "São duas colunas de insumo e duas de produto. Some 2 + 2 = 4."]],
  ["choice", "O bloco de insumos e produtos de C e D tem quatro linhas, mas posto 2. O que indica o critério da Lista 3?", ["C e D formam um grupo não básico", "C e D são necessariamente básicos", "A matriz de insumos é a identidade", "A taxa de lucro é 2"], ["O grupo contém n = 2 mercadorias.", "Há apenas duas linhas independentes, ou seja, posto ≤ n. O grupo satisfaz a condição de não basicidade."]],
  ["match", "Associe os termos da equação (1+r)Ap + wL = Bp.", [["(1+r)Ap", "Valor dos insumos acrescido de lucro"], ["wL", "Pagamento pelo trabalho"], ["Bp", "Valor bruto dos produtos"]], ["Multiplique os insumos pelos preços para obter Ap e acrescente a remuneração via 1+r.", "Some wL e iguale a Bp, o valor de tudo o que sai do processo."]],
  ["fill", "No exemplo da aula de 12/11, a raiz usada é λ = 1/3 e σ = 1/λ = 1+R. Quanto vale R?", ["2", "200%"], ["Inverta λ para obter σ = 3.", "Subtraia 1 de σ. O resultado é R = 2, ou 200%."], "Aula de 12/11, pp. 3–8"],
  ["choice", "Se a primeira linha é 2 vezes a terceira mais a quarta, que operação zera essa linha no bloco considerado?", ["L₁ ← L₁ − 2L₃ − L₄", "L₁ ← L₁ + 2L₃ + L₄", "L₁ ← L₁ − L₃ − 2L₄", "L₃ ← L₃ − 2L₁"], ["Escreva L₁ = 2L₃ + L₄.", "Subtraia da primeira linha a combinação exata que a reproduz."]],
  ["choice", "Que problema Manara ajuda a tratar na produção conjunta?", ["Caracterizar bens não básicos e dar condições para construir o sistema padrão", "Determinar a taxa de câmbio nominal", "Substituir capital fixo por trabalho direto", "Fixar uma taxa natural única para empréstimos em bens"], ["Na produção conjunta, a mesma linha registra vários produtos.", "Manara explicita um tratamento da dependência linear e condições para viabilizar a construção padrão."], "Capítulo de Jorge Araújo sobre produção conjunta, seção sobre Manara"]
]);

bank("von", [
  ["match", "Associe cada condição do modelo à sua leitura.", [["xᵀC ≥ 0", "Produtos cobrem os insumos requeridos pela expansão"], ["Cp ≤ 0", "Receita não supera custo remunerado em nenhum processo"], ["xᵀCp = 0", "Folgas e pesos se complementam"]], ["A leitura física soma a produção por bem com as intensidades.", "A leitura em valor usa preços e verifica processo por processo. Em equilíbrio, a expressão escalar é zero."]],
  ["choice", "A produção de um bem supera estritamente sua necessidade no próximo período, no equilíbrio do modelo. Qual é seu preço?", ["Zero", "Igual a σ", "Igual à sua quantidade excedente", "Estritamente positivo"], ["A desigualdade física tem folga positiva para o bem.", "Pela complementaridade, o preço que multiplica essa folga deve ser zero."]],
  ["choice", "Se (Cp)ᵢ < 0, o que ocorre com a intensidade do processo i?", ["É zero", "É 1", "É igual ao preço", "Deve ser positiva"], ["O processo apresenta receita inferior ao custo remunerado.", "Como sua desigualdade tem folga estrita, a complementaridade exige intensidade nula."]],
  ["fill", "Na Lista 2A, com w = 0, o exemplo usa σ = 5. Quanto vale R?", ["4", "400%"], ["No caso do exercício, σ = 1 + R.", "Faça 5 − 1 = 4. Como taxa percentual, isso dá 400%."], "Lista 2A, Exercício 1"],
  ["choice", "No jogo de matriz C = B − σA, o que representa o valor zero na formulação da Lista 2A?", ["O ponto que concilia as duas desigualdades de equilíbrio", "O cancelamento de todas as entradas de A e B", "A expansão nula", "O preço nulo de todos os bens"], ["Uma estratégia de intensidades obtém xᵀC ≥ 0 e uma estratégia de preços impõe Cp ≤ 0.", "As duas condições limitam o valor esperado por baixo e por cima em zero."], "Lista 2A, Exercício 4"],
  ["fill", "Contração ou expansão? Se σ = 1,08, qual a taxa líquida de expansão? Responda em percentual ou como taxa decimal.", ["8%", "0,08"], ["σ multiplica a escala do período anterior.", "A taxa líquida é 1,08 − 1 = 0,08, isto é, 8%."]]
]);

bank("escolha", [
  ["choice", "Como entra a máquina envelhecida no valor da produção do período?", ["Como produto conjunto com o bem principal", "Como parte do salário", "Como desconto pelo preço histórico", "Como terra sem renda"], ["Identifique o bem produzido para venda e o equipamento que sobrevive ao período.", "Ambos entram em B na mesma linha de processo."]],
  ["fill", "Uma máquina de idade 1 entra a preço 40 e reaparece envelhecida a preço 30. Com r = 0, qual a perda de valor no período?", ["10"], ["Compare os preços correntes das duas idades.", "Subtraia o preço de saída do preço de entrada. A diferença é 10."]],
  ["fill", "Ao preço dado pela terra sem renda, outra terra gera receita de 120. Seus custos com salário e lucro somam 90. Se ocupa 2 hectares, qual a renda por hectare?", ["15"], ["Calcule a renda total residual, 120 − 90 = 30.", "Divida a renda total pela área. 30/2 = 15 por hectare."]],
  ["match", "Associe os elementos de uma conta de capital fixo e renda.", [["Última idade com descarte", "Sem valor de revenda no exemplo"], ["Terra sem renda", "Equação de preço do cereal sem parcela fundiária"], ["Diferença de preço entre idades", "Depreciação econômica no período"]], ["Siga as idades da máquina através de entrada, saída e descarte.", "Aplique separadamente o caso da terra marginal, em que a renda é zero."]],
  ["choice", "A diferença wₐ − wᵦ é positiva antes do primeiro cruzamento, negativa entre os dois e positiva depois do segundo. Qual é a sequência de técnicas admissíveis que sustentam o salário superior?", ["A, B, A", "A, A, B", "B, A, B", "B, B, A"], ["Sinal positivo indica que A sustenta o salário superior e negativo indica B.", "Percorra os três intervalos. O retorno de A caracteriza reswitching."]]
]);

bank("distribuicao", [
  ["choice", "Qual problema leva Ricardo a buscar uma medida invariável do valor?", ["Distinguir a alteração do valor medido de uma alteração na própria medida", "Encontrar o preço nominal do trigo em qualquer mercado", "Provar que salário e lucro sobem juntos", "Identificar uma taxa de juros única para toda mercadoria"], ["Preços são relativos. Se o padrão variar, a relação observada pode mudar por causa dele.", "Ricardo busca uma referência que permita atribuir a variação ao objeto medido."]],
  ["match", "Associe cada ideia ao seu papel.", [["Mercadoria-padrão", "Cesta composta construída a partir do sistema"], ["R", "Taxa máxima de lucro correspondente ao salário zero"], ["w = 1 − r/R", "Relação distributiva na unidade padrão"]], ["Identifique a cesta que serve de unidade de conta.", "Use a fórmula para localizar os dois extremos da distribuição."]],
  ["choice", "Que elementos entram como dados no enfoque clássico discutido por Kurz e Salvadori?", ["Técnicas e uma variável distributiva, com as condições pertinentes do sistema", "Somente as preferências individuais", "Apenas o preço de mercado do trigo", "Preços de todos os bens como únicos dados"], ["O enfoque parte das condições de produção e considera um dado distributivo.", "Os preços relativos e a variável distributiva restante são determinados em conjunto nas condições do modelo."], "Kurz e Salvadori (2001), e Lista 4, Exercício 2"],
  ["choice", "O que a inversão do movimento dos preços relativos com técnica fixa põe em dúvida?", ["A medida agregada de capital independente dos preços e da distribuição", "A existência de insumos materiais", "A possibilidade de escrever equações simultâneas", "A existência de qualquer preço relativo"], ["Fixe os métodos de produção. Varie a taxa de lucro e observe a avaliação relativa dos bens.", "Se a ordenação se inverte, a avaliação dos bens de capital depende das condições em que seus preços são calculados."], "1ª avaliação, questão 4 e Questionário 2"],
  ["fill", "O produto líquido usado como unidade para explicitar a partilha entre salários e lucros é o produto líquido ____.", ["padrão"], ["A técnica informa as proporções físicas do sistema.", "A construção de Sraffa usa a cesta padrão como unidade de conta."]],
  ["choice", "O que Pasinetti fez no trabalho de 1960 apresentado na Aula 1A?", ["Formalizou matematicamente o sistema ricardiano em uma economia com dois setores", "Derivou o estado quase estacionário de Champernowne", "Publicou a crítica de Sraffa a Hayek", "Formulou a complementaridade de von Neumann"], ["Identifique o autor estudado por Pasinetti: Ricardo.", "A Aula 1A descreve a formulação matematizada e a opção por uma economia de dois setores."], "Aula 1A e Plano de Ensino, item iii"]
]);

bank("criticas", [
  ["choice", "Uma redução do preço do aço diminui também os custos ferroviários. Que hipótese do equilíbrio parcial está sob pressão?", ["A manutenção das condições das demais indústrias", "A identidade entre trabalho direto e indireto", "A existência de um produto líquido", "A hipótese de que os preços são relativos"], ["O efeito começa na produção siderúrgica.", "Como o aço é insumo ferroviário, mudam as condições de outra indústria que deveriam ficar constantes."], "1ª avaliação, questão 3(i)"],
  ["choice", "Por que economias internas à firma são difíceis de acomodar na concorrência atomística?", ["A expansão da firma pode reduzir seu custo unitário e favorecer concentração", "O custo tem de crescer sempre com a produção", "Elas provam que os preços dos insumos são fixos", "Cada firma necessariamente produz mais de uma mercadoria"], ["O ganho de escala está ligado ao volume daquela firma.", "Custo unitário decrescente pode favorecer sua expansão em prejuízo da hipótese de concorrentes pequenos e atomizados."], "1ª avaliação, questão 3(ii)"],
  ["match", "Associe cada argumento à crítica correspondente.", [["Economias que atravessam vários ramos", "O isolamento da indústria fica comprometido"], ["Economias internas à firma", "O aumento de escala da firma muda seu custo unitário"], ["Taxas próprias de juros", "A denominação do empréstimo importa quando preços relativos mudam"]], ["Separe o que acontece na firma, na indústria e nas indústrias relacionadas.", "Depois identifique o argumento monetário, que envolve taxas expressas em mercadorias diferentes."]],
  ["fill", "Na crítica de 1932, o nome do autor associado à noção de dinheiro neutro e da taxa natural de juros é ____.", ["hayek", "f. a. hayek", "friedrich hayek"], ["A Aula 4 estuda a discussão sobre Prices and Production.", "Sraffa questiona a taxa natural única na formulação de Friedrich Hayek."]],
  ["choice", "Por que são raras as economias externas à firma e internas a uma única indústria?", ["Benefícios de escala frequentemente se estendem a ramos correlatos", "A externalidade tem origem sempre no custo histórico", "Elas só aparecem em economias sem mercadorias básicas", "O ganho precisa depender apenas dos salários"], ["Observe a fronteira entre indústria e economia geral.", "Ganhos compartilhados por cadeias de insumos ultrapassam a fronteira de um ramo único."], "1ª avaliação, questão 3(iii)"],
  ["choice", "Que direção Sraffa sugere no artigo de 1926 para estudar mercados em que a firma dispõe de clientela própria?", ["Investigar situações com elementos de monopólio", "Presumir demanda perfeitamente elástica para cada firma", "Excluir a possibilidade de economias de escala", "Usar a taxa natural de juros como preço"], ["Uma firma com clientela própria pode enfrentar demanda individual com inclinação.", "Sraffa volta a atenção para situações em que a firma tem algum poder sobre seu preço."]]
]);

bank("capital", [
  ["choice", "Por que o valor atual de uma máquina usada depende do sistema atual de produção?", ["As equações relacionam seus serviços e produtos atuais aos preços e à distribuição vigentes", "O preço histórico fixa as demais variáveis", "Toda máquina usada tem valor zero", "O preço só depende da idade, mesmo com técnicas distintas"], ["Trate a máquina envelhecida como um produto conjunto.", "Seu preço resolve o sistema corrente, que inclui o que ela permite produzir e o preço das outras mercadorias."]],
  ["choice", "Na situação da Lista 3, por que a renda da terra superior é residual?", ["O preço já é determinado em uma terra usada sem renda", "O preço é igual à renda por definição", "As terras têm custos e receitas necessariamente iguais", "Há apenas um processo que produz cereal"], ["Comece pela equação do processo na terra sem renda. Ali, o cereal tem preço de produção sem componente fundiário.", "Ao avaliar o outro processo a esse preço, seu saldo acima dos custos remunerados determina a renda."]],
  ["match", "Associe cada fenômeno ao seu significado.", [["Produção conjunta", "Um processo entrega mais de um produto"], ["Renda diferencial", "Excedente da terra superior ao preço que vale para o cereal"], ["Reswitching", "A mesma técnica volta após um intervalo em que outra foi escolhida"]], ["Identifique primeiro o problema de múltiplos produtos.", "Separe a comparação de terras da escolha de técnica em diferentes taxas de lucro."]],
  ["choice", "Por que o retorno da técnica A em duas faixas separadas de r é relevante para a teoria do capital?", ["Ele contraria uma ordenação monotônica das técnicas pela intensidade de capital", "Ele prova que uma técnica nunca muda", "Ele torna a taxa de salário constante nas duas faixas", "Ele exige que todas as mercadorias sejam não básicas"], ["Na faixa intermediária, outra técnica é escolhida.", "A escolha de A nos dois extremos é incompatível com um ordenamento simples em que a taxa de lucro percorre as técnicas em uma única direção."]],
  ["fill", "A terra marginal no exemplo de renda diferencial rende ____ por hectare.", ["0", "zero"], ["Comece pelo processo que viabiliza o cereal sem parcela fundiária.", "Na hipótese da Lista 3, a terra marginal usada tem renda nula."]]
]);

bank("classicos", [
  ["choice", "O que caracteriza o tratamento assimétrico da distribuição no modelo de von Neumann?", ["A cesta salarial de subsistência é dada e a taxa de retorno é determinada", "Salário real e juros são simultaneamente fixados por preferências", "A quantidade de capital é dada por um único preço", "Os salários são determinados por uma curva de oferta de trabalho"], ["Localize os bens de subsistência entre os insumos dados.", "A taxa de retorno resulta das condições de equilíbrio e tem um papel distinto do salário real."], "Lista 4, Exercício 1; Kurz e Salvadori (1993)"],
  ["match", "Associe os autores às ideias estudadas na Lista 4.", [["Remak", "Sistemas de preços superpostos"], ["Champernowne", "Estado quase estacionário"], ["Kurz e Salvadori", "Leitura clássica do modelo de von Neumann"]], ["Remak discute sistemas de preços obtidos a partir de um esquema físico de reprodução.", "Champernowne caracteriza a expansão uniforme. Kurz e Salvadori destacam suas afinidades com a tradição clássica."]],
  ["choice", "O que permanece estável no estado quase estacionário discutido por Champernowne?", ["As proporções na expansão uniforme", "O volume total de produção", "O total de equipamentos", "A quantidade produzida em cada processo"], ["Imagine todas as atividades multiplicadas pelo mesmo fator de expansão.", "As proporções permanecem iguais, embora as quantidades possam crescer. Essa hipótese deixa mudanças estruturais fora da análise."], "Lista 4, Exercício 3, e Champernowne (1945–46)"],
  ["choice", "Que evidência alterou a história da relação entre Sraffa e von Neumann?", ["Notas nos manuscritos de Sraffa mostram que estudou os textos de von Neumann e Champernowne", "Von Neumann publicou seu modelo como capítulo do livro de Sraffa", "Hicks assinou as equações de Sraffa", "Sraffa traduziu o artigo alemão para a publicação de 1945"], ["A afinidade entre os modelos já podia ser observada nas publicações.", "A documentação examinada por Kurz e Salvadori estabelece que Sraffa conheceu esses textos e tomou notas sobre eles."], "Lista 4, Exercício 2; Kurz e Salvadori (2001), seção 5"],
  ["choice", "Qual é um ponto da divergência registrada na troca com Hicks?", ["Hicks pergunta pelo papel das quantidades e da demanda, enquanto Sraffa delimita o estudo dos preços dadas as condições de produção", "Ambos usam a demanda individual como dado para fixar salário real e lucro", "Sraffa adota o capital agregado como variável independente", "Hicks sustenta que as equações tratam apenas de moeda"], ["Leia a pergunta sobre como as quantidades seriam determinadas.", "A resposta de Sraffa preserva a investigação dos preços em condições dadas, sem fechar o sistema por curvas de demanda."], "Kurz e Salvadori (2001), seção 5.2"],
  ["fill", "A expansão uniforme, com proporções estáveis, recebe em Champernowne o nome de estado ____.", ["quase estacionário", "quase-estacionário", "quasi-stationary state"], ["A economia pode aumentar de escala preservando sua estrutura proporcional.", "Champernowne chama isso de estado quase estacionário."], "Lista 4, Exercício 3"],
  ["choice", "O que Champernowne deixa para a segunda aproximação da teoria de preços?", ["Efeitos específicos da substituição e da escolha de bens sobre os preços", "As condições básicas de reprodução física", "A existência de um preço para todos os bens livres", "A identidade entre expansão e juros no equilíbrio"], ["Na primeira aproximação, von Neumann determina preços sob hipóteses simplificadoras sobre produção e subsistência.", "Champernowne trata efeitos específicos da substituição e da escolha dos consumidores como extensões dessa análise."], "Lista 4, Exercício 3(ii); Champernowne (1945–46)"]
]);

bank("morishima", [
  ["choice", "O que o Teorema Marxista Fundamental relaciona sob suas hipóteses?", ["Lucro positivo e exploração positiva do trabalho", "Renda fundiária e neutralidade da moeda", "Taxa de juros zero e concorrência perfeita", "Trabalho direto e taxa de crescimento nula"], ["Calcule se há trabalho excedente após a reprodução da força de trabalho.", "O teorema vincula a positividade desse excedente à possibilidade de uma taxa positiva de lucro nas condições estudadas."]],
  ["fill", "Se a jornada é de 8 horas e o trabalho necessário é de 5 horas, quanto é o trabalho excedente, em horas?", ["3"], ["A jornada se divide em trabalho necessário e trabalho excedente.", "Subtraia 5 de 8. Sobram 3 horas."]],
  ["fill", "No exemplo de 8 horas de jornada e 5 de trabalho necessário, qual é a taxa de exploração? Use fração ou percentual.", ["3/5", "60%"], ["O excedente é 8 − 5 = 3 horas.", "Divida o trabalho excedente pelo necessário. 3/5 = 60%."]],
  ["match", "Associe as noções da leitura de Morishima.", [["Trabalho necessário", "Trabalho requerido para reproduzir a cesta salarial"], ["Trabalho excedente", "Diferença entre a jornada e o trabalho necessário"], ["Preços de produção", "Preços compatíveis com a remuneração uniforme do capital"]], ["Identifique a parcela da jornada associada aos bens salariais.", "Subtraia essa parcela para obter o excedente. Depois separe essa contabilidade em trabalho da determinação de preços."]],
  ["choice", "O que se investiga no problema da transformação?", ["A relação entre valores-trabalho e preços de produção com taxa uniforme de lucro", "A conversão de preços futuros em taxas próprias de juros", "A escolha de um polinômio para ordenar solos", "A substituição de bens salariais por terra"], ["Primeiro distinga magnitudes calculadas em trabalho de magnitudes calculadas em preços.", "A transformação pergunta como se relacionam os dois sistemas quando a remuneração do capital é uniforme."]]
]);

const exam = [
  { unit: "von", title: "Equilíbrio e complementaridade", source: "Lista 2A, Exercícios 2–4; Lição 7", prompt: "Considere A = [[1, 1], [1, 1]] e B = [[3, 1], [1, 3]], com processos nas linhas. Teste σ = 2, xᵀ = (1/2, 1/2) e p = (1/2, 1/2). Calcule C, confira os sinais e explique o destino de um bem que tivesse folga física estrita.", steps: [
    "C = B − 2A = [[1, −1], [−1, 1]].",
    "xᵀC = (0, 0) e Cp = (0, 0). Ambos satisfazem as desigualdades e xᵀCp = 0. O candidato atende às condições.",
    "Com folga física estrita para um bem, a complementaridade exige preço zero."
  ] },
  { unit: "conjunta", title: "Bens básicos na produção conjunta", source: "Lista 3, Exercícios 1(i) e 2(i); Sraffa, §60", prompt: "Para testar C e D como grupo não básico, o bloco de suas colunas em [A|B] tem linhas (1, 0, 2, 0), (0, 1, 0, 3), (1, 1, 2, 3) e (2, 0, 4, 0). Calcule seu posto, justifique a classificação e explique por que o critério usa insumos e produtos.", steps: [
    "As duas primeiras linhas são independentes. A terceira é a soma das primeiras e a quarta é duas vezes a primeira. O posto é 2.",
    "O conjunto testado tem dois bens. Como há no máximo duas linhas independentes, o grupo C, D satisfaz a condição de não basicidade.",
    "Quando um processo entrega vários bens, a classificação precisa considerar como cada mercadoria entra e sai de todos os processos. Os 2n coeficientes por linha registram essas duas pontas."
  ] },
  { unit: "capital", title: "Capital fixo e renda diferencial", source: "Lista 3, Exercício 1(ii–iii) e Exercício 2, pp. 4–6", prompt: "Explique por que a máquina envelhecida entra como produto conjunto e como isso permite estudar depreciação. Em seguida, explique por que se pode calcular a renda de uma terra superior a partir do preço obtido na terra sem renda.", steps: [
    "A máquina de uma idade entra como insumo. Ao fim do processo, o bem vendável e a máquina de idade seguinte constituem dois produtos.",
    "A diferença de preços correntes das duas idades mede a perda de valor no período. A capacidade produtiva restante entra no sistema que determina esses preços.",
    "O cereal é avaliado pelo preço de produção que vigora na terra sem renda. Na terra superior, subtraia da receita os custos com salário e lucro. O excedente constitui renda; divida-o pela área para obter a renda unitária."
  ] },
  { unit: "classicos", title: "Tradição clássica e hipóteses do modelo", source: "Lista 4, Exercícios 1 e 3; Kurz e Salvadori (1993); Champernowne (1945–46)", prompt: "Explique o tratamento assimétrico da distribuição em von Neumann e por que ele fundamenta a leitura clássica de Kurz e Salvadori. Defina o estado quase estacionário de Champernowne e cite uma pergunta que esse estado deixa em aberto.", steps: [
    "O salário real de subsistência integra os insumos dados. A taxa de retorno decorre das condições de reprodução e expansão do sistema.",
    "Esse tratamento é compatível com uma leitura clássica do excedente: uma variável distributiva é dada e o retorno resulta do sistema, sob as hipóteses adotadas.",
    "O estado quase estacionário admite expansão ao mesmo ritmo mantendo as proporções. Com essas proporções fixas, o modelo não explica diretamente mudanças no nível de vida ou mudanças estruturais do desenvolvimento."
  ] },
  { unit: "morishima", title: "Trabalho excedente e lucro", source: "Morishima (1974), seção 2; Oliveira, capítulos 4–6", prompt: "Uma jornada de 9 horas inclui 6 de trabalho necessário. Calcule o trabalho excedente e a taxa de exploração. Explique a relação entre exploração e lucro positivo no Teorema Marxista Fundamental e distinga essa relação do problema da transformação.", steps: [
    "O trabalho excedente é 9 − 6 = 3 horas. A taxa de exploração é 3/6 = 1/2, ou 50%.",
    "Sob as hipóteses do teorema, a exploração positiva do trabalho está ligada à taxa positiva de lucro. A taxa de exploração calculada não é a taxa de lucro.",
    "O problema da transformação investiga a relação entre valores em trabalho e preços de produção que incorporam uma taxa uniforme de lucro."
  ] }
];
