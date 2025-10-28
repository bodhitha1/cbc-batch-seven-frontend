import { useState } from "react";

export default function TestPage() {
    const [count, setCount] = useState(150)



    return (
        <div className=" w-full h-full bg-background flex justify-center items-center">

            <div className=" w-[500px] h-[500px] bg-amber-100 text-white flex justify-center items-center gap-2">
                <button
                    onClick={

                        () => {

                            console.log("Decreasing......");
                            setCount(220)
                        }
                    }

                    className="w-[100px] bg-accent h-[40px] rounded-lg"
                >

                    -
                </button>

                <span className="text-accent text-5xl "> {count} </span>

                <button
                    onClick={

                        () => {

                            console.log("Increasing......");
                            setCount(440)
                        }
                    }

                    className="w-[100px] bg-accent h-[40px] rounded-lg"
                >

                    +
                </button>
            </div>

        </div>
    )
}