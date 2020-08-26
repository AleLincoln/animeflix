import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault'
import { FormArea, Label, Input } from '../../../components/FormStyle/styles'

function CadastroCategoria() {

  const [nomeDaCategoria, setnomeDaCategoria] = useState('Valor inicial')
  const [categorias, setCategorias] = useState(['vazio', 'cheio', 'meiocheio'])


  function handleSubmit(item) {
    item.preventDefault();
    setCategorias([
      ...categorias,
      nomeDaCategoria
    ])
  }


  function pegarValor(algumaCoisa) {
    console.log(nomeDaCategoria)
    console.log(algumaCoisa.target.value)
    setnomeDaCategoria(algumaCoisa.target.value)
  }

  return (
    <PageDefault>

      <h1>Cadastro de Categoria</h1>

      <FormArea onSubmit={handleSubmit}>
        <div>

          <Label>
            Nome da Categoria
                <Input
              type="text"
              value={nomeDaCategoria}
              onChange={pegarValor}
            />

          </Label>

        </div>
        <div>

          <Label>
            Descrição
        <Input
              type="text"
              value={nomeDaCategoria}
              onChange={pegarValor}
            />

          </Label>

        </div>
        <div>

          <Label>
            Descrição
        <Input
              type="color"
              value={nomeDaCategoria}
              onChange={pegarValor}
            />

          </Label>

        </div>
        <button>Cadastrar</button>
      </FormArea>


      <ul>
        {categorias.map((item, index) => {
          return (
            <li key={`${item}${index}`}>{item}</li>
          )
        })}
      </ul>



    </PageDefault>
  )
}

export default CadastroCategoria