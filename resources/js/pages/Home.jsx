import { Head, Link, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import { useRoute } from "../../../vendor/tightenco/ziggy";

const Home = ({ posts }) => {
    const route = useRoute();

    //cosnole.log(usePage());
    const { flash } = usePage().props;
    const [flashMsg, setFlashMsg] = useState(flash.message);
    setTimeout(() => {
        setFlashMsg(null);
    }, 2000);

    const [flashSuccess, setFlashSuccess] = useState(flash.success);
    setTimeout(() => {
        setFlashSuccess(null);
    }, 2000);

    const { component } = usePage();

    return (
        <>
            <Head title={component} />

            <h1 className="title">Hello </h1>
            {flashMsg && (
                <div className="absolute top-24 right-6 bg-rose-500 p-2 rounded-md shadow-lg text-sm text-white">
                    {flashMsg}
                </div>
            )}

            {flashSuccess && (
                <div className="absolute top-24 right-6 bg-green-500 p-2 rounded-md shadow-lg text-sm text-white">
                    {flashSuccess}
                </div>
            )}

            <div>
                {posts.data.map((post) => (
                    <div key={post.id} className="p-4 border-b">
                        <div className="text-sm text-slate-600">
                            <span>Posted on: </span>
                            <span>
                                {new Date(post.created_at).toLocaleTimeString()}
                            </span>
                        </div>
                        <p className="font-medium">{post.body}</p>
                        {/* <Link href={`/posts/${post.id}`} className="text-link">
                            Read more
                        </Link> */}
                        {/* this is using ziggy but we can use the previous one */}
                        <Link
                            href={route("posts.show", post.id)}
                            className="text-link"
                        >
                            Read more
                        </Link>
                    </div>
                ))}
            </div>

            <div className="py-12 px-4">
                {posts.links.map((link) =>
                    link.url ? (
                        <Link
                            key={link.label}
                            href={link.url}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className={`p-1 mx-1 ${
                                link.active ? "text-blue-500 font-bold" : ""
                            }`}
                        />
                    ) : (
                        <span
                            key={link.label}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className="p-1 mx-1 text-slate-300"
                        ></span>
                    )
                )}
            </div>
        </>
    );
};

export default Home;
