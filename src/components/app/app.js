import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

    const data = [
        {name: "Alex M.", salary: 1000, increase: true},
        {name: "Carl W.", salary: 1100, increase: false},
        {name: "Arnold S.", salary: 1200, increase: true},
        {name: "John C.", salary: 1200, increase: false},
        {name: "Carolina W.", salary: 1000, increase: true}
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className='search-panel'>
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>

            <EmployeesAddForm/>
        </div>
    )
}

export default App;