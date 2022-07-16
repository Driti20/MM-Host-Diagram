import { FormattedMessage } from 'react-intl'
import  {ReactComponent as PinkLine} from '../../../../assets/shared/Client/pinkLine.svg'
import  {ReactComponent as BlueLine} from '../../../../assets/shared/Client/blueLine.svg'
import  client1 from '../../../../assets/shared/Client/client1.png'
import  client2 from '../../../../assets/shared/Client/client2.png'
import  client3 from '../../../../assets/shared/Client/client3.png'

export const ClientData=[
    {
        cls:'cls1',
        image:client1,
        line:<PinkLine/>,
        name:<FormattedMessage id='anastassia-magmedov' defaultMessage='Anastassia Magmedov'/>,
        feedback:<FormattedMessage id='feedback1' defaultMessage='“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our 
        creativity and productivity would suffer. HostDiagram was the perfect tool to help us with collaboration, whiteboarding, and retrospectives 
        while remote.”'/>
    },
    {
        cls:'cls2',
        image:client2,
        line:<BlueLine/>,
        name:<FormattedMessage id='malik-hussein' defaultMessage='Malik Hussein'/>,
        feedback:<FormattedMessage id='feedback2' defaultMessage='“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our 
        creativity and productivity would suffer. HostDiagram was the perfect tool to help us with collaboration, whiteboarding, and retrospectives 
        while remote.”'/>
    },
    {
        cls:'cls3',
        image:client3,
        line:<PinkLine/>,
        name:<FormattedMessage id='laura-baird' defaultMessage='Laura Baird'/>,
        feedback:<FormattedMessage id='feedback3' defaultMessage='“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our 
        creativity and productivity would suffer. HostDiagram was the perfect tool to help us with collaboration, whiteboarding, and retrospectives 
        while remote.”'/>
    }
]