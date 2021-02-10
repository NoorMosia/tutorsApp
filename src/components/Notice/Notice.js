import React from "react";
import * as Styles from "./Notice.module.css";

const Notice = () => {
    return (
        <div className={Styles.Notice}>
            <div className={Styles.NoticeDate}>
                16/02/2021
            </div>
            <div className={Styles.NoticeMessage}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit maiores aperiam minima assumenda deleniti hic.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit maiores aperiam minima assumenda deleniti hic.
            </div>
        </div>
    )
}

export default Notice;