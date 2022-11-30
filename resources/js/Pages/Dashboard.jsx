import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/inertia-react';
import {Inertia} from "@inertiajs/inertia";

export default function Dashboard(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [isNotif, setNotif] = useState(false);

    const handleSubmit = () => {
        const data = {
            title, description, category
        }
        Inertia.post('/news', data)
        setNotif(true)
        setTitle('')
        setDescription('')
        setCategory('')
    }
    console.log('props last: ', props);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Berita Saya</h2>}
        >
            <Head title="Dashboard"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {isNotif &&
                                <div className="alert alert-info shadow-lg m-2">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             className="stroke-current flex-shrink-0 w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>{props.flash.message}</span>
                                    </div>
                                </div>
                            }
                            <input type="text" placeholder="Judul"
                                   className="m-2 input input-bordered w-full "
                                   onChange={(title) => setTitle(title.target.value)} value={title}/>
                            <input type="text" placeholder="Deskripsi"
                                   className="m-2 input input-bordered w-full "
                                   onChange={(description) => setDescription(description.target.value)}
                                   value={description}/>
                            <input type="text" placeholder="Kategori"
                                   className="m-2 input input-bordered w-full "
                                   onChange={(category) => setCategory(category.target.value)} value={category}/>
                            <button className='btn btn-primary m-2' onClick={() => handleSubmit()}>SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
