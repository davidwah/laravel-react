import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/Homepage/NewsList";

export default function Homepage(props) {
    return (
        <div className='min-h-screen bg-neutral-100'>
            <Head title={props.title} />
            <Navbar />
            {/*<p>{props.description}</p>*/}
            <div>
                <NewsList news={props.news}/>
            </div>

        </div>
    )
}
