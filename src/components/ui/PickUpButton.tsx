import { useEffect, useState } from 'react'
import Button from './Button'
import { BookingState, CarDto, CarState } from '../../util/api'
import { useChangeBooking, useUpdateCar } from '../../hooks'
import toast from 'react-hot-toast'
import { apiUrl } from '../../util/apiUrl'

interface PickUpButtonProps {
  bookingState: BookingState
  carState: CarState
  onRefetch: () => void
  bookingId: number
  car: CarDto
}

export default function PickUpButton({
  bookingState,
  carState,
  bookingId,
  onRefetch,
  car: { id },
}: PickUpButtonProps) {
  const [, executeUpdateCar] = useUpdateCar(id)
  const [{ loading: changeBookingLoading, error: changeBookingError }, executeChangeBooking] =
    useChangeBooking()

  const [showUseCar, setShowUseCar] = useState(
    bookingState === BookingState.PICKED_UP && carState === CarState.LOCKED,
  )
  const [showUnlockLock, setShowUnlockLock] = useState(
    bookingState === BookingState.PICKED_UP && carState === CarState.UNLOCKED,
  )
  const [showReturn] = useState(bookingState === BookingState.PICKED_UP)
  const [isCarLocked, setIsCarLocked] = useState(false)
  const handleUseCarClick = () => {
    setShowUseCar(false)
    setShowUnlockLock(true)
  }

  const handleBookingChange = async (nextState: BookingState) => {
    await executeChangeBooking({
      url: `${apiUrl}/bookings/${bookingId}`,
      data: {
        state: nextState,
      },
    })
    onRefetch()
  }

  const handleCarStateChange = (nextState: CarState) => {
    executeUpdateCar({
      data: {
        state: nextState,
      },
    })
    setIsCarLocked(previousState => !previousState)
  }
  useEffect(() => {
    if (changeBookingError) {
      toast.error('Pick up time is passed due!')
    }
  }, [changeBookingError])

  return (
    <div className="flex w-full flex-col gap-4 py-4 md:w-1/2">
      {bookingState === BookingState.ACCEPTED && (
        <Button onClick={() => handleBookingChange(BookingState.PICKED_UP)}>
          {changeBookingLoading ? 'Loading...' : 'Pick up'}
        </Button>
      )}

      {showUseCar && <Button onClick={handleUseCarClick}>Use Car</Button>}

      {showUnlockLock && (
        <>
          <Button
            className={isCarLocked ? 'opacity-50' : ''}
            disabled={isCarLocked}
            onClick={() => handleCarStateChange(CarState.LOCKED)}
          >
            Unlock
          </Button>
          <Button
            className={!isCarLocked ? 'opacity-50' : ''}
            disabled={!isCarLocked}
            onClick={() => handleCarStateChange(CarState.UNLOCKED)}
          >
            Lock
          </Button>
        </>
      )}

      {showReturn && (
        <Button onClick={() => handleBookingChange(BookingState.RETURNED)}>Return</Button>
      )}
    </div>
  )
}
