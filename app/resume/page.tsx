import { useState } from 'react';
import './resume.css';
import Experince from '../component/Resumepage/Experince';
import ExtraCurricular from '../component/Resumepage/Extra';
import EducationContent from '../component/Education/EducationContent';
import Acheviement from '../component/Awards/Acheviement';

export default function Resume(){
    return (
        <div className='main'>
          
            <div className='extra'>
                    <p className='mainhead'>WORK EXPERIENCE</p>
                    <Experince />
                </div>
                <div className='extra'>
                    <p className='mainhead'>EXTRA CIRRICULAR</p>
                    <ExtraCurricular />
                </div>
                <div className='extra'>
                    <p className='mainhead'>ACHEIVEMENTS AND AWARDS</p>
                    <Acheviement />
                </div>
                <div className='extra'>
                    <p className='mainhead'>EDUCATION</p>
                    <EducationContent />
                </div>
        </div>
    )
}