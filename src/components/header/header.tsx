import { HeaderBurger } from 'src/components/header/header-burger'
import { HeaderNavigator } from 'src/components/header/header-navigator'
import { useWindowSize } from 'src/hooks/use-window-size'

export const Header: React.FC = () => {
  const isTablet = useWindowSize()

  return <div>{isTablet ? <HeaderBurger /> : <HeaderNavigator />}</div>
}
