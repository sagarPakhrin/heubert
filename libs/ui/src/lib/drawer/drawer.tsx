import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';
import { Fragment, ReactNode } from 'react';
import { classNames } from '../utils/class-names';

export interface DrawerProps {
  open: boolean;
  onClose?: () => void;
  title: string;
  children: ReactNode;
}

export const Drawer = ({ title, children, onClose, open }: DrawerProps) => {
  const handleClose = () => {
    onClose?.();
  };

  return (
    <Transition appear={open} show as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-40 overflow-y-auto"
        onClose={handleClose}
      >
        <div className="h-screen min-h-screen flex justify-end">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-70" />
          </Transition.Child>

          <Transition.Child
            className={classNames(
              'fixed w-full max-w-screen-md h-full flex flex-col',
              'flex flex-col overflow-hidden text-left transition-all transform bg-gray-50 shadow-xl z-20'
            )}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Title
              as="div"
              className="px-11 py-5 flex justify-between bg-white shadow z-10"
            >
              <h3 className="text-lg font-medium text-gray-900 capitalize">
                {title}
              </h3>
              <button
                onClick={handleClose}
                className="focus:outline-none flex items-center justify-center"
              >
                <XIcon className="w-4 h-4" />
              </button>
            </Dialog.Title>
            <div className="flex-1 overflow-y-auto p-11">{children}</div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Drawer;
