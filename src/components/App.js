import AddContract from './AddContract';
import Header from './Header';
import ContractDetail from './ContractDetail';
import ContractList from './ContractList';
import { useEffect, useState } from 'react';
import { uuid } from 'uuidv4';
import api from '../api/contracts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EditContact from './EditContract';

const App = () => {
  const [contracts, setContracts] = useState([]);

  // fetch contracts from json server
  const fetchContracts = async () => {
    const response = await api.get('/contracts');
    return response.data;
  };

  // create new contract with auto generated id
  const addContractHandler = async (contract) => {
    const request = {
      id: uuid(),
      ...contract,
    };
    const response = await api.post('/contracts', request);
    setContracts([...contracts, response.data]);
  };

  // delete a specific contract
  const removeContractHandler = async (id) => {
    await api.delete(`contracts/${id}`);
    console.log(id);
    api.delete(`/contracts/${id}`);
    const newContractList = contracts.filter((contract) => {
      return contract.id !== id;
    });
    console.log(newContractList);
    setContracts(newContractList);
  };

  // update a specific contract
  const updateContractHandler = async (contract) => {
    const response = await api.put(`/contracts/${contract.id}`, contract);
    const { id } = response.data;
    setContracts(
      contracts.map((contract) => {
        return contract.id === id ? { ...response.data } : contract;
      })
    );
  };

  useEffect(() => {
    const getAllContracts = async () => {
      const allContracts = await fetchContracts();
      if (allContracts) setContracts(allContracts);
    };
    getAllContracts();
  }, []);

  useEffect(() => {}, [contracts]);

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route
            path='/'
            exact
            render={(props) => (
              <ContractList
                {...props}
                contracts={contracts}
                getContractId={removeContractHandler}
              />
            )}
          />
          <Route
            path='/add'
            exact
            render={(props) => (
              <AddContract {...props} addContractHandler={addContractHandler} />
            )}
          />

          <Route
            path='/edit'
            exact
            render={(props) => (
              <EditContact
                {...props}
                updateContractHandler={updateContractHandler}
              />
            )}
          />
          <Route path='/contact/:id' component={ContractDetail} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
