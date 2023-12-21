import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import WarningIcon from '../../assets/WarningIcon'
import Button from './Button'
import { DeleteModalProps } from '../../util/interface'

function DeleteModal({ isOpen, onTriggerModal, onSubmit, children }: DeleteModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onTriggerModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md overflow-hidden rounded-2xl bg-indigo-400 p-6 text-left align-middle shadow-xl transition-all">
                <div className="items-center gap-4 sm:flex">
                  <div className="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo sm:mx-0 sm:h-10 sm:w-10">
                    <WarningIcon className="h-6 w-6 text-lachs-400" />
                  </div>
                  <Dialog.Title as="h3" className="text-base font-bold leading-6 text-gray-100">
                    Delete
                  </Dialog.Title>
                </div>
                <div className="mt-2">
                  <p className="font-inter text-sm text-gray-100">{children}</p>
                </div>
                <div className="mt-4 bg-indigo-400 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <Button
                    color="danger"
                    className="inline-flex w-full justify-center bg-indigo px-3 py-2 text-sm font-bold shadow-sm hover:bg-lachs-400 hover:text-indigo sm:ml-3 sm:w-auto"
                    onClick={onSubmit}
                  >
                    Confirm
                  </Button>
                  <Button
                    color="outlined"
                    className="mt-3 inline-flex w-full justify-center px-3 py-2 text-sm font-bold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-indigo hover:ring-indigo sm:mt-0 sm:w-auto"
                    onClick={onTriggerModal}
                  >
                    Cancel
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default DeleteModal
