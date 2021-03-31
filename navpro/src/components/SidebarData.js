import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

import { BiGroup } from "react-icons/bi";


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Leadmaster',
        path: '/leadmaster',
        icon: <BiGroup />,
        cName: 'nav-text'
    },
    {
        title: 'LeadmasterView',
        path: '/leadmasterview',
        icon: <BiGroup />,
        cName: 'nav-text'
    },


    {
        title: 'LeadmasterUpdate',
        path: '/leadmasterUpdate',
        icon: <BiGroup />,
        cName: 'nav-text'
    },

    {
        title: 'Reports',
        path: '/reports',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Products Master',
        path: '/productsmaster',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'New Inquiry',
        path: '/newinquiry',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    }
];