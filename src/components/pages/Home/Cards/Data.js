import {ReactComponent as Card1} from '../../../../assets/shared/cards/card1.svg'
import {ReactComponent as Card2} from '../../../../assets/shared/cards/card2.svg'
import {ReactComponent as Card3} from '../../../../assets/shared/cards/card3.svg'
import {ReactComponent as Card4} from '../../../../assets/shared/cards/card4.svg'
import {ReactComponent as Card5} from '../../../../assets/shared/cards/card5.svg'
import {ReactComponent as Card6} from '../../../../assets/shared/cards/card6.svg'
import {ReactComponent as Card7} from '../../../../assets/shared/cards/card7.svg'
import blackCircle from '../../../../assets/shared/cards/blackCircle.svg'
import whiteCircle from '../../../../assets/shared/cards/whiteCircle.svg'
import { FormattedMessage } from 'react-intl'





export const cardData=[
    {
        cls:'cls1',
        icon:<Card1/>,
        circle1:blackCircle,
        circle2:whiteCircle,
        color:'#5D78FF',
        link:<FormattedMessage id='Online-Tutoring' defaultMessage='Online Tutoring'/>,
        to:'/'
    },
    {
        cls:'cls2',
        icon:<Card2/>,
        circle1:blackCircle,
        circle2:whiteCircle,
        color:'#775DFF',
        link:<FormattedMessage id='Define-Next-Steps' defaultMessage='Define Next Steps'/>,
        to:'/'
    },
    {
        cls:'cls3',
        icon:<Card3/>,
        circle1:blackCircle,
        circle2:whiteCircle,
        color:'#AE5DFF',
        link:<FormattedMessage id='ResearchDesign' defaultMessage='Research & Design'/>,
        to:'/'
    },
    {
        cls:'cls4',
        icon:<Card4/>,
        circle1:blackCircle,
        circle2:whiteCircle,
        color:'#FF5DB3',
        link:<FormattedMessage id='Ideate-Create' defaultMessage='Ideate & Create'/>,
        to:'/'
    },
    {
        cls:'cls5',
        icon:<Card5/>,
        circle1:blackCircle,
        circle2:whiteCircle,
        color:'#FF5D62',
        link:<FormattedMessage id='brainstorming' defaultMessage='Brainstorming'/>,
        to:'/'
    },
    {
        cls:'cls6',
        icon:<Card6/>,
        circle1:blackCircle,
        circle2:whiteCircle,
        color:'#5DB3FF',
        link:<FormattedMessage id='agileWorkflows' defaultMessage='Agile Workflows'/>,
        to:'/'
    },
    {
        cls:'cls7',
        icon:<Card7/>,
        circle1:blackCircle,
        circle2:whiteCircle,
        color:'#5757FC',
        link:<FormattedMessage id='processImprovement' defaultMessage='Process Improvement'/>,
        to:'/'
    },
    
]
