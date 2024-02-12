class DinamicTitle extends HTMLElement {
    constructor() {
        super(); //método para chamar o construtor

        //criação da árvore fantasma
        const shadow = this.attachShadow({ mode: "open" })

        //base do componente
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("titulo"); //criação da prop

        //estilo do componente
        const style = document.createElement("style");
        style.textContent = `
            h1 {
                color: red;
            }
        `

        //enviar para a shadow
            shadow.appendChild(componentRoot);
            shadow.appendChild(style);
    }
}

//importante colocar hifen no nome do elemento
customElements.define("dinamic-title", DinamicTitle)