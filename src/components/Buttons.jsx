export default function Buttons() {
  return (
    <div className='d-flex' style={{ gap: '12px' }}>
      <button
        className=' padding-10px px-3 border radius-1'
        role='button'
        style={{
          backgroundColor: 'var(--white-color)',
          color: 'var(--dark-color)',
          paddingRight: '12px',
          cursor: 'pointer',
        }}
      >
        Edit Section
      </button>
      <button
        className='padding-10px px-3 radius-1'
        role='button'
        style={{
          backgroundColor: 'var(--blue-color)',
          color: 'var(--white-btn-color)',
          cursor: 'pointer',
        }}
      >
        Add item
      </button>
    </div>
  );
}
