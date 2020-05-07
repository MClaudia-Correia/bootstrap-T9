window.addEventListener('DOMContentLoaded', function () {
    
  // chamando o input pelo id
  const input = document.querySelector('#todoInput')
  // chamando o botao/submit pelo id
  const btn = document.querySelector('#todoSubmit')
  // chamando a tag ul
  const listaDeTarefas = document.querySelector('#todoLista')
  const btnMarcarTodos = document.querySelector('#todoMarcarTodos')
    const btnExcluiTodos = document.querySelector('#todoRemoverTodos')



  btn.addEventListener('click', (event) => {
    event.preventDefault();

    const valor = input.value.trim()

    if(valor !== '') {
      const tarefa = document.createElement('li')
      const paragrafo = document.createElement('p')
      paragrafo.innerText = valor
      paragrafo.addEventListener('click', () => {
        paragrafo.classList.add('checked')
      })

      const botaoExcluir = document.createElement('button')
      botaoExcluir.innerText = "X"
      botaoExcluir.addEventListener('click', () => {
        tarefa.remove()
  })
  btnExcluiTodos.addEventListener('click', () => {
    tarefa.remove()
  })

  btnMarcarTodos.addEventListener('click', () => {
    paragrafo.classList.add('checked')
  })


listaDeTarefas.appendChild(tarefa)
tarefa.appendChild(paragrafo)
tarefa.appendChild(botaoExcluir)
input.value = '';
    } else {
      alert("Escreva uma mensagem")
    }
2  matchMedia
  })

})