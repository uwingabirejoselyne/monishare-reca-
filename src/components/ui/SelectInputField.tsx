import { ChevronDownIcon } from '../../assets/ChevronDownIcon'
import { SelectInputProps } from '../../util/interface'
import classNames from 'classnames'

function SelectInputField({ register, label, items, className, ...props }: SelectInputProps) {
  return (
    <div className={classNames(`relative space-y-2`)}>
      <label htmlFor={label} className="block text-left font-inter text-sm text-gray-200">
        {label}
      </label>
      <select
        {...register}
        id={label}
        className={classNames(
          'w-full appearance-none rounded-full bg-indigo-200 px-5 py-4 text-sm text-white placeholder:text-left placeholder:text-base placeholder:text-white hover:bg-none focus:bg-none focus:outline-none',
          className,
        )}
        {...props}
      >
        {items?.map(item => (
          <option key={item.id} value={item.value}>
            {item.value}
          </option>
        ))}
      </select>
      <ChevronDownIcon className="pointer-events-none absolute inset-y-0 right-0 top-2 mr-5 h-full w-10 text-white" />
    </div>
  )
}

export default SelectInputField
