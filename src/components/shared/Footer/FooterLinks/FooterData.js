import { FormattedMessage } from "react-intl";
import { CgFacebook } from "react-icons/cg";
import { GrLinkedinOption } from 'react-icons/gr'
import { BsYoutube , BsTwitter} from 'react-icons/bs'



export const FooterData=[
    {   
        cls:'category1',
        category:<FormattedMessage id="HostDiagram" defaultMessage='HostDiagram'/>,
        links:[
            {
                link:<FormattedMessage id="Diagrams" defaultMessage='Diagrams'/>,
                to:'/',
            },
            {
                link:<FormattedMessage id="Workflows" defaultMessage='Workflows'/>,
                to:'/',
            },
            {
                link:<FormattedMessage id="Brainstorming" defaultMessage='Brainstorming'/>,
                to:'/',
            },
            {
                link:<FormattedMessage id="Plans" defaultMessage='Plans'/>,
                to:'/',
            },
            {
                link:<FormattedMessage id="Strategy" defaultMessage='Strategy'/>,
                to:'/',
            },
            {
                link:<FormattedMessage id="Users" defaultMessage='Users'/>,
                to:'/',
            },
            {
                link:<FormattedMessage id="HostDiagram" defaultMessage='HostDiagram'/>,
                to:'/',
            }
        ]
    },
    {   
        cls:'category2',
        category:<FormattedMessage id="Resources" defaultMessage='Resources'/>,
        links:[
            {
                link:<FormattedMessage id="Learning-campus" defaultMessage='Learning campus'/>,
                to:'/',
            },
            {
                link:<FormattedMessage id="Blog" defaultMessage='Blog'/>,
                to:'/',
            },
            {
                link:<FormattedMessage id="Templates" defaultMessage='Templates'/>,
                to:'/',
            },
            {
                link:<FormattedMessage id="Webinars" defaultMessage='Webinars'/>,
                to:'/',
            },
            {
                link:<FormattedMessage id="Case-studies" defaultMessage='Case studies'/>,
                to:'/',
            },
            {
                link:<FormattedMessage id="Diagrams" defaultMessage='Diagrams'/>,
                to:'/',
            },
            {
                link:<FormattedMessage id="Partners" defaultMessage='Partners'/>,
                to:'/',
            }
        ]
    },
    {   
        cls:'category3',
        category:<FormattedMessage id="Solutions" defaultMessage='Solutions'/>,
        links:[
            {
                link:<FormattedMessage id="Remote-teams" defaultMessage='Remote teams'/>,
                to:'/',
            },
            {
                link:<FormattedMessage id="Engineering" defaultMessage='Engineering'/>,
                to:'/',
            },
            {
                link:<FormattedMessage id="IT" defaultMessage='IT'/>,
                to:'/',
            },
            {
                link:<FormattedMessage id="Operations" defaultMessage='Operations'/>,
                to:'/',
            },
            {
                link:<FormattedMessage id="Product" defaultMessage='Product'/>,
                to:'/',
            },
            {
                link:<FormattedMessage id="Sales" defaultMessage='Sales'/>,
                to:'/',
            },
            {
                link:<FormattedMessage id="Education" defaultMessage='Education'/>,
                to:'/',
            }
        ]
    },
    {   
        cls:'category4',
        category:<FormattedMessage id="Plans-Pricing" defaultMessage='Plans & Pricing'/>,
        links:[
            {
                link:<FormattedMessage id="Pricing" defaultMessage='Pricing'/>,
                to:'/',
            },
            {
                link:<FormattedMessage id="Team" defaultMessage='Team'/>,
                to:'/',
            },
            {
                link:<FormattedMessage id="Business" defaultMessage='Business'/>,
                to:'/',
            },
            {
                link:<FormattedMessage id="Enterprise" defaultMessage='Enterprise'/>,
                to:'/',
            },
            {
                link:<FormattedMessage id="Consultants" defaultMessage='Consultants'/>,
                to:'/',
            },
            {
                link:<FormattedMessage id="Education" defaultMessage='Education'/>,
                to:'/',
            },
            {
                link:<FormattedMessage id="Startups" defaultMessage='Startups'/>,
                to:'/',
            }
        ]
    },
    {   
        cls:'category5',
        category:<FormattedMessage id="Information" defaultMessage='Information'/>,
        links:[
            {
                link:<FormattedMessage id="Help Center" defaultMessage='Help Center'/>,
                to:'/',
            },
            {
                link:<FormattedMessage id="Privacy-Policy" defaultMessage='Privacy Policy'/>,
                to:'/',
            },
            {
                link:<FormattedMessage id="Terms-of-Service" defaultMessage='Terms of Service'/>,
                to:'/',
            },
            {
                link:<FormattedMessage id="Cookies Policy" defaultMessage='Cookies Policy'/>,
                to:'/',
            },
            {
                link:<FormattedMessage id="Support" defaultMessage='Support'/>,
                to:'/',
            },
            {
                link:<FormattedMessage id="Newsletter" defaultMessage='Newsletter'/>,
                to:'/',
            },
            {
                link:<FormattedMessage id="Payments" defaultMessage='Payments'/>,
                to:'/',
            }
        ]
    }
]

export const FooterSocialMediaData=[
    {
        cls:'fb',
        icon:<CgFacebook/>,
        url:'/'
    },
    {
        cls:'l-in',
        icon:<GrLinkedinOption/>,
        url:'/'
    },
    {
        cls:'yt',
        icon:<BsYoutube/>,
        url:'/'
    },
    {
        cls:'twt',
        icon:<BsTwitter/>,
        url:'/'
    },
]