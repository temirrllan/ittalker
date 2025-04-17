'use client'

import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import Rules from "@/sections/Rules";
import Analyze from "@/sections/Analyze";
import Reviews from "@/sections/Reviews";
import Team from "@/sections/Team";
import { useState } from "react";
import PriceSection from "@/sections/PriceSection";
import ConsultationForm from "@/sections/ConsultationForm";
import ConsultationModal from "@/components/ConsultationModal";
import FAQ from '@/sections/FAQ';

const questions = [
  'Я новичок в айти. Смогу ли я понять ваш курс?',
  'Я уже работаю SA или в IT-профессии. Будет ли мне полезен ваш курс?',
  'Вы трудоустраиваете после обучения?',
  'Есть ли рассрочка?',
  'Может ли компания оплатить мое обучение?'
];

const answers = [
  'Да, сможете! Половина учебного процесса проходит в формате воркшопов: на еженедельной онлайн-встрече лектор объясняет вам материал и отвечает на ваши вопросы. Поэтому у нас гибкая система обучения - опытных мы отправляем к опытным, новичков к новичкам. В группе для новичков материал объясняется более доступным языком со множеством примеров.',
  'Мы предусмотрели разделение опытных и начинающих учеников. В группу опытных мы добавляем тех, кто уже работает в какой-либо IT-профессии. Эту группу ведут сильные лекторы, которые способны обогатить профессиональный опыт ученика новыми нюансами. Поскольку все ученики в такой группе примерно одного уровня, лектору не придется долго объяснять базу и вы сможете быстро перейти к интересным нюансам, которые отделяют вас от желанного грейда.\nПоэтому да, курс будет вам полезен!',
  'Да! Но при соблюдении трех условий:\n1. Ученик проходил обучение по тарифам "С обратной связью" или "Премиум";\n2. Ученик выполнил все домашние задания на проходной балл в течение трех месяцев обучения;\n3. Ученик успешно прошел финальный экзамен у лектора.\n\nПосле экзамена, при соблюдении всех условий с вашей стороны, мы обязуемся предоставить вам одно собеседование в компанию одного из наших партнеров. Опытным ищем оффер, а новичкам - практику, после которой работодатель по своему усмотрению оставляет вас в штате с окладом.',
  'Да, вы можете купить курс в рассрочку 0-0-12. Ежемесячный платеж вы увидите ниже в разделе "Тарифы". Оставляйте заявку и наш куратор ответит на все ваши вопросы :)',
  'Конечно! Мы работаем с любой казахстанской компанией. Ограничений на число обучаемых нет, длительность обучения и цена для корпоративного сектора не меняется*. Ученики, как и все остальные, получат сертификат в конце обучения. Мы поможем с оформлением бумаг и возьмем на себя расходы по документообороту. Пишите на почту info@ittalker.kz, чтобы наш менеджер проконсультировал вас!\n\n*акции, скидки и промокоды не применяются.'
];


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="relative w-full overflow-x-hidden">
      <Navbar openModal={openModal} />
      <Hero openModal={openModal} />
      <Analyze openModal={openModal} />
      <Rules openModal={openModal} />
      <Team openModal={openModal} />
      <Reviews openModal={openModal} />
      <FAQ questions={questions} answers={answers}/>
      <PriceSection openModal={openModal} /> 
      <ConsultationForm isHome='true'/>
      <Footer />
      
      <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}