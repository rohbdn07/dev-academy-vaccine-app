import React from "react";
import { FaGithub, FaLinkedin, FaCopyright } from "react-icons/fa";
import { GiLoveInjection } from "react-icons/gi";

import "../style.css";

export default function Footer() {
    return (
        <>
            <div className="footer_end ">
                <div className="fotend_wrapper col-lg-11 mx-auto">
                    <div className="fotend_left">
                        <p className="text-light">
                            2021 Dev <GiLoveInjection /> vaccine
                        </p>
                    </div>
                    <div className="fotend_middle">
                        <p>
                            <FaCopyright /> rohit.raj.bhandari07@gmail.com
                        </p>
                        <p>Helsinki-Finland</p>
                    </div>
                    <div className="fotend_right">
                        <a
                            href="https://github.com/rohbdn07/dev-academy-vaccine-app"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGithub className="mx-1 text-light" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/rohit-bhandari-5b4994177/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaLinkedin className="mx-2 text-light" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
