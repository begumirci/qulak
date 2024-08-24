import data from '../data';

export default function Team() {
  return (
    <div className='card-general '>
      <div className='d-flex flex-column  '>
        <div className='team-list__title px-4 py-3 d-flex justify-content-between'>
          <h3>Lookscout Team</h3>
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
        <div className='team-list px-4 border-bottom'>
          {data[0].lookscoutTeam.map((info, index) => (
            <div
              className='team-list__item  py-3 d-flex  align-items-center justify-content-between border-bottom  '
              key={index}
            >
              <div className='d-flex  align-items-center gap-10px'>
                <img src='./public/Avatar.svg' alt='' />
                <div>
                  <h6>{info.name}</h6>
                  <p>{info.job}</p>
                </div>
              </div>
              <div className=' d-flex  align-items-center gap-10px'>
                <button
                  className={
                    info.status == 'Online' ? 'online px-2 ' : 'offline px-2 '
                  }
                  style={{ paddingBlock: '2px' }}
                >
                  {info.status}
                </button>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='20px'
                  viewBox='0 -960 960 960'
                  width='20px'
                  fill='var(--dark-color)'
                >
                  <path d='m288-96-68-68 316-316-316-316 68-68 384 384L288-96Z' />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <button
          className=' team-list__btn mx-4  py-2 text-white  my-3 '
          style={{ backgroundColor: 'var(--blue-color)' }}
          role='button'
        >
          View All
        </button>
      </div>
    </div>
  );
}
