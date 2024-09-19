// Definição da classe Funcionario
class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
    }

    trabalhar() {
        return `${this.nome} está trabalhando como ${this.cargo}.`;
    }
}

// Definição da classe Gerente que herda de Funcionario
class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
    }
}

// Definição da classe Desenvolvedor que herda de Funcionario
class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        return `${this.nome} está programando em ${this.linguagem}.`;
    }
}

document.getElementById('cargo').addEventListener('change', function() {
    const cargo = document.getElementById('cargo').value;
    document.getElementById('departamentoGroup').style.display = cargo === 'Gerente' ? 'block' : 'none';
    document.getElementById('linguagemGroup').style.display = cargo === 'Desenvolvedor' ? 'block' : 'none';
});

document.getElementById('funcionarioForm').addEventListener('submit', function(event) {
    event.preventDefault();
    try {
        const nome = document.getElementById('nome').value;
        const idade = parseInt(document.getElementById('idade').value);
        const cargo = document.getElementById('cargo').value;
        let funcionario;

        if (cargo === 'Gerente') {
            const departamento = document.getElementById('departamento').value;
            if (!departamento) throw new Error('O departamento deve ser preenchido.');
            funcionario = new Gerente(nome, idade, cargo, departamento);
        } else if (cargo === 'Desenvolvedor') {
            const linguagem = document.getElementById('linguagem').value;
            if (!linguagem) throw new Error('A linguagem de programação deve ser preenchida.');
            funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);
        }

        const output = document.getElementById('output');
        output.innerHTML = `
            <p>${funcionario.seApresentar()}</p>
            <p>${funcionario.trabalhar()}</p>
            <p>${cargo === 'Gerente' ? funcionario.gerenciar() : funcionario.programar()}</p>
        `;
    } catch (error) {
        exibirErro(error.message);
    }
});

function exibirErro(mensagem) {
    const output = document.getElementById('output');
    output.innerHTML = `<p style="color: red;">Erro: ${mensagem}</p>`;
}
