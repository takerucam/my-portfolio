import { NextPage } from 'next'
import { SectionBody } from 'src/components/section/section-body'
import { SectionSubTitle } from 'src/components/section/section-sub-title'
import { SectionTitle } from 'src/components/section/section-title'

const About: NextPage = () => {
  return (
    <div className='px-4 h-screen'>
      <SectionTitle title='About' />
      <SectionSubTitle title='Lightsound Shimabu' />
      <p>ITエンジニアYouTuber。神戸大学・・・・・</p>
    </div>
  )
}

export default About
