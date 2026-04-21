import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { API } from '../api/axiosInstance';
import { Loader2 } from 'lucide-react';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await API.post('/login', data);
      
      // Store token
      localStorage.setItem('token', response.data.token);
      
      alert('Login successful! Redirecting to home...');
      history.push('/'); 
    } catch (error) {
      alert('Error: ' + (error.response?.data?.message || 'Login failed. Please check your credentials.'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#FAFAFA] py-12 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md border border-gray-100">
        <h2 className="text-3xl font-black text-[#252B42] text-center mb-8 uppercase tracking-tight">Login</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-bold text-[#252B42] mb-1">Email *</label>
            <input
              {...register('email', { 
                required: 'Email is required', 
                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Please enter a valid email' } 
              })}
              className={`w-full p-3 border rounded-md outline-none transition-all ${errors.email ? 'border-red-500' : 'border-gray-200 focus:border-[#23A6F0]'}`}
              placeholder="example@mail.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-bold text-[#252B42] mb-1">Password *</label>
            <input
              type="password"
              {...register('password', { required: 'Password is required' })}
              className={`w-full p-3 border rounded-md outline-none transition-all ${errors.password ? 'border-red-500' : 'border-gray-200 focus:border-[#23A6F0]'}`}
              placeholder="******"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1 font-medium">{errors.password.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isValid || isLoading}
            className="w-full bg-[#23A6F0] text-white py-4 rounded-md font-bold flex items-center justify-center gap-2 hover:bg-[#1a8cd1] disabled:bg-gray-300 transition-all shadow-md active:scale-[0.98]"
          >
            {isLoading && <Loader2 className="animate-spin" size={20} />}
            {isLoading ? 'Logging in...' : 'Login'}
          </button>

          <p className="text-center text-sm text-[#737373] mt-4">
            Don't have an account?{' '}
            <button 
              type="button" 
              onClick={() => history.push('/signup')} 
              className="text-[#23A6F0] font-bold hover:underline"
            >
              Register
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;