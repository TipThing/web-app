'use client';
import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  DropdownSection,
  User,
} from '@nextui-org/react';
import { Logo, SearchIcon } from '@/components/icons';
import { Button } from '@nextui-org/button';

export default function NavbarComponent() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(['system']));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(', ').replaceAll('_', ' '),
    [selectedKeys]
  );

  return (
    <Navbar isBordered maxWidth={`xl`}>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Logo />
          <p className="hidden sm:block font-bold text-inherit pl-2">TipTing</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-3" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Spaces
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" color="primary">
            Recent
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Templates
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Explore
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: 'max-w-full sm:max-w-[10rem] h-10 justify-center',
            input: 'text-small',
            inputWrapper:
              'font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="primary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Custom item styles"
            disabledKeys={['profile']}
            className="p-3"
            itemClasses={{
              base: [
                'rounded-md',
                'text-default-500',
                'transition-opacity',
                'data-[hover=true]:text-foreground',
                'data-[hover=true]:bg-default-100',
                'dark:data-[hover=true]:bg-default-50',
                'data-[pressed=true]:opacity-70',
                'data-[focus-visible=true]:ring-default-500',
              ],
            }}
          >
            <DropdownSection aria-label="Profile & Actions" showDivider>
              <DropdownItem
                isReadOnly
                key="profile"
                className="h-14 gap-2 opacity-100"
              >
                <User
                  name="Jason Hughes"
                  description="@jameshughes"
                  classNames={{
                    name: 'text-default-600',
                    description: 'text-default-500',
                  }}
                  avatarProps={{
                    size: 'sm',
                    src: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
                  }}
                />
              </DropdownItem>
              <DropdownItem key="dashboard">Dashboard</DropdownItem>
              <DropdownItem key="settings">Settings</DropdownItem>
              <DropdownItem
                key="new_project"
                // endContent={<PlusIcon className="text-large" />}
              >
                New Dashboard
              </DropdownItem>
            </DropdownSection>

            <DropdownSection aria-label="Preferences" showDivider>
              <DropdownItem key="quick_search" shortcut="⌘K">
                Quick search
              </DropdownItem>
              <DropdownItem
                isReadOnly
                key="theme"
                className="cursor-default"
                endContent={
                  <Dropdown>
                    <DropdownTrigger>
                      <Button
                        variant="bordered"
                        className="capitalize border-small"
                        size={`sm`}
                        radius={`sm`}
                      >
                        {selectedValue}
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                      aria-label="Single selection actions"
                      variant="flat"
                      disallowEmptySelection
                      selectionMode="single"
                      selectedKeys={selectedKeys}
                      // @ts-ignore
                      onSelectionChange={setSelectedKeys}
                    >
                      <DropdownItem key="system">System</DropdownItem>
                      <DropdownItem key="dark">Dark</DropdownItem>
                      <DropdownItem key="light">Light</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                }
              >
                Theme
              </DropdownItem>
            </DropdownSection>

            <DropdownSection aria-label="Help & Feedback">
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout" className="text-danger" color="danger">
                Log Out
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
