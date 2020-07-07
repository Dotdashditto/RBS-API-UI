import React from 'react'
import './InfoDisplay.css'

export default function InfoDisplay({ data = {} }) {
    if (!data) {
        return null
    }
    return (
        <div className="infoContainer">
            <h2>Results:</h2>
            <div className="formattedData">
                <pre>{JSON.stringify(data, null, 4)}</pre>
            </div>
        </div>
    )
}