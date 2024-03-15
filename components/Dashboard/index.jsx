"use client"

import React, { useState, useEffect } from "react"
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';

export default function Dashboard(props) {
    const router = useRouter();
    
    return (
        <div className="dashboard-wra">            
            <button aria-label="" className="btn btn-primary btn-lg m-t-10" type="submit" onClick={signOut}>
                Sign out
            </button>
        </div>
    )
}