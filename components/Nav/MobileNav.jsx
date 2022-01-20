import {
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react';
import MobileNavItem from './MobileNavItem';
  const NAV_ITEMS = [
    {
      label: 'Home',
      href:"/"
    },
    {
      label: 'Skills',
      children: [
        {
          label: 'Web Frontend',
          subLabel: 'Frontend technologies',
          href: '#',
        },
        {
          label: 'Web Backend',
          subLabel: 'Backend technologies',
          href: '#',
        },
        {
          label: 'Databases',
          subLabel: 'Databases ive Worked In',
          href: '#',
        },
        {
          label: 'Cloud & Infrastructure',
          subLabel: 'Cloud services & Deployment',
          href: '#',
        },
      ],
    },
    {
      label: 'Education & Certifications',
      href: '#',
    },
    {
      label: 'About',
      href: '/about',
    },
  ];
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  export default MobileNav;