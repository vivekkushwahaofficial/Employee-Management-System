import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployeeById, updateEmployee } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeComponent = () => {

  const { id } = useParams();
  const isEditMode = Boolean(id);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  const navigate = useNavigate();

  useEffect(() => {
    if (isEditMode) {
      getEmployeeById(id).then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
      }).catch((error) => {
        console.error(error);
      });
    }
  }, [id, isEditMode]);

  function saveEmployee(e) {
    e.preventDefault();

    if (validateForm()) {
      const employee = { firstName, lastName, email };
      const request = isEditMode ? updateEmployee(id, employee) : createEmployee(employee);

      request.then(() => {
        navigate('/employees');
      }).catch((error) => {
        console.error(error);
      });

    }

  }

  function validateForm() {
    let valid = true;

    const errorCopy = { ...errors };

    if (firstName.trim()) {
      errorCopy.firstName = '';
    } else {
      errorCopy.firstName = 'First Name is required';
      valid = false;
    }
    if (lastName.trim()) {
      errorCopy.lastName = '';
    } else {
      errorCopy.lastName = 'Last Name is required';
      valid = false;
    }

    if (email.trim()) {
      errorCopy.email = '';
    } else {
      errorCopy.email = 'Email is required';
      valid = false;
    }
    setErrors(errorCopy);
    return valid;
  }

  return (
    <div className='container'>
      <br /> <br />
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <h2 className='text-center'>{isEditMode ? 'Update Employee' : 'Add Employee'}</h2>
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>First Name</label>
                <input
                  type='text'
                  placeholder='Enter Employee First Name'
                  name='firstName'
                  value={firstName}
                  className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                  onChange={(e) => setFirstName(e.target.value)}
                >
                </input>
                <div className='invalid-feedback'>{errors.firstName}</div>
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Last Name</label>
                <input
                  type='text'
                  placeholder='Enter Employee Last Name'
                  name='lastName'
                  value={lastName}

                  className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                  onChange={(e) => setLastName(e.target.value)}
                >
                </input>
                <div className='invalid-feedback'>{errors.lastName}</div>
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Email</label>
                <input
                  type='text'
                  placeholder='Enter Employee Email'
                  name='email'
                  value={email}
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  onChange={(e) => setEmail(e.target.value)}
                >
                </input>
                <div className='invalid-feedback'>{errors.email}</div>
              </div>

              <button className='btn btn-success' onClick={saveEmployee}>{isEditMode ? 'Update' : 'Submit'}</button>
            </form>
          </div>
        </div>
      </div>

    </div>

  );
};

export default EmployeeComponent;