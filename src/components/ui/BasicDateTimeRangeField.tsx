import { Control, Controller, FieldValues } from 'react-hook-form'
import { MobileDateTimePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import classNames from 'classnames'
import dayjs from 'dayjs'

export default function BasicDateTimeRangeField({
  label,
  className,
  control,
  name,
}: BasePickerInputProps) {
  return (
    <div className={classNames(['grid', 'gap-3', className])}>
      <h3 className="text-base text-white">{label}</h3>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value } }) => (
            <MobileDateTimePicker
              disablePast
              defaultValue={dayjs()}
              className="w-full rounded-full bg-indigo-200"
              value={value}
              onChange={date => onChange(date?.toDate())}
              sx={{
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
                '& .MuiInputBase-input': {
                  color: 'white',
                },
              }}
            />
          )}
        />
      </LocalizationProvider>
    </div>
  )
}

interface BasePickerInputProps {
  label: string
  className?: string
  control: Control<FieldValues>
  name: string
}
