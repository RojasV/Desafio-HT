class Registrador {

    constructor() {
        this.filmes = []
        this.filmeEditado = null
    }

    carregarFilmes() {
        if (localStorage.getItem("filme") == null) {

            localStorage.setItem("filme", JSON.stringify(this.filmes))

        } else {

            this.filmes = JSON.parse(localStorage.getItem("filme"))
            this.gerarTabela()
        }
    }

    lerDados() {
        let filme = {}

        filme.nome = document.getElementById("nome").value
        filme.duração = document.getElementById("duração").value
        filme.classificação = document.getElementById("idade").value
        filme.gênero = document.getElementById("gênero").value
        filme.sinopse = document.getElementById("sinopse").value

        return filme
    }

    Validar(filme) {
        if ((filme.nome && filme.duração && filme.classificação && filme.gênero && filme.sinopse) == "") {
            alert("Preencha o(s) campo(s) vazio(s)!")
            return false
        }
        for (let i = 0; i < this.filmes.length; i++) {

            if (filme.nome == this.filmes[i].nome) {
                alert("Este nome já está cadastrado no sistema!")
                return false
            }

        }
        return true
    }

    gerarTabela() {
        let tabela = document.getElementById("tabela")
        tabela.innerText = ""

        for (let i = 0; i < this.filmes.length; i++) {
            let linha = tabela.insertRow()

            let colunaNome = linha.insertCell(0)
            let colunaDuração = linha.insertCell(1)
            let colunaClassificação = linha.insertCell(2)
            let colunaGênero = linha.insertCell(3)
            let colunaSinopse = linha.insertCell(4)
            let colunaEditar = linha.insertCell(5)
            let colunaExcluir = linha.insertCell(6)

            colunaNome.innerText = this.filmes[i].nome
            colunaDuração.innerText = this.filmes[i].duração
            colunaClassificação.innerText = this.filmes[i].classificação + " " + "anos"
            colunaGênero.innerText = this.filmes[i].gênero
            colunaSinopse.innerText = this.filmes[i].sinopse

            let imgEditar = document.createElement("img")
            imgEditar.setAttribute("src", "img/editar.svg")
            imgEditar.setAttribute("onclick", "registrador.Editar('" + this.filmes[i].nome + "')")
            imgEditar.classList.add("img")

            let imgExcluir = document.createElement("img")
            imgExcluir.setAttribute("src", "img/deletar.svg")
            imgExcluir.setAttribute("onclick", "registrador.Deletar('" + this.filmes[i].nome + "')")
            imgExcluir.classList.add("img")

            colunaEditar.appendChild(imgEditar)
            colunaExcluir.appendChild(imgExcluir)



        }



    }

    Salvar() {
        let filme = this.lerDados()
        if (this.filmeEditado == null) {
            if (this.Validar(filme)) {
                this.filmes.push(filme)



            }
        } else {
            this.filmeEditado.nome = filme.nome
            this.filmeEditado.duração = filme.duração
            this.filmeEditado.classificação = filme.classificação
            this.filmeEditado.gênero = filme.gênero
            this.filmeEditado.sinopse = filme.sinopse



            this.filmeEditado = null


        }

        this.gerarTabela()
        localStorage.setItem("filme", JSON.stringify(this.filmes))
        this.Limpar()
    }

    Limpar() {
        document.getElementById("nome").value = ""
        document.getElementById("duração").value = ""
        document.getElementById("idade").value = ""
        document.getElementById("gênero").value = ""
        document.getElementById("sinopse").value = ""
    }

    Editar(nome) {
        for (let i = 0; i < this.filmes.length; i++) {

            if (this.filmes[i].nome == nome) {


                document.getElementById("nome").value = this.filmes[i].nome
                document.getElementById("duração").value = this.filmes[i].duração
                document.getElementById("idade").value = this.filmes[i].classificação
                document.getElementById("gênero").value = this.filmes[i].gênero
                document.getElementById("sinopse").value = this.filmes[i].sinopse

                this.filmeEditado = this.filmes[i]
            }
        }
    }

    Deletar(nome) {
        let posição = -1
        for (let i = 0; i < this.filmes.length; i++) {
            if (this.filmes[i].nome == nome) {

                posição = i
            }
        }
        if (posição != -1) {
            this.filmes.splice(posição, 1)
            localStorage.setItem("filme", JSON.stringify(this.filmes))
            this.gerarTabela()

        }

    }


}



let registrador = new Registrador