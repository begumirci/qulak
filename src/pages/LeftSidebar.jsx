import { useContext } from 'react';
import data from '../data';
import { ContextData } from '../store/Provider';

export default function MainSidebar({ toggleCanvas, isOpenCanvas, id, setId }) {
  const { changeTheme, theme, canvasOpen } = useContext(ContextData);
  console.log(theme);

  function handleClickIcon(icon) {
    if (icon === id) {
      toggleCanvas();
    } else {
      setId(icon);
      canvasOpen();
    }
  }

  return (
    <div className='sidebar_all d-none d-lg-block  border-end '>
      <div className='sidebar-list px-3 pt-3 d-flex flex-column justify-content-between  '>
        <div className='sidebar-list__top d-flex flex-column gap-1 '>
          {data[0].sidebarIcons.map((icon) => (
            <div
              key={icon.id}
              role='button'
              className={`sidebar-list__item  ${
                isOpenCanvas && icon.id == id ? 'active' : ''
              }`}
              onClick={() => handleClickIcon(icon.id)}
            >
              <div>{icon.icon}</div>
            </div>
          ))}
        </div>

        <div className='sidebar-list__bottom d-flex flex-column  gap-1 mt-auto '>
          <div onClick={changeTheme} role='button'>
            {theme == 'light' ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='var(--text-color)'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='feather feather-sun'
                role='button'
              >
                <circle cx='12' cy='12' r='5'></circle>
                <line x1='12' y1='1' x2='12' y2='3'></line>
                <line x1='12' y1='21' x2='12' y2='23'></line>
                <line x1='4.22' y1='4.22' x2='5.64' y2='5.64'></line>
                <line x1='18.36' y1='18.36' x2='19.78' y2='19.78'></line>
                <line x1='1' y1='12' x2='3' y2='12'></line>
                <line x1='21' y1='12' x2='23' y2='12'></line>
                <line x1='4.22' y1='19.78' x2='5.64' y2='18.36'></line>
                <line x1='18.36' y1='5.64' x2='19.78' y2='4.22'></line>
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='var(--text-color)'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='feather feather-moon'
                role='button'
              >
                <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
              </svg>
            )}
          </div>
          <div>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              role='button'
              onClick={() => handleClickIcon('6')}
            >
              <path
                d='M9.00033 3.7583C9.00033 2.78722 9.78755 2 10.7586 2H13.242C14.2131 2 15.0003 2.78722 15.0003 3.75831C15.0003 5.11186 16.4656 5.95781 17.6378 5.28104C18.4788 4.79548 19.5542 5.08362 20.0398 5.92462L21.2814 8.07525C21.767 8.91625 21.4788 9.99162 20.6378 10.4772C19.4656 11.154 19.4656 12.8459 20.6378 13.5227C21.4788 14.0082 21.767 15.0836 21.2814 15.9246L20.0398 18.0752C19.5542 18.9162 18.4788 19.2044 17.6378 18.7188C16.4656 18.0421 15.0003 18.8881 15.0003 20.2416C15.0003 21.2127 14.2131 22 13.242 22H10.7587C9.78757 22 9.00033 21.2127 9.00033 20.2416C9.00033 18.8881 7.53506 18.0421 6.36285 18.7188C5.52186 19.2044 4.44648 18.9162 3.96094 18.0753L2.71926 15.9246C2.23371 15.0836 2.52186 14.0082 3.36286 13.5227C4.53508 12.8459 4.53508 11.154 3.36286 10.4772C2.52186 9.99162 2.23371 8.91624 2.71926 8.07525L3.96094 5.9246C4.44649 5.08361 5.52187 4.79547 6.36286 5.28102C7.53506 5.95779 9.00033 5.11184 9.00033 3.7583Z'
                stroke='var(--text-color)'
                strokeWidth='2'
              />
              <path
                d='M16.0003 12C16.0003 14.2091 14.2095 16 12.0003 16C9.79119 16 8.00033 14.2091 8.00033 12C8.00033 9.79086 9.79119 8 12.0003 8C14.2095 8 16.0003 9.79086 16.0003 12Z'
                stroke='var(--text-color)'
                strokeWidth='2'
              />
            </svg>
          </div>
          <div>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              role='button'
            >
              <path
                d='M5.99985 6C5.99985 6.55228 6.44756 7 6.99985 7C7.55213 7 7.99985 6.55228 7.99985 6H5.99985ZM7.99985 16C7.99985 15.4477 7.55213 15 6.99985 15C6.44756 15 5.99985 15.4477 5.99985 16H7.99985ZM8.09187 20.782L8.54586 19.891L8.54586 19.891L8.09187 20.782ZM7.21783 19.908L6.32683 20.362H6.32683L7.21783 19.908ZM18.7819 19.908L19.6729 20.362L18.7819 19.908ZM17.9078 20.782L17.4538 19.891L17.4538 19.891L17.9078 20.782ZM17.9078 1.21799L17.4538 2.10899V2.10899L17.9078 1.21799ZM18.7819 2.09202L17.8909 2.54601V2.54601L18.7819 2.09202ZM7.21783 2.09202L6.32683 1.63803V1.63803L7.21783 2.09202ZM8.09187 1.21799L7.63788 0.32698V0.32698L8.09187 1.21799ZM1.99985 10C1.44756 10 0.999847 10.4477 0.999847 11C0.999847 11.5523 1.44756 12 1.99985 12L1.99985 10ZM12.9998 12C13.5521 12 13.9998 11.5523 13.9998 11C13.9998 10.4477 13.5521 10 12.9998 10V12ZM4.70695 8.70711C5.09748 8.31658 5.09748 7.68342 4.70695 7.29289C4.31643 6.90237 3.68326 6.90237 3.29274 7.29289L4.70695 8.70711ZM2.13122 9.86863L1.42411 9.16152H1.42411L2.13122 9.86863ZM2.13122 12.1314L1.42411 12.8385L1.42411 12.8385L2.13122 12.1314ZM3.29274 14.7071C3.68327 15.0976 4.31643 15.0976 4.70696 14.7071C5.09748 14.3166 5.09748 13.6834 4.70696 13.2929L3.29274 14.7071ZM1.46301 10.691L2.41406 11L1.46301 10.691ZM1.46301 11.309L2.41406 11L1.46301 11.309ZM7.99985 6V4.2H5.99985V6H7.99985ZM10.1998 2H15.7998V0H10.1998V2ZM17.9998 4.2V17.8H19.9998V4.2H17.9998ZM15.7998 20H10.1998V22H15.7998V20ZM7.99985 17.8V16H5.99985V17.8H7.99985ZM10.1998 20C9.62329 20 9.25102 19.9992 8.96768 19.9761C8.69602 19.9539 8.5953 19.9162 8.54586 19.891L7.63788 21.673C8.01626 21.8658 8.40947 21.9371 8.80482 21.9694C9.18849 22.0008 9.6563 22 10.1998 22V20ZM5.99985 17.8C5.99985 18.3436 5.99907 18.8114 6.03042 19.195C6.06272 19.5904 6.13403 19.9836 6.32683 20.362L8.10884 19.454C8.08365 19.4045 8.04597 19.3038 8.02377 19.0322C8.00063 18.7488 7.99985 18.3766 7.99985 17.8H5.99985ZM8.54586 19.891C8.3577 19.7951 8.20471 19.6422 8.10884 19.454L6.32683 20.362C6.61445 20.9265 7.07339 21.3854 7.63788 21.673L8.54586 19.891ZM17.9998 17.8C17.9998 18.3766 17.9991 18.7488 17.9759 19.0322C17.9537 19.3038 17.916 19.4045 17.8909 19.454L19.6729 20.362C19.8657 19.9836 19.937 19.5904 19.9693 19.195C20.0006 18.8114 19.9998 18.3436 19.9998 17.8H17.9998ZM15.7998 22C16.3434 22 16.8112 22.0008 17.1949 21.9694C17.5902 21.9371 17.9834 21.8658 18.3618 21.673L17.4538 19.891C17.4044 19.9162 17.3037 19.9539 17.032 19.9761C16.7487 19.9992 16.3764 20 15.7998 20V22ZM17.8909 19.454C17.795 19.6422 17.642 19.7951 17.4538 19.891L18.3618 21.673C18.9263 21.3854 19.3852 20.9265 19.6729 20.362L17.8909 19.454ZM15.7998 2C16.3764 2 16.7487 2.00078 17.032 2.02393C17.3037 2.04612 17.4044 2.0838 17.4538 2.10899L18.3618 0.326981C17.9834 0.134186 17.5902 0.0628704 17.1949 0.0305695C16.8112 -0.000777721 16.3434 0 15.7998 0V2ZM19.9998 4.2C19.9998 3.65645 20.0006 3.18864 19.9693 2.80497C19.937 2.40963 19.8657 2.01641 19.6729 1.63803L17.8909 2.54601C17.916 2.59545 17.9537 2.69617 17.9759 2.96784C17.9991 3.25117 17.9998 3.62345 17.9998 4.2H19.9998ZM17.4538 2.10899C17.642 2.20487 17.795 2.35785 17.8909 2.54601L19.6729 1.63803C19.3852 1.07354 18.9263 0.6146 18.3618 0.32698L17.4538 2.10899ZM7.99985 4.2C7.99985 3.62345 8.00063 3.25117 8.02377 2.96784C8.04597 2.69617 8.08365 2.59545 8.10884 2.54601L6.32683 1.63803C6.13403 2.01641 6.06272 2.40963 6.03042 2.80497C5.99907 3.18864 5.99985 3.65645 5.99985 4.2H7.99985ZM10.1998 0C9.6563 0 9.18849 -0.000777721 8.80482 0.0305695C8.40947 0.0628704 8.01626 0.134186 7.63788 0.32698L8.54586 2.10899C8.5953 2.0838 8.69602 2.04612 8.96768 2.02393C9.25102 2.00078 9.62329 2 10.1998 2V0ZM8.10884 2.54601C8.20471 2.35785 8.3577 2.20487 8.54586 2.10899L7.63788 0.32698C7.07339 0.614601 6.61445 1.07354 6.32683 1.63803L8.10884 2.54601ZM1.99985 12L12.9998 12V10L1.99985 10L1.99985 12ZM3.29274 7.29289L1.42411 9.16152L2.83833 10.5757L4.70695 8.70711L3.29274 7.29289ZM1.42411 12.8385L3.29274 14.7071L4.70696 13.2929L2.83832 11.4243L1.42411 12.8385ZM1.42411 9.16152C1.23777 9.34786 1.05494 9.52959 0.914088 9.69551C0.765655 9.87036 0.606084 10.0922 0.51195 10.382L2.41406 11C2.39412 11.0614 2.37064 11.0701 2.43877 10.9899C2.51447 10.9007 2.62865 10.7854 2.83833 10.5757L1.42411 9.16152ZM2.83833 11.4243C2.62866 11.2146 2.51447 11.0993 2.43877 11.0101C2.37064 10.9299 2.39412 10.9386 2.41406 11L0.511949 11.618C0.606084 11.9078 0.765658 12.1296 0.914088 12.3045C1.05494 12.4704 1.23777 12.6521 1.42411 12.8385L2.83833 11.4243ZM0.51195 10.382C0.381434 10.7837 0.381433 11.2163 0.511949 11.618L2.41406 11V11L0.51195 10.382Z'
                fill='var(--text-color)'
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
