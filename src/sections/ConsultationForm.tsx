'use client'

import { useState } from 'react';
import { IMaskInput } from 'react-imask';
import { formSchema, formatPhoneInput } from '@/utils/validationSchema';
import type { ValidationError, ApiResponse } from '@/types/form';
import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';

interface ConsultationFormProps {
  bgColor?: string;
  textColor?: string;
  title?: string;
  description?: string;
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

const ConsultationForm = ({ bgColor, textColor }: ConsultationFormProps) => {
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
        setFormData({ name: '', phone: '', email: '', promocode: '' });
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
    <section className={`${bgColor || 'bg-white'} relative w-full py-12 md:py-16 lg:py-48`}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <AnimatedSection direction="left">
            <div className="max-w-[50rem]">
            <h2 className={`text-[2rem] md:text-[2.2rem] lg:text-[2.5rem] font-semibold leading-[129%] tracking-[-0.01em] mb-2 ${textColor || 'text-[#010024]'}`}>
              Узнай больше о системном анализе
            </h2>
            <p className={`text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] font-semibold leading-[129%] tracking-[-0.01em] opacity-80 mb-4 lg:mb-8 ${textColor || 'text-[#010024]'}`}>
              Оставь заявку и мы вас проконсультируем
            </p>

              <form onSubmit={handleSubmit} className="max-w-[50rem]">
                <div className="grid md:grid-cols-2 gap-3 lg:gap-4 mb-4 lg:mb-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Имя"
                      className={`w-full h-[3rem] md:h-[3.5rem] lg:h-[4.5rem] px-4 lg:px-6 rounded-[1.5rem] text-[0.875rem] md:text-[1rem] lg:text-[1.25rem] bg-[#F1F1F1] font-medium text-black placeholder-black/40 ${
                        errors.name ? 'border-2 border-red-500' : ''
                      }`}
                    />
                    {errors.name && (
                      <span className="text-red-400 text-sm mt-1">{errors.name}</span>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className={`w-full h-[3rem] md:h-[3.5rem] lg:h-[4.5rem] px-4 lg:px-6 rounded-[1.5rem] text-[0.875rem] md:text-[1rem] lg:text-[1.25rem] bg-[#F1F1F1] font-medium text-black placeholder-black/50 ${
                        errors.email ? 'border-2 border-red-500' : ''
                      }`}
                    />
                    {errors.email && (
                      <span className="text-red-400 text-sm mt-1">{errors.email}</span>
                    )}
                  </div>
                  <div>
                    <IMaskInput
                      mask="+7(000) 000 00 00"
                      value={formData.phone}
                      onAccept={handlePhoneChange}
                      placeholder="Телефон"
                      className={`w-full h-[3rem] md:h-[3.5rem] lg:h-[4.5rem] px-4 lg:px-6 rounded-[1.5rem] text-[0.875rem] md:text-[1rem] lg:text-[1.25rem] bg-[#F1F1F1] font-medium text-black placeholder-black/40 ${
                        errors.phone ? 'border-2 border-red-500' : ''
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-red-400 text-sm mt-1">{errors.phone}</span>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="promocode"
                      value={formData.promocode}
                      onChange={handleChange}
                      placeholder="Промокод"
                      className={`w-full h-[3rem] md:h-[3.5rem] lg:h-[4.5rem] px-4 lg:px-6 rounded-[1.5rem] text-[0.875rem] md:text-[1rem] lg:text-[1.25rem] bg-[#F1F1F1] font-medium text-black placeholder-black/50 ${
                        errors.promocode ? 'border-2 border-red-500' : ''
                      }`}
                    />
                    {errors.promocode && (
                      <span className="text-red-400 text-sm mt-1">{errors.promocode}</span>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-[20rem] h-[3rem] md:h-[3.5rem] lg:h-[4.5rem] bg-[#006DFC] text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] font-semibold text-white rounded-[1.5rem] hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isSubmitting ? 'Отправка...' : 'Записаться на курс'}
                </button>
              </form>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="relative hidden lg:block">
            <div className="absolute right-0 w-full max-w-[40rem] h-auto aspect-square">
              <div className="relative w-full max-w-[32rem] h-auto aspect-square bg-[#5A7EBC] opacity-70 rounded-[2rem]" />
              <Image
                src="/assets/graduation-hats.png"
                alt="Graduation Hats"
                width={734}
                height={734}
                className="absolute top-0 right-0 w-full h-auto"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm; 