import { Button, Textarea, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { NextPage } from 'next'
import { ComponentProps, FormEventHandler } from 'react'
import { SectionTitle } from 'src/components/section/section-title'

const Contact: NextPage = () => {
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      message: '',
    },
    validate: {
      name: (value) =>
        value.length < 2 ? 'Name must have at least 2 letters' : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      message: (value) =>
        value.length < 1 ? 'Message must have at least 1 letters' : null,
    },
  })

  const handleSubmit: ComponentProps<'form'>['onSubmit'] = async (event) => {
    event.preventDefault()
    try {
      await fetch('/api/post', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ form }),
      })
      form.reset()
    } catch {
      alert('API Error POST')
    }
  }

  return (
    <div className='px-4 h-screen'>
      <SectionTitle title='Contact' />
      <form onSubmit={handleSubmit}>
        <TextInput
          className='pb-4'
          placeholder='your@email.com'
          label='Email'
          {...form.getInputProps('email')}
        />
        <TextInput
          className='pb-4'
          placeholder='Taro Yamada'
          label='Name'
          {...form.getInputProps('name')}
        />
        <Textarea
          className='pb-8'
          placeholder='I want to order your goods'
          label='Your Message'
          {...form.getInputProps('message')}
        />
        <div className='flex justify-center'>
          <Button color='dark' radius='xl' type='submit'>
            Send Message
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Contact
