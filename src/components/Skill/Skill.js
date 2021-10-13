import React from 'react';
import "./Skill.css";
import IconWebsite from "../../assets/icon/gg_website.png";

export default function Skill() {
    return (
        <>
            <section data-aos="fade-up" id="skill" className="container mx-auto w-2/3 mt-36 p-5 my-10 rounded-xl">
                <div class="grid md:grid-cols-3 gap-8 justify-items-center">
                    <div className="flex flex-col text-center justify-center">
                        <div className="bg-primary-lights rounded-full mb-5">
                            <img src={IconWebsite} className="m-4" alt="Website" width="55" height="55" />
                        </div>
                        <h3 className="font-bold">Website</h3>
                    </div>
                    <div className="flex flex-col justify-center text-center">
                        <div className="bg-primary-lights rounded-full mb-5">
                            <img src={IconWebsite} className="m-4" alt="Website" width="55" height="55" />
                        </div>
                        <h3 className="font-bold">Mobile</h3>
                    </div>
                    <div className="flex flex-col text-center justify-center">
                        <div className="bg-primary-lights rounded-full mb-5">
                            <img src={IconWebsite} className="m-4" alt="Website" width="55" height="55" />
                        </div>
                        <h3 className="font-bold">Desain</h3>
                    </div>
                </div>
            </section>
        </>
    );
}