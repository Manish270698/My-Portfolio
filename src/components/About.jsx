import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} mt-10`}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled MERN Stack Developer with experience in JavaScript and
        expertise in frameworks like React, Node.js, Express.js, and MongoDB. I
        specialize in building scalable, high-performance web applications that
        deliver seamless user experiences. With a strong focus on frontend
        optimization and backend efficiency, I craft intuitive, dynamic
        interfaces while ensuring robust API development and efficient data
        handling. I'm a quick learner and thrive in collaborative environments,
        working closely with clients to create user-friendly solutions that
        solve real-world problems. Whether it's designing responsive UI
        components, implementing complex state management, or structuring
        databases for banking and e-commerce applications, I bring innovative
        and practical solutions to the table. Let's work together to bring your
        ideas to life!
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
