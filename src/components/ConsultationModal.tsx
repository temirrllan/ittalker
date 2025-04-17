'use client'

import { useState } from 'react';
import { IMaskInput } from 'react-imask';
import { formSchema, formatPhoneInput } from '@/utils/validationSchema';
import type { ValidationError, ApiResponse } from '@/types/form';
import Image from 'next/image';

interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  promocode: string;
}

interface FormErrors {
  [key: string]: string;
}

const ConsultationModal = ({ isOpen, onClose }: ModalFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    promocode: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handlePhoneChange = (value: string) => {
    const formattedValue = formatPhoneInput(value);
    setFormData(prev => ({ ...prev, phone: formattedValue }));
    if (errors.phone) setErrors(prev => ({ ...prev, phone: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    try {
      setIsSubmitting(true);
      await formSchema.validate(formData, { abortEarly: false });

      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json() as ApiResponse;

      if (result.success) setFormData({ name: '', phone: '', email: '', promocode: '' });
      else throw new Error(result.error || 'Failed to submit form');
    } catch (err) {
      const error = err as ValidationError;
      if (error.inner) {
        const newErrors: FormErrors = {};
        error.inner.forEach(err => { if (err.path) newErrors[err.path] = err.message });
        setErrors(newErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="bg-white w-full max-w-md rounded-2xl p-6 relative">
        <button onClick={onClose} className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl">×</button>
        <h2 className="text-3xl font-bold text-center mb-3">Узнай больше о системном анализе</h2>
        <p className="text-sm text-center text-gray-600 mb-6">Оставь заявку и мы вас проконсультируем</p>
        <form onSubmit={handleSubmit} className="grid gap-3">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Имя"
            className={`h-12 px-4 rounded-xl bg-gray-100 text-sm ${errors.name ? 'border border-red-500' : ''}`}
          />
          {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className={`h-12 px-4 rounded-xl bg-gray-100 text-sm ${errors.email ? 'border border-red-500' : ''}`}
          />
          {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}

          <IMaskInput
            mask="+7(000) 000 00 00"
            value={formData.phone}
            onAccept={handlePhoneChange}
            placeholder="Телефон"
            className={`h-12 px-4 rounded-xl bg-gray-100 text-sm ${errors.phone ? 'border border-red-500' : ''}`}
          />
          {errors.phone && <span className="text-red-500 text-xs">{errors.phone}</span>}

          <input
            type="text"
            name="promocode"
            value={formData.promocode}
            onChange={handleChange}
            placeholder="Промокод"
            className={`h-12 px-4 rounded-xl bg-gray-100 text-sm ${errors.promocode ? 'border border-red-500' : ''}`}
          />
          {errors.promocode && <span className="text-red-500 text-xs">{errors.promocode}</span>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="h-12 bg-[#006DFC] text-white rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 mt-2"
          >
            {isSubmitting ? 'Отправка...' : 'Записаться на курс'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationModal;
