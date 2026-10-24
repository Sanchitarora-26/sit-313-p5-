import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  updateProfile
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase.js';
function Register() {
  return (
    <main>
      
<h1>Create a DEV@Deakin Account</h1>

<form>
  <label htmlFor="fullName">Name*</label>
  <input
    id="fullName"
    name="fullName"
    type="text"
    required
  />

  <label htmlFor="email">Email*</label>
  <input
    id="email"
    name="email"
    type="email"
    required
  />

  <label htmlFor="password">Password*</label>
  <input
    id="password"
    name="password"
    type="password"
    required
  />

  <label htmlFor="confirmPassword">Confirm password*</label>
  <input
    id="confirmPassword"
    name="confirmPassword"
    type="password"
    required
  />

  <button type="submit">Create</button>
</form>

    </main>
  );
}

export default Register;