import React, { useEffect, useState } from 'react'
import Spinner from '../Assets/spinner.svg'

export default function Loader() {    
    return (
        <div className="loading-screen">
            <div className='dot'>
                <div className="dot-spinner"></div>
                <div className="dot-spinner"></div>
                <div className="dot-spinner"></div>
                <div className="dot-spinner"></div>
                <div className="dot-spinner"></div>
                <div className="dot-spinner"></div>
                <div className="dot-spinner"></div>
                <div className="dot-spinner"></div>
            </div>
        </div>
    );
}