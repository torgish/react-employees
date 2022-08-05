import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "Alex M.", salary: 1000, increase: true, id: 1},
                {name: "Carl W.", salary: 1100, increase: false, id: 2},
                {name: "Arnold S.", salary: 1200, increase: true, id: 3},
                {name: "John C.", salary: 1200, increase: false, id: 4},
                {name: "Carolina W.", salary: 1000, increase: true, id: 5}
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
        })
    }
    
    render() {
        return (
            <div className="app">
                <AppInfo/>
    
                <div className='search-panel'>
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}/>
    
                <EmployeesAddForm/>
            </div>
        )
    }
}

export default App;