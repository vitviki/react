import { Popover, Transition, Menu } from "@headlessui/react";
import { BsSearch } from "react-icons/bs";
import { HiChatAlt2, HiBell } from "react-icons/hi";
import { Fragment } from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center h-20 bg-white border-b-2 border-gray-200 shadow-sm pl-4 pr-6">
      <div className="relative">
        <BsSearch
          fontSize={20}
          className="absolute text-gray-400 top-[30%] left-3 cursor-pointer"
        />
        <input
          type="text"
          placeholder="Search a product/user/order"
          className="border border-gray-300 pl-11 pr-4 focus:outline-none h-12 w-[24rem] text-xl active:outline-none font-palanquin rounded-xl shadow-md"
        />
      </div>
      <div className="flex gap-2">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                title="Inbox"
                className={`inline-flex items-center text-gray-700 p-3 hover:bg-gray-200 rounded-full focus:outline-none active:bg-gray-100 ${
                  open && "bg-gray-300"
                }`}
              >
                <HiChatAlt2 fontSize={24} className=" text-green-600" />
              </Popover.Button>
              <Transition
                enter="transition ease-out duration-100"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                  <div className="bg-white rounded-sm shadow-md ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className=" font-montserrat text-gray-700">
                      Messages
                    </strong>
                    <div className="mt-2 py-1 text-sm">No new messages</div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                title="Notifications"
                className={`inline-flex items-center text-gray-700 p-3 hover:bg-gray-200 rounded-full focus:outline-none active:bg-gray-100 ${
                  open && "bg-gray-300"
                }`}
              >
                <HiBell fontSize={24} className="text-red-600" />
              </Popover.Button>
              <Transition
                enter="transition ease-out duration-100"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                  <div className="bg-white rounded-sm shadow-md ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className=" font-montserrat text-gray-700">
                      Notifications
                    </strong>
                    <div className="mt-2 py-1 text-sm">
                      No new notifications
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        <Menu as="div" className="relative">
          <div className="">
            <Menu.Button className="ml-2 inline-flex rounded-full focus:outline-none hover:ring-2 hover:ring-neutral-400">
              <span className="sr-only">Open User Menu</span>
              <div
                className="h-10 w-10 bg-sky-50 rounded-full bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage:
                    'url("https://source.unsplash.com/80x80?face")',
                }}
              >
                <span className="sr-only">Varun Tyagi</span>
              </div>
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
            <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md bg-white p-1 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <div className="hover:bg-gray-200 text-gray-700 focus:bg-gray-200 m-2 mb-3 p-2 rounded-md">
                    <button className="text-gray-700 font-medium">
                      Varun Tyagi
                    </button>
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div className="hover:bg-gray-200 text-gray-700 focus:bg-gray-200 m-2 mb-3 p-2 rounded-md">
                    <button className="text-gray-700 font-medium">
                      Settings
                    </button>
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div className="hover:bg-gray-200 text-gray-700 focus:bg-gray-200 m-2 mb-3 p-2 rounded-md">
                    <button className="text-gray-700 font-medium">
                      Log Out
                    </button>
                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
