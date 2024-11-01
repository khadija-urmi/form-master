import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";


const Dad = ({ asset }) => {
    return (
        <div>
            <h2>Dad</h2>
            <section className="flex">
                <Brother></Brother>
                <Sister></Sister>
                <Myself asset={asset}></Myself>
            </section>
        </div>
    );
};

export default Dad;