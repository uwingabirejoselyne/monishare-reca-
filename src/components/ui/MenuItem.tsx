import { Menu } from '@headlessui/react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import { MenuItem } from '../../util/interface'
import { useLocalStorage } from 'usehooks-ts'

const MenuItem = ({ item }: { item: MenuItem }) => {
  const navigate = useNavigate()
  const [, setToken] = useLocalStorage('token', null)
  const [, setUserId] = useLocalStorage('userId', null)

  function clickHandler() {
    if (item.href) return navigate(item.href)
    setToken(null)
    setUserId(null)
    navigate('/login')
  }
  return (
    <Menu.Item key={item.id}>
      {({ active }) => {
        const buttonClass = classNames(
          'group',
          'flex',
          'w-full',
          'items-center',
          'rounded-md',
          'px-2',
          'py-2',
          'text-sm',
          {
            'bg-indigo': active,
            'text-white': !active,
          },
        )

        return (
          <button onClick={clickHandler} className={buttonClass}>
            {item.icon}
            {item.name}
          </button>
        )
      }}
    </Menu.Item>
  )
}

export default MenuItem
