import { useState } from 'react'
import './App.css'

function BarraDePesquisa() {

  return (
    <form action="javascript:void(0);">
      <input
        type="text"
        className="form-control add-task"
        placeholder="New Task..."
      />
    </form>
  )
}

function Menu() {

  let ItensDoMenu = [
    'Todos',
    'Ativos',
    'Completos',
    'Marcio',
    'Marcilio'
  ]

  return (
    <ul className="nav nav-pills todo-nav">

      {ItensDoMenu.map((nome, index) => <li key={index} role="presentation"
        className="nav-item all-task active"> <a href="#" className="nav-link">{nome}</a> </li>)}

    </ul>
  )
}
function Lista() {

let ItensLista = [
  'Projeto',
  'Desgin',
  'Inforam',
  'Present',

]

  return (
    <div className="todo-list">

    {ItensLista.map((nome) => 
      <div className="todo-item">
        <div className="checker">
          <span><input type="checkbox" /></span>
        </div>
        <span>{nome}</span>
        <a href="javascript:void(0);" className="float-right remove-todo-item" ><i className="icon-close"></i></a>
      </div>
    )}

</div>
  )
}

function App() {

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-white">
              <div className="card-body">
                <BarraDePesquisa />
                
                <Menu />

                <Lista/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
