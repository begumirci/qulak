import data from '../data';

export default function Transactions() {
  return (
    <div className='card-general '>
      <div className='d-flex flex-column  '>
        <div className='recent-transactions__title py-3 px-4 '>
          <h3>Recent Transactions</h3>
        </div>
        <div className='recent-transactions-list border-bottom px-4'>
          {data[0].transactions.map((info, index) => (
            <div
              key={index}
              className='recent-transactions-list__item py-3 d-flex  align-items-center justify-content-between    '
            >
              <div className='d-flex  align-items-center gap-10px'>
                <img src={info.img} alt='' style={{ cursor: 'pointer' }} />
                <div>
                  <h6>{info.title}</h6>
                  <p>{info.date}</p>
                </div>
              </div>
              <div className='d-flex  align-items-center gap-10px'>
                <button
                  className={
                    info.status == 'Done' ? 'done px-2' : 'failed px-2'
                  }
                  style={{ paddingBlock: '2px' }}
                >
                  {info.status}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className='py-3 px-4 d-flex align-items-center ' role='button'>
          <span style={{ color: 'var(--blue-color)', paddingRight: '6px' }}>
            Open
          </span>
          <img src='../../public/open.svg' alt='' />
        </div>
      </div>
    </div>
  );
}
