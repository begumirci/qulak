import { useState } from 'react';
import data from '../data';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Canvas({ isOpenCanvas, toggleCanvas, id }) {
  const [active, setActive] = useState('');

  const percentage = 75;
  return (
    <div
      className={`canvas_all d-none d-lg-block  border-end ${
        isOpenCanvas ? 'show' : ''
      }`}
    >
      <div className='canvas d-flex flex-column justify-content-between'>
        <div className='canvas__top'>
          <div className='canvas__title d-flex align-items-center gap-2'>
            <svg
              width='18'
              height='18'
              viewBox='0 0 18 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              aria-label='Close'
              onClick={toggleCanvas}
              role='button'
            >
              <path
                d='M10.4999 4.5L6.53022 8.46967C6.23732 8.76256 6.23732 9.23744 6.53022 9.53033L10.4999 13.5'
                stroke='var(--text-color)'
                stroke-width='1.67'
                stroke-linecap='round'
              />
            </svg>

            <h3>Lookscout Dashboard</h3>
          </div>
          <div className='canvas-list__input '>
            <input
              type='text'
              className='form-control'
              placeholder='Search...'
            />
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M22.2929 23.7071C22.6834 24.0976 23.3166 24.0976 23.7071 23.7071C24.0976 23.3166 24.0976 22.6834 23.7071 22.2929L22.2929 23.7071ZM18.1176 10.0588C18.1176 14.5096 14.5096 18.1176 10.0588 18.1176V20.1176C15.6142 20.1176 20.1176 15.6142 20.1176 10.0588H18.1176ZM10.0588 18.1176C5.60806 18.1176 2 14.5096 2 10.0588H0C0 15.6142 4.50349 20.1176 10.0588 20.1176V18.1176ZM2 10.0588C2 5.60806 5.60806 2 10.0588 2V0C4.50349 0 0 4.50349 0 10.0588H2ZM10.0588 2C14.5096 2 18.1176 5.60806 18.1176 10.0588H20.1176C20.1176 4.50349 15.6142 0 10.0588 0V2ZM15.8223 17.2365L22.2929 23.7071L23.7071 22.2929L17.2365 15.8223L15.8223 17.2365Z'
                fill='#919BA7'
              />
            </svg>
          </div>
          <div className='canvas-list d-flex flex-column gap-1'>
            {data[0].canvasList.map(
              (item) =>
                id == item.id && (
                  <div key={item.id} role='button'>
                    <div className='canvas-list d-flex flex-column gap-1'>
                      {item.general.map((x) => (
                        <div
                          key={x.id}
                          className={` canvas-list__item d-flex align-items-center ${
                            isOpenCanvas && x.id == active ? 'active' : ''
                          }`}
                          onClick={() => setActive(x.id)}
                        >
                          <div className='canvas-list__img'>{x.icon}</div>
                          <h6>{x.title}</h6>
                        </div>
                      ))}
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
        <div style={{ flexGrow: '1' }}></div>
        <div className='canvas__bottom'>
          <div className='canvas__profile-cart d-flex align-items-center justify-content-between'>
            <div className='d-flex align-items-center'>
              <img src='/sidebarIcons/AvataravatarBrian.svg' alt='' />
              <h6>Briand Ford</h6>
            </div>
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

          <div className='card px-3 pb-3'>
            <div className='card__top d-flex  justify-content-between '>
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  textColor: 'var(--blue-color)',
                  pathColor: 'var(--blue-color)',
                  trailColor: 'var(--canvas-card-bg)',
                })}
              />

              <div
                className='align-self-start'
                style={{ paddingBlock: '10px' }}
              >
                <img src='/sidebarIcons/Iconclose.svg' alt='' role='button' />
              </div>
            </div>

            <h5 className='mt-2 mb-1'>Subscription Plan</h5>
            <p className='card-text'>
              Your Subscription plan will expire soon please upgrade!
            </p>
            <button className='mt-3 align-self-start' role='button'>
              Upgrade
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
