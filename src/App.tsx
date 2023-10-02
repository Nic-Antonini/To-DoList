import React from 'react';
import * as Components from './App.styles';
import { Item } from "./types/item";

const App = () => {

  const [list, setList] = React.useState<Item[]>([
    {id: 1, name: 'Ir até a padaria', done: false},
    {id: 2, name: 'Comprar pão', done: false},
    {id: 3, name: 'Retirar dinheiro', done: true}
  ]);

  return (
    <Components.Container>
      <Components.Area>
        <Components.Header>
          Lista de tarefas
        </Components.Header>

        {/*área para adicionar tarefas*/}
        {list.map((item, index) => (
          <div>{item.name}</div>
        ))
        
        }

      </Components.Area>
    </Components.Container>
  );
}

export default App;
