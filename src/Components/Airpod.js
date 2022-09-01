import React from "react";

function Airpod() {

    function airpodloop() {
        for(let i = 1; i < 10; i++) {
            return(
                <img src={`https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/000${i}.jpg`}/>
            )
        }
    }

    return(
        <div>
            {/* {airpodloop} */}
            <img className="airpod" src="https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/0001.jpg" />
        </div>
    )
}

export default Airpod 