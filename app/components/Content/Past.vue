<template>
  <div class="w-full py-8">
    <UContainer class="flex flex-col gap-4">
      <SectionTitle :title="sectionTitle.title" :subtitle="sectionTitle.subtitle" />

      <SectionImageContainer :data="firstImage" />

      <SectionBodyText :texts="firstBodyText" />

      <SectionDialogBox :content="firtsDialogBox" />

      <SectionBodyText :texts="secondBodyText" />

      <SectionDialogBox :content="secondDialogBox" />

      <SectionBodyText :texts="thirdBodyText" />

      <SectionBodyText :texts="forthBodyText.texts" :title="forthBodyText.title" />

      <SectionImageContainer :data="secondImage" />

      <SectionBodyText :texts="fifthBodyText" />

      <SectionImageContainer :data="thirdImage" />

      <SectionBodyText :texts="sixthBodyText" />

      <SectionBodyText :texts="seventhBodyText.texts" :title="seventhBodyText.title" />

      <SectionImageContainer :data="forthImage" />

      <SectionBodyText :texts="eighthBodyText" />

      <SectionDialogBox :content="thirdDialogBox" />

      <SectionBodyText :texts="ninethBodyText.texts" :title="ninethBodyText.title" />
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const sectionTitle = {
  title: "As Muitas Histórias de Maria Rosalina: <br> do Passado ao Presente",
  subtitle: "É preciso uma aldeia para se educar uma criança, <br> e muitas crianças para criar uma aldeia",
};

const firstImage = {
  alt: "Foto de Maria Gorete sorrindo em sua casa, vestida com uma blusa com rosas e tubo respiratório no nariz.",
  subtitle: "Maria Gorete",
  credits: "Há Vida Por Detrás do Muro",
  rightImage: "/images/past01.webp",
  leftText:
    "Para Maria Gorete, “crescer foi muito bom”. Ela relembra os dias de brincadeira, quando ela e outros jovens subiam nas goiabeiras de onde moravam. “A mãe chamava por uma porta e nós entrava pela outra, senão o pai pegava nós pela orelha”.",
};

const firstBodyText = [
  "Brincavam de corda, bola, jogavam futebol. “O meu pai era técnico do nosso time de meninas. Nós tinha até time de mulher que jogava bola.”",
  "Quando era nova, aos sábados, um grupo de jovens de seu município vinha até a comunidade em que vivia para brincar com as crianças. Eles gostavam de subir em um abacateiro no terreno de seu avô, embora ele não ficasse contente, já que criava galos que mordiam os meninos e meninas. Pulavam também o muro do “Seu Serrano” para aprontar com seus bois e cavalos. A mãe de Gorete, Maria Silésia, chamava no fim da tarde e ela voltava com os pés cheios de barro. ",
  "Essa época durou até os 9 anos. “Sabe assim, foi uma infância curta porque depois eu logo comecei a trabalhar de babá para ajudar a mãe, né? Mas foi muito bom.”",
  "Aos 13, conseguiu um emprego como babá em São Paulo. Era para ter ficado seis meses, ficou cinco, chorava todos os dias para voltar. Os donos da casa onde trabalhava lhe davam um sanduíche ou uma banana, se comesse uma maçã, levava bronca. As cartas que escrevia para a mãe nunca chegavam.",
  "Só ouviu da mãe novamente quando recebeu uma carta dela, estava pedindo ajuda para comprar o botijão de gás. Gorete não sabia que no dia que partiu para São Paulo, seu pai havia ido embora.",
  "Ela voltou para casa, descrevendo o retorno como ir para o céu. Chegou ao meio-dia, nunca tinha encontrado comida tão boa quanto a da mãe.",
];

const firtsDialogBox =
  "— Ô, mãe, que tá comendo? - ela perguntou, sem se mostrar. <br /> — Quem tá aí? <br/ > — A tua filha mais velha.";

const secondBodyText = [
  "Desde então, sempre que saiu, voltou assim que pôde. Ela é neta de Otávio Tomé dos Santos, de origem índigena, sua família uma das primeiras a se estabelecer na Comunidade Remanescente de Quilombo Maria Rosalina, onde vivem até os dias de hoje.",
  "Comunidades como a de onde veio Maria Gorete datam até o período colonial e imperial, quando milhões de pessoas dos diferentes povos do continente africano  foram trazidos à força para o Brasil como escravizados. Ao fugirem das fazendas, engenhos ou minas onde eram obrigadas a trabalhar, estes homens e mulheres formavam comunidades próprias para viver de forma livre e autônoma.",
  "Essas comunidades eram chamadas de quilombos.",
  "Quilombos eram formados não só por pessoas fugidas da escravidão, mas também por desterrados, cidadãos em extrema pobreza e indígenas. Hoje, os descendentes dos habitantes originais dessas comunidades são chamados de remanescentes, e são, também, considerados quilombolas.",
  "O Art. 68 da Constituição Federal de 1988 garante, até os dias de hoje, as terras das comunidades quilombolas:",
];

const secondDialogBox =
  "“Aos remanescentes das comunidades dos quilombos que estejam ocupando suas terras é reconhecida a propriedade definitiva, devendo o Estado emitir-lhes os títulos respectivos.”";

const thirdBodyText = [
  "Em 3 de junho de 2024, a Fundação Cultural Palmares (FCP), entidade pública vinculada ao Ministério da Cultura, concedeu ao quilombo urbano Maria Rosalina, em Araranguá, Santa Catarina, o reconhecimento de sua autodeclaração quilombola.",
  "No município, do lado de fora dos muros do quilombo, a comunidade Maria Rosalina é conhecida por outro nome: Buraco Quente.",
];

const forthBodyText = {
  title: "Há Vida Por Detrás do Muro",
  texts: [
    "A 220 km ao sul de Florianópolis, capital do estado de Santa Catarina, está Araranguá, a maior das 15 cidades pertencentes à Associação dos Municípios do Extremo Sul Catarinense (AMESC). O projeto urbanístico do município lhe confere o apelido de “Cidade das Avenidas” pelas amplas ruas idealizadas pelo engenheiro Antonio Lopes de Mesquita. Seu hino lhe descreve como “terra de descanso mar e sol”, brindando os imensos arrozais que movem a economia local, além de ressaltar o Morro dos Conventos, cujas paisagens são o maior cartão postal da “Rainha do Sul Catarinense”.",
    "Às margens do rio que dá nome à cidade, está o Centro do município, ponto de onde começou a se expandir até se tornar o pólo econômico da microrregião que faz parte. Esse bairro é cortado pela Av. Sete de Setembro que, ao seguir em direção norte, leva ao Bairro Vila São José e, dentro de um de seus quarteirões, à Comunidade Remanescente de Quilombo Maria Rosalina.",
    "Lá dentro, existem 32 moradias que compreendem uma única comunidade que se autodeclara quilombola. Para chegar em Maria Rosalina basta virar à esquina do tradicional “Colégio Murialdo”, descendo a rua até encontrar, à esquerda, a entrada para o quarteirão. A passagem é composta por dois muros, um ao lado do outro, formando um grande corredor que dá acesso ao terreno. Em um deles, pode-se ver uma pintura colorida, expondo símbolos da cultura quilombola, as palavras “resistência” e “quilombo”, além de um punho erguido.",
  ],
};

const secondImage = {
  alt: "Foto da entrada da Comunidade Remanescente de Quilombo Maria Rosalina.",
  subtitle: "Entrada da Comunidade",
  credits: "Há Vida Por Detrás do Muro",
  fullImage: "/images/past02.webp",
};

const fifthBodyText = [
  "A comunidade fica próxima da maior concentração urbana do município, mas não é toda a população araranguaense que chega até lá. Custódia Anacleto, a “Tia Tóda”, uma das vozes de liderança do quilombo, relata que é incomum a passagem de pedestres pela calçada em frente à comunidade.",
  "“Eles nunca entraram lá dentro, mas eles julgam sem ver, né?”.",
];

const thirdImage = {
  alt: "Foto de Custódia Anacleto relatando sua vivência para o documentário 'Há Vida Por Detrás do Muro'.",
  subtitle: "Custódia Anacleto",
  credits: "Há Vida Por Detrás do Muro",
  fullImage: "/images/past03.webp",
};

const sixthBodyText = [
  "O nome pejorativo, “Buraco Quente”, vem das vezes em que pessoas de fora ouviram brigas dentro do quilombo. Relembrando essa origem, Custódia comenta que aqueles que passavam pelo lado de fora e ouviam os sons de discussão acalorada comentavam: “o buraco tá pegando fogo!”.",

  "Os conflitos que deram nome ao espaço, aconteciam principalmente durante os chamados “bailes”, festas que ocorriam aos fins de semana com diferentes convidados. Na ocasião, era comum a interferência policial. Estes eventos eram sinônimo com o local no Século XX, porém, deixaram de acontecer com o passar das décadas.",

  "A gestão municipal historicamente aponta uma situação de vulnerabilidade social no local e, entre os relatos dos moradores, se identifica falta de saneamento básico e esgoto a céu aberto, má distribuição de energia elétrica e um antecedente de operações antidrogas que resultam em violência. Como diz a Custódia: “deixam eles lá jogados, né?”. O argumento que justifica uma ampla falta de assistência, segundo ela, é a alegação de que lá haveria tráfico de substâncias ilícitas, “mas eles não fazem nada para mudar”.",

  "Entre os moradores quilombolas de Maria Rosalina, existem 43 crianças e adolescentes, todos eles deixando diariamente o espaço para estudar nos colégios comuns. “Eles falam que brigam com eles na escola, chamam de negro”, conta Custódia. “Aí, eu tento conversar com eles, né? levar um pouquinho de amor para eles também. Para eles acreditarem que tudo vai dar certo.”",

  "Custódia, assim como outras figuras que colaboraram para a criação desta reportagem, aponta a negligência do município em relação aos habitantes. O que eles relatam não é uma valorização de suas origens e sim, a negação dela por parte de representantes da gestão.",

  "Este é um cenário que os habitantes, juntamente a membros do Movimento Negro Unificado (MNU), buscam transformar. Através de participações em movimentos estudantis no Campus Araranguá da Universidade Federal de Santa Catarina (UFSC), entrevistas para as rádios e TV local e presença nas redes sociais, representantes de Maria Rosalina reivindicam o reconhecimento do real nome da comunidade.",

  "Foi apenas recentemente que a gestão municipal se envolveu publicamente no processo de reconhecimento quilombola pleno da comunidade, ainda em andamento. Em 20 de agosto de 2025, em sessão ordinária na Câmara de Vereadores, o Procurador Geral do Município, Jorge Menezes, disse que o executivo foi pego de surpresa pela autodeclaração e a tramitação que ela envolve.",

  "A experiência de apuração desta reportagem constatou a mesma surpresa sofrida pelo Executivo entre diversos outros cidadãos araranguaenses. Quando ouviam falar da comunidade, frequentemente os moradores do município faziam a mesma pergunta: “mas como assim um quilombo?”.",

  "A antropóloga Raquel Mombelli, que é doutora em Antropologia Social pela UFSC e possui um longo histórico de trabalho com comunidades quilombolas, aponta que situações como essa, de apagamento das distinções raciais em Santa Catarina, são fruto de um projeto de manutenção da identidade do estado. Existe um mito comum de que o trabalho dos escravizados não faz parte da história catarinense, sendo que, na verdade, o que se identificava era uma forma de organização da escravidão diferente do resto do país. Os escravizados em Santa Catarina trabalhavam principalmente em funções domésticas e urbanas, ao invés das grandes plantações. A presença de quilombos no estado comprova esse passado e, a narrativa que nega essa parte de sua história, contribui para a falta de amparo dos descendentes das pessoas escravizadas.",

  "Com medo da reputação da comunidade Maria Rosalina, a maioria dos habitantes da cidade nunca adentrou a rua que se estende cerca de 150m ao interior do quarteirão, com casas de madeira em suas extremidades. Entre as moradias, ruelas se dividem em diferentes caminhos para as residências de outros moradores em um espaço de aproximadamente seis mil metros quadrados. Em entrevista, questionada se qualquer um é bem-vindo dentro dos muros, Elizama da Silva de Souza respondeu: “vocês entraram aqui, não entraram?”.",

  "Atualmente, o posicionamento oficial da gestão municipal, como disse Menezes na Câmara, é de que a situação legal do espaço está sob análise e não cabe a eles determinar o que é ou não um quilombo antes de uma conclusão definitiva. Menezes, em pronunciamento no dia 20 de agosto na Câmara de Vereadores, aponta que o Executivo presta toda a assistência possível aos moradores, assim como trabalha para aumentar a segurança no local e para melhoria social da comunidade.",

  "Luciana Gonçalves Mina, coordenadora de educação quilombola do Centro de Educação Jovens e Adultos de Araranguá (CEJA), defende a autodenominação dos habitantes, explicando que é a relação de ancestralidade deles com os quilombolas que se estabeleceram naquele espaço desde o século passado que os torna remanescentes. Por essa definição, a Comunidade Maria Rosalina é indubitavelmente um quilombo e, portanto, se enquadra em um ordenamento jurídico que confere uma série de direitos a seus moradores antes mesmo que a delimitação da terra seja concluída.",

  "Legalmente, Maria Rosalina apenas tem a autodeclaração quilombola e o processo vai além disso. O certificado emitido pela FCP conforme o 4º artigo do Decreto 4.88718 é apenas um título de reconhecimento, visto que a organização não certifica estas comunidades com base em uma avaliação de quem é ou não quilombola. Ao invés disso, respeita-se o direito à autodefinição, conforme estabelecido pela Convenção nº 169 da Organização Internacional do Trabalho (OIT).",

  "A autodenominação é a primeira etapa de um processo de demarcação definitiva, que pode ser apresentada ao Instituto Nacional de Colonização e Reforma Agrária (Incra) para solicitar a titulação. Para isso é elaborado o Relatório Técnico de Identificação e Delimitação (RITD), uma coleta de dados em campo e junto a instituições públicas e privadas com o objetivo de definir os limites dos territórios a serem considerados quilombolas. É no processo de elaboração do RITD que se encontra a situação legal de Maria Rosalina.",

  "Mesmo assim, a autoidentifação pela FCP já enquadra Maria Rosalina em uma série de direitos constitucionais, sendo oficialmente reconhecida pelo Estado como comunidade quilombola. A Constituição Federal, nos arts. 215 e 216, garante proteção às manifestações culturais afro-brasileiras e aos modos de criar, fazer e viver desses povos. Já a Convenção 169 da Organização Internacional do Trabalho (OIT), que é retificada no Brasil e tem força de lei, assegura o direito de consulta prévia sempre que políticas ou projetos afetem diretamente suas terras, recursos ou modo de vida, independente da titulação.",

  "A elaboração desta reportagem envolveu a participação de pessoas de dentro e fora dos muros, cada um com suas próprias narrativas, algumas delas conflitantes. A comunidade foi construída por muitas Marias, diversos Josés, contou com a permissão de uma das famílias mais conhecidas do município para se estabelecer e esteve lado-a-lado com os padres da Paróquia Nossa Senhora Mãe dos Homens. Hoje, sua voz é de muitas lideranças e sua história, fragmentada em décadas de tradição oral.",
];

const seventhBodyText = {
  title: "Uma Comunidade de Marias",
  texts: [
    "O nome Maria Rosalina homenageia duas mulheres que ajudaram a construir a comunidade. Além da própria Maria Rosalina Anacleto, avó de Custódia - que hoje é presidente da Associação dos Remanescentes de Maria Rosalina - destaca-se também Maria Bernardina de Jesus, a “Mariazinha parteira”. Descrita pelo filho, José Luiz de Jesus, como uma mulher negra de pele bastante escura, estatura baixa e robusta com cabelos crespos, ela foi também benzedeira, cartomante e lavadora. Era uma figura de liderança, carregava uma faca na bota e frequentemente fumava seu cachimbo.",

    "Mariazinha chegou à comunidade em 1948 e foi a primeira a entrar em contato com o proprietário formal do terreno, o vereador Maximiliano Henneman, que morava ao lado em uma casa de dois andares feita de madeira e que hoje já não existe. Na época, os povos remanescentes da região em sua maioria ainda não haviam se estabelecido no local e Mariazinha morava no Bairro Alto Feliz, próximo da localização onde hoje fica o Corpo de Bombeiros, cerca de 2 km da casa de Maximiliano.",
  ],
};

const forthImage = {
  alt: "Foto de Mariazinha com seus dois filhos e seu companheiro em frente à uma cerca de madeira.",
  subtitle: "Mariazinha, dois filhos, e seu companheiro",
  credits: "Arquivo/Zé Luiz de Jesus",
  fullImage: "/images/past04.webp",
};

const eighthBodyText = [
  "Ela fazia diariamente o trajeto de ida e volta a pé em uma época em que havia poucas estradas, apenas areia e eucalipto, até chegar na residência onde trabalhava fazendo comida, limpando e cuidando dos filhos da família Henneman. O terreno que hoje constitui o quilombo havia sido adquirido por Maximiliano, que então sugeriu que Mariazinha se mudasse para o local junto da família para que não tivesse que fazer a caminhada diária. Ela se tornaria uma pessoa de confiança e quem mais transitava entre a comunidade e os limites da moradia dos Henneman.",

  "Mariazinha tomava conta do casarão e cuidava dos filhos de Maximiliano, alguns deles se referindo a ela como sua “mãe preta”. Conforme mais pessoas chegavam ao terreno, era ela que o proprietário consultava sobre quem eram, tendo uma forma de controle. Ao entrar no quilombo, sua casa era a primeira à esquerda.",

  "A antropóloga Raquel Mombelli aponta que o termo “mãe preta”, embora em casos como o de Mariazinha seja usado de forma carinhosa, remete ao passado de escravidão no país. Pessoas escravizadas exerciam diferentes funções, e entre elas havia as “amas de leite”. Uma teoria racial popular no século XVIII afirmava que o leite da mulher negra era mais forte e abundante, e, em função disso, era comum que as escravizadas que estavam amamentando seus próprios filhos fossem transferidas para a casa de seu senhor para amamentar as crianças da casa grande. Assim surgem as “mães pretas”, alcunha que seria utilizada para diferentes propósitos no país.",

  "A própria Mariazinha não sabia bem suas origens, algo comum entre os habitantes mais antigos da comunidade. Lhe contaram que seu pai era baiano, um militar, tenente Gualberto de Lima, enviado ao estado para lutar na Revolução de 1930. Em Araranguá, conheceu Donária da Silva, mulher de origem portuguesa, com quem teve Mariazinha; ele teria deixado a mulher grávida antes de ir ao combate, partindo com o desejo de ter um filho homem que fosse soldado. Quando retornou e encontrou uma menina, saiu novamente sem jamais retornar. Donária viria a dizer à filha que ele morreu lutando.",

  "Para Zé Luiz, filho de Mariazinha, ela herdou do pai a fé de matriz africana. Era da umbanda, sua casa repleta de símbolos de Iemanjá, Iansã e Ogum, tanto nessas imagens quanto nos santos Nossa Senhora dos Navegantes, Santa Bárbara e São Jorge. Tinha o dom da cartomancia e dos dados, além de incorporar um Preto-Velho, a quem atribuía o hábito do cachimbo. Para esta ocupação, não cobrava dinheiro, apenas doações.",

  "Foi junto de Maria Hennemann, uma das filhas de Maximiliano, que ela aprendeu o ofício de parteira pelo qual ficaria mais conhecida. A princípio apenas ajudava, até assumir o papel dentro da comunidade em crescimento. As mulheres que davam à luz dentro do quilombo passavam três dias em sua casa sendo cuidadas, e ela foi reconhecida pelos partos de crianças que médicos comuns se negavam a fazer. Maria Silésia dos Santos, hoje a habitante mais antiga da comunidade, diz ter ganho cinco filhos com ela, e a mais velha, Maria Gorete, acredita que não teria nascido se não fosse Mariazinha, visto que era uma gravidez de risco.",

  "Ela então viveria o resto da vida no terreno, sendo uma das pessoas que testemunhou sua transformação em uma comunidade constituída por remanescentes quilombolas, com permissão da família Henneman e do proprietário que se tornou uma figura querida para os moradores: “Seu Max”. Mariazinha passou de cuidar dos filhos de Maximiliano para cuidar dos netos; um deles, Antônio, lembra dela já como uma senhora que os tratava como família, configuração cultural frequente no Brasil de legado escravocrata, ele sendo amigo de infância de seu filho Zé Luiz. Quando criança, pegava a xepa dos charutos do avô e corria para a casa dela para que ela os usasse no cachimbo.",

  "A maior fonte de renda de Mariazinha era como lavadeira. Segundo Maggy Henneman, neta de Seu Max, o avô a pagava por trabalho e também através de alimentos, descrevendo-a como uma “pessoa de confiança que ajudava lá em casa”. Na época, as Leis Trabalhistas não estavam estabelecidas como hoje; a CLT ainda era recente, instituída em 1943, e trabalhos informais ainda eram comuns. Assim, segundo relatos dos descendentes de Max Henneman, ela nunca foi considerada funcionária nem contou com pagamentos fixos mensais.",

  "Mariazinha incentivou os sete filhos a ler e estudar, permitindo que no futuro eles tivessem acesso ao ensino superior. Zé Luiz recorda que na infância era um dos 31 engraxates que trabalhavam na cidade. Eles recebiam as caixas de sapato gratuitamente de dois comerciantes locais e lembra da vez que não lhes cobraram os livros que precisava para estudar, o que não foi do agrado da mãe, que fez questão de ir até a loja negociar uma forma de pagar pelos produtos: duas trouxas de roupa lavadas para cada. Ela detestava receber coisas de graça, dizendo ao filho que “se a esmola não te vicia, ela te mata de vergonha”.",

  "Não era incomum que os jovens de Maria Rosalina começassem a trabalhar cedo; a maioria dos entrevistados nascidos no século XX relatam ter trabalhado antes da maioridade. Esse é um cenário usual em todo o estado até hoje, não apenas entre crianças de origem quilombola. Santa Catarina historicamente tem um dos piores índices de trabalho infantil do país. Segundo o FNPETI, em 2019, a unidade federativa contabilizava 55.668 crianças e adolescentes de 5 a 17 anos em situação de trabalho infantil, 4,9% do total do estado, acima da média nacional de 4,8%.",

  "Com os anos de trabalho, o sabão caseiro feito com soda e gordura animal viria a causar calos doloridos nas mãos de Mariazinha, que teve de abandonar o ofício. Nos anos 90, já aposentada e na faixa dos 70 anos, ganhava menos que um salário mínimo da previdência, o que não chegava até metade do mês. Passou o resto da vida na comunidade e, quando faleceu nos anos 2000, o cenário ao seu redor já era bem diferente daquele que encontrou na década de 40.",
];

const thirdDialogBox =
  "“A minha vida é bastante difícil, a minha e a de todo mundo. A gente passa o dia na graça de Deus, porque se não tem, come o que tem. Se não tiver, toma uma caneca d’água, se tem uma cana vai e chupa, se tem uma laranja vai lá e chupa, se não tem faz um chá de folha de laranja e toma. O pobre sente fome, sente frio. É assim, a gente vive assim.” - Mariazinha, em entrevista concedida a António César Spricigo em 1993.";

const ninethBodyText = {
  title: "Origens Quilombola",
  texts: [
    "“Local onde um grupo de escravizados fugidos se escondem”. Essa é uma concepção comum da idéia de quilombo no Brasil, que remete a um passado remoto ligado à escravidão, porém essas comunidades não existem apenas nos séculos anteriores ou sequer são locais desconectados da realidade atual.",

    "A formação dessas comunidades apresenta mais origens do que apenas a abolição formal da escravidão em 1888. Mesmo após essa data, novos quilombos foram formados a partir de pessoas que foram libertas pela Lei Áurea ou seus filhos e netos. O processo de marcação da identidade quilombola se dá através da transição de pessoa escravizada para camponês livre, e os grupos formados então naturalmente atraíam mais habitantes.",

    "Segundo o Instituto Brasileiro de Geografia e Estatística (IBGE), em 2022, Araranguá possuía 71.922 habitantes, todos livres perante a lei. Já em 1866, esse número era bem menor: 4.238 habitantes, porém, apenas 3.376 possuíam liberdade, com os outros 907 (quase 25%) sendo pessoas escravizadas.",

    "Esses dados foram levantados pelo professor de geografia e residente de Araranguá, César Spricigo, através de inventários de bens deixados pela população da Freguesia do Araranguá entre os anos de 1840 e 1900. Na época, a extensão do município se dava até a cidade de Laguna, que hoje compreende parte das microrregiões da AMESC e da Associação dos Municípios da Região Carvoeira (AMREC). A freguesia, na época conhecida como Nossa Senhora Mãe dos Homens, foi criada em 4 de maio de 1848 pela Lei Provincial nº 272, tendo uma extensão de mais de 100 km.",
  ],
};

const fifthImage = {
  alt: "Foto do terreno onde se localiza a Comunidade Remanescente de Quilombo Maria Rosalina, vista de cima.",
  credits:
    "Do Plano Urbano ao heliponto: notas sobre o processo histórico das transformações urbanas em Araranguá/SC (1886-2017), por Richard Vieira Ronconi* Josiel dos Santos (2021)",
  fullImage: "/images/past05.webp",
};
</script>

<style scoped></style>
