import data from '../data';
import { useState } from 'react';

export default function MobilNav() {
  const [activeId, setActiveId] = useState(null);
  const [subId, setSubId] = useState(null);

  const handleToggle = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
    setSubId(null);
  };

  return (
    <div
      className='offcanvas offcanvas-end d-lg-none'
      tabIndex='-1'
      data-bs-backdrop='false'
      id='offcanvasExample'
      aria-labelledby='offcanvasExampleLabel'
    >
      <header className='padding-inline-20px canvas__profile-cart d-flex align-items-center justify-content-between border-bottom'>
        <div className='d-flex align-items-center justify-content-between py-4'>
          <img src='/sidebarIcons/AvataravatarBrian.svg' alt='' />
          <h6>Briand Ford</h6>
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='var(--text-color)'
          className='bi bi-arrow-right'
          viewBox='0 0 16 16'
          type='button'
          data-bs-dismiss='offcanvas'
          aria-label='Close'
        >
          <path
            fillRule='evenodd'
            d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8'
          />
        </svg>
      </header>

      <div className='d-flex flex-column gap-2'>
        {data[0].mobilNavbar.map((x) => (
          <div key={x.id}>
            {x.subCategory ? (
              <div
                className={`mobilNav-list__item ${
                  activeId === x.id ? 'active' : ''
                }`}
              >
                <div
                  className='mobilNav-list__title d-flex align-items-center justify-content-between gap-2 padding-inline-20px'
                  onClick={() => handleToggle(x.id)}
                >
                  <div className='d-flex gap-3'>
                    <div>{x.icon}</div>
                    <h6>{x.name}</h6>
                  </div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='var(--text-color)'
                    viewBox='0 0 16 16'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4'
                    />
                  </svg>
                </div>

                <div
                  className={`collapse ps-5 ${activeId === x.id ? 'show' : ''}`}
                >
                  <div className='row mt-2'>
                    {x.subCategory.map((sub) => (
                      <div
                        key={sub.id}
                        className={`collapse__item col-12 d-flex align-items-center gap-3 py-2 px-2 ${
                          sub.id === subId ? 'active' : ''
                        }`}
                        onClick={() => setSubId(sub.id)}
                      >
                        <div>{sub.icon}</div>
                        <h6>{sub.title}</h6>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className='mobilNav-list__item'>
                <div className='mobilNav-list__title d-flex align-items-center gap-3 padding-inline-20px'>
                  <div>{x.icon}</div>
                  <h6>{x.name}</h6>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
