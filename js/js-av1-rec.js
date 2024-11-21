class Livro {
    codLivro;
    descLivro;
    qtdeDisponivel = 0;

    reservarLivro(quantidade) {
        if (this.qtdeDisponivel - quantidade < 0) {
            alert("não há quantidade suficiente!");
        } else {
            this.qtdeDisponivel -= quantidade;
        }
    }

    devolverLivro(quantidade) {
        this.qtdeDisponivel += quantidade;
    }
}