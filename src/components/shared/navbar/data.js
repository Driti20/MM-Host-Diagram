import React from 'react'
import { FormattedMessage } from 'react-intl'

//products icons
import product1 from '../../../assets/shared/nav/product1.svg'
import product2 from '../../../assets/shared/nav/product2.svg'
import product3 from '../../../assets/shared/nav/product3.svg'
import product4 from '../../../assets/shared/nav/product4.svg'
import product5 from '../../../assets/shared/nav/product5.svg'
import product6 from '../../../assets/shared/nav/product6.svg'
import product7 from '../../../assets/shared/nav/product7.svg'
import product8 from '../../../assets/shared/nav/product8.svg'
import {ReactComponent as Product9} from '../../../assets/shared/nav/product9.svg'
import {ReactComponent as Product10}  from '../../../assets/shared/nav/product10.svg'
import {ReactComponent as Product11} from '../../../assets/shared/nav/product11.svg'
import {ReactComponent as Product12} from '../../../assets/shared/nav/product12.svg'
import {ReactComponent as Product13} from '../../../assets/shared/nav/product13.svg'
import blackCircle from '../../../assets/shared/nav/blackCircle.svg'
import whiteCircle from '../../../assets/shared/nav/whiteCircle.svg'


//useCases icons     
import useCases1 from '../../../assets/shared/nav/useCases1.svg'
import useCases2 from '../../../assets/shared/nav/useCases2.svg'
import useCases3 from '../../../assets/shared/nav/useCases3.svg'
import useCases4 from '../../../assets/shared/nav/useCases4.svg'
import useCases5 from '../../../assets/shared/nav/useCases5.svg'
import useCases6 from '../../../assets/shared/nav/useCases6.svg'
import useCases7 from '../../../assets/shared/nav/useCases7.svg'
import useCases8 from '../../../assets/shared/nav/useCases8.svg'

//solutions icons
import solutions1 from '../../../assets/shared/nav/solutions1.svg'
import solutions2 from '../../../assets/shared/nav/solutions2.svg'
import solutions3 from '../../../assets/shared/nav/solutions3.svg'
import solutions4 from '../../../assets/shared/nav/solutions4.svg'
import solutions5 from '../../../assets/shared/nav/solutions5.svg'
import solutions6 from '../../../assets/shared/nav/solutions6.svg'
import solutions7 from '../../../assets/shared/nav/solutions7.svg'
import solutions8 from '../../../assets/shared/nav/solutions8.svg'

//aboutUS icons
import aboutUs1 from '../../../assets/shared/nav/aboutUs1.svg'
import aboutUs2 from '../../../assets/shared/nav/aboutUs2.svg'
import aboutUs3 from '../../../assets/shared/nav/aboutUs3.svg'
import aboutUs4 from '../../../assets/shared/nav/aboutUs4.svg'
import aboutUs5 from '../../../assets/shared/nav/aboutUs5.svg'
import aboutUs6 from '../../../assets/shared/nav/aboutUs6.svg'
import aboutUs7 from '../../../assets/shared/nav/aboutUs7.svg'
import aboutUs8 from '../../../assets/shared/nav/aboutUs8.svg'

import ProductMenu from './megamenu/ProductMenu'
import AboutUsMenu from './megamenu/AboutUsMenu'
import SolutionsMenu from './megamenu/SolutionsMenu'
import UseCasesMenu from './megamenu/UseCasesMenu'



export const ProductsData=[
    {
        cls:'cls1',
        icon:product1,
        circle1:blackCircle,
        circle2:whiteCircle,
        color:'#5757FC',
        link:<FormattedMessage id='diagrams' defaultMessage='Diagrams'/>,
        to:'/'
    },
    {
        cls:'cls2',
        icon:product2,
        circle1:blackCircle,
        circle2:whiteCircle,
        color:'#5DB3FF',
        link:<FormattedMessage id='online-booking' defaultMessage='Online Booking'/>,
        to:'/'
    },
    {
        cls:'cls3',
        icon:product3,
        circle1:blackCircle,
        circle2:whiteCircle,
        color:'#5D78FF',
        link:<FormattedMessage id='plans' defaultMessage='Plans'/>,
        to:'/'
    },
    {
        cls:'cls4',
        icon:product4,
        circle1:blackCircle,
        circle2:whiteCircle,
        color:'#FF5DB3',
        link:<FormattedMessage id='features' defaultMessage='Features'/>,
        to:'/'
    },
    {
        cls:'cls5',
        icon:product5,
        circle1:blackCircle,
        circle2:whiteCircle,
        color:'#775DFF',
        link:<FormattedMessage id='e-comerce' defaultMessage='E-Comerce'/>,
        to:'/'
    },
    {
        cls:'cls6',
        icon:product6,
        circle1:blackCircle,
        circle2:whiteCircle,
        color:'#FF5D79',
        link:<FormattedMessage id='hostDiagram-app' defaultMessage='HostDiagram App'/>,
        to:'/'
    },
    {
        cls:'cls7',
        icon:product7,
        circle1:blackCircle,
        circle2:whiteCircle,
        color:'#AE5DFF',
        link:<FormattedMessage id='colloboration' defaultMessage='Colloboraton'/>,
        to:'/'
    },
    {
        cls:'cls8',
        icon:product8,
        circle1:blackCircle,
        circle2:whiteCircle,
        color:'#D1B2FF',
        link:<FormattedMessage id='security' defaultMessage='Security'/>,
        to:'/'
    }
]
export const ProductsData2=[
    {
        cls:'cls9',
        icon:<Product12/>,
        link:<FormattedMessage id='all-in-one-tool' defaultMessage='All in one tool'/>
    },
    {
        cls:'cls10',
        icon:<Product11/>,
        link:<FormattedMessage id='freedom-to-create' defaultMessage='Freedom to create'/>
    },
    {
        cls:'cls11',
        icon:<Product9/>,
        link:<FormattedMessage id='al-powerd' defaultMessage='Al Powerd'/>
    },
    {
        cls:'cls12',
        icon:<Product10/>,
        link:<FormattedMessage id='magic-sort' defaultMessage='Magic Sort'/>
    },
    {
        cls:'cls13',
        icon:<Product13/>,
        link:<FormattedMessage id='meetings-working' defaultMessage='Meetings & Working'/>
    },
]

export const useCasesData=[
    {
        cls:'cls14',
        icon:useCases1,
        circle1:blackCircle,
        circle2:whiteCircle,
        color:'#5757FC',
        link:<FormattedMessage id='brainstorming' defaultMessage='Brainstorming'/>,
        to:'/'
    },
    {
        cls:'cls15',
        icon:useCases2,
        circle1:blackCircle,
        circle2:whiteCircle,
        color:'#5DB3FF',
        link:<FormattedMessage id='ideation' defaultMessage='Ideation'/>,
        to:'/'
    },
    {
        cls:'cls16',
        icon:useCases3,
        circle1:blackCircle,
        circle2:whiteCircle,
        color:'#5D78FF',
        link:<FormattedMessage id='retrospectives' defaultMessage='Retrospectives'/>,
        to:'/'
    },
    {
        cls:'cls17',
        icon:useCases4,
        circle1:blackCircle,
        circle2:whiteCircle,
        color:'#FF5DB3',
        link:<FormattedMessage id='diagraming' defaultMessage='Diagraming'/>,
        to:'/'
    },
    {
        cls:'cls18',
        icon:useCases5,
        circle1:blackCircle,
        circle2:whiteCircle,
        color:'#775DFF',
        link:<FormattedMessage id='menagment' defaultMessage='Menagment'/>,
        to:'/'
    },
    {
        cls:'cls19',
        icon:useCases6,
        circle1:blackCircle,
        circle2:whiteCircle,
        color:'#FF5D79',
        link:<FormattedMessage id='desing-planing' defaultMessage='Desing & Planing'/>,
        to:'/'
    },
    {
        cls:'cls20',
        icon:useCases7,
        circle1:blackCircle,
        circle2:whiteCircle,
        color:'#AE5DFF',
        link:<FormattedMessage id='agile-workflows' defaultMessage='Agile Workflows'/>,
        to:'/'
    },
    {
        cls:'cls21',
        icon:useCases8,
        circle1:blackCircle,
        circle2:whiteCircle,
        color:'#D1B2FF',
        link:<FormattedMessage id='meeting-workshops' defaultMessage='Meeting & Workshops'/>,
        to:'/'
    }
]
export const solutionsData=[
    {
        cls:'cls22',
        icon:solutions1,
        circle1:blackCircle,
        circle2:whiteCircle,
        color:'#5757FC',
        link:<FormattedMessage id='remote-teams' defaultMessage='Remote Teams'/>,
        to:'/'
    },
    {
        cls:'cls23',
        icon:solutions2,
        circle1:blackCircle,
        circle2:whiteCircle,
        color:'#5DB3FF',
        link:<FormattedMessage id='product' defaultMessage='Product'/>,
        to:'/'
    },
    {
        cls:'cls24',
        icon:solutions3,
        circle1:blackCircle,
        circle2:whiteCircle,
        color:'#5D78FF',
        link:<FormattedMessage id='engineering' defaultMessage='Engineering'/>,
        to:'/'
    },
    {
        cls:'cls25',
        icon:solutions4,
        circle1:blackCircle,
        circle2:whiteCircle,
        color:'#FF5DB3',
        link:<FormattedMessage id='sales' defaultMessage='Sales'/>,
        to:'/'
    },
    {
        cls:'cls26',
        icon:solutions5,
        circle1:blackCircle,
        circle2:whiteCircle,
        color:'#775DFF',
        link:<FormattedMessage id='operations' defaultMessage='Operations'/>,
        to:'/'
    },
    {
        cls:'cls27',
        icon:solutions6,
        circle1:blackCircle,
        circle2:whiteCircle,
        color:'#FF5D79',
        link:<FormattedMessage id='education' defaultMessage='Education'/>,
        to:'/'
    },
    {
        cls:'cls28',
        icon:solutions7,
        circle1:blackCircle,
        circle2:whiteCircle,
        color:'#AE5DFF',
        link:<FormattedMessage id='it-teams' defaultMessage='IT Teams'/>,
        to:'/'
    },
    {
        cls:'cls29',
        icon:solutions8,
        circle1:blackCircle,
        circle2:whiteCircle,
        color:'#D1B2FF',
        link:<FormattedMessage id='strategy-planning' defaultMessage='Strategy & Planning'/>,
        to:'/'
    }
]
export const aboutUsData=[
    {
        cls:'cls30',
        icon:aboutUs1,
        circle1:blackCircle,
        circle2:whiteCircle,
        color:'#5757FC',
        link:<FormattedMessage id='company' defaultMessage='Company'/>,
        to:'/'
    },
    {
        cls:'cls31',
        icon:aboutUs2,
        circle1:blackCircle,
        circle2:whiteCircle,
        color:'#5DB3FF',
        link:<FormattedMessage id='tutorials' defaultMessage='Tutorials'/>,
        to:'/'
    },
    {
        cls:'cls32',
        icon:aboutUs3,
        circle1:blackCircle,
        circle2:whiteCircle,
        color:'#5D78FF',
        link:<FormattedMessage id='blog' defaultMessage='Blog'/>,
        to:'/'
    },
    {
        cls:'cls33',
        icon:aboutUs4,
        circle1:blackCircle,
        circle2:whiteCircle,
        color:'#FF5DB3',
        link:<FormattedMessage id='faqs' defaultMessage='FAQs'/>,
        to:'/'
    },
    {
        cls:'cls34',
        icon:aboutUs5,
        circle1:blackCircle,
        circle2:whiteCircle,
        color:'#775DFF',
        link:<FormattedMessage id='newsletter' defaultMessage='Newsletter'/>,
        to:'/'
    },
    {
        cls:'cls35',
        icon:aboutUs6,
        circle1:blackCircle,
        circle2:whiteCircle,
        color:'#FF5D79',
        link:<FormattedMessage id='awards' defaultMessage='Awards'/>,
        to:'/'
    },
    {
        cls:'cls36',
        icon:aboutUs7,
        circle1:blackCircle,
        circle2:whiteCircle,
        color:'#AE5DFF',
        link:<FormattedMessage id='social-media' defaultMessage='Social Media'/>,
        to:'/'
    },
    {
        cls:'cls37',
        icon:aboutUs8,
        circle1:blackCircle,
        circle2:whiteCircle,
        color:'#D1B2FF',
        link:<FormattedMessage id='enterprice' defaultMessage='Enterprice'/>,
        to:'/'
    }
]
export const MainData = [
    {
        link:<FormattedMessage id='product' defaultMessage='Product' />,
        cls:'prouct-link',
        to:'/',
        megamenu:<ProductMenu />
    },
    {
        link:<FormattedMessage id='use-cases' defaultMessage='Use Cases' />,
        cls:'useCases-link',
        to:'/',
        megamenu:<UseCasesMenu />
    },
    {
        link:<FormattedMessage id='solutions' defaultMessage='Solutions' />,
        cls:'solutions-link',
        to:'/',
        megamenu:<SolutionsMenu />
    },
    {
        link:<FormattedMessage id='pricing' defaultMessage='Pricing' />,
        cls:'pricing-link',
        to:'/'
    },
    {
        link:<FormattedMessage id='features' defaultMessage='Features' />,
        cls:'features-link',
        to:'/' 
    },
    {
        link:<FormattedMessage id='about-us' defaultMessage='About Us' />,
        cls:'aboutUs-link',
        to:'/',
        megamenu:<AboutUsMenu />
    }
]