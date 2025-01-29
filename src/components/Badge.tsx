interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

function Badge({ children, className }: BadgeProps) {
  return <div className={`bg-[#D1DCEB] text-[var(--button-primary)] py-[6px] px-5 w-fit rounded-3xl font-semibold whitespace-nowrap ${className}`}>{children}</div>;
}

export default Badge;
