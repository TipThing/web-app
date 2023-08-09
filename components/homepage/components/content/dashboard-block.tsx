import { FC } from 'react';
import { Card, CardBody } from '@nextui-org/react';
import clsx from 'clsx';
import { Chip } from '@nextui-org/chip';
import { Color } from '@/lib/types';

interface DashboardBlockProps {
  heading: string;
  space?: string;
  color?: Color;
}

const DashboardBlock: FC<DashboardBlockProps> = (props) => {
  return (
    <div
      className={clsx(
        `block w-full rounded-large`,
        props.color == Color.Red &&
          `bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500`,
        props.color == Color.Yellow &&
          `bg-gradient-to-r from-orange-300 to-rose-300`,
        props.color == Color.Green &&
          `bg-gradient-to-r from-green-200 to-green-500`,
        props.color == Color.LightBlue &&
          `bg-gradient-to-r from-blue-400 to-emerald-400`,
        props.color == Color.DarkBlue &&
          `bg-gradient-to-r from-sky-400 to-indigo-900`,
        props.color == Color.Pink &&
          `bg-gradient-to-tr from-violet-500 to-orange-300`
      )}
    >
      <Card
        isBlurred={true}
        className={clsx(
          `border-none w-full h-32`,
          props.color
            ? `bg-gray-900/60 dark:bg-gray-900/50`
            : `dark:bg-gray-900`
        )}
        isPressable
        onPress={() => console.log('item pressed')}
      >
        <CardBody>
          <div className={`flex flex-col flex-grow`}>
            <span className={clsx(`text-lg font-semibold`)}>
              {props.heading}
            </span>
            {props.space && (
              <Chip color="primary" variant="dot" className={`mt-2`}>
                {props.space}
              </Chip>
            )}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default DashboardBlock;
