import { FaBorderAll, FaCaretRight } from "react-icons/fa"
import "./style.css"
import TopCard from "./TopCard"


const TopCate = () => {
    return (
        <section className=' bg-slate-50 '>
            <div className="container mx-auto py-10">
            <div className="flex justify-between">
                <div className="flex inline-block align-middle">
                    <FaBorderAll className="pl-2 text-4xl text-red-700 items-center" />
                    < h1 className='pl-3 text-4xl'> <b>Top Categories</b></h1>
                </div>
                <div className=' pl-3 flex  items-center'>
                    <span>View all</span>
                    <FaCaretRight />
                </div>
            </div>
            <TopCard />
            </div>
        </section>
    )
}

export default TopCate