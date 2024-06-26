import React from 'react';
import Link from 'next/link';
import Image from "next/image";

import service_shape_1 from "@assets/img/shape/shape-s-1.png";
import service_shape_2 from "@assets/img/shape/shape-s-2.png";
import service_icon_1 from "@assets/img/icon/icon.png";
import service_icon_2 from "@assets/img/icon/icon2.png";
import service_icon_3 from "@assets/img/icon/icon3.png";

const service_data = [
    {
        id: 1,
        icon: service_icon_1,
        title: "Future-Ready Platform",
        sm_des: <>Rainmaker is built for tomorrow's insurance market, keeping you ahead with AI-driven strategies.</>,
    },
    {
        id: 2,
        icon: service_icon_2,
        title: "Scalable Solutions",
        sm_des: <>From small teams to large enterprises, Rainmaker scales with your business, ensuring you're always at peak performance.</>
    },
    {
        id: 3,
        icon: service_icon_3,
        title: "Empowering Ecosystem",
        sm_des: <>Our platform is more than technology—it's a community dedicated to supporting and celebrating every agent's success.</>
    },
]
 
const ServiceArea = ({style_fancy}) => {
    return (
        <>
            <section className={`how-work-area pos-relative ${style_fancy ? "" : "pt-150"} pb-120`}>
                <div className="shape-section">
                    <Image className="shape shape-s-1" src={service_shape_1} alt="theme-pure" />
                    <Image className="shape shape-s-2" src={service_shape_2} alt="theme-pure" />
                </div>
                <div className="container">
                    {style_fancy?  null : 
                        <div className="row">
                            <div className="col-xl-6 offset-xl-3">
                                <div className="section-title text-center mb-70">
                                    <h2>Why Choose Us?</h2>
                                    {/* <p>Gathered was to yielding god heaven lights about void thing.</p> */}
                                </div>
                            </div>
                        </div>                    
                    }
                    <div className="row">   
                    {service_data.map((item, i) => 
                        <div key={i} className="col-xl-4 col-lg-4">
                            <div className="how-work mb-30">
                                <div className="how-work-icon">
                                    <Image src={item.icon} alt="theme-pure" />
                                </div>
                                <div className="how-work-text">
                                    <h3>{item.title}</h3>
                                    <p>{item.sm_des}</p>
                                </div>
                                <div className="how-work-link">
                                    <Link href="#">Read more</Link>
                                </div>
                            </div>
                        </div>                    
                    )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceArea;