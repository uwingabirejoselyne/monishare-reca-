import { UseFormRegisterReturn } from 'react-hook-form'
import { CarDto, CarTypeDto } from './api'
import {
  ButtonHTMLAttributes,
  PropsWithChildren,
  SelectHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from 'react'

export interface CarCardProps extends CarDto {
  carType?: CarTypeDto
  owner?: { name?: string }
  onRefetchCars?: () => void
  showDeleteButton: boolean
}

export interface ButtonProps extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  color?: 'filled' | 'outlined' | 'danger'
}

export interface MenuItem {
  id: number
  name: string
  href?: string
  icon: React.ReactNode
}

export interface SelectInputProps
  extends PropsWithChildren<SelectHTMLAttributes<HTMLSelectElement>> {
  name: 'type' | 'fuelType'
  label: string
  items?: { id: number; value: string }[]
  className?: string
  register: UseFormRegisterReturn
}

export interface TextInputProps extends PropsWithChildren<InputHTMLAttributes<HTMLInputElement>> {
  name:
    | 'name'
    | 'type'
    | 'licensePlate'
    | 'horsepower'
    | 'fuelType'
    | 'info'
    | 'username'
    | 'password'
  label: string | undefined
  type?: string
  className?: string
  register: UseFormRegisterReturn
}

export interface PopUpButtonProps {
  handleCancelClick: () => void
}

export interface DeleteModalProps {
  isOpen: boolean
  onTriggerModal: () => void
  onSubmit: () => void
  children: ReactNode
}

export interface DeleteButtonProps {
  onClick: () => void
  children: ReactNode
}
