import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect} from "react";
import { useNavigate } from "react-router-dom";

export default function Welcome(){
    useEffect(() => {
      AOS.init();
    }, []); 

    const navigate = useNavigate();

    return(
        <div className="flex items-center justify-center bg-linear-to-br from-green-400 to-green-700 max-w-full h-screen">
            <div className="flex flex-col justify-center items-center border rounded-2xl w-120 mt-25 bg-green-400 text-white" data-aos="zoom-in"  data-aos-duration="2000">
                <div className="mb-2.5 mt-3.5"><h1 className="text-4xl">متتبع الختمة</h1></div>
                <div className="my-2.5 w-100 pl-2"><p className="text-lg">تريد تتع ختمتك نعم هنا يمكنكتريد تتع ختمتك نعم هنا يمكنكتريد تتع ختمتك نعم هنا يمكنكتريد تتع ختمتك نعم هنا يمكنكتريد تتع ختمتك نعم هنا يمكنكتريد تتع ختمتك نعم هنا يمكنكتريد تتع ختمتك نعم هنا يمكنكتريد تتع ختمتك نعم هنا يمكنك</p></div>
                <button className="mt-2.5 mb-3 border py-0.5 px-2.5 hover:bg-green-500 hover:scale-105 transition-transform hover:cursor-pointer rounded-2xl" onClick={() => navigate("/pages")}>! لنبدا</button>
            </div>
        </div>
    );
}