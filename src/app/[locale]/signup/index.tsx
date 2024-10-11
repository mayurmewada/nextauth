import React from "react";

const index = ({ lang }: any) => {
    return (
        <div className="flex flex-col items-center justify-center h-[100vh]">
            <h1 className="mb-4">{lang.texts.signupToNextAuth}</h1>
            <p className="mb-7">{lang.errors.allFieldRequired}</p>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col">
                    <label htmlFor="username">{lang.fields.username.title}</label>
                    <input className="border border-[#dddddd]" type="text" name="username" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email">{lang.fields.email.title}</label>
                    <input className="border border-[#dddddd]" type="text" name="email" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password">{lang.fields.password.title}</label>
                    <input className="border border-[#dddddd]" type="password" name="password" />
                </div>
                <div className="flex flex-col">
                    <button className="rounded-[4px] border-[1px] border-slate-300 hover:border-slate-400">
                        {lang.buttons.signup}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default index;
