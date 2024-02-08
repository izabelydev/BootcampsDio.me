//                SINTAXE BÁSICA

// // Classe que se comporta como um elemento HTML
// class CardNews extends HTMLElement {
//     constructor() {
//         super();

//         const shadow = this.attachShadow({mode: "open"});
//         shadow.innerHTML = "<h1>Hello World</h1>"
//     }
// }

// customElements.define('card-news', CardNews) //customizar elemento


//             SINTAXE PROFISSIONAL
class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({
            mode: "open"
        });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    // Elementos
    build() {
        const componentRoot = document.createElement("div"); // criar elemento
        componentRoot.setAttribute("class", "card"); //definir a classe


        //---------------CARD LEFT---------------
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        // Autor
        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        // Título
        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        // Conteúdo
        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");


        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        //---------------CARD RIGHT---------------
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("arquivo-img") || "./assets/default-image-icon.jpg";
        newsImage.alt = this.getAttribute("description-img");
        cardRight.appendChild(newsImage);

        // Pendurar 2 divs filhas na div.card
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    // Estilo
    styles() {
        const style = document.createElement("style");
        style.textContent = `
        .card {
            width: 70%;
            -webkit-box-shadow: 0px 0px 40px 1px rgba(153,153,153,1);
            -moz-box-shadow: 0px 0px 40px 1px rgba(153,153,153,1);
            box-shadow: 0px 0px 40px 1px rgba(153,153,153,1);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            border-radius: 20px;
            overflow: hidden;
            margin: 0 auto 60px;
        }
        
        .card_left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 20px 40px;
        }
        
        .card_left > a {
            margin-top: 15px;
            font-size: 1.5rem;
            color: #000;
            text-decoration: none;
        }
        
        .card_left > a:hover {
            text-decoration: underline;
        }
        
        .card_left > p {
            color: rgb(85, 82, 82);
        }
        
        .card_left > span {
            font-weight: 500;
        } 

        .card_right {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: right;
        }
        
        .card_right > img {
            max-width: 333px;
        } `


        return style;
    }
}

customElements.define("card-news", CardNews);