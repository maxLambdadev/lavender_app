import { Metadata } from "next"
import { LoginForm } from "@/components/Extra/Login/login-form"

export default function LoginPage() {
    return (
        <div className="login-wrapper">
            {/* <!-- START Login Background Pic Wrapper--> */}
            <div className="bg-pic">
            </div>
            {/* <!-- END Login Background Pic Wrapper--> */}            
            {/* <!-- START Login Right Container--> */}
            <div className="login-container bg-white">
                <div className="p-l-50 p-r-50 p-t-50 m-t-30 sm-p-l-15 sm-p-r-15 sm-p-t-40">
                <img src="assets/img/flower.png" alt="logo" data-src="assets/img/flower.png" data-src-retina="assets/img/flower.png" width="51" height="48" />
                <h2 className="p-t-25"><span className="brand">Lavender Trading</span><br/><span className="hint-text font-light text-lg leading-none">Automation for select derivative markets.</span></h2>
                <p className="mw-80 m-t-5 hide">Sign In</p>
                <LoginForm />
                <div className="pull-bottom sm-pull-bottom">
                    <div className="m-b-30 p-r-80 sm-m-t-20 sm-p-r-15 sm-p-b-20 clearfix">
                    <div className="col-sm-9 no-padding m-t-10">
                        <p className="small-text normal hint-text">
                        2024 &copy; <strong>Lavender Trading Systems</strong>, <em>in association with <strong>GoodRook Capital</strong> and <strong>The Good Code Company</strong></em>. All Rights Reserved. <span className="hide"><a href="">Cookie Policy</a>, <a href=""> Privacy and Terms</a></span>.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* <!-- END Login Right Container--> */}
        </div>
    )
}