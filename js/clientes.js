class Registrador {

    constructor() {
        this.clientes = []
        this.clienteEditado = null
    }

    carregarClientes() {
        if (localStorage.getItem("cliente") == null) {

            localStorage.setItem("cliente", JSON.stringify(this.clientes))

        } else {

            this.clientes = JSON.parse(localStorage.getItem("cliente"))
            this.gerarTabela()
        }
    }

    lerDados() {
        let cliente = {}

        cliente.nome = document.getElementById("nome").value
        cliente.idade = document.getElementById("idade").value
        cliente.email = document.getElementById("email").value

        return cliente
    }

    Validar(cliente) {
        if ((cliente.nome && cliente.idade && cliente.email) == "") {
            alert("Preencha o campo vazio!")
            return false
        }
        for (let i = 0; i < this.clientes.length; i++) {

            if (cliente.email == this.clientes[i].email) {
                alert("Este email já está cadastrado no sistema!")
                return false
            }

        }
        return true
    }

    gerarTabela() {
        let tabela = document.getElementById("tabela")
        tabela.innerText = ""

        for (let i = 0; i < this.clientes.length; i++) {
            let linha = tabela.insertRow()

            let colunaNome = linha.insertCell(0)
            let colunaIdade = linha.insertCell(1)
            let colunaEmail = linha.insertCell(2)
            let colunaEditar = linha.insertCell(3)
            let colunaExcluir = linha.insertCell(4)

            colunaNome.innerText = this.clientes[i].nome
            colunaIdade.innerText = this.clientes[i].idade
            colunaEmail.innerText = this.clientes[i].email

            let imgEditar = document.createElement("img")
            imgEditar.setAttribute("src", "img/editar.svg")
            imgEditar.setAttribute("onclick", "registrador.Editar('" + this.clientes[i].email + "')")
            imgEditar.classList.add("img")

            let imgExcluir = document.createElement("img")
            imgExcluir.setAttribute("src", "img/deletar.svg")
            imgExcluir.setAttribute("onclick", "registrador.Deletar('" + this.clientes[i].email + "')")
            imgExcluir.classList.add("img")

            colunaEditar.appendChild(imgEditar)
            colunaExcluir.appendChild(imgExcluir)



        }



    }

    Salvar() {
        let cliente = this.lerDados()
        if (this.clienteEditado == null) {
            if (this.Validar(cliente)) {
                this.clientes.push(cliente)



            }
        } else {
            this.clienteEditado.nome = cliente.nome
            this.clienteEditado.idade = cliente.idade
            this.clienteEditado.email = cliente.email



            this.clienteEditado = null


        }

        this.gerarTabela()
        localStorage.setItem("cliente", JSON.stringify(this.clientes))
        this.Limpar()
    }

    Limpar() {
        document.getElementById("nome").value = ""
        document.getElementById("idade").value = ""
        document.getElementById("email").value = ""
    }

    Editar(email) {
        for (let i = 0; i < this.clientes.length; i++) {

            if (this.clientes[i].email == email) {


                document.getElementById("nome").value = this.clientes[i].nome
                document.getElementById("idade").value = this.clientes[i].idade
                document.getElementById("email").value = this.clientes[i].email

                this.clienteEditado = this.clientes[i]
            }
        }
    }

    Deletar(email) {
        let posição = -1
        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].email == email) {

                posição = i
            }
        }
        if (posição != -1) {
            this.clientes.splice(posição, 1)
            localStorage.setItem("cliente", JSON.stringify(this.clientes))
            this.gerarTabela()

        }

    }


}



let registrador = new Registrador