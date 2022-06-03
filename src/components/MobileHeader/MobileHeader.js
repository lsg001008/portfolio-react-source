import NavbarToggle from '../NavbarToggle/NavbarToggle';
import styles from './MobileHeader.module.css';
import classNames from 'classnames/bind';
import FlexBox from '../../core/FlexBox/FlexBox';

const cx = classNames.bind(styles);

const MobileHeader = () => {
  return (
    <div className={cx('MobileHeader')}>
      <FlexBox alignItems='center' justifyContent='space-between'>
        <NavbarToggle />
        <p>Test Logo</p>
        <div>User Icon</div>
      </FlexBox>
    </div>
  );
};

export default MobileHeader;
