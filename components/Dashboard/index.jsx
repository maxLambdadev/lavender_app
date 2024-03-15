"use client"

import React, { useState, useEffect } from "react"
import { useRouter } from 'next/navigation';

export default function Dashboard(props) {
    const router = useRouter();
    
    return (
        <div className="dashboard-wra">
            Dashboard
        </div>
    )
}