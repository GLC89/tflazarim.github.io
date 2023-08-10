window.onload = function () {
    const equipasData = [ {
        equipa: 'RESTO FC',
        jogadores: [
            { nome: 'Daniel Fernandes', golosMarcados:0},
            { nome: 'Kelvin Hamate', golosMarcados:0},
            { nome: 'David Fernandes', golosMarcados:6},
            { nome: 'Rafael Martinho', golosMarcados:0},
            { nome: 'Pedro Spinola', golosMarcados:0},
            { nome: 'Gabriel Carvalho', golosMarcados:0},
            { nome: 'Duarte Moreira', golosMarcados:0, golosSofridos: 1 },
            { nome: 'Salvador Justo', golosMarcados:0},
            { nome: 'Diogo Fernandes', golosMarcados:0},
            { nome: 'Ricardo Martinho', golosMarcados:0},
        ]
    },
    {
        equipa: 'UNIÃO FC',
        jogadores: [
            { nome: 'Rúben Carvalheira', golosMarcados:0, golosSofridos: 1},
            { nome: 'Marco Santos', golosMarcados:0},
            { nome: 'Fábio Dias', golosMarcados:0},
            { nome: 'Fábio Francisco', golosMarcados:0},
            { nome: 'Alexandre Costa', golosMarcados:0},
        ]
    },
    {
        equipa: 'LAZARIM FC',
        jogadores: [
            { nome: 'Francisco Loureiro', golosMarcados:0, golosSofridos: 6 },
            { nome: 'Rodrigo Castro', golosMarcados:0},
            { nome: 'Daniel Silva', golosMarcados:0},
            { nome: 'João Santos', golosMarcados:0},
            { nome: 'Pedro Miguel', golosMarcados:0},
            { nome: 'Alexandre Sequeira', golosMarcados:0},
            { nome: 'João Gomes', golosMarcados:0},
            { nome: 'Moisés Santos', golosMarcados:0},
            { nome: 'Edgar Pinto', golosMarcados:12},
            { nome: 'Gonçalo Costa', golosMarcados:0},
        ]
    },
    {
        equipa: 'BRTCITY FC',
        jogadores: [
            { nome: 'Pedro Branco', golosMarcados:0, golosSofridos: 7 },
            { nome: 'Leonel Guedes', golosMarcados:0},
            { nome: 'Rodrigo Ferreira', golosMarcados:0},
            { nome: 'António Monteiro', golosMarcados:0},
            { nome: 'Gonçalo Fernades', golosMarcados:2},
            { nome: 'Martim Fernades', golosMarcados:0},
            { nome: 'David Teixeira', golosMarcados:0},
            { nome: 'Marco Coelho', golosMarcados:0},
            { nome: 'Gonçalo Monteiro', golosMarcados:0},
        ]
    },
    {
        equipa: 'PI 100 PÉ FC',
        jogadores: [
            { nome: 'Rodrigo Costa', golosMarcados:0, golosSofridos: 2 },
            { nome: 'Tiago Ribeiro', golosMarcados:0},
            { nome: 'Martim Barbosa', golosMarcados:0},
            { nome: 'leandro Costa', golosMarcados:0},
            { nome: 'Alexandre Ferreira', golosMarcados:0},
        ]
    },
    {
        equipa: 'OS PRIMOS',
        jogadores: [
            { nome: 'Pedro Machado', golosMarcados:0},
            { nome: 'Alexandre Costa', golosMarcados:0},
            { nome: 'Rafael Cardoso', golosMarcados:0},
            { nome: 'Marcelo Teles', golosMarcados:0},
            { nome: 'Gonçalo Silva', golosMarcados:0},
            { nome: 'Fábio Silva', golosMarcados:0},
            { nome: 'Bruno Azevedo', golosMarcados:0, golosSofridos: 4 },
            { nome: 'Ricardo Cardoso', golosMarcados:0},
        ]
    },
    ];

    function getMelhoresMarcadores() {
        const melhoresMarcadores = equipasData.flatMap((equipa) => equipa.jogadores);
        melhoresMarcadores.sort((a, b) => b.golosMarcados - a.golosMarcados);
        return melhoresMarcadores.slice(0, 0);
    }

    function getMenosGolosSofridos() {
        const jogadoresComGolosSofridos = equipasData.flatMap((equipa) =>
            equipa.jogadores.filter((jogador) => jogador.hasOwnProperty('golosSofridos'))
        );
        jogadoresComGolosSofridos.sort((a, b) => a.golosSofridos - b.golosSofridos);
        return jogadoresComGolosSofridos.slice(0,0);
    }

    function criarLinhasTabela(dados, tabelaId) {
        const tabela = document.getElementById(tabelaId);
        let posicao = 1;
    
        dados.forEach((jogador) => {
            const linha = document.createElement('tr');
            const colunaPosicao = document.createElement('td');
            colunaPosicao.textContent = posicao++;
            const colunaNome = document.createElement('td');
            colunaNome.textContent = jogador.nome;
            const colunaGolos = document.createElement('td');
    
            if (jogador.hasOwnProperty('golosSofridos')) {
                colunaGolos.textContent = jogador.golosSofridos;
            } else {
                colunaGolos.textContent = jogador.golosMarcados;
            }
    
            linha.appendChild(colunaPosicao);
            linha.appendChild(colunaNome);
            linha.appendChild(colunaGolos);
    
            tabela.appendChild(linha);
        });
    }

    const melhoresMarcadores = getMelhoresMarcadores();
    const MenosGolosSofridoss = getMenosGolosSofridos();

    criarLinhasTabela(melhoresMarcadores, 'tabela-marcadores');
    criarLinhasTabela(MenosGolosSofridoss, 'tabela-golos-sofridos');    
};