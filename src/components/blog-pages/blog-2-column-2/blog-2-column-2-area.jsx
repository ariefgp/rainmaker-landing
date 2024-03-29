import two_column_data_two from '@/src/data/two-column-data-2';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogTwoColumnTwoArea = () => {
    return (
        <>
            <section className="blog-area pt-120 pb-120">
            <div className="container">
                <div className="row">
                    {two_column_data_two.map((item,i) =>
                        <div key={i} className="col-lg-6 col-md-6">
                            <article className="postbox post format-image mb-40">
                                <div className="postbox__thumb mb-25">
                                    <a href="#">
                                        <Image src={item.img} alt="theme-pure" />
                                    </a>
                                </div>
                                <div className="postbox__text">
                                    <div className="post-meta mb-15">
                                        <span><Link href="#"><i className="far fa-user"></i>{item.user}</Link></span>
                                        <span><Link href="#"><i className="far fa-comments"></i>{item.comment} Comments</Link></span>
                                    </div>
                                    <h3 className="blog-title blog-title-sm">
                                        <a href="#">{item.title}</a>
                                    </h3>
                                    <div className="post-text">
                                        <p>{item.sm_des}</p>
                                    </div>
                                    <div className="read-more-btn">
                                        <Link href="/blog-details" className="read-more">
                                            read more <i className="fas fa-long-arrow-alt-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        </div>                    
                    )}
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="basic-pagination basic-pagination-2 text-center">
                            <ul>
                                <li><Link href="#"><i className="fas fa-angle-double-left"></i></Link></li>
                                <li><Link href="#">01</Link></li>
                                <li className="active"><Link href="#">02</Link></li>
                                <li><Link href="#">03</Link></li>
                                <li><Link href="#"><i className="fas fa-ellipsis-h"></i></Link></li>
                                <li><Link href="#"><i className="fas fa-angle-double-right"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default BlogTwoColumnTwoArea;