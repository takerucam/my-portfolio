import Image from 'next/image'

export const TwitterSection: React.FC = () => {
  return (
    <div>
      <div className='flex'>
        <div>
          <div className='relative mr-2 w-9 h-9'>
            <Image
              src='/img.jpeg'
              alt='アイコン画像'
              className='rounded-full'
              layout='fill'
            />
          </div>
        </div>
        <div>
          <div className='flex'>
            <div className='pr-1 text-base font-bold'>しまぶーのIT大学</div>
            <div className='text-[#909296]'>@shimabu_it・5月25日</div>
          </div>
          <p>
            新サービス「Noway Form」をリリースしました！
            ああああああああああああああ ああああああああああああああ
            あああああああああああああああ
          </p>
        </div>
      </div>
    </div>
  )
}
