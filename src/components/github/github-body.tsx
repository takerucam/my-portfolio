import { Progress } from '@mantine/core'

export const GitHubBody: React.FC = () => {
  return (
    <div className='mb-8'>
      <div className='mb-2 text-[18px] font-bold'>ligthSound/next-tailwind</div>
      <div className='mb-2'>Next.js starter template</div>
      <div className='flex'>
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
          ></path>
        </svg>
        <div className='pr-6'>117</div>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9 3C7.89543 3 7 3.89543 7 5C7 5.74028 7.4022 6.38663 8 6.73244V17.2676C7.4022 17.6134 7 18.2597 7 19C7 20.1046 7.89543 21 9 21C9.74028 21 10.3866 20.5978 10.7324 20H11.9585C14.1676 20 15.9585 18.2091 15.9585 16V14.7324C16.5563 14.3866 16.9585 13.7403 16.9585 13C16.9585 11.8954 16.0631 11 14.9585 11C13.8539 11 12.9585 11.8954 12.9585 13C12.9585 13.7403 13.3607 14.3866 13.9585 14.7324V16C13.9585 17.1046 13.0631 18 11.9585 18H10.7324C10.5568 17.6964 10.3036 17.4432 10 17.2676V6.73244C10.5978 6.38663 11 5.74028 11 5C11 3.89543 10.1046 3 9 3Z'
            fill='currentColor'
          />
        </svg>
        <div>18</div>
      </div>
      <Progress
        className='mt-4'
        sections={[
          { value: 40, color: '#4476C0' },
          { value: 40, color: '#EEE170' },
          { value: 20, color: '#EDEDED' },
        ]}
      />
      <div className='flex justify-between pt-2'>
        <div className='flex items-center'>
          <div className='mr-1 w-2 h-2 bg-[#4476C0] rounded'></div>
          <div>TypeScript</div>
          <div className='pl-1 text-[#909296]'>40%</div>
        </div>
        <div className='flex items-center'>
          <div className='mr-1 w-2 h-2 bg-[#EEE170] rounded'></div>
          <div>JavaScript</div>
          <div className='pl-1 text-[#909296]'>40%</div>
        </div>
        <div className='flex items-center'>
          <div className='mr-1 w-2 h-2 bg-[#EDEDED] rounded'></div>
          <div>Other</div>
          <div className='pl-1 text-[#909296]'>20%</div>
        </div>
      </div>
    </div>
  )
}
