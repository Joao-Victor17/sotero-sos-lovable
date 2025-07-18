
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const LoadingSpinner = ({ size = 'md', className = '' }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  return (
    <div className={`flex flex-col items-center justify-center gap-4 ${className}`}>
      <div className={`animate-spin rounded-full border-2 border-sotero-blue border-t-transparent ${sizeClasses[size]}`} />
      <p className="text-sotero-blue text-sm font-medium">Carregando...</p>
    </div>
  );
};
