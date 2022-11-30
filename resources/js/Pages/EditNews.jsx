import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Navbar from "@/Components/Navbar";

export default function EditNews(props) {
    console.log('edit props:', props)
    return (
        <div className='min-h-screen bg-slate-50'>
            <Head title={props.title} />
            <Navbar user={props.auth.user} />

        </div>
    )
}
