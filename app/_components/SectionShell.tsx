const SectionShell: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return <section className={`px-28 py-16 ${className}`} {...props} />;
};

export default SectionShell;
