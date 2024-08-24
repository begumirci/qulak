import data from '../data';

export default function Cards() {
  return (
    <div className='d-flex flex-wrap gap-20px'>
      {data[0].cards.map((x, index) => (
        <div key={index} className='flex-fill '>
          <div className='card-general padding-inline-20px'>
            <div className='cards__item py-3  d-flex justify-content-between'>
              <h3>{x.title}</h3>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='var(--menu-icon-color)'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9.68746 9.68741H10.3125M9.68746 10.3124H10.3125M3.85413 9.68741H4.47913M3.85413 10.3124H4.47913M15.5208 9.68741H16.1458M15.5208 10.3124H16.1458M10.8335 9.99996C10.8335 10.4602 10.4604 10.8333 10.0002 10.8333C9.53993 10.8333 9.16683 10.4602 9.16683 9.99996C9.16683 9.53972 9.53993 9.16663 10.0002 9.16663C10.4604 9.16663 10.8335 9.53972 10.8335 9.99996ZM5.00016 9.99996C5.00016 10.4602 4.62707 10.8333 4.16683 10.8333C3.70659 10.8333 3.3335 10.4602 3.3335 9.99996C3.3335 9.53972 3.70659 9.16663 4.16683 9.16663C4.62707 9.16663 5.00016 9.53972 5.00016 9.99996ZM16.6668 9.99996C16.6668 10.4602 16.2937 10.8333 15.8335 10.8333C15.3733 10.8333 15.0002 10.4602 15.0002 9.99996C15.0002 9.53972 15.3733 9.16663 15.8335 9.16663C16.2937 9.16663 16.6668 9.53972 16.6668 9.99996Z'
                  stroke='var(--menu-icon-color)'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
              </svg>
            </div>
            <div className='d-flex align-items-center justify-content-between pb-3'>
              <div className='d-flex flex-column gap-12px'>
                <h2 style={{ color: 'var(--dark-color)' }}>${x.price}</h2>
                <div className='d-flex align-items-center gap-2'>
                  <p
                    style={{
                      fontSize: '13px',
                      lineHeight: '18px',
                      paddingBlock: '2px',
                      color:
                        x.status === 'New'
                          ? 'var(--text-blue-color)'
                          : x.status === 'Global'
                          ? 'var(--red-color)'
                          : 'var(--green-color)',
                      backgroundColor:
                        x.status === 'New'
                          ? 'var(--background-blue-color)'
                          : x.status === 'Global'
                          ? 'var(--background-red-color)'
                          : 'var(--background-green-color)',
                    }}
                    className='px-2 rounded-1'
                  >
                    {x.status}
                  </p>
                  <p>{x.inform}</p>
                </div>
              </div>
              <img src={x.img} alt='' />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
