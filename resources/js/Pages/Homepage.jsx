import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Homepage(props) {
    return (
        <div className='flex justify-center items-center min-h-screen bg-neutral-100'>
            <Head title={props.title} />
            {/*<p>{props.description}</p>*/}
            <div>
                {props.news ? props.news.map((data, i) => {
                    return(
                        <div key={i} className="p-4 m-3 bg-white text-black shadow-md rounded-lg">
                            <p className='text-2xl'>{data.title}</p>
                            <p className='text-sm'>{data.description}</p>
                            <i>{data.category}</i><p> </p>
                            <i>{data.author}</i>
                        </div>
                    )
                }) : <p>Saat ini Belum Tersedia Berita.</p>}
            </div>

        </div>
    )
}
