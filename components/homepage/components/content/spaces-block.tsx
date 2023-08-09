'use client';

import { Button } from '@nextui-org/button';
import { GearIcon, GridIcon } from '@/components/icons';
import DashboardBlock from '@/components/homepage/components/content/dashboard-block';
import React, { FC } from 'react';
import { Color, Dashboard, Space } from '@/lib/types';
import clsx from 'clsx';

interface SpacesBlockProps {
  space: Space;
}

const SpacesBlock: FC<SpacesBlockProps> = (props) => {
  return (
    <div className={`block w-full`}>
      <div className={`flex flex-col gap-y-5`}>
        <div className={`flex items-center justify-between`}>
          <div className={`flex items-center gap-2`}>
            <div
              className={clsx(
                `w-8 h-8 flex rounded-xl justify-center items-center`,
                props.space.color == Color.Red && `bg-red-600`,
                props.space.color == Color.Yellow && `bg-yellow-500`,
                props.space.color == Color.Green && `bg-green-500`,
                props.space.color == Color.LightBlue && `bg-cyan-500`,
                props.space.color == Color.DarkBlue && `bg-blue-600`,
                props.space.color == Color.Pink && `bg-pink-500`
              )}
            >
              <span className={`font-bold`}>S</span>
            </div>
            <span className={`text-lg font-semibold`}>{props.space.title}</span>
          </div>

          <div className={`flex items-center gap-2`}>
            <Button
              size={`sm`}
              color="primary"
              startContent={<GridIcon size={18} />}
              isDisabled={
                props.space.dashboards && props.space.dashboards.length <= 0
              }
            >
              Dashboards
            </Button>
            <Button
              size={`sm`}
              color="primary"
              startContent={<GearIcon size={18} />}
              variant="ghost"
            >
              Settings
            </Button>
          </div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-4 gap-5`}>
          {props.space.dashboards && props.space.dashboards.length > 0 ? (
            props.space.dashboards.map((dashboard: Dashboard) => (
              <DashboardBlock
                color={props.space.color}
                heading={dashboard.title}
                key={dashboard.id}
              />
            ))
          ) : (
            <p>No dashboards available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpacesBlock;
