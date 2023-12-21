import { DeleteButtonProps } from '../../util/interface'
import Button from './Button'
export default function DeleteButton({ onClick, children }: DeleteButtonProps) {
  return (
    <div className="p-5">
      <Button onClick={onClick} color="danger" className="w-full">
        {children}
      </Button>
    </div>
  )
}
