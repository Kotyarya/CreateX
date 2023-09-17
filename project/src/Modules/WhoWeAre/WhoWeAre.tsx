import React, {FC} from 'react';
import style from "./WhoWeAre.module.scss"
import img from "./img/image.png"
import Button from "../../Components/Button/Button";
import {ButtonSize, ButtonVariant} from "../../Components/Button/ButtonTypes";
import {useNavigateTo} from "../../hook/useNavigateTo";


const WhoWeAre: FC = () => {
    const {navigateToAboutUsPage} = useNavigateTo()
    return (
        <div className={style.wrapper}>
            <img src={img} alt="img"/>
            <div className={style.content}>
                <article>
                    <p>Who we are</p>
                    <h2>Why Createx?</h2>
                </article>
                <ul>
                    <li>Practical Skills: Education geared towards practical application of knowledge in real-world
                        scenarios.
                    </li>
                    <li>Expert Instructors: Seasoned specialists as your educators.
                    </li>
                    <li>Current Content: Courses regularly updated, reflecting the latest trends and methods in each
                        field.
                    </li>
                    <li>Flexible Format: Video, assignments, workshops — choose what suits you.
                    </li>
                    <li>Learner Community: Join an active community of students and professionals for networking and
                        collaboration.
                    </li>
                    <li>Student Success: Many achieved — you matter to us.
                    </li>

                </ul>
                <div>
                    <Button
                        text={"More about us"}
                        variant={ButtonVariant.solid}
                        size={ButtonSize.large}
                        onClick={navigateToAboutUsPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;