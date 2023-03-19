import {
  Box,
  NavLink,
  MantineColor,
  createStyles,
  UnstyledButton,
  Group,
  ThemeIcon,
  Collapse,
} from '@mantine/core';
import Link from 'next/link';
import { useState } from 'react';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { UrlObject } from 'url';
declare type Url = string | UrlObject;
import {
  faChevronRight,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

const useStyles = createStyles((theme) => ({
  control: {
    fontWeight: 500,
    display: 'block',
    width: '100%',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    marginTop: theme.spacing.xs,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fontSizes.sm,
    borderRadius: theme.radius.sm,
    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors[theme.primaryColor][4],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  link: {
    fontWeight: 500,
    display: 'block',
    border: '12px',
    textDecoration: 'none',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    paddingLeft: `${theme.spacing.xl}`,
    marginLeft: `31px`,
    width: '88%',
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[8],
    borderLeft: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors[theme.primaryColor][6],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      borderRadius: `0 ${theme.radius.sm} ${theme.radius.sm} 0`,
    },
  },

  chevron: {
    transition: 'transform 200ms ease',
  },
}));

export interface LinksGroupProps {
  icon: FontAwesomeIconProps['icon'];
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
  link?: Url;
  color?: MantineColor;
}

export default function Navigation({
  icon: icon,
  label,
  initiallyOpened = false,
  links,
  link = '#',
  color = 'gray',
}: LinksGroupProps) {
  const { classes, theme } = useStyles();
  const hasLinks = Array.isArray(links) && links.length > 0;
  const [opened, setOpened] = useState(initiallyOpened);
  const ChevronIcon = theme.dir === 'ltr' ? faChevronRight : faChevronDown;

  const items = (hasLinks ? links : []).map((link) => (
    <NavLink
      key={link.label}
      component={Link}
      label={link.label}
      href={link.link}
      //active
      className={classes.link}
      color={color}
    />
  ));

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        className={classes.control}
        component={Link}
        href={link}
      >
        <Group position="apart" spacing={0}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant="light" color={color} size={30} mr={10}>
              <FontAwesomeIcon size="lg" icon={icon} />
            </ThemeIcon>
            <Box ml={1}>{label}</Box>
          </Box>
          {hasLinks && (
            <FontAwesomeIcon
              icon={ChevronIcon}
              className={classes.chevron}
              size="sm"
              style={{
                transform: opened
                  ? `rotate(${theme.dir === 'rtl' ? -90 : 90}deg)`
                  : 'none',
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}
