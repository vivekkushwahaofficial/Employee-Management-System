import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import EmployeeComponent from './components/EmployeeComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">

        <HeaderComponent />

        <div className="app-content">
          <Routes>

            {/* Employee List */}
            <Route
              path="/"
              element={<ListEmployeeComponent />}
            />

            <Route
              path="/employees"
              element={<ListEmployeeComponent />}
            />

            {/* Add Employee */}
            <Route
              path="/add-employee"
              element={<EmployeeComponent />}
            />

            {/* Edit Employee */}
            <Route
              path="/edit-employee/:id"
              element={<EmployeeComponent />}
            />

          </Routes>
        </div>

        <FooterComponent />

      </div>
    </BrowserRouter>
  )
}

export default App