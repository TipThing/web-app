'use client';
import React from 'react';
import Heading from '@/components/common/headings';
import DashboardBlock from '@/components/homepage/components/content/dashboard-block';
import SpacesBlock from '@/components/homepage/components/content/spaces-block';
import { Color, Role, Space, Visibility } from '@/lib/types';
import { ClockIcon } from '@/components/icons';
import { mockSpaces } from '@/mocks/mock-spaces';

export default function ContentTemplate() {
  return (
    <div className={`flex flex-col gap-y-6 pb-6`}>
      <div>
        <Heading level={4}>
          <ClockIcon className={`inline mb-1 mr-3`} />
          Recently Viewed
        </Heading>
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-5`}>
          {Array.from({ length: 6 }, (_, index) => (
            <DashboardBlock
              heading={`Block ${index + 1}`}
              space={`Space ${index + 1}`}
              key={index}
            />
          ))}
        </div>
      </div>
      <div>
        <Heading level={4}>Your Spaces</Heading>
        <div className={`flex flex-col gap-5`}>
          {mockSpaces.map((space) => (
            <SpacesBlock space={space} key={space.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
