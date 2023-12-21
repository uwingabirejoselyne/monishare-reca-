import Logo from '../assets/Logo'
import ProfileIcon from '../assets/ProfileIcon'
import MenuDrop from './ui/MenuDrop'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { useReadLocalStorage } from 'usehooks-ts'

export default function Navigation() {
  const isAuthenticated = !!useReadLocalStorage('token')
  return (
    <div
      className={classNames(
        'sticky top-0 z-10 flex items-center rounded-b-lg border border-indigo-tertiary bg-indigo-tertiary px-5 text-white',
        { 'justify-between': isAuthenticated },
        { 'justify-center': !isAuthenticated },
      )}
    >
      {isAuthenticated && <MenuDrop />}
      <Link to="/user">
        <Logo className="relative top-3 w-16" />
      </Link>
      {isAuthenticated && (
        <Link to="/landingpage">
          <ProfileIcon className="h-6 w-6" />
        </Link>
      )}
    </div>
  )
}
