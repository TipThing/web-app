'use client';

import { Link } from '@nextui-org/link';
import { Button } from '@nextui-org/button';
import { Divider, Tooltip } from '@nextui-org/react';
import DashboardBlock from '@/components/homepage/components/content/dashboard-block';
import React from 'react';
import { CubesStackedIcon, GridIcon, StarsIcon } from '@/components/icons';
import clsx from 'clsx';
import { Color } from '@/lib/types';
import { mockSpaces } from '@/mocks/mock-spaces';
import SpacesBlock from '@/components/homepage/components/content/spaces-block';

export const SidebarNavigation = () => {
  return (
    <aside className={`block`}>
      <div className={`flex flex-col h-full gap-y-2`}>
        <Link href={`/`}>
          <Button
            fullWidth={true}
            className={`items-center justify-start font-bold pl-2`}
            variant="light"
            startContent={<GridIcon size={18} />}
          >
            All Dashboards
          </Button>
        </Link>
        <Link href={`/`}>
          <Tooltip
            content="View official and community dashboard templates."
            placement={`bottom`}
            delay={0}
            closeDelay={0}
            className={`max-w-[250px]`}
          >
            <Button
              fullWidth={true}
              className={`items-center justify-start font-bold pl-2`}
              variant="light"
              startContent={<CubesStackedIcon size={18} />}
            >
              Templates
            </Button>
          </Tooltip>
        </Link>
        <Link href={`/`}>
          <Tooltip
            content="Explore community dashboards, apps, integrations and plugins."
            placement={`bottom`}
            delay={0}
            closeDelay={0}
            className={`max-w-[250px]`}
          >
            <Button
              fullWidth={true}
              className={`items-center justify-start font-bold pl-2`}
              variant="light"
              startContent={<StarsIcon size={18} />}
            >
              Explore
            </Button>
          </Tooltip>
        </Link>
        <Divider />
        <span className={`text-md font-bold ml-1`}>Spaces</span>
        {mockSpaces.map((space) => (
          <Link href={`/`} key={space.id}>
            <Button
              fullWidth={true}
              className={`items-center justify-start pl-1`}
              variant="light"
              startContent={
                <div
                  className={clsx(
                    `w-8 h-8 flex rounded-medium justify-center items-center`,
                    space.color == Color.Red && `bg-red-600`,
                    space.color == Color.Yellow && `bg-yellow-500`,
                    space.color == Color.Green && `bg-green-500`,
                    space.color == Color.LightBlue && `bg-cyan-500`,
                    space.color == Color.DarkBlue && `bg-blue-600`,
                    space.color == Color.Pink && `bg-pink-500`
                  )}
                >
                  <span className={`font-bold`}>S</span>
                </div>
              }
            >
              {space.title}
            </Button>
          </Link>
        ))}
      </div>
    </aside>
  );
};
