import { Footer } from 'src/components/footer/footer'
import { Header } from 'src/components/header/header'

type Props = {
  children?: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  )
}
