function WideContainer({ children, className }) {
  return (
    <section className={`w-full max-w-7xl px-5 mx-auto ${className}`}>
      {children}
    </section>
  );
}

export default WideContainer;
