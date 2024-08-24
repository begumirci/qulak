import Buttons from './Buttons';

export default function BrianFordHeader() {
  return (
    <div className='brian-ford-header d-lg-flex justify-content-between align-items-start '>
      <h3 className=' pb-3 pb-lg-0'>Brian Ford</h3>
      <div className='brian-ford-header-btns d-flex align-items-center justify-content-between '>
        <Buttons />
        <button
          className='padding-10px border radius-1 menu-btn'
          role='button'
          style={{
            backgroundColor: 'var(--white-color)',
            paddingInline: '10px',
          }}
        >
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M9.68746 9.68741H10.3125M9.68746 10.3124H10.3125M3.85413 9.68741H4.47913M3.85413 10.3124H4.47913M15.5208 9.68741H16.1458M15.5208 10.3124H16.1458M10.8335 9.99996C10.8335 10.4602 10.4604 10.8333 10.0002 10.8333C9.53993 10.8333 9.16683 10.4602 9.16683 9.99996C9.16683 9.53972 9.53993 9.16663 10.0002 9.16663C10.4604 9.16663 10.8335 9.53972 10.8335 9.99996ZM5.00016 9.99996C5.00016 10.4602 4.62707 10.8333 4.16683 10.8333C3.70659 10.8333 3.3335 10.4602 3.3335 9.99996C3.3335 9.53972 3.70659 9.16663 4.16683 9.16663C4.62707 9.16663 5.00016 9.53972 5.00016 9.99996ZM16.6668 9.99996C16.6668 10.4602 16.2937 10.8333 15.8335 10.8333C15.3733 10.8333 15.0002 10.4602 15.0002 9.99996C15.0002 9.53972 15.3733 9.16663 15.8335 9.16663C16.2937 9.16663 16.6668 9.53972 16.6668 9.99996Z'
              stroke='var(--menu-icon-color)'
              stroke-width='2'
              stroke-linecap='round'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
