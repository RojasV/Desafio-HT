class Registrador {

    constructor() {
        this.cadeirasA = [false, false, false, false, false, false, false, false, false, false]
        this.cadeirasB = [false, false, false, false, false, false, false, false, false, false]
        this.cadeirasC = [false, false, false, false, false, false, false, false, false, false]
        this.cadeirasD = [false, false, false, false, false, false, false, false, false, false]
        this.cadeirasE = [false, false, false, false, false, false, false, false, false, false]
        this.cadeirasF = [false, false, false, false, false, false, false, false, false, false]

        this.reservas = []
        this.reservaEditada = []

    }

    carregarDados() {
        if (localStorage.getItem("reserva") == null) {
            localStorage.setItem("reserva", JSON.stringify(this.reserva))

            let seçãoCadastrada = JSON.parse(localStorage.getItem("seção"))
            let seção = document.getElementById("seção")

            let clienteCadastrado = JSON.parse(localStorage.getItem("cliente"))
            let cliente = document.getElementById("cliente")

            for (let i = 0; i < seçãoCadastrada.length; i++) {

                let seçãoCarregada = document.createElement("option")
                seçãoCarregada.innerText = seçãoCadastrada[i].filmeExistente + "," + " " + seçãoCadastrada[i].sala + "," + " " + seçãoCadastrada[i].linguagem + "," + " " + seçãoCadastrada[i].dimensão + "," + " " + seçãoCadastrada[i].data + "," + " " + seçãoCadastrada[i].horário
                seçãoCarregada.setAttribute("value", seçãoCadastrada[i].filmeExistente)

                seção.appendChild(seçãoCarregada)
            }

            for (let i = 0; i < clienteCadastrado.length; i++) {

                let clienteCarregado = document.createElement("option")
                clienteCarregado.innerText = clienteCadastrado[i].nome
                clienteCarregado.setAttribute("value", clienteCadastrado[i].nome)

                cliente.appendChild(clienteCarregado)
            }
        } else {

            let seçãoCadastrada = JSON.parse(localStorage.getItem("seção"))
            let seção = document.getElementById("seção")

            let clienteCadastrado = JSON.parse(localStorage.getItem("cliente"))
            let cliente = document.getElementById("cliente")

            for (let i = 0; i < seçãoCadastrada.length; i++) {

                let seçãoCarregada = document.createElement("option")
                seçãoCarregada.innerText = seçãoCadastrada[i].filmeExistente + "," + " " + seçãoCadastrada[i].sala + "," + " " + seçãoCadastrada[i].linguagem + "," + " " + seçãoCadastrada[i].dimensão + "," + " " + seçãoCadastrada[i].data + "," + " " + seçãoCadastrada[i].horário
                seçãoCarregada.setAttribute("value", seçãoCadastrada[i].filmeExistente)

                seção.appendChild(seçãoCarregada)
            }

            for (let i = 0; i < clienteCadastrado.length; i++) {

                let clienteCarregado = document.createElement("option")
                clienteCarregado.innerText = clienteCadastrado[i].nome
                clienteCarregado.setAttribute("value", clienteCadastrado[i].nome)

                cliente.appendChild(clienteCarregado)
            }

            this.definirCores()
        }
    }

    definirCores() {

        for (let i = 0; i < this.cadeirasA.length; i++) {
            document.getElementById(`A${i + 1}`).classList.remove("ocupado")
            document.getElementById(`A${i + 1}`).classList.remove("desocupado")

            if (this.cadeirasA[i] == true) {
                document.getElementById(`A${i + 1}`).classList.add("ocupado")
            } else {
                document.getElementById(`A${i + 1}`).classList.add("desocupado")
            }
        }

        for (let i = 0; i < this.cadeirasB.length; i++) {
            document.getElementById(`B${i + 1}`).classList.remove("ocupado")
            document.getElementById(`B${i + 1}`).classList.remove("desocupado")

            if (this.cadeirasB[i] == true) {
                document.getElementById(`B${i + 1}`).classList.add("ocupado")
            } else {
                document.getElementById(`B${i + 1}`).classList.add("desocupado")
            }
        }

        for (let i = 0; i < this.cadeirasC.length; i++) {
            document.getElementById(`C${i + 1}`).classList.remove("ocupado")
            document.getElementById(`C${i + 1}`).classList.remove("desocupado")

            if (this.cadeirasC[i] == true) {
                document.getElementById(`C${i + 1}`).classList.add("ocupado")
            } else {
                document.getElementById(`C${i + 1}`).classList.add("desocupado")
            }
        }

        for (let i = 0; i < this.cadeirasD.length; i++) {
            document.getElementById(`D${i + 1}`).classList.remove("ocupado")
            document.getElementById(`D${i + 1}`).classList.remove("desocupado")

            if (this.cadeirasD[i] == true) {
                document.getElementById(`D${i + 1}`).classList.add("ocupado")
            } else {
                document.getElementById(`D${i + 1}`).classList.add("desocupado")
            }
        }

        for (let i = 0; i < this.cadeirasE.length; i++) {
            document.getElementById(`E${i + 1}`).classList.remove("ocupado")
            document.getElementById(`E${i + 1}`).classList.remove("desocupado")

            if (this.cadeirasE[i] == true) {
                document.getElementById(`E${i + 1}`).classList.add("ocupado")
            } else {
                document.getElementById(`E${i + 1}`).classList.add("desocupado")
            }
        }

        for (let i = 0; i < this.cadeirasF.length; i++) {
            document.getElementById(`F${i + 1}`).classList.remove("ocupado")
            document.getElementById(`F${i + 1}`).classList.remove("desocupado")

            if (this.cadeirasF[i] == true) {
                document.getElementById(`F${i + 1}`).classList.add("ocupado")
            } else {
                document.getElementById(`F${i + 1}`).classList.add("desocupado")
            }
        }
    }


    setarCadeirasA(posicao) {

        this.cadeirasA[posicao] = !this.cadeirasA[posicao]

        this.definirCores()
    }

    setarCadeirasB(posicao) {
        this.cadeirasB[posicao] = !this.cadeirasB[posicao]
        this.definirCores()
    }

    setarCadeirasC(posicao) {
        this.cadeirasC[posicao] = !this.cadeirasC[posicao]
        this.definirCores()
    }
    setarCadeirasD(posicao) {
        this.cadeirasD[posicao] = !this.cadeirasD[posicao]
        this.definirCores()
    }
    setarCadeirasE(posicao) {
        this.cadeirasE[posicao] = !this.cadeirasE[posicao]
        this.definirCores()
    }
    setarCadeirasF(posicao) {
        this.cadeirasF[posicao] = !this.cadeirasF[posicao]
        this.definirCores()
    }




    lerDados() {

        let reserva = {}

        reserva.seção = document.getElementById("seção").value
        reserva.cliente = document.getElementById("cliente").value


        for (let i = 0; i < this.cadeirasA.length; i++) {


            if (this.cadeirasA[i] == !true) {


                reserva.cadeira = document.getElementById(`A${i + 1}`).innerText

            }
        }

        for (let i = 0; i < this.cadeirasB.length; i++) {
            document.getElementById(`B${i + 1}`).classList.remove("ocupado")
            document.getElementById(`B${i + 1}`).classList.remove("desocupado")

            if (this.cadeirasB[i] == true) {
                document.getElementById(`B${i + 1}`).classList.add("ocupado")
            } else {
                document.getElementById(`B${i + 1}`).classList.add("desocupado")
            }
        }

        for (let i = 0; i < this.cadeirasC.length; i++) {
            document.getElementById(`C${i + 1}`).classList.remove("ocupado")
            document.getElementById(`C${i + 1}`).classList.remove("desocupado")

            if (this.cadeirasC[i] == true) {
                document.getElementById(`C${i + 1}`).classList.add("ocupado")
            } else {
                document.getElementById(`C${i + 1}`).classList.add("desocupado")
            }
        }

        for (let i = 0; i < this.cadeirasD.length; i++) {
            document.getElementById(`D${i + 1}`).classList.remove("ocupado")
            document.getElementById(`D${i + 1}`).classList.remove("desocupado")

            if (this.cadeirasD[i] == true) {
                document.getElementById(`D${i + 1}`).classList.add("ocupado")
            } else {
                document.getElementById(`D${i + 1}`).classList.add("desocupado")
            }
        }

        for (let i = 0; i < this.cadeirasE.length; i++) {
            document.getElementById(`E${i + 1}`).classList.remove("ocupado")
            document.getElementById(`E${i + 1}`).classList.remove("desocupado")

            if (this.cadeirasE[i] == true) {
                document.getElementById(`E${i + 1}`).classList.add("ocupado")
            } else {
                document.getElementById(`E${i + 1}`).classList.add("desocupado")
            }
        }

        for (let i = 0; i < this.cadeirasF.length; i++) {
            document.getElementById(`F${i + 1}`).classList.remove("ocupado")
            document.getElementById(`F${i + 1}`).classList.remove("desocupado")

            if (this.cadeirasF[i] == true) {
                document.getElementById(`F${i + 1}`).classList.add("ocupado")
            } else {
                document.getElementById(`F${i + 1}`).classList.add("desocupado")
            }
        }

        return reserva
    }

    Validar(reserva) {
        if ((reserva.seção && reserva.cliente) == "" && reserva.cadeira == true) {
            alert("Preencha o(s) campo(s) vazio(s)!")
            return false
        }

        return true
    }

    Salvar() {
        let reserva = this.lerDados()
        if (this.reservaEditada == null) {
            if (this.Validar(reserva)) {
                this.reservas.push(reserva)



            }
        } else {
            this.filmeEditado.nome = filme.nome
            this.filmeEditado.duração = filme.duração
            this.filmeEditado.classificação = filme.classificação
            this.filmeEditado.gênero = filme.gênero
            this.filmeEditado.sinopse = filme.sinopse



            this.filmeEditado = null


        }
    }

}

let registrador = new Registrador()