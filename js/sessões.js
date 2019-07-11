class Registrador {

    constructor() {
        this.seções = []
        this.seçãoEditada = null
    }

    carregarSeções() {
        if (localStorage.getItem("seção") == null) {

            localStorage.setItem("seção", JSON.stringify(this.seções))



            let filmesCadastrados = JSON.parse(localStorage.getItem("filme"))
            let filmesSeção = document.getElementById("filme")

            for (let i = 0; i < filmesCadastrados.length; i++) {

                let filmeCarregado = document.createElement("option")
                filmeCarregado.innerText = filmesCadastrados[i].nome
                filmeCarregado.setAttribute("value", filmesCadastrados[i].nome)

                filmesSeção.appendChild(filmeCarregado)
            }


        } else {
            let filmesCadastrados = JSON.parse(localStorage.getItem("filme"))
            let filmesSeção = document.getElementById("filme")

            for (let i = 0; i < filmesCadastrados.length; i++) {

                let filmeCarregado = document.createElement("option")
                filmeCarregado.innerText = filmesCadastrados[i].nome
                filmeCarregado.setAttribute("value", filmesCadastrados[i].nome)

                filmesSeção.appendChild(filmeCarregado)
            }
        }
        this.seções = JSON.parse(localStorage.getItem("seção"))

        this.gerarTabela()
    }

    lerDados() {
        let filme = {}

        filme.filmeExistente = document.getElementById("filme").value
        filme.sala = document.getElementById("sala").value
        filme.linguagem = document.getElementById("linguagem").value
        filme.dimensão = document.getElementById("dimensão").value
        filme.data = document.getElementById("data").value
        filme.horário = document.getElementById("horário").value

        return filme
    }

    Validar(filme) {
        if ((filme.filmeExistente && filme.sala && filme.linguagem && filme.dimensão && filme.data && filme.horário) == "") {
            alert("Preencha o(s) campo(s) vazio(s)!")
            return false
        }
        for (let i = 0; i < this.seções.length; i++) {

            if (filme.filmeExistente == this.seções[i].filmeExistente) {
                alert("Este filme já está cadastrado no sistema!")
                return false
            }

        }
        return true
    }

    gerarTabela() {
        let tabela = document.getElementById("tabela")
        tabela.innerText = ""

        for (let i = 0; i < this.seções.length; i++) {
            let linha = tabela.insertRow()

            let colunaFilme = linha.insertCell(0)
            let colunaSala = linha.insertCell(1)
            let colunaLinguagem = linha.insertCell(2)
            let colunaDimensão = linha.insertCell(3)
            let colunaData = linha.insertCell(4)
            let colunaHorário = linha.insertCell(5)
            let colunaEditar = linha.insertCell(6)
            let colunaExcluir = linha.insertCell(7)

            colunaFilme.innerText = this.seções[i].filmeExistente
            colunaSala.innerText = this.seções[i].sala
            colunaLinguagem.innerText = this.seções[i].linguagem
            colunaDimensão.innerText = this.seções[i].dimensão
            colunaData.innerText = this.seções[i].data
            colunaHorário.innerText = this.seções[i].horário

            let imgEditar = document.createElement("img")
            imgEditar.setAttribute("src", "img/editar.svg")
            imgEditar.setAttribute("onclick", "registrador.Editar('" + this.seções[i].filmeExistente + "')")
            imgEditar.classList.add("img")

            let imgExcluir = document.createElement("img")
            imgExcluir.setAttribute("src", "img/deletar.svg")
            imgExcluir.setAttribute("onclick", "registrador.Deletar('" + this.seções[i].filmeExistente + "')")
            imgExcluir.classList.add("img")

            colunaEditar.appendChild(imgEditar)
            colunaExcluir.appendChild(imgExcluir)



        }



    }

    Salvar() {
        let filme = this.lerDados()
        if (this.seçãoEditada == null) {
            if (this.Validar(filme)) {
                this.seções.push(filme)



            }
        } else {
            this.seçãoEditada.filme = filme.filmeExistente
            this.seçãoEditada.sala = filme.sala
            this.seçãoEditada.linguagem = filme.linguagem
            this.seçãoEditada.dimensão = filme.dimensão
            this.seçãoEditada.data = filme.data
            this.seçãoEditada.horário = filme.horário



            this.seçãoEditada = null


        }

        this.gerarTabela()
        localStorage.setItem("seção", JSON.stringify(this.seções))
        this.Limpar()
    }

    Limpar() {
        document.getElementById("filme").value = ""
        document.getElementById("sala").value = ""
        document.getElementById("linguagem").value = ""
        document.getElementById("dimensão").value = ""
        document.getElementById("data").value = ""
        document.getElementById("horário").value = ""
    }

    Editar(filmeExistente) {
        for (let i = 0; i < this.seções.length; i++) {

            if (this.seções[i].filmeExistente == filmeExistente) {


                document.getElementById("filme").value = this.seções[i].filmeExistente
                document.getElementById("sala").value = this.seções[i].sala
                document.getElementById("linguagem").value = this.seções[i].linguagem
                document.getElementById("dimensão").value = this.seções[i].dimensão
                document.getElementById("data").value = this.seções[i].data
                document.getElementById("horário").value = this.seções[i].horário

                this.seçãoEditada = this.seções[i]
            }
        }
    }

    Deletar(filmeExistente) {
        let posição = -1
        for (let i = 0; i < this.seções.length; i++) {
            if (this.seções[i].filmeExistente == filmeExistente) {

                posição = i
            }
        }
        if (posição != -1) {
            this.seções.splice(posição, 1)
            localStorage.setItem("seção", JSON.stringify(this.seções))
            this.gerarTabela()

        }

    }


}



let registrador = new Registrador()