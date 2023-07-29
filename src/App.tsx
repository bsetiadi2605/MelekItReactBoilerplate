import './styles.scss'
import IMAGE from './react.png'
import LOGO from './logo.svg'
import { Button, Link, TextView, Heading } from './base/components'

export const App = () => {
  return (
    <>
      <Heading>
        Selamat datang di MelekIT React Boilerplate - {process.env.NODE_ENV}{' '}
        {process.env.name}
      </Heading>
      <img src={IMAGE} alt="React Logo" width="300" height="300" />
      <img src={LOGO} alt="React Logo" width="300" />
      <Link/>
      <Heading/>
      <Button onClick={() => {console.log('hai')}}></Button>
      <TextView />
    </>
  )
}
