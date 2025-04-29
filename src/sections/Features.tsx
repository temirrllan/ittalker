'use client'

import { useState } from 'react';
import { IMaskInput } from 'react-imask';
import { formSchema, formatPhoneInput } from '../utils/validationSchema';
import Badge from "../components/Badge";
import SuccessPopup from '@/components/SuccessPopup';
import type { ValidationError, ApiResponse } from '@/types/form';
import PrivacyNotice from '@/components/PrivacyNotice';
import AnimatedSection from '@/components/AnimatedSection';

interface FormData {
  name: string;
  phone: string;
  email: string;
}

interface FormErrors {
  [key: string]: string;
}

function RecordForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const specializations = [
    'разработчик',
    'бизнес-аналитик',
    'продакт-менеджер',
    'тестировщик',
    'scrum-мастер',
    'системный аналитик',
    'дата-аналитик'
  ];

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
    <section id="courses" className="bg-[var(--bg-section)] text-white py-16 rounded-xl">
      <div className="container flex flex-col md:flex-row gap-16">
        <AnimatedSection className='flex-1' direction="up">
          <h2 className="text-xl md:text-2xl font-semibold mb-6">
            Полный курс SA в тесном <br />
            взаимодействии с преподавателями <br />
            и с практикой в back-end реального <br />
            проекта
          </h2>

          <div className="flex items-center gap-4 mb-8">
            <span className="bg-[#285EA4] px-2 md:px-4 py-2 rounded-3xl font-semibold">10 недель</span>
            <Badge >Набор открыт</Badge>
          </div>

          <p className="text-white mb-12 opacity-70 font-semibold">
            Комплексная программа обучения системному анализу с <br />
            фокусом на практические навыки. Вы научитесь <br />
            проектировать архитектуру, работать с базами данных, API <br />
            и современными инструментами разработки.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Имя"
                  className={`w-full h-[57px] px-6 rounded-[19px] text-base bg-white font-semibold text-black mb-4 ${
                    errors.name ? 'border-2 border-red-500' : ''
                  }`}
                />
                {errors.name && (
                  <span className="text-red-400 text-sm mt-1">{errors.name}</span>
                )}
              </div>
              <div>
                <IMaskInput
                  mask="+{0}(000) 000 00 00"
                  definitions={{
                    '0': /[0-9]/
                  }}
                  value={formData.phone}
                  onAccept={handlePhoneChange}
                  placeholder="Телефон"
                  className={`w-full h-[57px] px-6 rounded-[19px] text-base bg-white font-semibold text-black mb-4 ${
                    errors.phone ? 'border-2 border-red-500' : ''
                  }`}
                />
                {errors.phone && (
                  <span className="text-red-400 text-sm mt-1">{errors.phone}</span>
                )}
              </div>
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className={`w-full h-[57px] px-6 rounded-[19px] text-base bg-white font-semibold text-black mb-4 ${
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
              className="w-full bg-[var(--button-primary)] font-semibold text-white py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {isSubmitting ? 'Отправка...' : 'Записаться'}
            </button>
            <PrivacyNotice />
          </form>

          <p className="text-sm mt-4 text-[var(--white)] opacity-80 font-semibold">
            Запишись на живой митинг с преподавателем, чтобы в режиме <br />
            тестового собеседования узнать о своих пробелах!
          </p>
        </AnimatedSection>

        {/* white separator */}
        <div className="w-full px-8 md:h-full md:w-1">
          <div className="w-full h-px md:h-full md:w-px bg-white opacity-20"></div>
        </div>

        {/* Right Column */}
        <AnimatedSection className="flex-1" delay={0.2} direction="up">
          <h3 className="text-2xl mb-6 font-semibold">
            Чтобы понимать программу, нужно <br />
            иметь хотя бы базовое понимание IT
          </h3>

          <p className="mb-6 opacity-70 text-xl font-semibold">
            Курсы принесут максимальную пользу для <br />
            следующих специалистов уровня junior/<br />
            middle:
          </p>

          <div className="flex flex-wrap gap-3 pt-4 max-w-[400px]">
            {specializations.map((spec) => (
              <Badge
                key={spec}
                className='text-lg'
              >
                {spec}
              </Badge>
            ))}
          </div>
        </AnimatedSection>
      </div>

      <SuccessPopup 
        isOpen={showSuccess} 
        onClose={() => setShowSuccess(false)} 
      />
    </section>
  );
}

export default RecordForm;
