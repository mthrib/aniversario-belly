const textElement = document.getElementById("text");

const message = `Obrigado por ser essa pessoa tão incrível na minha vida.
Desde o momento em que você chegou, tudo melhorou… tudo ganhou mais cor.

Eu espero que você nunca deixe de ser essa mulher maravilhosa, iluminada, cuidadosa e inteligente que eu tanto admiro.

Você sempre pode contar comigo, pra tudo, em qualquer momento.

Obrigado por tudo, meu amor… por tanto.

Ainda teremos muitos aniversários pela frente, e eu vou continuar sendo o homem mais sortudo do mundo por ter você, sempre tentando ser melhor a cada dia por nós.

Vamos conquistar todos os nossos sonhos juntos… e eu sempre estarei ao seu lado, te apoiando.

Te amo, amor da minha vida ❤️`;

let index = 0;

function typeWriter() {
    if (index < message.length) {
        textElement.innerHTML += message.charAt(index);
        index++;
        setTimeout(typeWriter, 40);
    }
}

typeWriter();

// mostrar tela final
function showFinal() {
    document.getElementById("final").classList.add("show");
}