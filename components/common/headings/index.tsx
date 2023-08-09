import React, { FC } from 'react';
import clsx from 'clsx';

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

type HeadingTagProps = {
  h1: React.HTMLAttributes<HTMLHeadingElement>;
  h2: React.HTMLAttributes<HTMLHeadingElement>;
  h3: React.HTMLAttributes<HTMLHeadingElement>;
  h4: React.HTMLAttributes<HTMLHeadingElement>;
  h5: React.HTMLAttributes<HTMLHeadingElement>;
  h6: React.HTMLAttributes<HTMLHeadingElement>;
};

const textSizes: { [key: number]: string } = {
  1: 'text-6xl',
  2: 'text-5xl',
  3: 'text-4xl',
  4: 'text-3xl',
  5: 'text-2xl',
  6: 'text-xl',
};

const Heading: FC<HeadingProps> = (props) => {
  const { level = 1, children, className } = props;
  const HeadingTag = `h${level}` as keyof HeadingTagProps;
  const textSize = textSizes[level] || 'text-xl';
  return (
    <HeadingTag className={clsx(textSize, className, `mb-4 font-semibold`)}>
      {children}
    </HeadingTag>
  );
};

export default Heading;
