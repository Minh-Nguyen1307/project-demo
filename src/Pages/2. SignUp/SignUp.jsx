import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formValues, setFormValues] = useState({
    id: uuidv4(),
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isLongEnough = password.length >= 8;
    return hasUpperCase && hasLowerCase && hasSpecialChar && isLongEnough;
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!validatePassword(formValues.password)) {
      newErrors.password =
        "Password must contain an uppercase letter, a lowercase letter, a special character, and be at least 8 characters long.";
      isValid = false;
    }

    if (formValues.password !== formValues.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
      isValid = false;
    }

    const existingUsers = JSON.parse(localStorage.getItem("userDetails")) || [];
    const emailExists = existingUsers.some(
      (user) => user.email === formValues.email
    );

    if (emailExists) {
      newErrors.email =
        "This email is already registered. Please use a different email !";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newUser = { ...formValues, id: uuidv4() };
      const existingUsers =
        JSON.parse(localStorage.getItem("userDetails")) || [];
      const updatedUsers = [...existingUsers, newUser];
      localStorage.setItem("userDetails", JSON.stringify(updatedUsers));
      alert("User signed up!");
      navigate("/LogIn");
      setFormValues({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormValues({ ...formValues, [name]: value });
    const newErrors = { ...errors };

    if (name === "password") {
      if (validatePassword(value)) {
        newErrors.password = "";
      } else {
        newErrors.password =
          "Password must contain an uppercase letter, a lowercase letter, a special character, and be at least 8 characters long.";
      }

      if (formValues.confirmPassword && formValues.confirmPassword !== value) {
        newErrors.confirmPassword = "Passwords do not match.";
      } else {
        newErrors.confirmPassword = "";
      }
    }

    if (name === "confirmPassword") {
      if (formValues.password === value) {
        newErrors.confirmPassword = "";
      } else {
        newErrors.confirmPassword = "Passwords do not match.";
      }
    }

    if (name === "email") {
      newErrors.email = "";
    }

    setErrors(newErrors);
  };

  const { firstName, lastName, userName, email, password, confirmPassword } =
    formValues;

  return (
    <div className='row no-gutters m-0'>
      <div className='col-12 col-sm-6 col-md-8 d-flex flex-col items-center'>
        <h3 className='text-4xl font-semibold text-gray-800 my-16'>
          Create Your Account
        </h3>
        <form
          className='d-flex flex-col justify-around item h-[500px] w-[500px]'
          onSubmit={handleSubmitForm}
        >
          <div>
            <p className='text-gray-950 font-medium text-xl my-2'>
              Full Name <span className='text-red-600'>*</span>
            </p>
            <input
              type='text'
              value={firstName}
              onChange={handleOnChange}
              placeholder='First Name'
              className='border rounded-md pl-4 w-1/2 h-9'
              name='firstName'
              required
            />
            <input
              type='text'
              value={lastName}
              onChange={handleOnChange}
              placeholder='Last Name'
              className='border rounded-md pl-4 w-1/2 h-9'
              name='lastName'
              required
            />
          </div>

          <div>
            <p className='text-gray-950 font-medium text-xl my-2'>
              User Name <span className='text-red-600'>*</span>
            </p>
            <input
              type='text'
              value={userName}
              onChange={handleOnChange}
              placeholder='User Name'
              className='border rounded-md w-full pl-4 h-9'
              name='userName'
              required
            />
          </div>

          <div>
            <p className='text-gray-950 font-medium text-xl my-2'>
              Email <span className='text-red-600'>*</span>
            </p>
            <input
              type='email'
              value={email}
              onChange={handleOnChange}
              placeholder='Email ID'
              className='border rounded-md w-full pl-4 h-9'
              name='email'
              required
            />
          </div>
          {errors.email && (
            <p className='text-red-500 text-sm'>{errors.email}</p>
          )}

          <div>
            <p className='text-gray-950 font-medium text-xl my-2'>
              Password <span className='text-red-600'>*</span>
            </p>
            <input
              type='password'
              value={password}
              onChange={handleOnChange}
              placeholder='Password'
              className='border rounded-md w-full pl-4 h-9'
              name='password'
              required
            />
          </div>
          {errors.password && (
            <p className='text-red-500 text-sm'>{errors.password}</p>
          )}

          <div>
            <p className='text-gray-950 font-medium text-xl my-2'>
              Confirm Password <span className='text-red-600'>*</span>
            </p>
            <input
              type='password'
              value={confirmPassword}
              onChange={handleOnChange}
              placeholder='Confirm Password'
              className='border rounded-md w-full pl-4 h-9'
              name='confirmPassword'
              required
            />
          </div>
          {errors.confirmPassword && (
            <p className='text-red-500 text-sm'>{errors.confirmPassword}</p>
          )}

          <button type='submit' className='btn btn-dark mt-4 text-xl'>
            Create Account{" "}
            <FontAwesomeIcon icon={faArrowRight} className='h-4 mx-2' />
          </button>
        </form>
        <div className='text-center my-4'>
          ----------------------Sign up with ----------------------
          <div className='d-flex justify-between my-3 w-[500px]'>
            <button className='btn btn-light'>
              <img src='7. SignUp/1.png' alt='' className='' />
            </button>
            <button className='btn btn-light mx-5'>
              <img src='7. SignUp/2.png' alt='' className='' />
            </button>
            <button className='btn btn-light'>
              <img src='7. SignUp/3.png' alt='' className='' />
            </button>
          </div>
        </div>
      </div>
      <div className='col-6 col-md-3 p-0'>
        <img
          src='/7. SignUp/b1.png'
          alt='Sign Up'
          className='h-[900px] text-end'
        />
      </div>
    </div>
  );
}
