import React, { useState, useEffect } from 'react';
import './Chat.css';
import setRe from "./NewChat1"

const Documents = () => {
    const [visibleDocuments, setVisibleDocuments] = useState([]);

    // Original array of documents
    const documents = [
        { id: 1, doc: "33737-i00" },
        { id: 2, doc: "33738-i00" },
        { id: 3, doc: "33738-i01" },
    ];

    useEffect(() => {
        // Set a timeout to display all documents after 10 seconds
        const displayTimeout = setTimeout(() => {
            setVisibleDocuments(documents);
        }, 10000);

        // Clear the timeout when the component unmounts to avoid memory leaks
        return () => clearTimeout(displayTimeout);
    }, []);

    return (
        <div>
            <h1 className='text-white bg-dark text-center' style={{ "borderRadius": "13px" }}>Documents</h1>
            <div className='mt-5 text-center'>
                {visibleDocuments.map(item => (
                    <h3 key={item.id}>{item.doc}</h3>
                ))}
            </div>
        </div>
    );
};

export default Documents;



