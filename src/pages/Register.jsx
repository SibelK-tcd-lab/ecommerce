import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { API } from '../api/axiosInstance';
import { Loader2 } from 'lucide-react';

const Register = () => {
  const [roles, setRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
    defaultValues: { role_id: '3' }
  });

  const selectedRoleId = watch('role_id');

  useEffect(() => {
    API.get('/roles')
      .then((res) => {
        const mappedRoles = res.data.map(role => {
          const nameLower = role.name.toLowerCase();
          if (nameLower === 'müşteri') return { ...role, displayName: 'Client' };
          if (nameLower === 'mağaza') return { ...role, displayName: 'Store' };
          if (nameLower === 'yönetici') return { ...role, displayName: 'Admin' };
          return { ...role, displayName: role.name };
        });
        setRoles(mappedRoles);
      })
      .catch((err) => console.error('Roles could not be loaded:', err));
  }, []);

  const onSubmit = async (data) => {
    setIsLoading(true);
    const payload = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: data.role_id,
    };

    if (data.role_id === '2') {
      payload.store = {
        name: data.storeName,
        phone: data.phone,
        tax_no: data.tax_no,
        bank_account: data.bank_account,
      };
    }

    try {
      await API.post('/signup', payload);
      alert('Registration successful! Please check your email to activate your account.');
      history.goBack();
    } catch (error) {
      alert('Error: ' + (error.response?.data?.message || 'Registration failed.'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] py-12 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md border border-gray-100">
        <h2 className="text-3xl font-black text-[#252B42] text-center mb-8 uppercase tracking-tight">Register</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-bold text-[#252B42] mb-1">Name *</label>
            <input
              {...register('name', { required: 'Name is required', minLength: { value: 3, message: 'Min 3 chars' } })}
              className={`w-full p-3 border rounded-md outline-none ${errors.name ? 'border-red-500' : 'border-gray-200 focus:border-[#23A6F0]'}`}
              placeholder="Full Name"
            />
            {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-bold text-[#252B42] mb-1">Email *</label>
            <input
              {...register('email', { 
                required: 'Email is required', 
                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email' } 
              })}
              className={`w-full p-3 border rounded-md outline-none ${errors.email ? 'border-red-500' : 'border-gray-200 focus:border-[#23A6F0]'}`}
              placeholder="example@mail.com"
            />
            {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-bold text-[#252B42] mb-1">Password *</label>
            <input
              type="password"
              {...register('password', { 
                required: 'Required', 
                minLength: { value: 8, message: 'Min 8 characters' },
                pattern: { 
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message: 'Must include uppercase, lowercase, number and special char'
                }
              })}
              className={`w-full p-3 border rounded-md outline-none ${errors.password ? 'border-red-500' : 'border-gray-200 focus:border-[#23A6F0]'}`}
              placeholder="******"
            />
            {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
          </div>

          {/* Role Selection */}
          <div>
            <label className="block text-sm font-bold text-[#252B42] mb-1">Role *</label>
            <select
              {...register('role_id')}
              className="w-full p-3 border border-gray-200 rounded-md outline-none bg-white cursor-pointer"
            >
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.displayName}
                </option>
              ))}
            </select>
          </div>

          {/* Store Specific Fields */}
          {selectedRoleId === '2' && (
            <div className="space-y-4 p-4 bg-blue-50 rounded-lg border border-blue-100 animate-in fade-in">
              <div>
                <label className="block text-sm font-bold text-[#252B42] mb-1">Store Name *</label>
                <input
                  {...register('storeName', { required: 'Store name required', minLength: 3 })}
                  className="w-full p-3 border border-gray-200 rounded-md outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#252B42] mb-1">Store Phone *</label>
                <input
                  {...register('phone', { 
                    required: 'Phone required', 
                    pattern: { value: /^(\+90|0)?5\d{9}$/, message: 'Valid Türkiye phone required' } 
                  })}
                  placeholder="05XXXXXXXXX"
                  className="w-full p-3 border border-gray-200 rounded-md outline-none"
                />
                {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
              </div>
              <div>
                <label className="block text-sm font-bold text-[#252B42] mb-1">Store Tax ID *</label>
                <input
                  {...register('tax_no', { 
                    required: 'Tax ID required', 
                    pattern: { value: /^T\d{4}V\d{6}$/, message: 'Format: TXXXXVXXXXXX' } 
                  })}
                  placeholder="T1234V123456"
                  className="w-full p-3 border border-gray-200 rounded-md outline-none"
                />
                {errors.tax_no && <span className="text-red-500 text-xs">{errors.tax_no.message}</span>}
              </div>
              <div>
                <label className="block text-sm font-bold text-[#252B42] mb-1">Store Bank Account (IBAN) *</label>
                <input
                  {...register('bank_account', { 
                    required: 'IBAN required', 
                    pattern: { value: /^[A-Z]{2}\d{2}[A-Z0-9]{4,30}$/, message: 'Invalid IBAN' } 
                  })}
                  placeholder="TR..."
                  className="w-full p-3 border border-gray-200 rounded-md outline-none"
                />
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isValid || isLoading}
            className="w-full bg-[#23A6F0] text-white py-4 rounded-md font-bold flex items-center justify-center gap-2 hover:bg-[#1a8cd1] disabled:bg-gray-300 transition-all shadow-md active:scale-[0.98]"
          >
            {isLoading && <Loader2 className="animate-spin" size={20} />}
            {isLoading ? 'Submitting...' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;