interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
    className?: string;
  }
  
  export default function SectionHeader({ 
    title, 
    subtitle, 
    centered = false, 
    className = '' 
  }: SectionHeaderProps) {
    return (
      <div className={`${centered ? 'text-center' : ''} ${className}`}>
        <h2 className="heading-2 text-gray-900 mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="body-large text-gray-600 max-w-3xl">
            {subtitle}
          </p>
        )}
      </div>
    );
  }