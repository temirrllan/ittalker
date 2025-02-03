'use client'

import { useState } from 'react';
import { IMaskInput } from 'react-imask';
import { formSchema, formatPhoneInput } from '@/utils/validationSchema';
import type { ValidationError, ApiResponse } from '@/types/form';
import SuccessPopup from '@/components/SuccessPopup';
import PrivacyNotice from '@/components/PrivacyNotice';
import AnimatedSection from '@/components/AnimatedSection';
import Tooltip from '@/components/Tooltip';

interface FormData {
  name: string;
  phone: string;
  email: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function PriceSection() {
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
    setErrors({});
    
    try {
      setIsSubmitting(true);
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
    <section id="contacts" className="bg-[var(--bg-section)] text-white py-16 rounded-t-3xl">
      <div className="container">
        <AnimatedSection>
          <div className="w-60 md:w-fit grid md:flex items-center gap-4 mb-12 bg-[var(--bg-medium-card)] rounded-3xl px-6 py-4">
            <Tooltip text="С января 2025 года цена будет 600 000 тенге">
              <h3 className="text-2xl opacity-80 hidden md:block cursor-help font-semibold">
                Второй поток:
              </h3>
            </Tooltip>
            <h3 className="text-sm opacity-80 block md:hidden">
              Стоимость обучения для второго потока:
            </h3>
            <span className="text-xl md:text-4xl font-semibold">
              500 000 тенге
            </span>
          </div>
        </AnimatedSection>

        <div className="max-w-5xl flex flex-col-reverse md:flex-col">
          <AnimatedSection delay={0.2}>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-4 gap-4 mb-8">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Имя"
                  className={`w-full h-[57px] px-6 rounded-[19px] text-base bg-white font-semibold text-black ${
                    errors.name ? 'border-2 border-red-500' : ''
                  }`}
                />
                {errors.name && (
                  <span className="text-red-400 text-sm mt-1">{errors.name}</span>
                )}
              </div>
              <div>
                <IMaskInput
                  mask="+7(000) 000 00 00"
                  value={formData.phone}
                  onAccept={handlePhoneChange}
                  placeholder="Телефон"
                  className={`w-full h-[57px] px-6 rounded-[19px] text-base bg-white font-semibold text-black ${
                    errors.phone ? 'border-2 border-red-500' : ''
                  }`}
                />
                {errors.phone && (
                  <span className="text-red-400 text-sm mt-1">{errors.phone}</span>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className={`w-full h-[57px] px-6 rounded-[19px] text-base bg-white font-semibold text-black ${
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
                className="h-[57px] px-8 md:px-12 bg-[#006DFC] text-white rounded-[19px] font-semibold text-base hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                {isSubmitting ? 'Отправка...' : 'Записаться на курс'}
              </button>
              <div className="col-span-full">
                <PrivacyNotice />
              </div>

              <span className="text-sm block md:hidden opacity-80 mt-4">*С 21.02.2025 стоимость курсов вырастет на 50% и составит 600 000 тенге</span>
            </form>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <div className="flex items-start w-full gap-8">
              <Tooltip text="*С 21.02.2025 стоимость курсов составит 600 000 тенге">
                <h2 className="text-2xl md:text-5xl font-semibold mb-4 md:mb-0 max-w-7xl cursor-help">
                  Запишись на курсы сейчас, <br />
                  пока действует низкая цена!
                </h2>
              </Tooltip>
              <img 
                src="/assets/arrow-up.svg" 
                alt="arrow" 
                className="w-24 h-24 hidden md:block"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>

      <SuccessPopup 
        isOpen={showSuccess} 
        onClose={() => setShowSuccess(false)} 
      />
    </section>
  );
} 