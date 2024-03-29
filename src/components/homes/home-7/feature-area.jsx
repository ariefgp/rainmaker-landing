import React from 'react';
import Image from 'next/image';
import feature_icon_1 from  "@assets/img/icon/sf1.png";
import feature_icon_2 from  "@assets/img/icon/sf2.png";
import feature_icon_3 from  "@assets/img/icon/sf3.png";


const feature_data = [
    {
        id: 1,
        icon: feature_icon_1,
        title: "AI-Powered Chatbot",
        sm_des: <>Our AI chatbot eliminates the 'lack of product knowledge' excuse, making every agent a top seller.</>,
    },
    {
        id: 2,
        icon: feature_icon_2,
        title: "Lead Generation & Profiling",
        sm_des: <>Master sales approaches with our AI-guided lead generation, nurturing prospects into customers.</>,
    },
    {
        id: 3,
        icon: feature_icon_3,
        title: "Sales Activity Builder",
        sm_des: <>Plan and track your sales activities effortlessly, building habits that lead to success.</>,
    },
]

const FeatureArea = () => {
    return (
        <>
           <section className="how-work-area pos-relative pt-150 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3">
                            <div className="section-title text-center mb-70">
                                <h2>Our Solution</h2>
                                <p>Rainmaker: Where Advanced Technology Meets Insurance Sales Mastery</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {feature_data.map((item, i) => 
                            <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                                <div className="how-work single-features text-center mb-30">
                                    <div className="how-work-icon">
                                        <Image src={item.icon} alt="theme-pure" />
                                    </div>
                                    <div className="how-work-text">
                                        <h3>{item.title}</h3>
                                        <p>{item.sm_des}</p>
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

export default FeatureArea;