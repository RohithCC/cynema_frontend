import React from 'react';
import CodeBlock from './CodeBlock';
import { motion } from "framer-motion";
import './codeeditor.scss'

const CodeEditor = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 3 },
        show: { opacity: 1, y: 0, transition: { type: 'keyframe' } },
    };

    return (
        <div className='tab rounded-xl border-[0.5px] border-[#30363d] overflow-hidden relative shadow-2xl bg-[#161b22] mt-4'>
            <div className='flex items-center justify-between border-b-[0.5px] border-[#30363d] p-4'>
                <div className='pre-next max-md:hidden flex text-[#7d8590] font-medium'>
                    <svg aria-hidden="true" height="24" fill='currentColor' viewBox="0 0 24 24" width="24" className="octicon octicon-chevron-left color-fg-muted">
                        <path d="M15.28 5.22a.75.75 0 0 1 0 1.06L9.56 12l5.72 5.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.75.75 0 0 1 1.06 0Z"></path>
                    </svg>
                    <svg aria-hidden="true" height="24" fill='currentColor' viewBox="0 0 24 24" width="24" className="octicon octicon-chevron-right color-fg-muted">
                        <path d="M8.72 18.78a.75.75 0 0 1 0-1.06L14.44 12 8.72 6.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path>
                    </svg>
                </div>
                <div className='flex items-center justify-between px-2 py-1 rounded-md bg-[#0d1117] border-[0.5px] border-[#30363d] w-full md:w-auto'>
                    <svg aria-hidden="true" height="16" fill='currentColor' viewBox="0 0 16 16" width="16" className="octicon octicon-lock color-fg-subtle flex-shrink-0 text-[#7d8590]">
                        <path d="M4 4a4 4 0 0 1 8 0v2h.25c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 12.25 15h-8.5A1.75 1.75 0 0 1 2 13.25v-5.5C2 6.784 2.784 6 3.75 6H4Zm8.25 3.5h-8.5a.25.25 0 0 0-.25.25v5.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25ZM10.5 6V4a2.5 2.5 0 1 0-5 0v2Z"></path>
                    </svg>
                    <div className='md:px-8 px-2 text-white whitespace-nowrap overflow-hidden text-[14px] text-ellipsis'>dfghdfkjghjkfdghjkdfghdjkfhdfjkgh</div>
                    <svg aria-hidden="true" height="16" fill='currentColor' viewBox="0 0 16 16" width="16" className="octicon octicon-sync color-fg-subtle flex-shrink-0 text-[#7d8590]">
                        <path d="M1.705 8.005a.75.75 0 0 1 .834.656 5.5 5.5 0 0 0 9.592 2.97l-1.204-1.204a.25.25 0 0 1 .177-.427h3.646a.25.25 0 0 1 .25.25v3.646a.25.25 0 0 1-.427.177l-1.38-1.38A7.002 7.002 0 0 1 1.05 8.84a.75.75 0 0 1 .656-.834ZM8 2.5a5.487 5.487 0 0 0-4.131 1.869l1.204 1.204A.25.25 0 0 1 4.896 6H1.25A.25.25 0 0 1 1 5.75V2.104a.25.25 0 0 1 .427-.177l1.38 1.38A7.002 7.002 0 0 1 14.95 7.16a.75.75 0 0 1-1.49.178A5.5 5.5 0 0 0 8 2.5Z"></path>
                    </svg>
                </div>
                <div className='pre-next max-md:hidden flex text-[#7d8590] font-medium'>
                    <svg aria-hidden="true" height="24" fill='currentColor' viewBox="0 0 24 24" width="24" className="octicon octicon-plus color-fg-muted">
                        <path d="M11.75 4.5a.75.75 0 0 1 .75.75V11h5.75a.75.75 0 0 1 0 1.5H12.5v5.75a.75.75 0 0 1-1.5 0V12.5H5.25a.75.75 0 0 1 0-1.5H11V5.25a.75.75 0 0 1 .75-.75Z"></path>
                    </svg>
                </div>
            </div>
            <div className='flex items-stretch'>
                <div className='hidden md:block p-6 border-r-[0.5px] border-[#30363d] '>
                    <svg aria-hidden="true" height="24" fill='currentColor' viewBox="0 0 16 16" width="24" className="octicon octicon-three-bars color-fg-muted text-[#7d8590]">
                        <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
                    </svg>
                </div>
                <div className='min-w-0 w-full'>
                    <div className='border-b-[0.5px] border-[#30363d] text-[#7d8590]'>
                        <ul className='flex px-3 pt-4'>
                            <li className='px-3 py-2 rounded-t-md bg-[#0d1117] text-gray-300'>index.html</li>
                            <li className='px-3 py-2'>script.js</li>
                            <li className='px-3 py-2'>style.css</li>
                        </ul>
                    </div>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className='px-6 pt-6'>
                        <motion.div variants={item}>
                            <CodeBlock />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default CodeEditor;
