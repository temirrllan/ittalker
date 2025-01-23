interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

function Badge({ children, className }: BadgeProps) {
  return <div className={`bg-[#D1DCEB] text-[var(--button-primary)] py-2 px-4 w-fit rounded-xl  whitespace-nowrap ${className}`}>{children}</div>;
}

export default Badge;
