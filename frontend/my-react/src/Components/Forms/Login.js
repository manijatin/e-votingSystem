import React, { useState , useEffect} from 'react';
import './Form Css/Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [voterId, setVoterId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpGenerated, setOtpGenerated] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [otpGenerationTime, setOtpGenerationTime] = useState(null);

  useEffect(() => {
    if (otpGenerated) {
      setOtpGenerationTime(Date.now()); // Record the time when OTP is generated
    }
  }, [otpGenerated]);

 
  const handleGenerateOtp = () => {
    // Validate phone number and voter ID before generating OTP
    if (phoneNumber.length !== 10 || voterId.trim() === '' || voterId.length !== 10) {
      alert('Please enter a valid phone number (10 digits) and voter ID.');
      return;
    }

    // Generate OTP logic can be implemented here
    console.log('Generating OTP...');
    setOtpGenerated(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate OTP length and type
    const otpPattern = /^\d{6}$/;
    if (!otpPattern.test(otp)) {
      alert('Please enter a valid OTP (6 digits).');
      return;
    }

    // Validate OTP validity for 5 minutes
    const currentTime = Date.now();
    if (currentTime - otpGenerationTime > 5 * 60 * 1000) {
      alert('OTP has expired. Please generate a new OTP.');
      return;
    }

    // Form submission logic can be implemented here
    console.log('Form submitted');
  };

  const handleOtpChange = (e) => {
    const newOtp = e.target.value;
    setOtp(newOtp);
    // Validate OTP length and type
    const otpPattern = /^\d{6}$/;
    setFormValid(otpPattern.test(newOtp));
  };

  return (
    <>
    
    <div className="login-form-container">
    {/* <h2 className='Heading'>Login Please</h2> */}
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          Voter ID:
          <input
            type="text"
            value={voterId}
            onChange={(e) => setVoterId(e.target.value)}
            required />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required />
        </label>
        {otpGenerated && (
          <label>
            OTP:
            <input
              type="number"
              value={otp}
              onChange={handleOtpChange}
              required
            />
          </label>
        )}
        {!otpGenerated && (
          <button type="button" onClick={handleGenerateOtp}>
            Generate OTP
          </button>
        )}
        {otpGenerated && (
           <Link to="/Clist"><button type="submit" disabled={!formValid}>Submit</button></Link>
        )}
      </form>
    </div>
    </>
  );
}

export default Login
