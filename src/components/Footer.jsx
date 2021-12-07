const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='Footer'>
      <p>Copyright &copy; {currentYear}</p>
    </footer>
  );
};

export default Footer;
