import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Arrays',
        path: '/arrays',
        icon: <FaIcons.FaLayerGroup/>,
        cName: 'nav-text'
    },
    {
        title: 'Dynamic Programming',
        path: '/dynamicProgramming',
        icon: <FaIcons.FaAnchor/>,
        cName: 'nav-text'
    },
]
