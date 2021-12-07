import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';
import useDeviceType from '../hooks/useDeviceType';

const Header = () => {
  const { width } = useDeviceType();
  return (
    <header className='Header'>
      <h1>TechShorts</h1>
      {width < 768 ? (
        <FaMobileAlt />
      ) : width < 992 ? (
        <FaTabletAlt />
      ) : (
        <FaLaptop />
      )}
    </header>
  );
};

export default Header;
