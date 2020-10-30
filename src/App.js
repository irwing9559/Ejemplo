import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CSVLink } from "react-csv";

const csvData = [
  ["Nombre", "Apellido", "Email"],
  ["Francisco", "Clorio", "clorio@smthing.co.com"],
  ["Fernando", "Cadena", "fer@cadenita.co.com"],
  ["Irwing", "Torrijos", "torri@cocococo.com"]
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <div>
        <p>
          Login!!!!
        </p>
        <form>
              <label>
                Correo:
              <input type="text" name="email" />
              </label>

              <label>
                Contraseña:
              <input type="password" name="pass" />
              </label>
              <input type="submit" value="Entrar" />
        </form>      
        <br></br>

        <p>
          Registro!!!!
        </p>
        <form>
              <label>
                Nombre:
              <input type="text" name="name" /><br></br>
                Apellidos:
              <input type="text" name="name" /><br></br>
                Correo:
              <input type="text" name="name" />
              </label>

              <p>Genero:
              <select name="genero">
                <option>Masculino</option>
                <option>Femenino</option>
              </select>
              </p>
              <input type="submit" value="Enviar" />
                  </form>
        <br></br>
        

        </div>
        
        
          <CSVLink data={csvData} filename={"alumnos.cvs"}><button className="btn btn-alert">Exportar a CVS</button></CSVLink>

                        <table  class="black">
                          <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Email</th>
                          </tr>

                          <tr>
                            <td>Francisco</td>
                            <td>Clorio</td>
                            <td>clorio@smthing.co.com</td>
                          </tr>

                          <tr>
                            <td>Fernando</td>
                            <td>Cadena</td>
                            <td>fer@cadenita.co.com</td>
                          </tr>

                          <tr>
                            <td>Irwing</td>
                            <td>Torrijos</td>
                            <td>torri@cocococo.com</td>
                          </tr>
                        </table>
                        <br></br>
          
          
      </header>
    </div>
  );
}

export default App;
