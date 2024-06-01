import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articulos: [
        {
          codigo: 1,
          descripcion: 'Inka-Kola',
          precio: 2.50
        },
        {
          codigo: 2,
          descripcion: 'inka-cola',
          precio: 2.20
        },
        {
          codigo: 3,
          descripcion: 'fanta',
          precio: 1.70
        }
      ],

      empresas: [
        {
          codigoEmpresa: 1,
          nombreEmpresa: 'Backus',
        }
      ]


    };
    this.borrar = this.borrar.bind(this);
  }


  borrar(codigo) {
    this.setState(prevState => ({
      articulos: prevState.articulos.filter(item => item.codigo !== codigo)
    }));
  }

  render() {
    return (
      <div>
        <table class="table" border= '1'>
          <thead class="table-dark">
            <tr>
              <th>Código</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Borra?</th>
            </tr>
          </thead>
          <tbody>
            {this.state.articulos.map(elemento => {
              return (
                <tr key={elemento.codigo}>
                  <td>{elemento.codigo}</td>
                  <td>{elemento.descripcion}</td>
                  <td>{elemento.precio}</td>
                  <td>
                    <button onClick={() => this.borrar(elemento.codigo)}>Borrar</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <table class="table">
          <thead class="table-dark">
            <tr>
              <th>Código</th>
              <th>Nombre de la Empresa</th>
              <th>Borra?</th>

            </tr>
          </thead>
          <tbody>
            {this.state.empresas.map(elemento => {
              return (
                <tr key={elemento.codigoEmpresa}>
                  <td>{elemento.codigoEmpresa}</td>
                  <td>{elemento.nombreEmpresa}</td>
                  <td>
                    <button onClick={() => this.borrar(elemento.codigoEmpresa)}>Borrar</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

      </div>
    );
  }
  borrar(codigo) {
    var temp = this.state.articulos.filter((el) => el.codigo !== codigo);
    this.setState({
      articulos: temp
    })
  }
  borrar(codigoEmpresa) {
    var temp = this.state.empresas.filter((el) => el.codigoEmpresa !== codigoEmpresa);
    this.setState({
      empresas: temp
    })
  }
}

export default App;
