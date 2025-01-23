'use client'

import { useState } from 'react';
import { IMaskInput } from 'react-imask';
import { formSchema, formatPhoneInput } from '@/utils/validationSchema';
import SuccessPopup from './SuccessPopup';
import type { ValidationError, ApiResponse } from '@/types/form';

interface FormData {
  name: string;
  phone: string;
  email: string;
}

interface FormErrors {
  [key: string]: string;
}

interface HeroFormProps {
  className?: string;
}

function HeroForm({ className = '' }: HeroFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handlePhoneChange = (value: string) => {
    const formattedValue = formatPhoneInput(value);
    setFormData(prev => ({
      ...prev,
      phone: formattedValue
    }));
    if (errors.phone) {
      setErrors(prev => ({
        ...prev,
        phone: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      await formSchema.validate(formData, { abortEarly: false });
      
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json() as ApiResponse;
      
      if (result.success) {
        setShowSuccess(true);
        setFormData({ name: '', phone: '', email: '' });
      } else {
        throw new Error(result.error || 'Failed to submit form');
      }
    } catch (err) {
      const error = err as ValidationError;
      if (error.inner) {
        const newErrors: FormErrors = {};
        error.inner.forEach((err) => {
          if (err.path) {
            newErrors[err.path] = err.message;
          }
        });
        setErrors(newErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={`flex flex-col md:flex-row gap-2 md:gap-5 ${className}`}>
        <div className="flex-1">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Имя"
            className={`w-full h-[57px] px-6 rounded-[19px] text-base bg-white mb-4 ${
              errors.name ? 'border-2 border-red-500' : ''
            }`}
          />
          {errors.name && (
            <span className="text-red-400 text-sm mt-1">{errors.name}</span>
          )}
        </div>

        <div className="flex-1">
          <IMaskInput
            mask="+7(000) 000 00 00"
            value={formData.phone}
            onAccept={handlePhoneChange}
            placeholder="+7(777) 777 77 77"
            className={`w-full h-[57px] px-6 rounded-[19px] text-base bg-white mb-4 ${
              errors.phone ? 'border-2 border-red-500' : ''
            }`}
          />
          {errors.phone && (
            <span className="text-red-400 text-sm mt-1">{errors.phone}</span>
          )}
        </div>

        <div className="flex-1">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className={`w-full h-[57px] px-6 rounded-[19px] text-base bg-white mb-4 ${
              errors.email ? 'border-2 border-red-500' : ''
            }`}
          />
          {errors.email && (
            <span className="text-red-400 text-sm mt-1">{errors.email}</span>
          )}
        </div>

        <button 
          type="submit"
          disabled={isSubmitting}
          className={`h-[57px] px-8 md:px-12 bg-[#006DFC] text-white rounded-[19px] font-semibold text-base hover:opacity-90 transition-opacity whitespace-nowrap
            ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'Отправка...' : 'Записаться'}
        </button>
      </form>

      <SuccessPopup 
        isOpen={showSuccess} 
        onClose={() => setShowSuccess(false)} 
      />
    </>
  );
}

export default HeroForm;
