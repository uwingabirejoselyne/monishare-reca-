import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import CarIcon from '../../assets/CarIcon'
import LogoutIcon from '../../assets/LogoutIcon'
import CarsIcon from '../../assets/CarsIcon'
import CarPlusIcon from '../../assets/CarPlusIcon'
import ListIcon from '../../assets/ListIcon'
import MenuIcon from '../../assets/MenuIcon'
import MenuItem from './MenuItem'

export default function Dropdown() {
  return (
    <Menu as="div" className="relative z-50 inline-block text-left">
      <div>
        <Menu.Button className="inline-flex items-center gap-x-1 font-inter text-sm font-semibold leading-6">
          Menu
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="h-74 absolute left-0 mt-10 w-56 divide-y divide-gray-100 rounded-2xl border border-indigo-400 bg-indigo-400 p-4 px-5 font-inter text-xs shadow-lg sm:text-sm">
          <div className="p-1">{upperItemSection}</div>
          <div className="p-1">
            <h1 className="p-3 text-sm font-bold text-white">My cars</h1>
            {middleItemSection}
          </div>
          <div className="p-1">{lowerItemSection}</div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

const upperItems = [
  {
    id: 1,
    name: 'Book A Car',
    href: '/user/bookcar',
    icon: <CarIcon className="mr-2 h-5 w-5" aria-hidden="true" />,
  },
  {
    id: 2,
    name: 'My Bookings',
    href: '/user/mybookings',
    icon: <MenuIcon className="mr-2 h-5 w-5" aria-hidden="true" />,
  },
]

const middleItems = [
  {
    id: 3,
    name: 'See My Cars',
    href: '/user/mycars',
    icon: <CarsIcon className="mr-2 h-5 w-5" aria-hidden="true" />,
  },
  {
    id: 4,
    name: `My Cars's Bookings`,
    href: '/user/mycarsbookings',
    icon: <ListIcon className="mr-2 h-5 w-5" aria-hidden="true" />,
  },
  {
    id: 5,
    name: 'Add New Car',
    href: '/user/addNewCar',
    icon: <CarPlusIcon className="mr-2 h-5 w-5" aria-hidden="true" />,
  },
]
const lowerItem = [
  {
    id: 6,
    name: 'Log Out',
    icon: <LogoutIcon className="mr-2 h-5 w-5" aria-hidden="true" />,
  },
]

const upperItemSection = upperItems.map(item => <MenuItem key={item.id} item={item} />)

const middleItemSection = middleItems.map(item => <MenuItem key={item.id} item={item} />)

const lowerItemSection = lowerItem.map(item => <MenuItem key={item.id} item={item} />)
