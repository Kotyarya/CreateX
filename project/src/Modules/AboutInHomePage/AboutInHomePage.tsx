import React, {FC} from 'react';
import style from "./AboutInHomePage.module.scss"
import img from "./img/image.png"
import Button, {ButtonSize, ButtonVariant} from "../../Components/Button/Button";


interface AboutInHomePageProps {
    navigateTo: () => void
}

const AboutInHomePage: FC<AboutInHomePageProps> = ({navigateTo}) => {
    return (
        <div className={style.wrapper}>
            <img src={img} alt="illustration"/>
            <div className={style.content}>
                <article>
                    <p>Who we are</p>
                    <h2>Why Createx?</h2>
                </article>
                <ul>
                    <li>A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>
                    <li>Vulputate placerat amet pulvinar lorem nisl.</li>
                    <li>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li>
                    <li>Etiam duis lobortis in fames ultrices commodo nibh.</li>
                    <li>Tincidunt sagittis neque sem ac eget.</li>
                    <li>Ultricies amet justo et eget quisque purus vulputate dapibus tortor.</li>
                </ul>
                <div>
                    <Button
                        text={"More about us"}
                        variant={ButtonVariant.solid}
                        size={ButtonSize.large}
                        onClick={navigateTo}
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutInHomePage;