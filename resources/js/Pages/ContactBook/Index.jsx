import TextInput from "@/Components/TextInput";
import Modal from "@/Components/Modal";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState, useEffect } from "react";
import InputLabel from "@/Components/InputLabel";

export default function Index({ auth, contactBooks })
{
    const [showModal, setShowModal] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const { data, setData, post, errors, reset } = useForm({
        name: ''
    })

    const onSubmit = (e) =>
    {

        e.preventDefault();
        setShowModal(false)
        post(route('contactBook.store'));
    }


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Contact Books
                    </h2>
                    <button
                        onClick={() => setShowModal(true)}
                        className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-md shadow-md hover:bg-blue-700 transition duration-300 ease-in-out ml-4"
                    >
                        New Contact Book
                    </button>
                </div>


            }
        >
            <Head title="Contact Books" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                    <tr className="text-nowrap">
                                        <th className="px-3 py-3">ID</th>
                                        <th className="px-3 py-3">NAME</th>
                                        <th className="px-3 py-3 text-right">ACTIONS</th>
                                    </tr>
                                </thead>
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                    <tr className="text-nowrap"></tr>
                                </thead>
                                <tbody>
                                    {contactBooks.map((contactBook) => (
                                        <tr key={contactBook.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td className="px-3 py-3">{contactBook.id}</td>
                                            <td className="px-3 py-3">{contactBook.name}</td>
                                            <td className="px-3 py-3 text-right">
                                                <Link href={route('contact.show', contactBook.id)}
                                                    className="font-medium text-blue-600 dark: text-blue-500 hover:underline mx-1">
                                                    Show
                                                </Link>
                                            </td>
                                            <td className="px-3 py-2 text-right">
                                                <Link href={route('contact.edit', contactBook.id)}
                                                    className="font-medium text-blue-600 dark: text-blue-500 hover:underline mx-1">
                                                    Edit
                                                </Link>
                                            </td>
                                            <td className="px-3 py-2 text-right">
                                                <Link href={route('contact.destroy', contactBook.id)}
                                                    className="font-medium text-red-600 dark: text-red-500 hover:underline mx-1">
                                                    Delete
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={showModal} onClose={() => setShowModal(false)} maxWidth="sm">
                <div className="p-6">
                    <h2 className="text-lg font-semibold mb-4">Enter Data</h2>

                    <div className="mt-4 flex justify-end space-x-4">
                        <form
                            onSubmit={onSubmit}
                        >
                            <div>
                                <TextInput
                                    id="contactBook_name"
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) => setData({ ...data, name: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

                                />
                            </div>

                            <button                                
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                            >
                                Submit
                            </button>

                        </form>


                    </div>
                </div>
            </Modal>
        </AuthenticatedLayout>
    );
}
