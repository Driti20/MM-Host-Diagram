import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { FormattedMessage } from "react-intl";

import { FaUsers } from 'react-icons/fa'
import { CgClose } from 'react-icons/cg'
import { MdBusinessCenter, MdKeyboardArrowDown,MdProductionQuantityLimits } from 'react-icons/md'
import { BiSliderAlt, BiCategoryAlt } from 'react-icons/bi'
import { RiPriceTag3Line } from 'react-icons/ri'

import { ProductsData, aboutUsData, solutionsData, useCasesData, ProductsData2 } from '../../navbar/data';
import { AiOutlineInfoCircle ,AiOutlineSolution } from 'react-icons/ai';

const Sidebar = (props) => {    

    const [list,showList] = useState(false);
    const [list2,showList2] = useState(false);
    const [list3,showList3] = useState(false);
    const [list4,showList4] = useState(false);
    function show(){
        showList(!list);
    }
    function show2(){
        showList2(!list2);
    }
    function show3(){
        showList3(!list3);
    }
    function show4(){
        showList4(!list4);
    }

    return (
        <div className='mobile-sidebar'>
             <div className='sidebar-logo-row'>
                <Link to='/'>
                    <div className='mobile-logo-container'></div>
                    <h6>HostDiagram</h6>
                </Link>
                <button onClick={props.click}><CgClose/> </button>
            </div>

            <div className='mobile-sidebar-links'>

                <div className='sidebar-dropdown'>
                    <div className='nav-sidebar-link' onClick={show}>
                        <Link to='/' className='nav-anchor'>
                            <MdProductionQuantityLimits />
                            <FormattedMessage id='product' defaultMessage='Product' />
                        </Link>
                        <div className='dropdown-arrow'>
                            <MdKeyboardArrowDown/> 
                        </div>
                    </div>
                    {list===true && 
                        <div className="mobile-dopdown">
                            <div className="inner-links">
                                {ProductsData.map((props) => {
                                    return(
                                            <Link to={props.to}>{props.link}</Link>     
                                    )
                                })}
                                {ProductsData2.map((props) => {
                                    return(
                                            <Link to='/'>{props.link}</Link>     
                                    )
                                })}
                            </div>
                        </div>
                    } 
                </div>

                <div className='sidebar-dropdown'>
                    <div className='nav-sidebar-link' onClick={show2}>
                        <Link to='/' className='nav-anchor'>
                            <MdBusinessCenter />
                            <FormattedMessage id='useCases' defaultMessage='Use Cases' />
                        </Link>
                        <div className='dropdown-arrow'>
                            <MdKeyboardArrowDown/> 
                        </div>
                    </div>
                    {list2===true && 
                        <div className="mobile-dopdown">
                            <div className="inner-links">
                                {useCasesData.map((props) => {
                                    return(
                                            <Link to={props.to}>{props.link}</Link>     
                                    )
                                })}
                            </div>
                        </div>
                    }
                </div>

                <div className='sidebar-dropdown'>
                    <div className='nav-sidebar-link' onClick={show3}>
                        <Link to='/' className='nav-anchor'>
                            <AiOutlineSolution />
                            <FormattedMessage id='solutions' defaultMessage='Solutions' />
                        </Link>
                        <div className='dropdown-arrow'>
                            <MdKeyboardArrowDown/> 
                        </div>
                    </div>
                    {list3===true && 
                        <div className="mobile-dopdown">
                            <div className="inner-links">
                                {solutionsData.map((props) => {
                                    return(
                                            <Link to={props.to}>{props.link}</Link>     
                                    )
                                })}
                            </div>
                        </div>
                    }
                </div>

                <div className='nav-sidebar-link'>
                    <Link to='/' className='nav-anchor'>
                        <RiPriceTag3Line />
                        <FormattedMessage id='pricing' defaultMessage='Pricing' />
                    </Link>
                </div>
                <div className='nav-sidebar-link'>
                    <Link to='/' className='nav-anchor'>
                        <BiSliderAlt />
                        <FormattedMessage id='features' defaultMessage='Features' />
                    </Link>
                </div>

                <div className='sidebar-dropdown'>
                    <div className='nav-sidebar-link' onClick={show4}>
                        <Link to='/' className='nav-anchor'>
                            <AiOutlineInfoCircle />
                            <FormattedMessage id='aboutUs' defaultMessage='About Us' />
                        </Link>
                        <div className='dropdown-arrow'>
                            <MdKeyboardArrowDown/> 
                        </div>
                    </div>
                    {list4===true && 
                        <div className="mobile-dopdown">
                            <div className="inner-links">
                                {aboutUsData.map((props) => {
                                    return(
                                            <Link to={props.to}>{props.link}</Link>     
                                    )
                                })}
                            </div>
                        </div>
                    }
                </div>
                </div>


            <div className='sidebar-auth'>
                <Link to='/' className='link1'>
                    <FormattedMessage id='log-in' defaultMessage='Log In' />
                </Link>
                <Link to='/SignUp' className='link2'>
                    <FormattedMessage id='sign-up' defaultMessage='Sign Up' />
                </Link>
            </div>

            <div className='space'></div>
        </div>
    )
}

export default Sidebar
