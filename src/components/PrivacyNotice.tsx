export default function PrivacyNotice() {
  return (
    <p className="text-xs text-[var(--white)] opacity-60 mt-2 font-semibold">
      Нажимая кнопку, вы соглашаетесь с{' '}
      <a 
        href="https://docs.google.com/document/d/1Epqh7OKKUHqlHV7qO9UelqGcr0OdHtTQNaBWlJKIAWQ/edit?tab=t.0" 
        target="_blank" 
        rel="noopener noreferrer"
        className="underline hover:opacity-80"
      >
        Договором публичной Оферты
      </a>
    </p>
  );
} 