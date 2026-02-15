const SectionShell: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return <section className={`px-8 py-4 md:px-28 md:py-16 ${className}`} {...props} />;
};

export default SectionShell;
