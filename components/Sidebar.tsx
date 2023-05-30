const Sidebar = ({open}) => {
    return ( 
        <div className={open?"side-show top-[4.3rem] right-0 h-screen max-h-screen bg-blackTrans2 w-[40%] z-[99] flex flex-col items-center shadow-lg":"side-hide top-[4.3rem] right-0 h-screen max-h-screen bg-blackTrans w-[40%] z-[99] flex flex-col items-center"}>
            <h1 className="text-3xl py-[2rem] hover:bg-lightRed w-full text-center font-semibold">Home</h1>
            <h1 className="text-3xl py-[2rem] hover:bg-lightRed w-full text-center font-semibold">Tour Ticket</h1>
            <h1 className="text-3xl py-[2rem] hover:bg-lightRed w-full text-center font-semibold">About Us</h1>
            <h1 className="text-3xl py-[2rem] hover:bg-lightRed w-full text-center font-semibold">Contact</h1>
        </div>
     );
}
 
export default Sidebar;