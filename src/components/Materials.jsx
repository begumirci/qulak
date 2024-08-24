import data from '../data';

export default function Materials() {
  return (
    <div className='card-general '>
      <div className=' d-flex flex-column  '>
        <div className='file-upload-list__title px-4 py-3   d-flex justify-content-between  '>
          <h3>Updated Materials</h3>
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='var(--menu-icon-color)'
            xmlns='http://www.w3.org/2000/svg'
            role='button'
          >
            <path
              d='M9.68746 9.68741H10.3125M9.68746 10.3124H10.3125M3.85413 9.68741H4.47913M3.85413 10.3124H4.47913M15.5208 9.68741H16.1458M15.5208 10.3124H16.1458M10.8335 9.99996C10.8335 10.4602 10.4604 10.8333 10.0002 10.8333C9.53993 10.8333 9.16683 10.4602 9.16683 9.99996C9.16683 9.53972 9.53993 9.16663 10.0002 9.16663C10.4604 9.16663 10.8335 9.53972 10.8335 9.99996ZM5.00016 9.99996C5.00016 10.4602 4.62707 10.8333 4.16683 10.8333C3.70659 10.8333 3.3335 10.4602 3.3335 9.99996C3.3335 9.53972 3.70659 9.16663 4.16683 9.16663C4.62707 9.16663 5.00016 9.53972 5.00016 9.99996ZM16.6668 9.99996C16.6668 10.4602 16.2937 10.8333 15.8335 10.8333C15.3733 10.8333 15.0002 10.4602 15.0002 9.99996C15.0002 9.53972 15.3733 9.16663 15.8335 9.16663C16.2937 9.16663 16.6668 9.53972 16.6668 9.99996Z'
              stroke='var(--menu-icon-color)'
              strokeWidth='2'
              strokeLinecap='round'
            />
          </svg>
        </div>
        <div className='file-upload-list px-4  border-top-bottom '>
          {data[0].materials.map((info, index) => (
            <div
              key={index}
              className='file-upload-list__item py-3 d-flex  align-items-center justify-content-between  border-bottom  '
            >
              <div className='d-flex  align-items-center gap-10px'>
                <img src={info.img} alt='' style={{ cursor: 'pointer' }} />

                <div>
                  <h6>{info.title}</h6>
                  <p>{info.subtitle}</p>
                </div>
              </div>
              <div role='button'>{info.icon}</div>
            </div>
          ))}
        </div>
        <div className='file-upload-list__buttons px-4 my-3 d-flex gap-2   '>
          <button
            className='py-2 fw-bold  border w-100 '
            style={{
              color: 'var(--dark-color)',
              backgroundColor: 'var(--white-color)',
            }}
            role='button'
          >
            Cancel
          </button>
          <button
            className='py-2 text-white   w-100'
            style={{ backgroundColor: 'var(--blue-color)' }}
            role='button'
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}
