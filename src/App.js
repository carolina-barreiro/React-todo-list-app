import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useState} from 'react';
import GroupItem from './GroupItem';

let listInitial = [{ id: 0, name: 'Do groceries', checked: false },
{ id: 1, name: 'Clean', checked: false }];

let nextId = 2;

export default function App() {
  const [list, setList] = useState(listInitial);
  const [name, setName] = useState('');
  const [status, setStatus] = useState('all');     //status can also be all, active, completed

  function addItem(e) {
    e.preventDefault();
   setList([...list,
    { id: nextId++, name: name, checked: false }]);
    setName('');

  }

  function deleteItem(list, itemId) {
    setList(list.filter(item => item.id !== itemId));
  }

  function handleToggleChecked(list, itemId) {
    setList(list.map(item => {
      if (item.id === itemId) {
        return { ...item, checked: !item.checked };
      }
      return item;
    }));
  }

  // Filter the list based on the selected status
  let filteredList;
  if (status === 'active') {
    filteredList = list.filter(item => !item.checked);
  } else if (status === 'completed') {
    filteredList = list.filter(item => item.checked);
  } else {
    filteredList = list;
  }

  return (<section className="vh-100 gradient-custom">
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-10">
          <div className="card">
            <div className="card-body p-5">
              <h1 className="text-center" id="title">TO-DO LIST</h1>
              <br></br>
              <form className="d-flex justify-content-center align-items-center mb-4">
                <div className="form-outline flex-fill">
                  <input type="text" id="form2" className="form-control" placeholder="New task..." value={name} onChange={e => setName(e.target.value)} />
                </div>
                <button type="submit" id="btnAdd" className="btn btn-info ms-2" onClick={(e) =>addItem(e)} >Add</button>
              </form>

              <ul className="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
                <li className={`nav-item ${status === 'all' ? 'active' : ''}`} role="presentation">
                  <a className={`nav-link ${status === 'all' ? 'active' : ''}`} id="ex1-tab-1" data-mdb-toggle="tab" href="#ex1-tabs-1" role="tab"
                    aria-controls="ex1-tabs-1" aria-selected={status === 'all'} onClick={() => setStatus('all')}>All</a>
                </li>
                <li className={`nav-item ${status === 'active' ? 'active' : ''}`} role="presentation">
                  <a className={`nav-link ${status === 'active' ? 'active' : ''}`} id="ex1-tab-2" data-mdb-toggle="tab" href="#ex1-tabs-2" role="tab"
                    aria-controls="ex1-tabs-2" aria-selected={status === 'active'} onClick={() => setStatus('active')}>Active</a>
                </li>
                <li className={`nav-item ${status === 'completed' ? 'active' : ''}`} role="presentation">
                  <a className={`nav-link ${status === 'completed' ? 'active' : ''}`} id="ex1-tab-3" data-mdb-toggle="tab" href="#ex1-tabs-3" role="tab"
                    aria-controls="ex1-tabs-3" aria-selected={status === 'completed'} onClick={() => setStatus('completed')}>Completed</a>
                </li>
              </ul>
              <div className="tab-content" id="ex1-content">
                <div className="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel"
                  aria-labelledby="ex1-tab-1">
                  <GroupItem
                    list={list}
                    filteredList={filteredList}
                    handleDelete={deleteItem}
                    handleToggleChecked={handleToggleChecked}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>)
}
