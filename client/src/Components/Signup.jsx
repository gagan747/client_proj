/* eslint-disable react-hooks/exhaustive-deps */
import { hostUrl } from '../config'
import React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import messageCleaner from '../utils/messageCleaner'

export default function Signup() {
	const navigate = useNavigate()
	const [showPassword, setShowPassword] = useState(false);
	const [countriesStatesCitiesData, setCountriesStatesCitiesData] = useState([])
	const [countries, setCountries] = useState([]);
	const [states, setStates] = useState([]);
	const [cities, setCities] = useState([]);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		zip: '',
		mobile: '',
		city: '',
		state: '',
		country: ''
	})
	React.useEffect(() => {
		fetchCountriesStatesCitiesData();
	}, [])

	const fetchCountriesStatesCitiesData = async () => {
		try {
			const response = await fetch('https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json');
			const data = await response.json();
			setCountriesStatesCitiesData(data);
			setCountries(Array.from(new Set(data.map((data) => data.country))).sort())
		}
		catch (err) {
			console.log(err)
		}
	}

	const handleCountryChange = (e) => {
		if (!e.target.value) {
			setCities([]);
			setStates([]);
			setFormData(formData => ({ ...formData, city: '', state: '' })) // callback wala setstate isliye use kiya kyuki formdata ki latest value chahiye thi jisme county bhi '' hogya  h pr joki handlechange n kiya h pr affect next render p hota isliye latest lene k lie callback wala setstate use kiya
		}
		else {
			setStates(Array.from(new Set(countriesStatesCitiesData.reduce((pr, data) => {
				if (data.country === e.target.value)
					pr.push(data.subcountry)
				return pr;
			}, []))).sort())
		}
	}

	function checkPassword(input) {
		if (input.target.value !== document.getElementById('password').value) {
			input.target.setCustomValidity('Passwords do not match');
		} else {
			input.target.setCustomValidity('');
		}
	}

	const handleStateChange = (e) => {
		if (!e.target.value) {
			setCities([]);
			setFormData((formData) => ({ ...formData, city: '' }))
		}
		else {
			setCities(Array.from(new Set(countriesStatesCitiesData.reduce((pr, data) => {
				if (data.subcountry === e.target.value)
					pr.push(data.name)
				return pr;
			}, []))).sort())
		}
	}

	const signup = async () => {
		try {
			const res = await fetch(
				`${hostUrl}/api/auth/register`,
				{
					method: 'POST',
					body: JSON.stringify(formData),
					headers: {
						'content-type': 'application/json',
					},
				},
			);
			const data = await res.json();
			if (res.status === 201) {
				localStorage.setItem('x-auth-token', res.headers.get('x-auth-token'));
				localStorage.setItem('username', data.username);
				toast.success(data.message, {
					toastId: 'login',
				});
				navigate('/');
			} else {
				toast.error(messageCleaner(data.message), {
					toastId: 'login',
				});
			}
		} catch (err) {
			console.log(err);
			toast.error(messageCleaner(err), { toastId: 'signuperror' });
		}
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		signup();
	}
	const handleChange = (e) => {
		setFormData(formData => ({ ...formData, [e.target.name]: e.target.value }))//callback wala set state isliye use kiya kyuki state/country p bhi onchange laga h jo setState krta h jo formdata ko set krega {...formdata,city:'',state:''} or agr current wala setstate baad m chala to wo krega setstate({...formdata,country:''}) which reduces to {all objects of formdata including city and state set as iske liye ..formdata m city state selected rhenge kyuki bhale hi setstate({...formdata,city:'',state:'')} chl gaya tha pr state to next render p hogi na update jb call stack empty hoga to isliye callback wala setstate use kiya so that render hone s phele hi latest value mil jae 
	}
	return (
		<form className='login signup' onChange={handleChange}>
			<h1>
				Signup
			</h1>
			<input type='email' name='email' placeholder='Email' required />
			<input type='text' name='name' placeholder='Full Name' required />
			<span className='eye-container'><input type={showPassword ? 'text' : 'password'} name='password' placeholder='Password' id='password' required onCopy={(e)=>e.preventDefault()}/>
				<i class="fa fa-eye" aria-hidden="true" onClick={() => setShowPassword(!showPassword)}></i>
			</span>
			<input type='text' placeholder='Confirm Password' required onChange={checkPassword} />
			<input type='number' name='zip' placeholder='Zip code' required />
			<select name="country" id="coutry" onChange={handleCountryChange}>
				<option value='' defaultValue>select country</option>
				{
					countries.map((country) => <option key={country} value={country}>{country}</option>)
				}
			</select>
			<select name="state" id="state" onChange={handleStateChange}>
				<option value='' defaultValue>select state</option>
				{
					states.map((state) => <option key={state} value={state}>{state}</option>)
				}
			</select>
			<select name="city" id="city">
				<option value='' defaultValue>select city</option>
				{
					cities.map((city) => <option key={city} value={city}>{city}</option>)
				}
			</select>
			<input type='tel' placeholder='mobile number' pattern="[0-9]{10}" required />
			<button type='submit'>Signup</button>
			<div>
				<Link to='/login'>Login?</Link>
				<Link to='/forgotpassword'>Forgot Password?</Link>
			</div>


		</form>
	);
}
