import { useSidebarDrawer } from '../../contexts/sidebarDrawer'

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

import { MobileNav } from '../MobileNav';
import { LanguageSwitch } from '../LanguageSwitch';

export function SidebarDrawer() {
  const { isOpen, onClose } = useSidebarDrawer();

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            background="#262628"
          >
            <LanguageSwitch/>
          </DrawerHeader>
          <DrawerBody
            display="flex"
            justifyContent="flex-start"
            alignItems="flex-start"
            background="#262628"
          >
            <MobileNav/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}